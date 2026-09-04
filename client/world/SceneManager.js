import * as THREE from 'three';

export class SceneManager {
  constructor(container) {
    this.container = container;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // 1. Scene & Atmosphere
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x040814);
    this.scene.fog = new THREE.FogExp2(0x050a18, 0.013);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 0.1, 400);
    this.camera.position.set(0, 10, 18);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15; // Calibrated for rich highlights without blowout

    this.container.appendChild(this.renderer.domElement);

    // 4. Lighting
    this.setupLights();

    // 5. Responsive Resizing
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  setupLights() {
    this.ambientLight = new THREE.AmbientLight(0x081022, 0.45);
    this.scene.add(this.ambientLight);

    // Hemisphere Light simulating sky dome reflection & ground bounce
    this.hemiLight = new THREE.HemisphereLight(0x1e1b4b, 0x020617, 0.5);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // Main Directional Sun / Moon Light
    this.dirLight = new THREE.DirectionalLight(0x60a5fa, 0.9);
    this.dirLight.position.set(-30, 48, -25);
    this.dirLight.castShadow = true;

    // Tight vehicle-centric shadow frustum translating with car
    const d = 35;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.camera.near = 5;
    this.dirLight.shadow.camera.far = 120;
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.bias = -0.0005;

    this.scene.add(this.dirLight);
  }

  onWindowResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
