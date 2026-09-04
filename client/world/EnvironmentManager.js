import * as THREE from 'three';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export class EnvironmentManager {
  constructor(sceneManager, vehicle) {
    this.sceneManager = sceneManager;
    this.vehicle = vehicle;
    this.currentMode = 'day'; // Default to realistic natural daylight
    this.currentLanguage = 'en';

    // Lighting Presets
    this.presets = {
      day: {
        id: 'day',
        icon: '☀️',
        // Clear daylight sky with gentle atmospheric horizon gradient
        bgColor: new THREE.Color(0xd6e6f2),
        fogColor: new THREE.Color(0xd6e6f2),
        fogDensity: 0.0055,
        ambientColor: new THREE.Color(0x8ea8c3),
        ambientIntensity: 0.85,
        // Sky reflection (0xddeeff) and natural grass bounce (0x6b8c42)
        hemiSkyColor: new THREE.Color(0xddeeff),
        hemiGroundColor: new THREE.Color(0x6b8c42),
        hemiIntensity: 1.15,
        // 45-degree sun angle with warm sunlight temperature (0xfffaed)
        dirColor: new THREE.Color(0xfffaed),
        dirIntensity: 2.3,
        dirPosition: new THREE.Vector3(45, 55, 35),
        headlightIntensity: 0.0,
        headlightColor: 0xffffff
      },
      sunset: {
        id: 'sunset',
        icon: '🌅',
        bgColor: new THREE.Color(0x1c0b24),
        fogColor: new THREE.Color(0x240e2b),
        fogDensity: 0.009,
        ambientColor: new THREE.Color(0x7c2d12),
        ambientIntensity: 0.85,
        hemiSkyColor: new THREE.Color(0xf97316),
        hemiGroundColor: new THREE.Color(0x311006),
        hemiIntensity: 0.95,
        dirColor: new THREE.Color(0xfb923c),
        dirIntensity: 2.4,
        dirPosition: new THREE.Vector3(55, 18, -35),
        headlightIntensity: 1.4,
        headlightColor: 0xffedd5
      },
      night: {
        id: 'night',
        icon: '🌙',
        bgColor: new THREE.Color(0x040814),
        fogColor: new THREE.Color(0x050a18),
        fogDensity: 0.013,
        ambientColor: new THREE.Color(0x081022),
        ambientIntensity: 0.45,
        hemiSkyColor: new THREE.Color(0x1e1b4b),
        hemiGroundColor: new THREE.Color(0x020617),
        hemiIntensity: 0.5,
        dirColor: new THREE.Color(0x60a5fa),
        dirIntensity: 0.9,
        dirPosition: new THREE.Vector3(-30, 48, -25),
        headlightIntensity: 3.4,
        headlightColor: 0xffffff
      }
    };

    // Current interpolation state
    this.target = this.presets[this.currentMode];
    this.currentHeadlightIntensity = this.target.headlightIntensity;

    this.scene = sceneManager.scene;
    this.ambientLight = sceneManager.ambientLight;
    this.hemiLight = sceneManager.hemiLight;
    this.dirLight = sceneManager.dirLight;

    // Apply initial target instantly
    this.applyTargetImmediate();
  }

  applyTargetImmediate() {
    const t = this.target;
    this.scene.background.copy(t.bgColor);
    if (this.scene.fog) {
      this.scene.fog.color.copy(t.fogColor);
      this.scene.fog.density = t.fogDensity;
    }
    if (this.ambientLight) {
      this.ambientLight.color.copy(t.ambientColor);
      this.ambientLight.intensity = t.ambientIntensity;
    }
    if (this.hemiLight) {
      this.hemiLight.color.copy(t.hemiSkyColor);
      this.hemiLight.groundColor.copy(t.hemiGroundColor);
      this.hemiLight.intensity = t.hemiIntensity;
    }
    if (this.dirLight) {
      this.dirLight.color.copy(t.dirColor);
      this.dirLight.intensity = t.dirIntensity;
      this.dirLight.position.copy(t.dirPosition);
    }
    if (this.vehicle) {
      this.vehicle.setHeadlights(t.headlightIntensity, t.headlightColor);
    }
  }

  setMode(mode) {
    if (!this.presets[mode]) return;
    this.currentMode = mode;
    this.target = this.presets[mode];
  }

  cycleMode() {
    const cycle = ['day', 'sunset', 'night'];
    const nextIdx = (cycle.indexOf(this.currentMode) + 1) % cycle.length;
    this.setMode(cycle[nextIdx]);
    return this.currentMode;
  }

  getModeLabel() {
    const ui = PORTFOLIO_DATA.ui;
    const lang = this.currentLanguage;
    if (this.currentMode === 'day') return ui.envDay[lang];
    if (this.currentMode === 'sunset') return ui.envSunset[lang];
    return ui.envNight[lang];
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
  }

  update(delta) {
    if (delta > 0.1) delta = 0.1;
    const lerpRate = Math.min(3.5 * delta, 1.0);
    const t = this.target;

    this.scene.background.lerp(t.bgColor, lerpRate);

    if (this.scene.fog) {
      this.scene.fog.color.lerp(t.fogColor, lerpRate);
      this.scene.fog.density += (t.fogDensity - this.scene.fog.density) * lerpRate;
    }

    if (this.ambientLight) {
      this.ambientLight.color.lerp(t.ambientColor, lerpRate);
      this.ambientLight.intensity += (t.ambientIntensity - this.ambientLight.intensity) * lerpRate;
    }

    if (this.hemiLight) {
      this.hemiLight.color.lerp(t.hemiSkyColor, lerpRate);
      this.hemiLight.groundColor.lerp(t.hemiGroundColor, lerpRate);
      this.hemiLight.intensity += (t.hemiIntensity - this.hemiLight.intensity) * lerpRate;
    }

    if (this.dirLight) {
      this.dirLight.color.lerp(t.dirColor, lerpRate);
      this.dirLight.intensity += (t.dirIntensity - this.dirLight.intensity) * lerpRate;

      // Translate sun/moon direction relative to vehicle position for tight shadow frustum
      const carX = this.vehicle ? this.vehicle.position.x : 0;
      const carZ = this.vehicle ? this.vehicle.position.z : 0;
      this.dirLight.position.set(carX + t.dirPosition.x, t.dirPosition.y, carZ + t.dirPosition.z);
      this.dirLight.target.position.set(carX, 0, carZ);
      this.dirLight.target.updateMatrixWorld();
    }

    if (this.vehicle) {
      this.currentHeadlightIntensity += (t.headlightIntensity - this.currentHeadlightIntensity) * lerpRate;
      this.vehicle.setHeadlights(this.currentHeadlightIntensity, t.headlightColor);
    }
  }
}
