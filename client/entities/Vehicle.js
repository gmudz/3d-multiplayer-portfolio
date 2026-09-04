import * as THREE from 'three';

// Static reusable scratch variables for zero-GC updates
const _scratchLeftTire = new THREE.Vector3();
const _scratchRightTire = new THREE.Vector3();
const _scratchLookTarget = new THREE.Vector3();
const _scratchDriftData = { isDrifting: false, score: 0, multiplier: 1.0 };

// Procedural Tire Skid Marks System using single pre-allocated Float32Array ring buffer
class TireSkidSystem {
  constructor(scene) {
    this.scene = scene;
    this.maxSegments = 160; // 80 segments per rear wheel
    this.segmentIndex = 0;
    this.activeSegmentsCount = 0;

    const totalVertices = this.maxSegments * 6;
    this.positions = new Float32Array(totalVertices * 3);
    this.colors = new Float32Array(totalVertices * 4); // RGBA

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 4));

    this.material = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1.0,
      polygonOffsetUnits: -4.0,
      side: THREE.DoubleSide
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.frustumCulled = false;
    this.scene.add(this.mesh);

    this.lastLeft = new THREE.Vector3();
    this.lastRight = new THREE.Vector3();
    this.hasLast = false;
  }

  addSkid(leftPos, rightPos, opacity = 0.65) {
    if (this.hasLast) {
      const dL = leftPos.distanceTo(this.lastLeft);
      if (dL > 0.35 && dL < 4.0) {
        this.writeQuad(this.lastLeft, leftPos, 0.22, opacity);
        this.writeQuad(this.lastRight, rightPos, 0.22, opacity);
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.color.needsUpdate = true;
        this.activeSegmentsCount = Math.min(this.maxSegments, this.activeSegmentsCount + 2);
      }
    }
    this.lastLeft.copy(leftPos);
    this.lastRight.copy(rightPos);
    this.hasLast = true;
  }

  resetLastPoints() {
    this.hasLast = false;
  }

  writeQuad(p1, p2, width, opacity) {
    let dx = p2.x - p1.x;
    let dz = p2.z - p1.z;
    const len = Math.hypot(dx, dz);
    if (len < 0.0001) return;
    dx /= len;
    dz /= len;

    const halfW = width * 0.5;
    const nx = -dz * halfW;
    const nz = dx * halfW;

    const v0x = p1.x - nx, v0z = p1.z - nz;
    const v1x = p1.x + nx, v1z = p1.z + nz;
    const v2x = p2.x - nx, v2z = p2.z - nz;
    const v3x = p2.x + nx, v3z = p2.z + nz;

    const offset = this.segmentIndex * 18;
    const cOffset = this.segmentIndex * 24;
    const pos = this.positions;

    pos[offset] = v0x; pos[offset + 1] = 0.035; pos[offset + 2] = v0z;
    pos[offset + 3] = v1x; pos[offset + 4] = 0.035; pos[offset + 5] = v1z;
    pos[offset + 6] = v2x; pos[offset + 7] = 0.035; pos[offset + 8] = v2z;

    pos[offset + 9] = v2x; pos[offset + 10] = 0.035; pos[offset + 11] = v2z;
    pos[offset + 12] = v1x; pos[offset + 13] = 0.035; pos[offset + 14] = v1z;
    pos[offset + 15] = v3x; pos[offset + 16] = 0.035; pos[offset + 17] = v3z;

    const col = this.colors;
    for (let i = 0; i < 6; i++) {
      const ci = cOffset + i * 4;
      col[ci] = 0.08; col[ci + 1] = 0.09; col[ci + 2] = 0.12; col[ci + 3] = opacity;
    }

    this.segmentIndex = (this.segmentIndex + 1) % this.maxSegments;
  }

  update(delta) {
    // Early exit if no active segments exist to prevent redundant array loops & GPU attribute updates
    if (this.activeSegmentsCount <= 0) return;

    const totalVertices = this.maxSegments * 6;
    let needsUpdate = false;
    let remaining = 0;
    for (let i = 0; i < totalVertices; i++) {
      const cIdx = i * 4 + 3;
      if (this.colors[cIdx] > 0.005) {
        this.colors[cIdx] = Math.max(0, this.colors[cIdx] - 0.14 * delta);
        needsUpdate = true;
        remaining++;
      }
    }
    if (remaining === 0) {
      this.activeSegmentsCount = 0;
    }
    if (needsUpdate) {
      this.geometry.attributes.color.needsUpdate = true;
    }
  }
}

