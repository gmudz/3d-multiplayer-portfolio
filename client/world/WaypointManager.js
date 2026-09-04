import * as THREE from 'three';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export class WaypointManager {
  constructor(scene) {
    this.scene = scene;
    this.waypoints = [];
    this.group = new THREE.Group();
    this.currentLanguage = 'en';
    this.activeWaypoint = null;
    this.activationRadius = 3.6;

    this.buildWaypoints();
    this.scene.add(this.group);
  }

  buildWaypoints() {
    PORTFOLIO_DATA.waypoints.forEach((wp, idx) => {
      const wpGroup = new THREE.Group();
      wpGroup.position.set(wp.position.x, wp.position.y, wp.position.z);

      const color = wp.type === 'experience' ? 0x00f0ff : 0xffaa00;

      // 1. Archway Pylons (Left & Right of pathway)
      const pylonGeo = new THREE.CylinderGeometry(0.18, 0.22, 3.2, 8);
      const pylonMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.8,
        roughness: 0.3
      });

      // Align archway perpendicularly across the path
      let pylonOffsetX = 0;
      let pylonOffsetZ = 0;
      if (Math.abs(wp.position.x) > 1) {
        // Path runs along X axis, pylons spaced along Z axis
        pylonOffsetZ = 2.4;
      } else {
        // Path runs along Z axis, pylons spaced along X axis
        pylonOffsetX = 2.4;
      }

      const pylonL = new THREE.Mesh(pylonGeo, pylonMat);
      pylonL.position.set(-pylonOffsetX, 1.6, -pylonOffsetZ);
      wpGroup.add(pylonL);

      const pylonR = new THREE.Mesh(pylonGeo, pylonMat);
      pylonR.position.set(pylonOffsetX, 1.6, pylonOffsetZ);
      wpGroup.add(pylonR);

      // Overhead Cross Beam
      const beamGeo = new THREE.BoxGeometry(
        pylonOffsetX ? pylonOffsetX * 2 + 0.4 : 0.4,
        0.2,
        pylonOffsetZ ? pylonOffsetZ * 2 + 0.4 : 0.4
      );
      const beamMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.9,
        roughness: 0.2
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.y = 3.2;
      wpGroup.add(beam);

      // Glowing Neon Arch Trim
      const trimGeo = new THREE.BoxGeometry(
        pylonOffsetX ? pylonOffsetX * 2 : 0.25,
        0.08,
        pylonOffsetZ ? pylonOffsetZ * 2 : 0.25
      );
      const trimMat = new THREE.MeshBasicMaterial({ color: color });
      const trim = new THREE.Mesh(trimGeo, trimMat);
      trim.position.y = 3.32;
      wpGroup.add(trim);

      // Floating Center Gem / Crest
      const gemGeo = new THREE.OctahedronGeometry(0.4, 0);
      const gemMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.8
      });
      const gem = new THREE.Mesh(gemGeo, gemMat);
      gem.position.y = 3.8;
      wpGroup.add(gem);

      // 3D Billboard Sign
      const sprite = this.createSignSprite(wp.title[this.currentLanguage], color);
      sprite.position.y = 4.6;
      wpGroup.add(sprite);

      const wpData = {
        index: idx,
        data: wp,
        position: new THREE.Vector3(wp.position.x, 0, wp.position.z),
        gem: gem,
        sprite: sprite,
        isPlayerInside: false
      };

      this.waypoints.push(wpData);
      this.group.add(wpGroup);
    });
  }

  createSignSprite(text, colorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 384;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');

    this.drawCanvas(ctx, canvas.width, canvas.height, text, colorHex);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3.4, 0.85, 1.0);
    sprite.userData = { canvas, ctx, texture, colorHex };
    return sprite;
  }

  drawCanvas(ctx, width, height, text, colorHex) {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.strokeStyle = typeof colorHex === 'number' ? `#${colorHex.toString(16).padStart(6, '0')}` : colorHex;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(10, 10, width - 20, height - 20, 20);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px "Segoe UI", "Cairo", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    this.waypoints.forEach((wp) => {
      const text = wp.data.title[lang] || wp.data.title['en'];
      const { ctx, canvas, texture, colorHex } = wp.sprite.userData;
      this.drawCanvas(ctx, canvas.width, canvas.height, text, colorHex);
      texture.needsUpdate = true;
    });
  }

  checkProximity(vehiclePosition) {
    let currentInside = null;

    for (let i = 0; i < this.waypoints.length; i++) {
      const wp = this.waypoints[i];
      const dist = Math.hypot(
        wp.position.x - vehiclePosition.x,
        wp.position.z - vehiclePosition.z
      );

      if (dist < this.activationRadius) {
        currentInside = wp;
        break;
      }
    }

    const prev = this.activeWaypoint;

    if (currentInside !== prev) {
      if (prev) prev.isPlayerInside = false;
      if (currentInside) currentInside.isPlayerInside = true;
      this.activeWaypoint = currentInside;

      return {
        hasChanged: true,
        activeWaypoint: currentInside,
        previousWaypoint: prev
      };
    }

    return {
      hasChanged: false,
      activeWaypoint: currentInside,
      previousWaypoint: prev
    };
  }

  update(time) {
    this.waypoints.forEach((wp) => {
      wp.gem.rotation.y = time * 1.5;
      wp.gem.rotation.x = Math.sin(time * 2) * 0.3;
    });
  }
}
