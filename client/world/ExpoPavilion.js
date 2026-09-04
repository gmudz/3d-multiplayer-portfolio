import * as THREE from 'three';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';

export class ExpoPavilionManager {
  constructor(scene) {
    this.scene = scene;
    this.pavilions = [];
    this.group = new THREE.Group();
    this.currentLanguage = 'en';
    this.activePavilion = null;
    this.activationRadius = 6.8;

    // References for animated elements
    this.droneRotors = [];
    this.soundwaveBars = [];
    this.tickerMesh = null;
    this.coolingPipes = [];

    this.buildCorporateLandmarks();
    this.scene.add(this.group);
  }

  buildCorporateLandmarks() {
    PORTFOLIO_DATA.projects.forEach((proj, idx) => {
      const landmarkGroup = new THREE.Group();
      landmarkGroup.position.set(proj.position.x, 0, proj.position.z);

      const brandColor = new THREE.Color(proj.color);

      // Shared ground driveway / plaza pad
      const plazaGeo = new THREE.CylinderGeometry(8.5, 9.0, 0.25, 16);
      const plazaMat = new THREE.MeshStandardMaterial({
        color: 0x131926,
        metalness: 0.8,
        roughness: 0.2
      });
      const plaza = new THREE.Mesh(plazaGeo, plazaMat);
      plaza.position.y = 0.12;
      plaza.receiveShadow = true;
      landmarkGroup.add(plaza);

      // Glowing driveway ring
      const ringGeo = new THREE.RingGeometry(6.5, 7.2, 32);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: brandColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.y = 0.26;
      landmarkGroup.add(ring);

      // 1. Landmark Architecture based on Project ID
      if (proj.id === 'qticket') {
        this.buildQTicketHQ(landmarkGroup, brandColor);
      } else if (proj.id === 'laffeh') {
        this.buildLaffehDepot(landmarkGroup, brandColor);
      } else if (proj.id === 'callcenter') {
        this.buildCallCenterSpire(landmarkGroup, brandColor);
      } else if (proj.id === 'kernel') {
        this.buildTechFoundry(landmarkGroup, brandColor);
      }

      // Billboard Title Sign
      const signSprite = this.createSignSprite(proj.title[this.currentLanguage], proj.color);
      signSprite.position.set(0, 7.5, 0);
      landmarkGroup.add(signSprite);

      // Subtle localized point light (no shadow casting for speed)
      const light = new THREE.PointLight(brandColor, 2.5, 18, 1.8);
      light.position.set(0, 4.0, 0);
      landmarkGroup.add(light);

      const pavilionData = {
        index: idx,
        project: proj,
        position: new THREE.Vector3(proj.position.x, 0, proj.position.z),
        signSprite: signSprite,
        ringMat: ringMat,
        light: light,
        isPlayerInside: false
      };

      this.pavilions.push(pavilionData);
      this.group.add(landmarkGroup);
    });
  }