// Low-poly Dynamic Tire Smoke System using clamped 30-particle InstancedMesh pool
class TireSmokeSystem {
  constructor(scene) {
    this.scene = scene;
    this.maxParticles = 30;
    this.particles = [];
    this.activeCount = 0;

    const puffGeo = new THREE.DodecahedronGeometry(0.24, 0);
    const puffMat = new THREE.MeshBasicMaterial({
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.32,
      depthWrite: false
    });

    this.instancedMesh = new THREE.InstancedMesh(puffGeo, puffMat, this.maxParticles);
    this.instancedMesh.frustumCulled = false;
    this.dummy = new THREE.Object3D();
    this.scene.add(this.instancedMesh);

    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: 0, y: -50, z: 0,
        vx: 0, vy: 0, vz: 0,
        scale: 0.1,
        life: 0,
        maxLife: 1.0,
        active: false
      });
      this.dummy.position.set(0, -50, 0);
      this.dummy.scale.set(0.001, 0.001, 0.001);
      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.instancedMesh.instanceMatrix.needsUpdate = true;
    this.poolIndex = 0;
  }

  emit(pos, velocity) {
    const p = this.particles[this.poolIndex];
    if (!p.active) {
      this.activeCount++;
    }
    p.active = true;
    p.x = pos.x + (Math.random() - 0.5) * 0.25;
    p.y = Math.max(pos.y, 0.18);
    p.z = pos.z + (Math.random() - 0.5) * 0.25;

    p.vx = velocity.x * 0.2 + (Math.random() - 0.5) * 0.9;
    p.vy = 0.8 + Math.random() * 0.9;
    p.vz = velocity.z * 0.2 + (Math.random() - 0.5) * 0.9;

    p.scale = 0.28 + Math.random() * 0.2;
    p.life = 0.6 + Math.random() * 0.4;
    p.maxLife = p.life;

    this.poolIndex = (this.poolIndex + 1) % this.maxParticles;
  }

  update(delta) {
    // Early exit if 0 particles are active
    if (this.activeCount <= 0) return;

    let hasActive = false;
    let currentActive = 0;
    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.particles[i];
      if (!p.active) continue;

      p.life -= delta;
      if (p.life <= 0) {
        p.active = false;
        this.dummy.position.set(0, -50, 0);
        this.dummy.scale.set(0.001, 0.001, 0.001);
        this.dummy.updateMatrix();
        this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
        hasActive = true;
        continue;
      }

      currentActive++;
      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.z += p.vz * delta;

      p.scale += 2.2 * delta;
      const progress = 1.0 - (p.life / p.maxLife);
      const currentScale = p.scale * (1.0 - progress * 0.25);

      this.dummy.position.set(p.x, p.y, p.z);
      this.dummy.scale.set(currentScale, currentScale, currentScale);
      this.dummy.updateMatrix();
      this.instancedMesh.setMatrixAt(i, this.dummy.matrix);
      hasActive = true;
    }

    this.activeCount = currentActive;

    if (hasActive) {
      this.instancedMesh.instanceMatrix.needsUpdate = true;
    }
  }
}

