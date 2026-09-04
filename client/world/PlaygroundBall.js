import * as THREE from 'three';

export class PlaygroundBall {
  constructor(scene) {
    this.scene = scene;
    this.radius = 0.95;
    this.position = new THREE.Vector3(4.0, this.radius, 4.0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.friction = 0.982; // Ground roll damping
    this.islandRadiusLimit = 21.0; // Contain within Central Innovation Plaza
    this.monolithPedestalRadius = 2.8;

    this.createBallModel();
    this.scene.add(this.mesh);
  }

  createBallModel() {
    const geo = new THREE.IcosahedronGeometry(this.radius, 1);

    // Dynamic dual-material cyber soccer ball
    const mat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.3,
      metalness: 0.7,
      flatShading: true
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.copy(this.position);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    // Glowing Wireframe Overlay
    const wireGeo = new THREE.IcosahedronGeometry(this.radius * 1.01, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    this.mesh.add(wire);
  }

  // Handle vehicle collision & impulse transfer
  checkVehicleCollision(vehicle, onKick) {
    const carPos = vehicle.position;
    const dx = this.position.x - carPos.x;
    const dz = this.position.z - carPos.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const carRadius = 1.35;
    const minDist = this.radius + carRadius;

    if (dist < minDist && dist > 0.001) {
      // Collision normal from car to ball
      const nx = dx / dist;
      const nz = dz / dist;

      // Push ball out of penetration
      const overlap = minDist - dist;
      this.position.x += nx * overlap;
      this.position.z += nz * overlap;

      // Transfer momentum based on vehicle speed & heading
      const carSpeed = Math.abs(vehicle.speed);
      const impulseStrength = Math.max(carSpeed * 1.4, 4.0);

      this.velocity.x = nx * impulseStrength;
      this.velocity.z = nz * impulseStrength;

      if (onKick) onKick(impulseStrength);
    }
  }

  update(delta) {
    if (delta > 0.1) delta = 0.1;

    // Apply velocity
    this.position.x += this.velocity.x * delta;
    this.position.z += this.velocity.z * delta;

    // Apply ground friction
    this.velocity.x *= this.friction;
    this.velocity.z *= this.friction;

    // Stop negligible movement
    if (this.velocity.lengthSq() < 0.001) {
      this.velocity.set(0, 0, 0);
    }

    // Island Perimeter Bounce
    const distFromCenter = Math.sqrt(this.position.x * this.position.x + this.position.z * this.position.z);
    if (distFromCenter > this.islandRadiusLimit) {
      const angle = Math.atan2(this.position.z, this.position.x);
      this.position.x = Math.cos(angle) * this.islandRadiusLimit;
      this.position.z = Math.sin(angle) * this.islandRadiusLimit;
      // Invert radial velocity with restitution
      this.velocity.x *= -0.7;
      this.velocity.z *= -0.7;
    }

    // Monolith Pedestal Bounce
    if (distFromCenter < this.monolithPedestalRadius) {
      const angle = Math.atan2(this.position.z, this.position.x);
      this.position.x = Math.cos(angle) * this.monolithPedestalRadius;
      this.position.z = Math.sin(angle) * this.monolithPedestalRadius;
      this.velocity.x *= -0.7;
      this.velocity.z *= -0.7;
    }

    // Update Three.js Mesh
    this.mesh.position.copy(this.position);

    // Realistic rolling rotation
    const speed = this.velocity.length();
    if (speed > 0.01) {
      this.mesh.rotation.x += (this.velocity.z * delta) / this.radius;
      this.mesh.rotation.z -= (this.velocity.x * delta) / this.radius;
    }
  }
}
