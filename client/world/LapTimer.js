import * as THREE from 'three';
import { soundEffects } from '../audio/SoundEffects.js';

export class LapTimer {
  constructor(callbacks = {}) {
    this.callbacks = callbacks; // { onTick, onSector, onLapFinished, onNewRecord }

    // 6 Sequential Radial Checkpoints around the City Street Circuit
    this.checkpoints = [
      { id: 0, name: 'Start / Finish Gantry (North Avenue)', pos: new THREE.Vector3(0, 0.22, -68), radius: 9.5 },
      { id: 1, name: 'Sector 1 (Downtown Chicane)', pos: new THREE.Vector3(45, 0.22, -55), radius: 9.5 },
      { id: 2, name: 'East Expressway Sprint', pos: new THREE.Vector3(105, 0.28, 45), radius: 10.5 },
      { id: 3, name: 'Sector 2 (South AI Quarter)', pos: new THREE.Vector3(0, 0.22, 75), radius: 9.5 },
      { id: 4, name: 'Sector 3 (Central Plaza Roundabout)', pos: new THREE.Vector3(0, 0.22, 24), radius: 9.5 },
      { id: 5, name: 'West Tech Park / Expressway Entry', pos: new THREE.Vector3(-105, 0.28, -25), radius: 10.5 }
    ];

    this.state = 'IDLE'; // 'IDLE', 'IN_LAP'
    this.currentLap = 1;
    this.lapStartTime = 0;
    this.currentLapTime = 0;
    this.lastLapTime = null;
    this.nextCheckpointIndex = 0;
    this.sectorTimes = [];

    // Load best lap time from localStorage
    const savedBest = localStorage.getItem('gmudz_gp_best_lap');
    this.bestLapTime = savedBest ? parseFloat(savedBest) : null;
  }

  getBestLapTime() {
    return this.bestLapTime;
  }

  formatTime(seconds) {
    if (seconds === null || seconds === undefined || isNaN(seconds)) return '--:--.---';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const millis = Math.floor((seconds * 1000) % 1000);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${millis.toString().padStart(3, '0')}`;
  }

  update(vehiclePosition) {
    const now = performance.now();

    // 1. Checkpoint crossing check
    const targetCP = this.checkpoints[this.nextCheckpointIndex];
    const dist = Math.hypot(vehiclePosition.x - targetCP.pos.x, vehiclePosition.z - targetCP.pos.z);

    if (dist < targetCP.radius) {
      if (this.nextCheckpointIndex === 0) {
        if (this.state === 'IDLE') {
          // Cross start line for first time -> Begin Lap 1
          this.state = 'IN_LAP';
          this.lapStartTime = now;
          this.nextCheckpointIndex = 1;
          this.sectorTimes = [];
          soundEffects.playClick();
        } else if (this.state === 'IN_LAP') {
          // Completed full circuit!
          const lapTime = (now - this.lapStartTime) / 1000;
          this.lastLapTime = lapTime;

          let isNewRecord = false;
          if (this.bestLapTime === null || lapTime < this.bestLapTime) {
            this.bestLapTime = lapTime;
            localStorage.setItem('gmudz_gp_best_lap', lapTime.toFixed(3));
            isNewRecord = true;
          }

          soundEffects.playPodChime();

          if (this.callbacks.onLapFinished) {
            this.callbacks.onLapFinished({
              lapNumber: this.currentLap,
              lapTime: lapTime,
              lapTimeStr: this.formatTime(lapTime),
              isNewRecord: isNewRecord,
              bestLapTime: this.bestLapTime,
              bestLapTimeStr: this.formatTime(this.bestLapTime)
            });
          }

          // Start next lap immediately
          this.currentLap++;
          this.lapStartTime = now;
          this.nextCheckpointIndex = 1;
          this.sectorTimes = [];
        }
      } else {
        // Passed intermediate checkpoint
        const splitTime = (now - this.lapStartTime) / 1000;
        this.sectorTimes.push(splitTime);

        if (this.callbacks.onSector) {
          this.callbacks.onSector({
            checkpointId: this.nextCheckpointIndex,
            checkpointName: targetCP.name,
            splitTime: splitTime,
            splitTimeStr: this.formatTime(splitTime)
          });
        }

        // Advance to next checkpoint
        this.nextCheckpointIndex = (this.nextCheckpointIndex + 1) % this.checkpoints.length;
      }
    }

    // 2. Tick update
    if (this.state === 'IN_LAP') {
      this.currentLapTime = (now - this.lapStartTime) / 1000;
    } else {
      this.currentLapTime = 0;
    }

    if (this.callbacks.onTick) {
      this.callbacks.onTick({
        inLap: this.state === 'IN_LAP',
        currentLap: this.currentLap,
        currentLapTime: this.currentLapTime,
        currentLapTimeStr: this.formatTime(this.currentLapTime),
        bestLapTime: this.bestLapTime,
        bestLapTimeStr: this.formatTime(this.bestLapTime),
        nextCheckpoint: this.nextCheckpointIndex
      });
    }
  }

  reset() {
    this.state = 'IDLE';
    this.currentLap = 1;
    this.lapStartTime = 0;
    this.currentLapTime = 0;
    this.nextCheckpointIndex = 0;
    this.sectorTimes = [];
  }
}