export class Vehicle {
  constructor(scene, options = {}) {
    this.scene = scene;
    this.color = options.color || 0x00f0ff;
    this.emissive = options.emissive || 0x003344;
    this.name = options.name || 'Pilot-1';

    // Physics parameters
    this.position = new THREE.Vector3(options.x || 0, options.y || 0.35, options.z || -3.5);
    this.prevPosition = this.position.clone();
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.rotationY = options.rotY || 0;
    this.speed = 0;
    this.lateralSpeed = 0;
    this.maxSpeed = 22.0;          // Raised for high-speed Grand Prix racing
    this.maxReverseSpeed = -8.5;
    this.acceleration = 24.0;
    this.reverseAccel = 14.0;
    this.brakeDecel = 34.0;
    this.friction = 5.2;

    // Steering parameters (Dynamic Speed-Sensitive Steering)
    this.steerAngle = 0;
    this.targetSteerAngle = 0;
    this.baseMaxSteerAngle = 0.58;  // ~33 degrees at parking speed
    this.turnSpeedFactor = 2.1;

    // Lateral Grip & Drift System
    this.isDrifting = false;
    this.driftScore = 0;
    this.driftMultiplier = 1.0;

    // Suspension tilt & roll
    this.bodyRoll = 0;
    this.bodyPitch = 0;

    // Inputs
    this.inputs = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      brake: false,
      touchSteer: 0,
      touchThrottle: 0
    };

    // Autopilot input & manual override hook
    this.autopilotInput = null;
    this.onManualInput = null;

    // Race Track reference for boundary validation
    this.raceTrack = null;

    // Build vehicle 3D model
    this.createCarModel();

    // Attach to scene
    this.scene.add(this.meshGroup);

    // Setup Skid Marks & Smoke Particle Systems
    this.skidSystem = new TireSkidSystem(this.scene);
    this.smokeSystem = new TireSmokeSystem(this.scene);

