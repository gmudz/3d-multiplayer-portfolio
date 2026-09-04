import * as THREE from 'three';

export class CityWorld {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();

    // 50x50 spatial chunks grid (6x6 = 36 chunks covering [-150, 150] x [-150, 150])
    this.chunks = [];
    this.chunkSize = 50;
    this.gridCount = 6;
    this.cullDistanceSq = 140 * 140; // 140m distance culling threshold

    // Shared materials (zero duplicates, zero shadow casting)
    this.initMaterials();

    // 1. Build Base Continuous Urban Terrain & Chunks
    this.buildSpatialGridChunks();

    // 2. Build Road & Highway Network (Avenues + Outer Ring Expressway)
    this.buildRoadNetwork();

    // 3. Build Procedural Instanced City Blocks (< 8 draw calls)
    this.buildInstancedSkyscrapers();

    // 4. Build Perimeter Barrier
    this.buildPerimeterBarrier();

    this.scene.add(this.group);
  }

  initMaterials() {
    this.materials = {
      ground: new THREE.MeshStandardMaterial({
        color: 0x090d16,
        roughness: 0.9,
        metalness: 0.1,
        flatShading: true
      }),
      sidewalk: new THREE.MeshStandardMaterial({
        color: 0x1a2333,
        roughness: 0.75,
        metalness: 0.25
      }),
      curb: new THREE.MeshBasicMaterial({ color: 0x00f0ff }),
      asphalt: new THREE.MeshStandardMaterial({
        color: 0x121824,
        roughness: 0.8,
        metalness: 0.2
      }),
      expressway: new THREE.MeshStandardMaterial({
        color: 0x0f1520,
        roughness: 0.75,
        metalness: 0.35
      }),
      markingYellow: new THREE.MeshBasicMaterial({ color: 0xffaa00 }),
      markingWhite: new THREE.MeshBasicMaterial({ color: 0xe2e8f0 }),
      parkGrass: new THREE.MeshStandardMaterial({
        color: 0x0f291e,
        roughness: 0.85,
        metalness: 0.1
      }),
      barrierNeon: new THREE.MeshBasicMaterial({ color: 0x00f0ff }),
      // Instanced Building Materials
      buildingGlass: new THREE.MeshStandardMaterial({
        color: 0x0c1e30,
        metalness: 0.85,
        roughness: 0.15,
        emissive: 0x002233,
        emissiveIntensity: 0.4
      }),
      buildingResidential: new THREE.MeshStandardMaterial({
        color: 0x161d2a,
        metalness: 0.6,
        roughness: 0.4,
        emissive: 0x180b20,
        emissiveIntensity: 0.3
      }),
      buildingDatacenter: new THREE.MeshStandardMaterial({
        color: 0x111622,
        metalness: 0.7,
        roughness: 0.35
      }),
      buildingSpire: new THREE.MeshStandardMaterial({
        color: 0x182232,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x003344,
        emissiveIntensity: 0.5
      })
    };
  }

  // 1. Divide continuous 300x300m world into 6x6 spatial chunks for distance culling
  buildSpatialGridChunks() {
    const minCoord = -150;
    const chunkGeo = new THREE.PlaneGeometry(this.chunkSize, this.chunkSize);
    chunkGeo.rotateX(-Math.PI / 2);

    for (let gx = 0; gx < this.gridCount; gx++) {
      for (let gz = 0; gz < this.gridCount; gz++) {
        const cx = minCoord + (gx + 0.5) * this.chunkSize;
        const cz = minCoord + (gz + 0.5) * this.chunkSize;

        const chunkGroup = new THREE.Group();
        chunkGroup.position.set(cx, 0, cz);

        // Ground slab for chunk
        const slab = new THREE.Mesh(chunkGeo, this.materials.ground);
        slab.position.y = 0;
        slab.receiveShadow = true;
        chunkGroup.add(slab);

        // Add to scene & tracking array
        this.group.add(chunkGroup);
        this.chunks.push({
          group: chunkGroup,
          x: cx,
          z: cz
        });
      }
    }
  }

  // 2. Multi-lane avenues, Central Plaza & Outer Ring Highway
  buildRoadNetwork() {
    const roadsGroup = new THREE.Group();

    // A. Central North-South Grand Avenue (Width 12, length 280)
    const nsRoadGeo = new THREE.BoxGeometry(12, 0.08, 280);
    const nsRoad = new THREE.Mesh(nsRoadGeo, this.materials.asphalt);
    nsRoad.position.set(0, 0.04, 0);
    nsRoad.receiveShadow = true;
    roadsGroup.add(nsRoad);

    // Double yellow centerline for NS Avenue
    const nsYellowGeo = new THREE.BoxGeometry(0.25, 0.02, 280);
    const nsYellowL = new THREE.Mesh(nsYellowGeo, this.materials.markingYellow);
    nsYellowL.position.set(-0.2, 0.09, 0);
    const nsYellowR = new THREE.Mesh(nsYellowGeo, this.materials.markingYellow);
    nsYellowR.position.set(0.2, 0.09, 0);
    roadsGroup.add(nsYellowL);
    roadsGroup.add(nsYellowR);

    // White outer lane lines
    const nsWhiteGeo = new THREE.BoxGeometry(0.2, 0.02, 280);
    const nsWhiteL = new THREE.Mesh(nsWhiteGeo, this.materials.markingWhite);
    nsWhiteL.position.set(-5.4, 0.09, 0);
    const nsWhiteR = new THREE.Mesh(nsWhiteGeo, this.materials.markingWhite);
    nsWhiteR.position.set(5.4, 0.09, 0);
    roadsGroup.add(nsWhiteL);
    roadsGroup.add(nsWhiteR);

    // B. Central East-West Grand Avenue (Width 12, length 280)
    const ewRoadGeo = new THREE.BoxGeometry(280, 0.08, 12);
    const ewRoad = new THREE.Mesh(ewRoadGeo, this.materials.asphalt);
    ewRoad.position.set(0, 0.04, 0);
    ewRoad.receiveShadow = true;
    roadsGroup.add(ewRoad);

    // Double yellow centerline for EW Avenue
    const ewYellowGeo = new THREE.BoxGeometry(280, 0.02, 0.25);
    const ewYellowT = new THREE.Mesh(ewYellowGeo, this.materials.markingYellow);
    ewYellowT.position.set(0, 0.09, -0.2);
    const ewYellowB = new THREE.Mesh(ewYellowGeo, this.materials.markingYellow);
    ewYellowB.position.set(0, 0.09, 0.2);
    roadsGroup.add(ewYellowT);
    roadsGroup.add(ewYellowB);

    // C. Central Innovation Plaza Roundabout & Pedestrian Promenade
    const plazaGeo = new THREE.CylinderGeometry(24, 24, 0.16, 32);
    const plaza = new THREE.Mesh(plazaGeo, this.materials.sidewalk);
    plaza.position.set(0, 0.08, 0);
    plaza.receiveShadow = true;
    roadsGroup.add(plaza);

    // Plaza outer neon curb ring
    const plazaRingGeo = new THREE.RingGeometry(23.6, 24.1, 48);
    plazaRingGeo.rotateX(-Math.PI / 2);
    const plazaRing = new THREE.Mesh(plazaRingGeo, this.materials.curb);
    plazaRing.position.set(0, 0.17, 0);
    roadsGroup.add(plazaRing);

    // Roundabout road ring (Radius 24 to 34, width 10)
    const roundRoadGeo = new THREE.RingGeometry(24.2, 34.0, 48);
    roundRoadGeo.rotateX(-Math.PI / 2);
    const roundRoad = new THREE.Mesh(roundRoadGeo, this.materials.asphalt);
    roundRoad.position.set(0, 0.05, 0);
    roundRoad.receiveShadow = true;
    roadsGroup.add(roundRoad);

    // D. Outer Ring Highway / Expressway (High-Speed Circuit Perimeter Loop)
    const hwySpecs = [
      { x: 0, z: -105, w: 220, d: 14 },
      { x: 0, z: 105, w: 220, d: 14 },
      { x: -105, z: 0, w: 14, d: 220 },
      { x: 105, z: 0, w: 14, d: 220 }
    ];

    hwySpecs.forEach((spec) => {
      const hwyGeo = new THREE.BoxGeometry(spec.w, 0.14, spec.d);
      const hwy = new THREE.Mesh(hwyGeo, this.materials.expressway);
      hwy.position.set(spec.x, 0.07, spec.z);
      hwy.receiveShadow = true;
      roadsGroup.add(hwy);

      // Elevated highway barrier curb
      const guardGeo = new THREE.BoxGeometry(spec.w, 0.45, 0.35);
      const guardL = new THREE.Mesh(guardGeo, this.materials.sidewalk);
      const guardR = new THREE.Mesh(guardGeo, this.materials.sidewalk);

      if (spec.w > spec.d) {
        guardL.position.set(spec.x, 0.28, spec.z - spec.d * 0.5 + 0.2);
        guardR.position.set(spec.x, 0.28, spec.z + spec.d * 0.5 - 0.2);
      } else {
        guardL.position.set(spec.x - spec.w * 0.5 + 0.2, 0.28, spec.z);
        guardR.position.set(spec.x + spec.w * 0.5 - 0.2, 0.28, spec.z);
      }
      roadsGroup.add(guardL);
      roadsGroup.add(guardR);
    });

    // E. Urban Corner Green Parks
    const parkCoords = [
      { x: -38, z: -38 },
      { x: 38, z: -38 },
      { x: -38, z: 38 },
      { x: 38, z: 38 }
    ];

    const parkGeo = new THREE.BoxGeometry(26, 0.12, 26);
    parkCoords.forEach((p) => {
      const park = new THREE.Mesh(parkGeo, this.materials.parkGrass);
      park.position.set(p.x, 0.06, p.z);
      park.receiveShadow = true;
      roadsGroup.add(park);

      // Neon grass border
      const borderGeo = new THREE.BoxGeometry(26.4, 0.18, 0.35);
      const b1 = new THREE.Mesh(borderGeo, this.materials.curb);
      b1.position.set(p.x, 0.12, p.z - 13.1);
      const b2 = new THREE.Mesh(borderGeo, this.materials.curb);
      b2.position.set(p.x, 0.12, p.z + 13.1);
      roadsGroup.add(b1);
      roadsGroup.add(b2);
    });

    this.group.add(roadsGroup);
  }

  // 3. Procedural Instanced Skyscrapers (< 8 draw calls for hundreds of buildings)
  buildInstancedSkyscrapers() {
    const dummy = new THREE.Object3D();

    const group1Count = 28; // Corporate Glass Towers
    const group2Count = 36; // Cyber Residential Towers
    const group3Count = 32; // Tech Datacenter Blocks
    const group4Count = 16; // Skyline Spire Towers

    const geoCorporate = new THREE.BoxGeometry(14, 55, 14);
    const geoResidential = new THREE.BoxGeometry(11, 38, 11);
    const geoDatacenter = new THREE.BoxGeometry(18, 22, 18);
    const geoSpire = new THREE.CylinderGeometry(1.5, 7, 72, 8);

    const meshCorporate = new THREE.InstancedMesh(geoCorporate, this.materials.buildingGlass, group1Count);
    const meshResidential = new THREE.InstancedMesh(geoResidential, this.materials.buildingResidential, group2Count);
    const meshDatacenter = new THREE.InstancedMesh(geoDatacenter, this.materials.buildingDatacenter, group3Count);
    const meshSpire = new THREE.InstancedMesh(geoSpire, this.materials.buildingSpire, group4Count);

    meshCorporate.castShadow = false; meshCorporate.receiveShadow = true;
    meshResidential.castShadow = false; meshResidential.receiveShadow = true;
    meshDatacenter.castShadow = false; meshDatacenter.receiveShadow = true;
    meshSpire.castShadow = false; meshSpire.receiveShadow = true;

    let idxCorp = 0;
    let idxRes = 0;
    let idxData = 0;
    let idxSpire = 0;

    const blockSlots = [
      // Quadrant 1 (North-East)
      { x: 30, z: -76, type: 'corp', hScale: 1.2 },
      { x: 48, z: -76, type: 'res', hScale: 1.1 },
      { x: 68, z: -76, type: 'corp', hScale: 0.9 },
      { x: 30, z: -38, type: 'res', hScale: 1.0 },
      { x: 68, z: -38, type: 'data', hScale: 1.1 },
      { x: 78, z: -55, type: 'spire', hScale: 1.3 },
      { x: 48, z: -40, type: 'corp', hScale: 1.4 },
      { x: 68, z: -20, type: 'res', hScale: 0.9 },
      { x: 80, z: -80, type: 'corp', hScale: 1.1 },

      // Quadrant 2 (South-East)
      { x: 30, z: 76, type: 'res', hScale: 1.1 },
      { x: 48, z: 76, type: 'data', hScale: 1.2 },
      { x: 68, z: 76, type: 'corp', hScale: 1.0 },
      { x: 30, z: 38, type: 'data', hScale: 1.0 },
      { x: 68, z: 38, type: 'res', hScale: 1.3 },
      { x: 78, z: 55, type: 'spire', hScale: 1.2 },
      { x: 48, z: 40, type: 'res', hScale: 0.9 },
      { x: 68, z: 20, type: 'corp', hScale: 1.1 },
      { x: 80, z: 80, type: 'res', hScale: 1.2 },

      // Quadrant 3 (South-West)
      { x: -30, z: 76, type: 'data', hScale: 1.3 },
      { x: -48, z: 76, type: 'corp', hScale: 1.0 },
      { x: -68, z: 76, type: 'data', hScale: 1.1 },
      { x: -30, z: 38, type: 'res', hScale: 1.0 },
      { x: -68, z: 38, type: 'spire', hScale: 1.4 },
      { x: -78, z: 55, type: 'data', hScale: 1.0 },
      { x: -48, z: 40, type: 'corp', hScale: 1.2 },
      { x: -68, z: 20, type: 'data', hScale: 0.9 },
      { x: -80, z: 80, type: 'corp', hScale: 1.1 },

      // Quadrant 4 (North-West)
      { x: -30, z: -76, type: 'corp', hScale: 1.1 },
      { x: -48, z: -76, type: 'data', hScale: 1.2 },
      { x: -68, z: -76, type: 'res', hScale: 1.0 },
      { x: -30, z: -38, type: 'spire', hScale: 1.3 },
      { x: -68, z: -38, type: 'corp', hScale: 1.2 },
      { x: -78, z: -55, type: 'res', hScale: 1.1 },
      { x: -48, z: -40, type: 'data', hScale: 1.0 },
      { x: -68, z: -20, type: 'corp', hScale: 1.3 },
      { x: -80, z: -80, type: 'spire', hScale: 1.2 },

      // Outer Perimeter Skyline Clusters
      { x: 125, z: -50, type: 'corp', hScale: 1.5 },
      { x: 125, z: 0, type: 'spire', hScale: 1.4 },
      { x: 125, z: 50, type: 'res', hScale: 1.2 },
      { x: -125, z: -50, type: 'data', hScale: 1.3 },
      { x: -125, z: 0, type: 'spire', hScale: 1.5 },
      { x: -125, z: 50, type: 'corp', hScale: 1.3 },
      { x: -50, z: -125, type: 'corp', hScale: 1.4 },
      { x: 0, z: -125, type: 'spire', hScale: 1.6 },
      { x: 50, z: -125, type: 'res', hScale: 1.2 },
      { x: -50, z: 125, type: 'data', hScale: 1.3 },
      { x: 0, z: 125, type: 'spire', hScale: 1.5 },
      { x: 50, z: 125, type: 'corp', hScale: 1.4 }
    ];

    blockSlots.forEach((slot) => {
      const hScale = slot.hScale || 1.0;

      if (slot.type === 'corp' && idxCorp < group1Count) {
        dummy.position.set(slot.x, 27.5 * hScale, slot.z);
        dummy.scale.set(1, hScale, 1);
        dummy.updateMatrix();
        meshCorporate.setMatrixAt(idxCorp++, dummy.matrix);
      } else if (slot.type === 'res' && idxRes < group2Count) {
        dummy.position.set(slot.x, 19 * hScale, slot.z);
        dummy.scale.set(1, hScale, 1);
        dummy.updateMatrix();
        meshResidential.setMatrixAt(idxRes++, dummy.matrix);
      } else if (slot.type === 'data' && idxData < group3Count) {
        dummy.position.set(slot.x, 11 * hScale, slot.z);
        dummy.scale.set(1, hScale, 1);
        dummy.updateMatrix();
        meshDatacenter.setMatrixAt(idxData++, dummy.matrix);
      } else if (slot.type === 'spire' && idxSpire < group4Count) {
        dummy.position.set(slot.x, 36 * hScale, slot.z);
        dummy.scale.set(1, hScale, 1);
        dummy.updateMatrix();
        meshSpire.setMatrixAt(idxSpire++, dummy.matrix);
      }
    });

    for (let i = idxCorp; i < group1Count; i++) {
      dummy.position.set(0, -200, 0); dummy.scale.set(0, 0, 0); dummy.updateMatrix();
      meshCorporate.setMatrixAt(i, dummy.matrix);
    }
    for (let i = idxRes; i < group2Count; i++) {
      dummy.position.set(0, -200, 0); dummy.scale.set(0, 0, 0); dummy.updateMatrix();
      meshResidential.setMatrixAt(i, dummy.matrix);
    }
    for (let i = idxData; i < group3Count; i++) {
      dummy.position.set(0, -200, 0); dummy.scale.set(0, 0, 0); dummy.updateMatrix();
      meshDatacenter.setMatrixAt(i, dummy.matrix);
    }
    for (let i = idxSpire; i < group4Count; i++) {
      dummy.position.set(0, -200, 0); dummy.scale.set(0, 0, 0); dummy.updateMatrix();
      meshSpire.setMatrixAt(i, dummy.matrix);
    }

    meshCorporate.instanceMatrix.needsUpdate = true;
    meshResidential.instanceMatrix.needsUpdate = true;
    meshDatacenter.instanceMatrix.needsUpdate = true;
    meshSpire.instanceMatrix.needsUpdate = true;

    this.group.add(meshCorporate);
    this.group.add(meshResidential);
    this.group.add(meshDatacenter);
    this.group.add(meshSpire);
  }

  // 4. Perimeter city barrier
  buildPerimeterBarrier() {
    const barrierMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.6 });
    const wallGeoH = new THREE.BoxGeometry(300, 1.8, 0.4);
    const wallGeoV = new THREE.BoxGeometry(0.4, 1.8, 300);

    const wallN = new THREE.Mesh(wallGeoH, barrierMat); wallN.position.set(0, 0.9, -149);
    const wallS = new THREE.Mesh(wallGeoH, barrierMat); wallS.position.set(0, 0.9, 149);
    const wallW = new THREE.Mesh(wallGeoV, barrierMat); wallW.position.set(-149, 0.9, 0);
    const wallE = new THREE.Mesh(wallGeoV, barrierMat); wallE.position.set(149, 0.9, 0);

    this.group.add(wallN);
    this.group.add(wallS);
    this.group.add(wallW);
    this.group.add(wallE);
  }

  // Spatial Grid Chunking: Distance Culling > 140m
  update(delta, elapsedTime, playerPos) {
    if (!playerPos) return;
    const px = playerPos.x;
    const pz = playerPos.z;

    for (let i = 0; i < this.chunks.length; i++) {
      const c = this.chunks[i];
      const dx = px - c.x;
      const dz = pz - c.z;
      const distSq = dx * dx + dz * dz;

      // Distance culling: hide entire chunk hierarchy if further than 140m
      c.group.visible = (distSq <= this.cullDistanceSq);
    }
  }
}
