import * as THREE from 'three';
import { SceneManager } from './world/SceneManager.js';
import { CityWorld } from './world/CityWorld.js';
import { RaceTrack } from './world/RaceTrack.js';
import { LapTimer } from './world/LapTimer.js';
import { ExpoPavilionManager } from './world/ExpoPavilion.js';
import { TechMonolith } from './world/TechMonolith.js';
import { WaypointManager } from './world/WaypointManager.js';
import { PlaygroundBall } from './world/PlaygroundBall.js';
import { EnvironmentManager } from './world/EnvironmentManager.js';
import { Vehicle } from './entities/Vehicle.js';
import { SocketClient } from './network/SocketClient.js';
import { ModalManager } from './ui/ModalManager.js';
import { HUD } from './ui/HUD.js';
import { TouchControls } from './ui/TouchControls.js';
import { soundEffects } from './audio/SoundEffects.js';
import { Autopilot } from './navigation/Autopilot.js';
import { MapOverlay } from './ui/MapOverlay.js';
import { PORTFOLIO_DATA } from './data/portfolioData.js';

// Static reusable scratch context to eliminate per-frame allocations
const _scratchActiveContext = {
  type: '',
  data: null
};

class GameApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.clock = new THREE.Clock();
    this.audioInitialized = false;
    this.currentLanguage = 'en';

    // Tactical Satellite Map Camera State
    this.isMapMode = false;
    this.mapCameraPos = new THREE.Vector3(0, 145, 15);
    this.mapCameraLookAt = new THREE.Vector3(0, 0, 0);
    this.currentCameraLookAt = new THREE.Vector3(0, 0, 0);

    // 1. Initialize Scene & Renderer
    this.sceneManager = new SceneManager(this.container);

    // 2. Build 3D Continuous Urban Cyber City & Grand Prix Circuit
    this.cityWorld = new CityWorld(this.sceneManager.scene);
    this.raceTrack = new RaceTrack(this.sceneManager.scene);
    this.pavilions = new ExpoPavilionManager(this.sceneManager.scene);
    this.monolith = new TechMonolith(this.sceneManager.scene);
    this.waypoints = new WaypointManager(this.sceneManager.scene);
    this.ball = new PlaygroundBall(this.sceneManager.scene);

    // 3. Player Vehicle (Spawn at Central Innovation Plaza)
    this.vehicle = new Vehicle(this.sceneManager.scene, {
      x: 0,
      y: 0.35,
      z: -4.0,
      color: 0x00f0ff,
      name: 'Pilot-1'
    });
    this.vehicle.setRaceTrack(this.raceTrack);

    // 3b. Grand Prix Checkpoint Time-Trial Engine
    this.lapTimer = new LapTimer({
      onTick: (data) => {
        this.hud.updateLapTimer(data);
      },
      onSector: (data) => {
        soundEffects.playClick();
      },
      onLapFinished: (data) => {
        this.hud.showLapFinishedBanner(data);
      }
    });

    // 4. Dynamic Day / Sunset / Night Environment Manager (Vehicular Shadow Focus)
    this.environment = new EnvironmentManager(this.sceneManager, this.vehicle);

    // 5. UI Managers
    this.modalManager = new ModalManager();

    // 6. Autonomous Navigation Autopilot
    this.autopilot = new Autopilot(this.vehicle, {
      onArrived: (destinationKey, targetNode) => {
        soundEffects.playPodChime();
        this.hud.hideAutopilot();
        if (targetNode && targetNode.projectId) {
          const project = PORTFOLIO_DATA.projects.find(p => p.id === targetNode.projectId);
          if (project) {
            this.modalManager.openProject(project);
          }
        }
      },
      onDisengaged: (reason, prevDestination) => {
        this.hud.hideAutopilot();
      },
      onStateChange: (state) => {
        if (state.active) {
          this.hud.showAutopilot(state.destination);
        } else {
          this.hud.hideAutopilot();
        }
      }
    });

    // 7. Tactical Satellite Map Overlay
    this.mapOverlay = new MapOverlay({
      onOpen: () => {
        this.isMapMode = true;
      },
      onClose: () => {
        this.isMapMode = false;
      },
      onSelectDestination: (destId) => {
        this.isMapMode = false;
        this.autopilot.navigate(destId);
      }
    });

    this.hud = new HUD({
      onLanguageChange: (lang) => this.onLanguageChange(lang),
      onToggleEnvironment: () => {
        this.environment.cycleMode();
        return this.environment.currentMode;
      },
      onToggleMap: () => {
        this.mapOverlay.toggle();
      },
      onCancelAutopilot: () => {
        this.autopilot.disengage('manual');
      },
      onOpenProject: (project) => this.modalManager.openProject(project),
      onOpenMonolith: (data) => this.modalManager.openMonolith(data),
      onOpenWaypoint: (waypoint) => this.modalManager.openWaypoint(waypoint)
    });

    // Set initial environment mode label on HUD
    this.hud.setEnvironmentMode(this.environment.currentMode);

    // 8. Mobile Touch Controls
    this.touchControls = new TouchControls((touchState) => {
      this.vehicle.setTouchInput(touchState);
    });

    // 9. Real-time Multiplayer Network
    this.socketClient = new SocketClient(
      this.sceneManager.scene,
      (count, state, myInfo) => {
        this.hud.updateMultiplayer(count, state, myInfo);
        if (myInfo && myInfo.color) {
          this.vehicle.setColor(new THREE.Color(myInfo.color).getHex());
        }
      }
    );

    // Setup User Gestures for Audio
    this.setupAudioTrigger();

    // Start Main RAF Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  onLanguageChange(lang) {
    this.currentLanguage = lang;
    this.environment.setLanguage(lang);
    this.pavilions.setLanguage(lang);
    this.monolith.setLanguage(lang);
    this.waypoints.setLanguage(lang);
    this.modalManager.setLanguage(lang);
    this.mapOverlay.setLanguage(lang);
    if (this.hud.currentLanguage !== lang) {
      this.hud.setLanguage(lang);
    }
  }

  setupAudioTrigger() {
    const activateAudio = () => {
      if (!this.audioInitialized) {
        soundEffects.init();
        this.audioInitialized = true;
      }
      soundEffects.resumeContext();
    };

    window.addEventListener('keydown', activateAudio, { once: true });
    window.addEventListener('mousedown', activateAudio, { once: true });
    window.addEventListener('touchstart', activateAudio, { once: true });
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Update Dynamic Day/Sunset/Night Atmosphere & Vehicle-Tracking Shadows
    this.environment.update(delta);

    // 2. Update Autonomous Autopilot System
    this.autopilot.update(delta);

    // 3. Update Player Vehicle Physics & Camera
    this.vehicle.update(delta);

    if (this.isMapMode) {
      // Tactical Satellite Camera Smooth Interpolation
      const lerpSpeed = 1.0 - Math.exp(-5.0 * delta);
      const cam = this.sceneManager.camera;
      cam.position.lerp(this.mapCameraPos, lerpSpeed);
      this.currentCameraLookAt.lerp(this.mapCameraLookAt, lerpSpeed);
      cam.lookAt(this.currentCameraLookAt);
      if (Math.abs(cam.fov - 46) > 0.15) {
        cam.fov += (46 - cam.fov) * lerpSpeed;
        cam.updateProjectionMatrix();
      }

      // Update screen-projected radar pins and current pilot blip
      this.mapOverlay.update(cam, this.vehicle.position);
    } else {
      // Third-Person Dynamic Chase Camera
      this.vehicle.updateCamera(this.sceneManager.camera, delta);
      this.currentCameraLookAt.copy(this.vehicle.position);
    }

    // 4. Update Interactive Playground Ball (Vehicle Collision & Rolling)
    this.ball.checkVehicleCollision(this.vehicle, (impulse) => {
      soundEffects.playClick();
    });
    this.ball.update(delta);

    // 5. Update Continuous Urban Cyber City Chunks, Grand Prix Circuit & Landmarks
    this.cityWorld.update(delta, elapsedTime, this.vehicle.position);
    this.raceTrack.update(elapsedTime);
    this.pavilions.update(elapsedTime);
    this.monolith.update(elapsedTime);
    this.waypoints.update(elapsedTime);

    // 5b. Update Grand Prix Lap Timer & Real-Time Drift Widget
    this.lapTimer.update(this.vehicle.position);
    this.hud.updateDriftWidget(this.vehicle.getDriftData());

    // 6. Check Proximity Contexts (Zero Per-Frame Allocations)
    let activeContext = null;

    // A. Check Corporate Landmarks along Grand Avenues
    const pavCheck = this.pavilions.checkProximity(this.vehicle.position);
    if (pavCheck.activePavilion) {
      _scratchActiveContext.type = 'project';
      _scratchActiveContext.data = pavCheck.activePavilion.project;
      activeContext = _scratchActiveContext;
      if (pavCheck.hasChanged) {
        soundEffects.playPodChime();
        this.modalManager.openProject(pavCheck.activePavilion.project);
      }
    }

    // B. Check Central Tech Monolith
    if (!activeContext) {
      const monoCheck = this.monolith.checkProximity(this.vehicle.position);
      if (monoCheck.isNear) {
        _scratchActiveContext.type = 'monolith';
        _scratchActiveContext.data = monoCheck.data;
        activeContext = _scratchActiveContext;
      }
    }

    // C. Check Career Waypoints
    if (!activeContext) {
      const wpCheck = this.waypoints.checkProximity(this.vehicle.position);
      if (wpCheck.activeWaypoint) {
        _scratchActiveContext.type = 'waypoint';
        _scratchActiveContext.data = wpCheck.activeWaypoint.data;
        activeContext = _scratchActiveContext;
        if (wpCheck.hasChanged) {
          soundEffects.playClick();
          this.modalManager.openWaypoint(wpCheck.activeWaypoint.data);
        }
      }
    }

    // Update HUD Prompt
    this.hud.showPrompt(activeContext);

    // Auto-close modal if vehicle drove away
    if (!activeContext && this.modalManager.isOpen()) {
      this.modalManager.close();
    }

    // 7. Multiplayer State Synchronization
    this.socketClient.sendMovement(
      this.vehicle.position.x,
      this.vehicle.position.y,
      this.vehicle.position.z,
      this.vehicle.rotationY,
      this.vehicle.speed,
      this.vehicle.steerAngle
    );

    // 8. Interpolate Remote Players
    this.socketClient.update(delta);

    // 9. Update HUD Speedometer & Procedural Audio Engine Pitch
    const speedKmH = this.vehicle.getSpeedKmH();
    const speedRatio = this.vehicle.getSpeedRatio();
    this.hud.updateSpeed(speedKmH, speedRatio);
    soundEffects.updateEngine(speedRatio);

    // 10. Render Three.js Scene
    this.sceneManager.render();
  }
}

// Boot application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new GameApp();
});
