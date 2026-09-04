import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

// Socket.io configuration with CORS support
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
  pingInterval: 10000,
  pingTimeout: 5000
});

// Serve static frontend in production
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    playersCount: players.size,
    timestamp: Date.now()
  });
});

// Color palette for pilots
const PILOT_COLORS = [
  { name: 'Cyber Cyan', hex: '#00f0ff', emissive: '#005f66' },
  { name: 'Sunset Coral', hex: '#ff3366', emissive: '#661426' },
  { name: 'Neon Mint', hex: '#00ff88', emissive: '#006636' },
  { name: 'Solar Flare', hex: '#ffaa00', emissive: '#664400' },
  { name: 'Vapor Violet', hex: '#bf55ec', emissive: '#4d2260' }
];

// Spawn points to prevent cars overlapping at start
const SPAWN_POINTS = [
  { x: 0, y: 0.35, z: 0, rotY: 0 },
  { x: 3.5, y: 0.35, z: -2.0, rotY: 0.2 },
  { x: -3.5, y: 0.35, z: -2.0, rotY: -0.2 },
  { x: 0, y: 0.35, z: -4.5, rotY: 0 }
];

// Active players map: socketId -> PlayerData
const players = new Map();

// Helper to get available color
function getAvailableColor(index) {
  return PILOT_COLORS[index % PILOT_COLORS.length];
}

io.on('connection', (socket) => {
  const playerIndex = players.size;
  const spawn = SPAWN_POINTS[playerIndex % SPAWN_POINTS.length];
  const colorInfo = getAvailableColor(playerIndex);
  const pilotName = `Pilot-${socket.id.slice(0, 4).toUpperCase()}`;

  const newPlayer = {
    id: socket.id,
    name: pilotName,
    color: colorInfo.hex,
    emissive: colorInfo.emissive,
    colorName: colorInfo.name,
    x: spawn.x,
    y: spawn.y,
    z: spawn.z,
    rotY: spawn.rotY,
    speed: 0,
    steer: 0,
    lastUpdate: Date.now()
  };

  players.set(socket.id, newPlayer);
  console.log(`[Socket] ${pilotName} (${socket.id}) connected. Total: ${players.size}`);

  // Send current players list to newly connected player
  const playersObj = {};
  for (const [id, p] of players.entries()) {
    playersObj[id] = p;
  }
  socket.emit('currentPlayers', {
    yourId: socket.id,
    players: playersObj
  });

  // Notify everyone else about the new player
  socket.broadcast.emit('playerJoined', newPlayer);

  // Handle client movement updates
  socket.on('playerMove', (data) => {
    const player = players.get(socket.id);
    if (!player) return;

    if (typeof data.x === 'number' && typeof data.z === 'number' && typeof data.rotY === 'number') {
      player.x = data.x;
      player.y = typeof data.y === 'number' ? data.y : player.y;
      player.z = data.z;
      player.rotY = data.rotY;
      player.speed = typeof data.speed === 'number' ? data.speed : 0;
      player.steer = typeof data.steer === 'number' ? data.steer : 0;
      player.lastUpdate = Date.now();
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    players.delete(socket.id);
    console.log(`[Socket] ${pilotName} (${socket.id}) disconnected. Total: ${players.size}`);
    io.emit('playerDisconnected', socket.id);
  });
});

// Fixed 25 Hz tick loop broadcasting world state
const TICK_RATE = 25; // 25 times/sec (every 40ms)
setInterval(() => {
  if (players.size === 0) return;

  const snapshot = {};
  for (const [id, p] of players.entries()) {
    snapshot[id] = {
      x: p.x,
      y: p.y,
      z: p.z,
      rotY: p.rotY,
      speed: p.speed,
      steer: p.steer
    };
  }

  io.emit('serverUpdate', snapshot);
}, 1000 / TICK_RATE);

// Fallback to index.html for SPA routes in production
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

server.listen(PORT, () => {
  console.log(`🚀 Low-Poly Multiplayer Server running on http://localhost:${PORT}`);
});
