import * as THREE from 'three';

export class RaceTrack {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.roadHalfWidth = 5.0; // 10 units wide track

    // 1. Grand Prix Circuit Spline (Closed loop wrapping around archipelago)
    this.controlPoints = [
      new THREE.Vector3(0, 0.22, -68),      // P0: Start / Finish Gantry on North Avenue (Financial District)
      new THREE.Vector3(45, 0.22, -55),     // P1: Downtown Chicane exiting Financial District
      new THREE.Vector3(105, 0.28, -25),    // P2: East Expressway Entrance Ramp past Laffeh Depot
      new THREE.Vector3(105, 0.28, 45),     // P3: High-Speed East Expressway Straightaway
      new THREE.Vector3(75, 0.28, 105),     // P4: Banked South-East Expressway Sweeper
      new THREE.Vector3(0, 0.22, 75),       // P5: South AI Telecom Quarter Boulevard
      new THREE.Vector3(0, 0.22, 24),       // P6: Central Innovation Plaza Roundabout entrance
      new THREE.Vector3(-50, 0.22, 0),      // P7: West Avenue past Tech Foundry
      new THREE.Vector3(-105, 0.28, -25),   // P8: West Expressway Entrance Ramp
      new THREE.Vector3(-75, 0.28, -105),   // P9: Banked North-West Expressway Turn
      new THREE.Vector3(-25, 0.22, -100),   // P10: High-speed braking chicane into North Boulevard
      new THREE.Vector3(0, 0.22, -85)       // P11: Final Corner returning to Main Straight
    ];

    this.curve = new THREE.CatmullRomCurve3(this.controlPoints, true, 'catmullrom', 0.25);
    this.sampleCount = 260;
    this.trackSamples = this.curve.getSpacedPoints(this.sampleCount);

    // Build circuit meshes
    this.buildRoadDeck();
    this.buildApexKerbs();
    this.buildTireBarriers();
    this.buildStartFinishGantry();