  // 1. QTicket Global HQ: Corporate Glass High-Rise Tower with Rooftop Helipad
  buildQTicketHQ(parent, brandColor) {
    const towerGeo = new THREE.BoxGeometry(16, 54, 16);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x0a1c2e,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x00223a,
      emissiveIntensity: 0.5
    });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(0, 27, -8);
    tower.receiveShadow = true;
    parent.add(tower);

    // Rooftop Helipad Platform
    const padGeo = new THREE.CylinderGeometry(6.5, 6.5, 0.4, 24);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });
    const helipad = new THREE.Mesh(padGeo, padMat);
    helipad.position.set(0, 54.2, -8);
    parent.add(helipad);

    // Helipad Yellow Perimeter Ring
    const heliRingGeo = new THREE.RingGeometry(5.4, 5.8, 32);
    heliRingGeo.rotateX(-Math.PI / 2);
    const heliRingMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const heliRing = new THREE.Mesh(heliRingGeo, heliRingMat);
    heliRing.position.set(0, 54.42, -8);
    parent.add(heliRing);

    // Helipad 'H' Marking
    const hBarGeo = new THREE.BoxGeometry(0.5, 0.04, 3.2);
    const hMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const h1 = new THREE.Mesh(hBarGeo, hMat); h1.position.set(-1.2, 54.43, -8);
    const h2 = new THREE.Mesh(hBarGeo, hMat); h2.position.set(1.2, 54.43, -8);
    const hCrossGeo = new THREE.BoxGeometry(2.4, 0.04, 0.5);
    const h3 = new THREE.Mesh(hCrossGeo, hMat); h3.position.set(0, 54.43, -8);
    parent.add(h1); parent.add(h2); parent.add(h3);

    // Drive-in Customer Drop-Off Canopy
    const canopyGeo = new THREE.BoxGeometry(14, 0.25, 8);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8
    });
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.set(0, 4.5, 1.5);
    parent.add(canopy);

    // Animated Scrolling Ticker Banner Mesh
    const tickerGeo = new THREE.BoxGeometry(14.2, 1.2, 0.1);
    const tickerMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    this.tickerMesh = new THREE.Mesh(tickerGeo, tickerMat);
    this.tickerMesh.position.set(0, 4.8, 5.55);
    parent.add(this.tickerMesh);
  }

  // 2. Laffeh Logistics Fulfillment Center: Modern Warehouse & Delivery Drone
  buildLaffehDepot(parent, brandColor) {
    const whGeo = new THREE.BoxGeometry(24, 14, 18);
    const whMat = new THREE.MeshStandardMaterial({
      color: 0x15222e,
      roughness: 0.5,
      metalness: 0.6
    });
    const wh = new THREE.Mesh(whGeo, whMat);
    wh.position.set(6, 7, 0);
    wh.receiveShadow = true;
    parent.add(wh);

    // 3 Loading Dock Bays with Rollup Doors
    const doorGeo = new THREE.BoxGeometry(0.2, 4.2, 3.4);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });
    const neonFrameMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });

    [-5, 0, 5].forEach((offsetZ) => {
      const door = new THREE.Mesh(doorGeo, doorMat);
      door.position.set(-6.1, 2.1, offsetZ);
      parent.add(door);

      const frameGeo = new THREE.BoxGeometry(0.25, 4.4, 3.6);
      const frame = new THREE.Mesh(frameGeo, neonFrameMat);
      frame.position.set(-6.05, 2.2, offsetZ);
      parent.add(frame);
    });

    // Parked Delivery Van at Bay
    const vanBodyGeo = new THREE.BoxGeometry(4.2, 2.2, 2.0);
    const vanMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, roughness: 0.4 });
    const van = new THREE.Mesh(vanBodyGeo, vanMat);
    van.position.set(-9.5, 1.2, 0);
    parent.add(van);

    // Rooftop Automated Dispatch Drone
    const droneGroup = new THREE.Group();
    droneGroup.position.set(4, 15.5, 0);

    const chassisGeo = new THREE.BoxGeometry(1.6, 0.35, 1.6);
    const chassisMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
    const droneChassis = new THREE.Mesh(chassisGeo, chassisMat);
    droneGroup.add(droneChassis);

    // 4 Rotors
    const rotorGeo = new THREE.BoxGeometry(1.4, 0.04, 0.16);
    const rotorMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
    const rotorOffsets = [
      { x: -0.9, z: -0.9 },
      { x: 0.9, z: -0.9 },
      { x: -0.9, z: 0.9 },
      { x: 0.9, z: 0.9 }
    ];

    rotorOffsets.forEach((pos) => {
      const rotor = new THREE.Mesh(rotorGeo, rotorMat);
      rotor.position.set(pos.x, 0.3, pos.z);
      droneGroup.add(rotor);
      this.droneRotors.push(rotor);
    });

    parent.add(droneGroup);
  }

  // 3. Ultimate Call Center AI Tower: Spire with Soundwave Facade & CRT Terminal
  buildCallCenterSpire(parent, brandColor) {
    const spireGeo = new THREE.CylinderGeometry(1.2, 6.5, 52, 12);
    const spireMat = new THREE.MeshStandardMaterial({
      color: 0x1f142b,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x2b0d26,
      emissiveIntensity: 0.4
    });
    const spire = new THREE.Mesh(spireGeo, spireMat);
    spire.position.set(0, 26, -6);
    spire.receiveShadow = true;
    parent.add(spire);

    // 3 Concentric Glowing Transmission Rings
    const ringRadii = [8.5, 6.8, 5.0];
    const ringHeights = [22, 34, 46];
    ringRadii.forEach((r, i) => {
      const tRingGeo = new THREE.TorusGeometry(r, 0.18, 8, 32);
      tRingGeo.rotateX(Math.PI / 2);
      const tRingMat = new THREE.MeshBasicMaterial({ color: 0xff3366 });
      const tRing = new THREE.Mesh(tRingGeo, tRingMat);
      tRing.position.set(0, ringHeights[i], -6);
      parent.add(tRing);
    });

    // 12-Bar 3D Animated Soundwave Facade
    const barGeo = new THREE.BoxGeometry(0.35, 1.0, 0.35);
    const barMat = new THREE.MeshBasicMaterial({ color: 0xff3366 });
    for (let b = 0; b < 12; b++) {
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(-3.3 + b * 0.6, 2.5, 1.2);
      parent.add(bar);
      this.soundwaveBars.push(bar);
    }

    // Ground Lobby CRT Terminal Pedestal
    const termGeo = new THREE.BoxGeometry(1.6, 1.2, 1.2);
    const termMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
    const term = new THREE.Mesh(termGeo, termMat);
    term.position.set(0, 0.6, 2.4);
    parent.add(term);

    const screenGeo = new THREE.PlaneGeometry(1.2, 0.8);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 0.8, 3.01);
    parent.add(screen);
  }

  // 4. Snapdragon & SedOS Tech Foundry: Cleanroom Facility & Silicon Cooling Pipes
  buildTechFoundry(parent, brandColor) {
    const foundryGeo = new THREE.BoxGeometry(22, 16, 20);
    const foundryMat = new THREE.MeshStandardMaterial({
      color: 0x161c28,
      metalness: 0.85,
      roughness: 0.25
    });
    const foundry = new THREE.Mesh(foundryGeo, foundryMat);
    foundry.position.set(-6, 8, 0);
    foundry.receiveShadow = true;
    parent.add(foundry);

    // Cleanroom Yellow Warning Stripe
    const stripeGeo = new THREE.BoxGeometry(22.2, 0.6, 20.2);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(-6, 6, 0);
    parent.add(stripe);

    // Visible Glowing Cyber Gold Cooling Pipes along Facade
    const pipeGeo = new THREE.CylinderGeometry(0.3, 0.3, 15, 12);
    const pipeMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xff7700,
      emissiveIntensity: 0.7,
      metalness: 0.9,
      roughness: 0.1
    });

    [-4, -1, 2, 5].forEach((posZ) => {
      const pipe = new THREE.Mesh(pipeGeo, pipeMat);
      pipe.position.set(5.3, 7.5, posZ);
      parent.add(pipe);
      this.coolingPipes.push(pipe);
    });

    // Golden Silicon Die Emblem on Plinth
    const dieGeo = new THREE.BoxGeometry(2.4, 2.4, 0.3);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      metalness: 0.95,
      roughness: 0.1
    });
    const die = new THREE.Mesh(dieGeo, dieMat);
    die.position.set(2.5, 2.2, 0);
    die.rotation.y = Math.PI / 4;
    die.rotation.x = Math.PI / 6;
    parent.add(die);
  }

  createSignSprite(text, colorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    this.drawSignCanvas(ctx, canvas.width, canvas.height, text, colorHex);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(5.6, 1.4, 1.0);
    sprite.userData = { canvas, ctx, texture, colorHex };
    return sprite;
  }

  drawSignCanvas(ctx, width, height, text, colorHex) {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(10, 15, 29, 0.92)';
    ctx.strokeStyle = colorHex;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(16, 16, width - 32, height - 32, 28);
    ctx.fill();
    ctx.stroke();

    ctx.shadowColor = colorHex;
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 34px "Segoe UI", "Cairo", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    this.pavilions.forEach((pav) => {
      const text = pav.project.title[lang] || pav.project.title['en'];
      const { ctx, canvas, texture, colorHex } = pav.signSprite.userData;
      this.drawSignCanvas(ctx, canvas.width, canvas.height, text, colorHex);
      texture.needsUpdate = true;
    });
  }

  // Zero-GC Proximity Checker using pure scalar distance math
  checkProximity(vehiclePosition) {
    let insidePavilion = null;
    const vx = vehiclePosition.x;
    const vz = vehiclePosition.z;

    for (let i = 0; i < this.pavilions.length; i++) {
      const pav = this.pavilions[i];
      const dx = pav.position.x - vx;
      const dz = pav.position.z - vz;
      const dist = Math.hypot(dx, dz);

      if (dist < this.activationRadius) {
        insidePavilion = pav;
        break;
      }
    }

    const prevPav = this.activePavilion;

    if (insidePavilion !== prevPav) {
      if (prevPav) prevPav.isPlayerInside = false;
      if (insidePavilion) insidePavilion.isPlayerInside = true;
      this.activePavilion = insidePavilion;

      return {
        hasChanged: true,
        activePavilion: insidePavilion,
        previousPavilion: prevPav
      };
    }

    return {
      hasChanged: false,
      activePavilion: insidePavilion,
      previousPavilion: prevPav
    };
  }

  update(time) {
    // 1. Spin Laffeh drone rotors
    for (let i = 0; i < this.droneRotors.length; i++) {
      this.droneRotors[i].rotation.y = time * 24.0;
    }

    // 2. Animate Call Center soundwave bars with harmonic sine waves
    for (let b = 0; b < this.soundwaveBars.length; b++) {
      const scaleY = 0.5 + Math.abs(Math.sin(time * 6.0 + b * 0.75)) * 3.5;
      this.soundwaveBars[b].scale.y = scaleY;
      this.soundwaveBars[b].position.y = 2.0 + scaleY * 0.5;
    }

    // 3. Pulse Tech Foundry cooling pipes
    const pipeGlow = 0.5 + Math.sin(time * 3.5) * 0.4;
    for (let p = 0; p < this.coolingPipes.length; p++) {
      this.coolingPipes[p].material.emissiveIntensity = pipeGlow;
    }

    // 4. Pulse ground rings
    this.pavilions.forEach((pav) => {
      if (pav.isPlayerInside) {
        const pulse = 0.85 + Math.sin(time * 7) * 0.15;
        pav.ringMat.opacity = pulse;
        pav.light.intensity = 4.2;
      } else {
        pav.ringMat.opacity = 0.6;
        pav.light.intensity = 2.2;
      }
    });
  }
}