    // Setup desktop keyboard listeners
    this.setupKeyboard();
  }

  setRaceTrack(track) {
    this.raceTrack = track;
  }

  createCarModel() {
    this.meshGroup = new THREE.Group();
    this.meshGroup.position.copy(this.position);
    this.meshGroup.rotation.y = this.rotationY;

    // Nested body container for suspension pitch and centrifugal roll
    this.bodyContainer = new THREE.Group();
    this.meshGroup.add(this.bodyContainer);

    // Dynamic Materials
    this.bodyMat = new THREE.MeshStandardMaterial({
      color: this.color,
      roughness: 0.25,
      metalness: 0.85,
      emissive: this.emissive,
      emissiveIntensity: 0.25
    });

    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.6
    });

    // Dark tinted futuristic canopy
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x050b14,
      roughness: 0.1,
      metalness: 0.95,
      transparent: true,
      opacity: 0.92
    });

    this.rimMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.2
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.8,
      metalness: 0.1
    });

    // 1. Lower Main Chassis
    const chassisGeo = new THREE.BoxGeometry(1.4, 0.4, 2.8);
    const chassis = new THREE.Mesh(chassisGeo, this.bodyMat);
    chassis.position.y = 0.35;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    this.bodyContainer.add(chassis);

    // 2. Aerodynamic Front Hood & Splitter
    const hoodGeo = new THREE.BoxGeometry(1.36, 0.18, 1.0);
    const hood = new THREE.Mesh(hoodGeo, darkAccentMat);
    hood.position.set(0, 0.38, 0.9);
    hood.castShadow = true;
    this.bodyContainer.add(hood);

    // 3. Cockpit Cabin
    const cabinGeo = new THREE.BoxGeometry(1.1, 0.45, 1.3);
    const cabin = new THREE.Mesh(cabinGeo, glassMat);
    cabin.position.set(0, 0.68, -0.1);
    cabin.castShadow = true;
    this.bodyContainer.add(cabin);

    // 4. Rear High-Downforce Spoiler
    const wingGeo = new THREE.BoxGeometry(1.5, 0.08, 0.35);
    const wing = new THREE.Mesh(wingGeo, darkAccentMat);
    wing.position.set(0, 0.85, -1.25);
    wing.castShadow = true;
    this.bodyContainer.add(wing);

    const strutGeo = new THREE.BoxGeometry(0.06, 0.35, 0.08);
    const strutL = new THREE.Mesh(strutGeo, darkAccentMat);
    strutL.position.set(-0.5, 0.68, -1.25);
    const strutR = new THREE.Mesh(strutGeo, darkAccentMat);
    strutR.position.set(0.5, 0.68, -1.25);
    this.bodyContainer.add(strutL);
    this.bodyContainer.add(strutR);

    // 5. LED Headlights & SpotLight
    const lightGeo = new THREE.BoxGeometry(0.3, 0.12, 0.08);
    this.headlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const headlightL = new THREE.Mesh(lightGeo, this.headlightMat);
    headlightL.position.set(-0.52, 0.38, 1.4);
    const headlightR = new THREE.Mesh(lightGeo, this.headlightMat);
    headlightR.position.set(0.52, 0.38, 1.4);
    this.bodyContainer.add(headlightL);
    this.bodyContainer.add(headlightR);

    // Focused Headlight Cone projecting on road ahead
    this.headlightSpot = new THREE.SpotLight(0xffffff, 0.0, 24, Math.PI / 5, 0.4);
    this.headlightSpot.position.set(0, 0.45, 1.4);
    this.headlightTarget = new THREE.Object3D();
    this.headlightTarget.position.set(0, 0, 16);
    this.meshGroup.add(this.headlightSpot);
    this.meshGroup.add(this.headlightTarget);
    this.headlightSpot.target = this.headlightTarget;

    // 6. Dynamic LED Taillight Bar
    this.taillightMat = new THREE.MeshBasicMaterial({ color: 0x990000 });
    const taillightGeo = new THREE.BoxGeometry(1.2, 0.1, 0.08);
    this.taillight = new THREE.Mesh(taillightGeo, this.taillightMat);
    this.taillight.position.set(0, 0.42, -1.41);
    this.bodyContainer.add(this.taillight);

    // 7. Wheels & Mounts
    this.wheels = [];
    this.frontWheelGroups = [];
    this.rearWheelGroups = [];

    const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.24, 12);
    wheelGeo.rotateZ(Math.PI / 2);

    const wheelRimGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.25, 12);
    wheelRimGeo.rotateZ(Math.PI / 2);

    const wheelPositions = [
      { x: -0.75, y: 0.26, z: 0.85, isFront: true },
      { x: 0.75, y: 0.26, z: 0.85, isFront: true },
      { x: -0.75, y: 0.26, z: -0.9, isFront: false },
      { x: 0.75, y: 0.26, z: -0.9, isFront: false }
    ];

    wheelPositions.forEach((wp) => {
      const wheelMount = new THREE.Group();
      wheelMount.position.set(wp.x, wp.y, wp.z);

      const wheelMesh = new THREE.Mesh(wheelGeo, tireMat);
      wheelMesh.castShadow = true;

      const rimMesh = new THREE.Mesh(wheelRimGeo, this.rimMat);
      wheelMesh.add(rimMesh);

      wheelMount.add(wheelMesh);
      this.meshGroup.add(wheelMount);

      this.wheels.push(wheelMesh);
      if (wp.isFront) {
        this.frontWheelGroups.push(wheelMount);
      } else {
        this.rearWheelGroups.push(wheelMount);
      }
    });
  }

  setColor(hex) {
    this.color = hex;
    if (this.bodyMat) {
      this.bodyMat.color.setHex(hex);
    }
  }

  setHeadlights(active, intensity = 2.4, color = 0xffffff) {
    if (this.headlightSpot) {
      this.headlightSpot.intensity = intensity;
      this.headlightSpot.color.set(color);
    }
    if (this.headlightMat) {
      this.headlightMat.color.set(intensity > 0.5 ? 0xffffff : 0x888888);
    }
  }

  setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (['ArrowUp', 'KeyW', 'ArrowDown', 'KeyS', 'ArrowLeft', 'KeyA', 'ArrowRight', 'KeyD', 'Space'].includes(e.code)) {
        if (this.onManualInput) this.onManualInput();
      }
      if (['ArrowUp', 'KeyW'].includes(e.code)) this.inputs.forward = true;
      if (['ArrowDown', 'KeyS'].includes(e.code)) this.inputs.backward = true;
      if (['ArrowLeft', 'KeyA'].includes(e.code)) this.inputs.left = true;
      if (['ArrowRight', 'KeyD'].includes(e.code)) this.inputs.right = true;
      if (['Space'].includes(e.code)) this.inputs.brake = true;
    });

    window.addEventListener('keyup', (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) this.inputs.forward = false;
      if (['ArrowDown', 'KeyS'].includes(e.code)) this.inputs.backward = false;
      if (['ArrowLeft', 'KeyA'].includes(e.code)) this.inputs.left = false;
      if (['ArrowRight', 'KeyD'].includes(e.code)) this.inputs.right = false;
      if (['Space'].includes(e.code)) this.inputs.brake = false;
    });
  }

  setTouchInput(touch) {
    if (Math.abs(touch.steer || 0) > 0.05 || Math.abs(touch.throttle || 0) > 0.05 || touch.brake) {
      if (this.onManualInput) this.onManualInput();
    }
    this.inputs.touchSteer = touch.steer || 0;
    this.inputs.touchThrottle = touch.throttle || 0;
    this.inputs.brake = touch.brake || false;
  }

  setAutopilotInput(input) {
    this.autopilotInput = input;
  }

  update(delta) {
    if (delta > 0.1) delta = 0.1;

    // 1. Steering Input with Speed-Sensitive Dynamic Steering Ratio
    let steerInput = 0;
    if (this.inputs.left) steerInput -= 1;
    if (this.inputs.right) steerInput += 1;
    if (Math.abs(this.inputs.touchSteer) > 0.05) {
      steerInput = this.inputs.touchSteer;
    }

    // 2. Throttle Input
    let throttleInput = 0;
    if (this.inputs.forward) throttleInput += 1;
    if (this.inputs.backward) throttleInput -= 1;
    if (Math.abs(this.inputs.touchThrottle) > 0.05) {
      throttleInput = this.inputs.touchThrottle;
    }

    let isBraking = this.inputs.brake;

    // Autopilot Override (Active only when no manual inputs are suppressing it)
    if (this.autopilotInput && this.autopilotInput.active) {
      steerInput = this.autopilotInput.steer;
      throttleInput = this.autopilotInput.throttle;
      isBraking = this.autopilotInput.brake;
    }

    // Dynamic Steering Ratio: scales max steering angle down at high speed
    const speedRatio = Math.abs(this.speed) / this.maxSpeed;
    const effectiveMaxSteer = this.baseMaxSteerAngle / (1.0 + speedRatio * 1.5);
    this.targetSteerAngle = steerInput * effectiveMaxSteer;
    const dynamicSteerLerp = THREE.MathUtils.lerp(14.0, 8.5, speedRatio);
    this.steerAngle += (this.targetSteerAngle - this.steerAngle) * Math.min(dynamicSteerLerp * delta, 1.0);

    // 3. Longitudinal Acceleration & Speed Physics
    if (isBraking) {
      const brakeStep = this.brakeDecel * delta;
      if (this.speed > 0) {
        this.speed = Math.max(0, this.speed - brakeStep);
      } else if (this.speed < 0) {
        this.speed = Math.min(0, this.speed + brakeStep);
      }
      this.taillightMat.color.setHex(0xff1100);
    } else if (throttleInput > 0) {
      this.speed = Math.min(this.maxSpeed, this.speed + this.acceleration * throttleInput * delta);
      this.taillightMat.color.setHex(0x660000);
    } else if (throttleInput < 0) {
      this.speed = Math.max(this.maxReverseSpeed, this.speed + this.reverseAccel * throttleInput * delta);
      this.taillightMat.color.setHex(0xffffff);
    } else {
      const frictionStep = this.friction * delta;
      if (this.speed > 0) {
        this.speed = Math.max(0, this.speed - frictionStep);
      } else if (this.speed < 0) {
        this.speed = Math.min(0, this.speed + frictionStep);
      }
      this.taillightMat.color.setHex(0x660000);
    }

    // 4. Lateral Grip, Slip & Drift System
    const isHandbraking = isBraking && (Math.abs(this.speed) > 0.05);
    const lateralG = Math.abs(this.speed * this.steerAngle * this.turnSpeedFactor);
    const exceedsGrip = lateralG > 8.0 && Math.abs(this.steerAngle) > 0.16;

    this.isDrifting = isHandbraking || (exceedsGrip && Math.abs(this.speed) > 6.0);

    // Vehicle Turning Dynamics (Yaw)
    if (Math.abs(this.speed) > 0.05) {
      const speedFactor = this.speed / this.maxSpeed;
      let turnAmount = this.steerAngle * speedFactor * this.turnSpeedFactor * delta;

      // During drift: rear swings outward with drift slip yaw boost
      if (this.isDrifting) {
        const driftYawBoost = this.steerAngle * (Math.abs(this.speed) / this.maxSpeed) * 1.5 * delta;
        turnAmount += driftYawBoost;
      }
      this.rotationY -= turnAmount;
    }

    // Lateral slip velocity
    const targetLateralSpeed = this.isDrifting ? -this.steerAngle * Math.abs(this.speed) * 0.72 : 0;
    const lateralDamping = this.isDrifting ? 3.6 : 16.0;
    this.lateralSpeed += (targetLateralSpeed - this.lateralSpeed) * Math.min(lateralDamping * delta, 1.0);

    // Drift Scoring
    if (this.isDrifting && Math.abs(this.lateralSpeed) > 1.2 && Math.abs(this.speed) > 5.0) {
      this.driftScore += Math.round(Math.abs(this.lateralSpeed) * 80 * delta * this.driftMultiplier);
      this.driftMultiplier = Math.min(4.0, this.driftMultiplier + delta * 0.5);
    } else {
      this.driftMultiplier = Math.max(1.0, this.driftMultiplier - delta * 1.5);
    }

    // Save previous position before moving
    this.prevPosition.copy(this.position);

    // 5. Velocity and Heading Update (Zero-GC scalar math)
    const forwardX = Math.sin(this.rotationY);
    const forwardZ = Math.cos(this.rotationY);

    const rightX = Math.cos(this.rotationY);
    const rightZ = -Math.sin(this.rotationY);

    this.velocity.x = forwardX * this.speed + rightX * this.lateralSpeed;
    this.velocity.z = forwardZ * this.speed + rightZ * this.lateralSpeed;

    this.position.x += this.velocity.x * delta;
    this.position.z += this.velocity.z * delta;

    // 6. City Perimeter Boundary Validation
    this.checkCityBoundaries();

    // Update Three.js Mesh Transform
    this.meshGroup.position.copy(this.position);
    this.meshGroup.rotation.y = this.rotationY;

    // 7. Dynamic Suspension Tilt & Weight Transfer (Centrifugal Roll & Acceleration Pitch)
    const centrifugalG = (this.speed * this.steerAngle * 0.16) + (this.lateralSpeed * 0.10);
    const targetRoll = -centrifugalG;
    const targetPitch = (throttleInput > 0 ? -0.07 : isBraking ? 0.14 : 0) * (Math.abs(this.speed) / this.maxSpeed);

    this.bodyRoll += (targetRoll - this.bodyRoll) * 9.0 * delta;
    this.bodyPitch += (targetPitch - this.bodyPitch) * 9.0 * delta;
    this.bodyContainer.rotation.z = this.bodyRoll;
    this.bodyContainer.rotation.x = this.bodyPitch;

    // 8. Wheels Animation
    this.frontWheelGroups.forEach((mount) => {
      mount.rotation.y = -this.steerAngle;
    });

    const spinAmount = (this.speed * delta) / 0.32;
    this.wheels.forEach((wheel) => {
      wheel.rotation.x += spinAmount;
    });

    // 9. Strict Skid & Smoke Spawn Conditions:
    // Emit skids/smoke ONLY when lateral slip exceeds threshold or active handbraking at speed
    const lateralSlip = this.lateralSpeed;
    const slipThreshold = 3.2;
    const shouldSkid = (Math.abs(lateralSlip) > slipThreshold) || (isHandbraking && Math.abs(this.speed) > 0.05);
    this.updateFX(delta, shouldSkid);
  }

  updateFX(delta, shouldSkid) {
    // Update existing skid fading & smoke particles
    if (this.skidSystem) this.skidSystem.update(delta);
    if (this.smokeSystem) this.smokeSystem.update(delta);

    if (shouldSkid && this.rearWheelGroups.length >= 2) {
      this.meshGroup.updateMatrixWorld();
      _scratchLeftTire.set(-0.75, 0.02, -0.9).applyMatrix4(this.meshGroup.matrixWorld);
      _scratchRightTire.set(0.75, 0.02, -0.9).applyMatrix4(this.meshGroup.matrixWorld);

      if (this.skidSystem) {
        this.skidSystem.addSkid(_scratchLeftTire, _scratchRightTire, 0.65);
      }

      if (this.smokeSystem) {
        this.smokeSystem.emit(_scratchLeftTire, this.velocity);
        this.smokeSystem.emit(_scratchRightTire, this.velocity);
      }
    } else {
      if (this.skidSystem) {
        this.skidSystem.resetLastPoints();
      }
    }
  }

  // Continuous Urban Cyber City Perimeter Collision Checker
  checkCityBoundaries() {
    const x = this.position.x;
    const z = this.position.z;
    const limit = 146.0;

    let collided = false;
    if (x < -limit) {
      this.position.x = -limit;
      collided = true;
    } else if (x > limit) {
      this.position.x = limit;
      collided = true;
    }

    if (z < -limit) {
      this.position.z = -limit;
      collided = true;
    } else if (z > limit) {
      this.position.z = limit;
      collided = true;
    }

    if (collided) {
      this.speed *= -0.3;
      this.velocity.set(0, 0, 0);
      this.lateralSpeed = 0;
    }
  }

  // Smooth Chase Camera Controller with Throttled Projection Matrix Updates
  updateCamera(camera, delta) {
    const carPos = this.position;
    const heading = this.rotationY;

    const camDistance = 7.5 + (Math.abs(this.speed) / this.maxSpeed) * 1.5;
    const camHeight = 3.8;

    const targetCamX = carPos.x - Math.sin(heading) * camDistance;
    const targetCamZ = carPos.z - Math.cos(heading) * camDistance;
    const targetCamY = carPos.y + camHeight;

    const lerpFactor = 1.0 - Math.exp(-6.0 * delta);
    camera.position.x += (targetCamX - camera.position.x) * lerpFactor;
    camera.position.y += (targetCamY - camera.position.y) * lerpFactor;
    camera.position.z += (targetCamZ - camera.position.z) * lerpFactor;

    const lookAheadDist = 3.5;
    _scratchLookTarget.set(
      carPos.x + Math.sin(heading) * lookAheadDist,
      carPos.y + 0.8,
      carPos.z + Math.cos(heading) * lookAheadDist
    );

    camera.lookAt(_scratchLookTarget);

    // Dynamic FOV scaling: only call updateProjectionMatrix() when delta exceeds threshold
    const targetFOV = 55 + (Math.abs(this.speed) / this.maxSpeed) * 8;
    if (Math.abs(camera.fov - targetFOV) > 0.15) {
      camera.fov += (targetFOV - camera.fov) * lerpFactor;
      camera.updateProjectionMatrix();
    }
  }

  getSpeedKmH() {
    return Math.round(Math.abs(this.speed) * 5.2);
  }

  getSpeedRatio() {
    return this.speed / this.maxSpeed;
  }

  getDriftData() {
    _scratchDriftData.isDrifting = this.isDrifting;
    _scratchDriftData.score = this.driftScore;
    _scratchDriftData.multiplier = this.driftMultiplier;
    return _scratchDriftData;
  }
}
