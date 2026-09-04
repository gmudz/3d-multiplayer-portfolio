import * as THREE from 'three';

export class RemotePlayer {
  constructor(scene, playerData) {
    this.scene = scene;
    this.id = playerData.id;
    this.name = playerData.name || 'Pilot';
    this.color = playerData.color || '#ff3366';

    // Interpolation target state
    this.currentPosition = new THREE.Vector3(playerData.x || 0, playerData.y || 0.35, playerData.z || -3.5);
    this.targetPosition = new THREE.Vector3(playerData.x || 0, playerData.y || 0.35, playerData.z || -3.5);
    this.currentRotationY = playerData.rotY || 0;
    this.targetRotationY = playerData.rotY || 0;
    this.speed = 0;
    this.steer = 0;

    // Build model
    this.createCarModel();

    // Nametag badge above car
    this.createNameTag();

    this.scene.add(this.meshGroup);
  }

  createCarModel() {
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.copy(this.currentPosition);
    this.meshGroup.rotation.y = this.currentRotationY;

    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.color),
      roughness: 0.25,
      metalness: 0.8,
      flatShading: true
    });

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.4,
      metalness: 0.6,
      flatShading: true
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.75
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      roughness: 0.9,
      flatShading: true
    });

    // 1. Lower Chassis
    const chassisGeo = new THREE.BoxGeometry(1.4, 0.4, 2.8);
    const chassis = new THREE.Mesh(chassisGeo, bodyMat);
    chassis.position.y = 0.25;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    this.meshGroup.add(chassis);

    // 2. Hood Slope
    const hoodGeo = new THREE.BoxGeometry(1.36, 0.18, 1.0);
    const hood = new THREE.Mesh(hoodGeo, darkMat);
    hood.position.set(0, 0.38, 0.8);
    hood.rotation.x = 0.12;
    this.meshGroup.add(hood);

    // 3. Cockpit Glass
    const cabinGeo = new THREE.BoxGeometry(1.1, 0.45, 1.3);
    const cabin = new THREE.Mesh(cabinGeo, glassMat);
    cabin.position.set(0, 0.62, -0.2);
    this.meshGroup.add(cabin);

    // 4. Rear Spoiler
    const wingGeo = new THREE.BoxGeometry(1.5, 0.08, 0.35);
    const wing = new THREE.Mesh(wingGeo, darkMat);
    wing.position.set(0, 0.85, -1.35);
    this.meshGroup.add(wing);

    // 5. Headlights & Taillights
    const headlightGeo = new THREE.BoxGeometry(0.3, 0.12, 0.08);
    const headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const hlL = new THREE.Mesh(headlightGeo, headlightMat);
    hlL.position.set(-0.45, 0.28, 1.41);
    const hlR = new THREE.Mesh(headlightGeo, headlightMat);
    hlR.position.set(0.45, 0.28, 1.41);
    this.meshGroup.add(hlL);
    this.meshGroup.add(hlR);

    const taillightGeo = new THREE.BoxGeometry(1.2, 0.1, 0.08);
    const taillightMat = new THREE.MeshBasicMaterial({ color: 0xff2222 });
    const tl = new THREE.Mesh(taillightGeo, taillightMat);
    tl.position.set(0, 0.32, -1.41);
    this.meshGroup.add(tl);

    // 6. Wheels
    this.wheels = [];
    this.frontWheelMounts = [];
    const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.24, 12);
    wheelGeo.rotateZ(Math.PI / 2);

    const wheelRimGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.25, 12);
    wheelRimGeo.rotateZ(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.color),
      roughness: 0.3,
      metalness: 0.9
    });

    const wheelPositions = [
      { x: -0.75, y: 0.18, z: 0.9, front: true },
      { x: 0.75, y: 0.18, z: 0.9, front: true },
      { x: -0.75, y: 0.18, z: -0.9, front: false },
      { x: 0.75, y: 0.18, z: -0.9, front: false }
    ];

    wheelPositions.forEach((wp) => {
      const mount = new THREE.Group();
      mount.position.set(wp.x, wp.y, wp.z);

      const wheelMesh = new THREE.Mesh(wheelGeo, tireMat);
      wheelMesh.castShadow = true;

      const rim = new THREE.Mesh(wheelRimGeo, rimMat);
      wheelMesh.add(rim);

      mount.add(wheelMesh);
      this.meshGroup.add(mount);

      this.wheels.push(wheelMesh);
      if (wp.front) this.frontWheelMounts.push(mount);
    });
  }

  createNameTag() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(8, 8, 240, 48, 24);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px system-ui, "Cairo", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.name, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false
    });
    this.nameTagSprite = new THREE.Sprite(spriteMat);
    this.nameTagSprite.position.set(0, 1.8, 0);
    this.nameTagSprite.scale.set(2.4, 0.6, 1.0);
    this.meshGroup.add(this.nameTagSprite);
  }

  setNetworkState(data) {
    if (typeof data.x === 'number' && typeof data.z === 'number') {
      this.targetPosition.set(data.x, typeof data.y === 'number' ? data.y : 0.35, data.z);
    }
    if (typeof data.rotY === 'number') {
      this.targetRotationY = data.rotY;
    }
    if (typeof data.speed === 'number') {
      this.speed = data.speed;
    }
    if (typeof data.steer === 'number') {
      this.steer = data.steer;
    }
  }

  update(delta) {
    if (delta > 0.1) delta = 0.1;

    // Smooth position lerp
    const posLerp = Math.min(14.0 * delta, 1.0);
    this.currentPosition.lerp(this.targetPosition, posLerp);
    this.meshGroup.position.copy(this.currentPosition);

    // Smooth shortest-path yaw rotation slerp
    let diff = this.targetRotationY - this.currentRotationY;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    this.currentRotationY += diff * Math.min(12.0 * delta, 1.0);
    this.meshGroup.rotation.y = this.currentRotationY;

    // Wheel spin
    const spin = (this.speed * delta) / 0.32;
    this.wheels.forEach((w) => {
      w.rotation.x += spin;
    });

    // Front wheel steer (FIXED: inverted to match steering direction)
    this.frontWheelMounts.forEach((m) => {
      m.rotation.y = -this.steer;
    });
  }

  destroy() {
    this.scene.remove(this.meshGroup);
  }
}