    this.scene.add(this.group);
  }

  // 1. Banked Asphalt Road Surface with Painted Edges and Dashed Centerline
  buildRoadDeck() {
    const pts = this.trackSamples;
    const vertexCount = pts.length * 2;
    const roadPositions = new Float32Array(vertexCount * 3);
    const roadNormals = new Float32Array(vertexCount * 3);
    const roadUvs = new Float32Array(vertexCount * 2);

    const leftLinePositions = [];
    const rightLinePositions = [];
    const centerLinePositions = [];

    const up = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const nextP = pts[(i + 1) % pts.length];
      const tangent = new THREE.Vector3().subVectors(nextP, p).normalize();
      const binormal = new THREE.Vector3().crossVectors(tangent, up).normalize();

      // Inward banking calculation on elevated high-speed turns (P3, P6, P9)
      const distFromCenter = Math.hypot(p.x, p.z);
      const bankFactor = (distFromCenter > 70) ? 0.08 : 0.0;
      const bankOffset = (p.x > 0 ? -1 : 1) * bankFactor;

      const leftX = p.x - binormal.x * this.roadHalfWidth;
      const leftY = p.y - bankOffset;
      const leftZ = p.z - binormal.z * this.roadHalfWidth;

      const rightX = p.x + binormal.x * this.roadHalfWidth;
      const rightY = p.y + bankOffset;
      const rightZ = p.z + binormal.z * this.roadHalfWidth;

      const vIdx = i * 2;
      roadPositions[vIdx * 3] = leftX;
      roadPositions[vIdx * 3 + 1] = leftY;
      roadPositions[vIdx * 3 + 2] = leftZ;

      roadPositions[(vIdx + 1) * 3] = rightX;
      roadPositions[(vIdx + 1) * 3 + 1] = rightY;
      roadPositions[(vIdx + 1) * 3 + 2] = rightZ;

      roadNormals[vIdx * 3] = 0; roadNormals[vIdx * 3 + 1] = 1; roadNormals[vIdx * 3 + 2] = 0;
      roadNormals[(vIdx + 1) * 3] = 0; roadNormals[(vIdx + 1) * 3 + 1] = 1; roadNormals[(vIdx + 1) * 3 + 2] = 0;

      const uProgress = (i / pts.length) * 45.0;
      roadUvs[vIdx * 2] = 0;
      roadUvs[vIdx * 2 + 1] = uProgress;
      roadUvs[(vIdx + 1) * 2] = 1;
      roadUvs[(vIdx + 1) * 2 + 1] = uProgress;

      // Painted track edge lines (0.3m inside road edge)
      const inMargin = 0.45;
      leftLinePositions.push(new THREE.Vector3(
        p.x - binormal.x * (this.roadHalfWidth - inMargin),
        leftY + 0.02,
        p.z - binormal.z * (this.roadHalfWidth - inMargin)
      ));
      rightLinePositions.push(new THREE.Vector3(
        p.x + binormal.x * (this.roadHalfWidth - inMargin),
        rightY + 0.02,
        p.z + binormal.z * (this.roadHalfWidth - inMargin)
      ));

      if (i % 2 === 0) {
        centerLinePositions.push(new THREE.Vector3(p.x, p.y + 0.02, p.z));
      }
    }

    const indices = [];
    for (let i = 0; i < pts.length; i++) {
      const next = (i + 1) % pts.length;
      const i0 = i * 2;
      const i1 = i * 2 + 1;
      const i2 = next * 2;
      const i3 = next * 2 + 1;

      indices.push(i0, i1, i2);
      indices.push(i2, i1, i3);
    }

    const roadGeo = new THREE.BufferGeometry();
    roadGeo.setAttribute('position', new THREE.BufferAttribute(roadPositions, 3));
    roadGeo.setAttribute('normal', new THREE.BufferAttribute(roadNormals, 3));
    roadGeo.setAttribute('uv', new THREE.BufferAttribute(roadUvs, 2));
    roadGeo.setIndex(indices);

    const roadMat = new THREE.MeshStandardMaterial({
      color: 0x161b22,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true
    });

    this.roadMesh = new THREE.Mesh(roadGeo, roadMat);
    this.roadMesh.receiveShadow = true;
    this.group.add(this.roadMesh);

    // Left and Right Painted Borders
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const edgeCurveL = new THREE.CatmullRomCurve3(leftLinePositions, true);
    const edgeGeoL = new THREE.TubeGeometry(edgeCurveL, 200, 0.08, 4, true);
    const edgeMeshL = new THREE.Mesh(edgeGeoL, lineMat);
    this.group.add(edgeMeshL);

    const edgeCurveR = new THREE.CatmullRomCurve3(rightLinePositions, true);
    const edgeGeoR = new THREE.TubeGeometry(edgeCurveR, 200, 0.08, 4, true);
    const edgeMeshR = new THREE.Mesh(edgeGeoR, lineMat);
    this.group.add(edgeMeshR);

    // Concrete Pillars Supporting Elevated Road Sections
    this.buildPillars();
  }

  // Support Pillars under elevated road sections
  buildPillars() {
    const pillarGeo = new THREE.CylinderGeometry(0.7, 0.85, 4.0, 8);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9, flatShading: true });
    const pillarPuffGeo = new THREE.BoxGeometry(11.2, 0.4, 1.4);

    for (let i = 0; i < this.trackSamples.length; i += 18) {
      const p = this.trackSamples[i];
      if (p.y >= 0.38) {
        const pillar = new THREE.Mesh(pillarGeo, pillarMat);
        pillar.position.set(p.x, -1.6, p.z);
        pillar.receiveShadow = true;
        this.group.add(pillar);

        const crosshead = new THREE.Mesh(pillarPuffGeo, pillarMat);
        crosshead.position.set(p.x, p.y - 0.25, p.z);
        this.group.add(crosshead);
      }
    }
  }

  // 2. 3D Alternating Red and White Apex Kerbs using InstancedMesh
  buildApexKerbs() {
    const kerbBlockGeo = new THREE.BoxGeometry(0.9, 0.14, 1.3);
    const redKerbMat = new THREE.MeshStandardMaterial({ color: 0xee2222, roughness: 0.6, metalness: 0.1 });
    const whiteKerbMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.1 });

    const apexIndices = [
      { start: 30, end: 55 },   // Turn 1 inside apex
      { start: 95, end: 125 },  // East/South apex
      { start: 160, end: 190 }, // South/West apex
      { start: 220, end: 245 }  // Final chicane apex
    ];

    let totalKerbs = 0;
    apexIndices.forEach(span => { totalKerbs += (span.end - span.start); });

    const halfCount = Math.ceil(totalKerbs / 2);
    const redMesh = new THREE.InstancedMesh(kerbBlockGeo, redKerbMat, halfCount);
    const whiteMesh = new THREE.InstancedMesh(kerbBlockGeo, whiteKerbMat, halfCount);

    redMesh.castShadow = false;
    redMesh.receiveShadow = true;
    whiteMesh.castShadow = false;
    whiteMesh.receiveShadow = true;

    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);
    let redIdx = 0;
    let whiteIdx = 0;

    apexIndices.forEach(span => {
      for (let i = span.start; i < span.end; i++) {
        const p = this.trackSamples[i % this.trackSamples.length];
        const nextP = this.trackSamples[(i + 1) % this.trackSamples.length];
        const tangent = new THREE.Vector3().subVectors(nextP, p).normalize();
        const binormal = new THREE.Vector3().crossVectors(tangent, up).normalize();

        // Inside corner placement
        const kerbPos = new THREE.Vector3(
          p.x + binormal.x * (this.roadHalfWidth + 0.45),
          p.y + 0.07,
          p.z + binormal.z * (this.roadHalfWidth + 0.45)
        );

        dummy.position.copy(kerbPos);
        dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
        dummy.updateMatrix();

        if ((i - span.start) % 2 === 0) {
          if (redIdx < halfCount) {
            redMesh.setMatrixAt(redIdx++, dummy.matrix);
          }
        } else {
          if (whiteIdx < halfCount) {
            whiteMesh.setMatrixAt(whiteIdx++, dummy.matrix);
          }
        }
      }
    });

    redMesh.instanceMatrix.needsUpdate = true;
    whiteMesh.instanceMatrix.needsUpdate = true;
    this.group.add(redMesh);
    this.group.add(whiteMesh);
  }

  // 3. Tire Barrier Stacks on Outside Run-Off Areas using InstancedMesh
  buildTireBarriers() {
    const tireStackGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.2, 10);
    const barrierMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9, flatShading: true });

    const barrierSpans = [
      { start: 20, end: 50 },
      { start: 85, end: 115 },
      { start: 150, end: 180 },
      { start: 215, end: 245 }
    ];

    let totalStacks = 0;
    barrierSpans.forEach(s => { totalStacks += Math.floor((s.end - s.start) / 2); });

    const barrierMesh = new THREE.InstancedMesh(tireStackGeo, barrierMat, totalStacks);
    barrierMesh.castShadow = false;
    barrierMesh.receiveShadow = true;
    const dummy = new THREE.Object3D();
    const up = new THREE.Vector3(0, 1, 0);
    let stackIdx = 0;

    barrierSpans.forEach(s => {
      for (let i = s.start; i < s.end; i += 2) {
        const p = this.trackSamples[i % this.trackSamples.length];
        const nextP = this.trackSamples[(i + 1) % this.trackSamples.length];
        const tangent = new THREE.Vector3().subVectors(nextP, p).normalize();
        const binormal = new THREE.Vector3().crossVectors(tangent, up).normalize();

        // Outside run-off area
        const barrierPos = new THREE.Vector3(
          p.x - binormal.x * (this.roadHalfWidth + 1.2),
          p.y + 0.6,
          p.z - binormal.z * (this.roadHalfWidth + 1.2)
        );

        dummy.position.copy(barrierPos);
        dummy.updateMatrix();

        if (stackIdx < totalStacks) {
          barrierMesh.setMatrixAt(stackIdx++, dummy.matrix);
        }
      }
    });

    barrierMesh.instanceMatrix.needsUpdate = true;
    this.group.add(barrierMesh);
  }

  // 4. Start / Finish Gantry Arch with 5 LED Lights and Checkered Line
  buildStartFinishGantry() {
    const gantryGroup = new THREE.Group();
    gantryGroup.position.set(0, 0.22, -68);

    const trussMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.85, roughness: 0.25 });

    // Left and Right Towers
    const towerGeo = new THREE.BoxGeometry(0.8, 7.5, 0.8);
    const towerL = new THREE.Mesh(towerGeo, trussMat);
    towerL.position.set(-6.2, 3.75, 0);
    towerL.castShadow = false;
    gantryGroup.add(towerL);

    const towerR = new THREE.Mesh(towerGeo, trussMat);
    towerR.position.set(6.2, 3.75, 0);
    towerR.castShadow = false;
    gantryGroup.add(towerR);

    // Crossbeam Truss
    const beamGeo = new THREE.BoxGeometry(13.2, 0.9, 1.2);
    const beam = new THREE.Mesh(beamGeo, trussMat);
    beam.position.set(0, 7.1, 0);
    gantryGroup.add(beam);

    // 5 Holographic Digital Start Lights
    this.startLights = [];
    const lightGeo = new THREE.SphereGeometry(0.35, 12, 12);

    for (let i = 0; i < 5; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0x330000 });
      const lightMesh = new THREE.Mesh(lightGeo, mat);
      lightMesh.position.set(-3.2 + i * 1.6, 7.1, 0.65);
      gantryGroup.add(lightMesh);
      this.startLights.push({ mesh: lightMesh, mat: mat });
    }

    // Checkered Start / Finish Line Decal
    const checkCanvas = document.createElement('canvas');
    checkCanvas.width = 256;
    checkCanvas.height = 64;
    const ctx = checkCanvas.getContext('2d');
    const cols = 16;
    const rows = 4;
    const cw = checkCanvas.width / cols;
    const ch = checkCanvas.height / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.fillStyle = (r + c) % 2 === 0 ? '#ffffff' : '#111111';
        ctx.fillRect(c * cw, r * ch, cw, ch);
      }
    }

    const checkTex = new THREE.CanvasTexture(checkCanvas);
    const checkMat = new THREE.MeshBasicMaterial({ map: checkTex, side: THREE.DoubleSide });
    const checkPlane = new THREE.Mesh(new THREE.PlaneGeometry(10.0, 1.8), checkMat);
    checkPlane.rotation.x = -Math.PI / 2;
    checkPlane.position.set(0, 0.025, 0);
    gantryGroup.add(checkPlane);

    // Holographic Banner Billboard
    const bannerCanvas = document.createElement('canvas');
    bannerCanvas.width = 512;
    bannerCanvas.height = 128;
    const bCtx = bannerCanvas.getContext('2d');
    bCtx.fillStyle = 'rgba(10, 20, 35, 0.9)';
    bCtx.fillRect(0, 0, 512, 128);
    bCtx.strokeStyle = '#00f0ff';
    bCtx.lineWidth = 4;
    bCtx.strokeRect(4, 4, 504, 120);

    bCtx.fillStyle = '#00f0ff';
    bCtx.font = 'bold 36px "Segoe UI", sans-serif';
    bCtx.textAlign = 'center';
    bCtx.fillText('🏁 GRAND PRIX CIRCUIT', 256, 55);

    bCtx.fillStyle = '#00ff88';
    bCtx.font = 'bold 24px "Cairo", sans-serif';
    bCtx.fillText('حلبة الجائزة الكبرى // TIME TRIAL', 256, 100);

    const bannerTex = new THREE.CanvasTexture(bannerCanvas);
    const bannerMat = new THREE.MeshBasicMaterial({ map: bannerTex, transparent: true, opacity: 0.95 });
    const bannerMesh = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 1.8), bannerMat);
    bannerMesh.position.set(0, 5.2, 0.65);
    gantryGroup.add(bannerMesh);

    this.group.add(gantryGroup);
  }

  // Fast proximity check: returns true if point is on track surface
  isPointOnTrack(pos) {
    const x = pos.x;
    const z = pos.z;

    // Spline proximity check (sample every 4th point for speed)
    let minSqDist = Infinity;
    for (let i = 0; i < this.trackSamples.length; i += 4) {
      const p = this.trackSamples[i];
      const dx = x - p.x;
      const dz = z - p.z;
      const sq = dx * dx + dz * dz;
      if (sq < minSqDist) {
        minSqDist = sq;
      }
    }

    // Distance threshold: roadHalfWidth (5.0) + margin (2.4) = 7.4 units (sq ~55)
    return minSqDist <= 55.0;
  }

  update(elapsedTime) {
    // Dynamic countdown light animation on Gantry Arch
    if (this.startLights && this.startLights.length === 5) {
      const cycle = (elapsedTime * 1.5) % 6;
      this.startLights.forEach((light, i) => {
        if (cycle < 4.0) {
          const isLit = cycle > i * 0.8;
          light.mat.color.setHex(isLit ? 0xff0033 : 0x220000);
        } else {
          // All flash green GO!
          light.mat.color.setHex(0x00ff88);
        }
      });
    }
  }
}
