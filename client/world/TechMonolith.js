import * as THREE from 'three';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export class TechMonolith {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.position = new THREE.Vector3(0, 0.2, 0);
    this.group.position.copy(this.position);

    this.currentLanguage = 'en';
    this.activationRadius = 4.8;
    this.isPlayerNear = false;
    this.orbitRunes = [];

    this.buildMonolith();
    this.scene.add(this.group);
  }

  buildMonolith() {
    // 1. Octagonal Pedestal Base
    const pedestalGeo = new THREE.CylinderGeometry(2.4, 2.8, 0.4, 8);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.2,
      flatShading: true
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = 0.2;
    pedestal.receiveShadow = true;
    this.group.add(pedestal);

    // Glowing Pedestal Inlay Ring
    const ringGeo = new THREE.RingGeometry(2.0, 2.3, 32);
    this.ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    const ring = new THREE.Mesh(ringGeo, this.ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.41;
    this.group.add(ring);

    // 2. Central Hovering Obelisk (Crystal Spire)
    const obeliskGeo = new THREE.ConeGeometry(1.2, 7.5, 4);
    const obeliskMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      emissive: 0x002b3d,
      emissiveIntensity: 0.5,
      roughness: 0.15,
      metalness: 0.85,
      flatShading: true
    });
    this.obelisk = new THREE.Mesh(obeliskGeo, obeliskMat);
    this.obelisk.position.y = 4.5;
    this.obelisk.castShadow = false;
    this.obelisk.receiveShadow = true;
    this.group.add(this.obelisk);

    // Glowing core crystal apex
    const apexGeo = new THREE.OctahedronGeometry(0.55, 0);
    const apexMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    this.apex = new THREE.Mesh(apexGeo, apexMat);
    this.apex.position.y = 8.4;
    this.group.add(this.apex);

    // Apex Point Light
    this.light = new THREE.PointLight(0x00f0ff, 3.0, 16, 1.8);
    this.light.position.y = 8.5;
    this.group.add(this.light);

    // 3. Four Orbiting Holographic Runes (Mobile, Backend, AI, Systems)
    PORTFOLIO_DATA.skillsMatrix.categories.forEach((cat, idx) => {
      const runeSprite = this.createRuneSprite(cat.name[this.currentLanguage], cat.color);
      runeSprite.userData = {
        category: cat,
        initialAngle: (idx / 4) * Math.PI * 2,
        dist: 3.5,
        height: 3.2 + (idx % 2) * 1.0
      };
      this.orbitRunes.push(runeSprite);
      this.group.add(runeSprite);
    });
  }

  createRuneSprite(text, colorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');

    this.drawRuneCanvas(ctx, canvas.width, canvas.height, text, colorHex);

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2.8, 0.88, 1.0);
    sprite.userData = { ...sprite.userData, canvas, ctx, texture, colorHex };
    return sprite;
  }

  drawRuneCanvas(ctx, width, height, text, colorHex) {
    ctx.clearRect(0, 0, width, height);

    // Glass pill background
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.strokeStyle = colorHex;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(10, 10, width - 20, height - 20, 20);
    ctx.fill();
    ctx.stroke();

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px "Segoe UI", "Cairo", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    this.orbitRunes.forEach((rune) => {
      const { ctx, canvas, texture, colorHex, category } = rune.userData;
      const text = category.name[lang] || category.name['en'];
      this.drawRuneCanvas(ctx, canvas.width, canvas.height, text, colorHex);
      texture.needsUpdate = true;
    });
  }

  checkProximity(vehiclePosition) {
    const dist = Math.hypot(
      this.position.x - vehiclePosition.x,
      this.position.z - vehiclePosition.z
    );

    const isNear = dist < this.activationRadius;
    const hasChanged = isNear !== this.isPlayerNear;
    this.isPlayerNear = isNear;

    return {
      isNear,
      hasChanged,
      data: PORTFOLIO_DATA.skillsMatrix
    };
  }

  update(time) {
    // Rotate and bob obelisk
    this.obelisk.rotation.y = time * 0.4;
    this.obelisk.position.y = 4.5 + Math.sin(time * 1.5) * 0.2;
    this.apex.rotation.y = -time * 0.8;
    this.apex.position.y = 8.4 + Math.sin(time * 1.5) * 0.2;

    // Orbit runes around obelisk
    this.orbitRunes.forEach((rune) => {
      const angle = rune.userData.initialAngle + time * 0.35;
      rune.position.x = Math.cos(angle) * rune.userData.dist;
      rune.position.z = Math.sin(angle) * rune.userData.dist;
      rune.position.y = rune.userData.height + Math.sin(time * 2 + rune.userData.initialAngle) * 0.25;
    });

    // Pulse when player is near
    if (this.isPlayerNear) {
      const pulse = 0.8 + Math.sin(time * 8) * 0.2;
      this.ringMat.opacity = pulse;
      this.light.intensity = 4.5 + pulse * 2.0;
    } else {
      this.ringMat.opacity = 0.6;
      this.light.intensity = 3.0;
    }
  }
}
