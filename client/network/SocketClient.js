import { io } from 'socket.io-client';
import { RemotePlayer } from '../entities/RemotePlayer.js';

const _scratchPacket = { x: 0, y: 0, z: 0, rotY: 0, speed: 0, steer: 0 };

export class SocketClient {
  constructor(scene, onPlayerCountChange) {
    this.scene = scene;
    this.onPlayerCountChange = onPlayerCountChange;

    this.socket = null;
    this.myId = null;
    this.myPilotInfo = null;
    this.remotePlayers = new Map();

    // Throttling for outgoing movement packets (25 Hz)
    this.lastSendTime = 0;
    this.sendInterval = 1000 / 25; // 40ms

    this.connectionStatus = 'connecting';
    this.connect();
  }

  connect() {
    // Connect to current origin (works with Vite proxy and production express server)
    const socketUrl = window.location.port === '5173' ? 'http://localhost:3001' : window.location.origin;

    this.socket = io(socketUrl, {
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 10,
      reconnectionDelay: 1000
    });

    this.socket.on('connect', () => {
      this.myId = this.socket.id;
      this.connectionStatus = 'connected';
      console.log(`[Network] Connected as ${this.myId}`);
      this.notifyStatus();
    });

    this.socket.on('currentPlayers', (data) => {
      const { yourId, players } = data;
      this.myId = yourId;

      for (const [id, pData] of Object.entries(players)) {
        if (id === this.myId) {
          this.myPilotInfo = pData;
        } else {
          this.addRemotePlayer(pData);
        }
      }
      this.notifyStatus();
    });

    this.socket.on('playerJoined', (pData) => {
      if (pData.id !== this.myId) {
        console.log(`[Network] Player joined: ${pData.name}`);
        this.addRemotePlayer(pData);
        this.notifyStatus();
      }
    });

    this.socket.on('serverUpdate', (playersSnapshot) => {
      for (const [id, pData] of Object.entries(playersSnapshot)) {
        if (id !== this.myId && this.remotePlayers.has(id)) {
          this.remotePlayers.get(id).setNetworkState(pData);
        }
      }
    });

    this.socket.on('playerDisconnected', (id) => {
      if (this.remotePlayers.has(id)) {
        const remote = this.remotePlayers.get(id);
        remote.destroy();
        this.remotePlayers.delete(id);
        console.log(`[Network] Player left: ${id}`);
        this.notifyStatus();
      }
    });

    this.socket.on('disconnect', () => {
      this.connectionStatus = 'disconnected';
      console.log('[Network] Disconnected from server');
      this.notifyStatus();
    });
  }

  addRemotePlayer(pData) {
    if (this.remotePlayers.has(pData.id)) return;
    const remote = new RemotePlayer(this.scene, pData);
    this.remotePlayers.set(pData.id, remote);
  }

  notifyStatus() {
    const totalCount = this.remotePlayers.size + (this.myPilotInfo ? 1 : 0);
    if (this.onPlayerCountChange) {
      this.onPlayerCountChange(totalCount, this.connectionStatus, this.myPilotInfo);
    }
  }

  sendMovement(x, y, z, rotY, speed, steer) {
    if (!this.socket || !this.socket.connected) return;

    const now = performance.now();
    if (now - this.lastSendTime < 40) return; // Strict 25 Hz throttling (max 1 packet per 40ms)

    this.lastSendTime = now;
    _scratchPacket.x = Math.round(x * 100) / 100;
    _scratchPacket.y = Math.round(y * 100) / 100;
    _scratchPacket.z = Math.round(z * 100) / 100;
    _scratchPacket.rotY = Math.round(rotY * 1000) / 1000;
    _scratchPacket.speed = Math.round(speed * 100) / 100;
    _scratchPacket.steer = Math.round(steer * 100) / 100;
    this.socket.emit('playerMove', _scratchPacket);
  }

  update(delta) {
    // Interpolate remote players
    for (const remote of this.remotePlayers.values()) {
      remote.update(delta);
    }
  }
}
