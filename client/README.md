# 🎮 CyberCity Client Architecture (Three.js WebGL)

This directory contains the entire frontend client for the **CyberCity 3D WebGL Portfolio & Grand Prix Web Game**.

---

## 🏛️ Architecture Breakdown

```
client/
├── audio/          # Web Audio API Synthesizers
├── data/           # Bilingual Localized Content
├── entities/       # Player & Remote Vehicle Physics
├── navigation/     # Autonomous GPS & Dijkstra Pathfinding
├── network/        # Throttled WebSocket Telemetry Client
├── ui/             # Glassmorphic HUD, Modals, Radar & Controls
└── world/          # Three.js 3D Environment, City Chunks & Props
```

---

## 1. Engine Core & Render Loop (`main.js` & `SceneManager.js`)

- **`SceneManager.js`**:
  - Initializes `THREE.WebGLRenderer` with `antialias: true`, `powerPreference: "high-performance"`, and `outputColorSpace = THREE.SRGBColorSpace`.
  - Configures the directional shadow light with a clamped `1024x1024` shadow map and an orthographic frustum of $70\text{m} \times 70\text{m}$.
  - Dynamically resizes the viewport on window resize with pixel ratio clamped to `2.0`.
- **`main.js`**:
  - Central application lifecycle manager.
  - Implements the main `requestAnimationFrame` render loop running at locked 60 FPS.
  - Uses static scratch variables (`_scratchActiveContext`) to ensure 0 per-frame heap allocations when querying proximity to corporate landmarks, monoliths, or waypoints.

---

## 2. Urban Metropolis & Culling (`CityWorld.js`)

- **$300\text{m} \times 300\text{m}$ World**: Seamless asphalt terrain spanning $x, z \in [-150, 150]$.
- **6x6 Spatial Grid**: Divided into thirty-six $50\text{m} \times 50\text{m}$ spatial chunks.
- **Distance Culling**: In `update(delta, elapsedTime, playerPos)`, any chunk beyond $140\text{m}$ (`distSq > 19600`) has `chunk.visible = false`, eliminating GPU rasterization and vertex processing.
- **Batched Skyscrapers**: 4 `THREE.InstancedMesh` groups render hundreds of corporate towers, spires, datacenters, and residential blocks in under 8 draw calls with `castShadow = false`.

---

## 3. Vehicle Physics & Drift Model (`Vehicle.js`)

- **Speed-Sensitive Dynamic Steering Ratio**:
  - Parking speeds: Full $33^\circ$ turning radius for agile navigation.
  - High speeds: Inversely dampens maximum steering angle:
    $$\theta_{\text{effective}} = \frac{\theta_{base}}{1.0 + 1.5 \cdot (|v| / v_{max})}$$
- **Lateral Grip & Drift Dynamics**:
  - Calculates longitudinal and lateral velocity vectors.
  - Normal lateral damping ($\mu = 16.0$) transitions into controlled drift slide ($\mu = 3.6$) when holding handbrake (`Spacebar` / touch brake) or when lateral G-force exceeds traction threshold.
- **Procedural Tire Skid Marks**:
  - Static pre-allocated `Float32Array` ring buffer geometry with direct scalar vertex indexing.
  - Skids and smoke only spawn when `Math.abs(lateralSlip) > 3.2` or during active handbraking at speed, bypassing buffer writes during normal forward driving.
- **Dynamic Suspension**:
  - Longitudinal pitch forward on braking and rearward on acceleration.
  - Outward centrifugal chassis roll synchronized with cornering speed.
- **Throttled Camera FOV**:
  - Only executes `camera.updateProjectionMatrix()` if `Math.abs(camera.fov - targetFov) > 0.15`, preventing continuous projection matrix recalculation.

---

## 4. Grand Prix City Circuit (`RaceTrack.js` & `LapTimer.js`)

- **12-Point Spline Circuit**: Catmull-Rom closed curve winding through North Avenue, Downtown Chicane, Outer Ring Expressway, Telecom Quarter, and Silicon Park.
- **Asphalt Road Deck**: 10m wide roadway with inward banking on high-speed sweepers, alternating red/white apex kerbs, and tire barrier stacks.
- **Start/Finish Gantry**: Located at `(0, 0.22, -68)` with 5-stage animated LED starting sequence.
- **Checkpoint Timing**: 6 sequential checkpoints with real-time sector splits and best lap persistence in `localStorage`.

---

## 5. Autonomous Navigation Autopilot (`Autopilot.js`)

- **Navigation Graph**: Interconnected nodes covering roundabout, avenues, highway ramps, and corporate landmark plazas.
- **Dijkstra Pathfinding**: Computes the shortest path between any vehicle position and any destination landmark.
- **Pure Pursuit Controller**: Computes target heading angle and dynamic throttle/braking profile for smooth self-driving.
- **Manual Override**: Instantly disengages autopilot whenever manual keyboard or touch input is detected.

---

## 6. Procedural Audio Synthesizer (`SoundEffects.js`)

- Built using the Web Audio API with zero external audio assets.
- Single long-lived engine oscillator whose frequency and gain are smoothly modulated via `setTargetAtTime()`.
- Throttled to ~30 Hz updates with idle muting to prevent audio-thread automation stacking.
- Pre-allocated static noise buffer for brake skid audio.

---

## 7. Bilingual Localization & RTL (`portfolioData.js`)

- Comprehensive data dictionary providing full English and Arabic translations for:
  - Project architecture descriptions, role summaries, highlights, and tech stacks.
  - District titles, satellite map badges, HUD telemetry, and control prompts.
  - Dynamic `dir="rtl"` layout switching with font pairings (Cairo / Tajawal).
