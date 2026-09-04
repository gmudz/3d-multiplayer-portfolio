# 🏙️ CyberCity: Murad Ashkar (@gmudz) // 3D Interactive WebGL Portfolio & Grand Prix Game

[![Three.js](https://img.shields.io/badge/Three.js-r173-black?style=flat&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-v20-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?style=flat&logo=socket.io&logoColor=white)](https://socket.io/)
[![WebGL](https://img.shields.io/badge/WebGL-60_FPS_Locked-00f0ff?style=flat&logo=webgl&logoColor=white)](https://get.webgl.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Bilingual](https://img.shields.io/badge/i18n-English_%2F_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-green)](https://github.com/gmudz)

An expansive, production-ready **3D Urban Cyber City Portfolio Web Game** engineered by **Murad Ashkar (@gmudz)**. Built with **Three.js** on the WebGL frontend and **Node.js + Express + Socket.io** for real-time multiplayer telemetry.

Visitors pilot a high-performance cyber sports car across a seamless **$300\text{m} \times 300\text{m}$** metropolis, explore corporate headquarters and technological foundries along multi-lane avenues, race on a high-speed downtown **Grand Prix Circuit** with realistic lateral drift dynamics, or engage the **Autonomous Autopilot** via tactical satellite radar.

---

## 🌟 Key Highlights

- **Seamless Urban Cyber City (`300m x 300m`)**: Zero void falls. Multi-lane Grand Avenues, a Central Innovation Roundabout, an elevated Outer Ring Expressway ($r = 105\text{m}$), and hundreds of batched skyscrapers rendering in $< 8$ draw calls.
- **Radical Zero-GC Graphics Optimization**: Completely eliminated runtime heap allocations (`new THREE.Vector3`, `new THREE.Color`, array allocations) in physics, animation, and network loops. Locked 60 FPS performance.
- **Vehicle-Centric 1024x1024 Shadow Box**: Dynamic directional sun/moon light tracks the player car in real-time with a tight $70\text{m} \times 70\text{m}$ orthographic frustum. Dynamic shadows are cast exclusively by the player vehicle and interactive soccer ball.
- **Advanced Vehicle Dynamics & Drift Physics**: Speed-sensitive dynamic steering ratio, lateral tire slip model, dynamic suspension roll and pitch, and pre-allocated ring-buffer tire skids.
- **Grand Prix City Street Circuit & Time-Trial**: 12-control-point spline circuit, Start/Finish Gantry arch with animated LED countdown lights, 6 sequential checkpoints, sector splits, and `localStorage` best lap record persistence.
- **Autonomous Navigation Autopilot**: Dijkstra shortest-path pathfinding along city avenues, expressways, and roundabout nodes with pure pursuit steering and instant manual override.
- **Tactical Satellite Radar Map**: Top-down holographic district map with screen-projected radar pins and current pilot telemetry blip.
- **100% Comprehensive Bilingual Arabic & English (RTL)**: Zero hardcoded English strings. Instant language toggling with typographic support via Google Fonts Cairo & Tajawal.
- **Real-Time Multiplayer**: Low-latency vehicle position interpolation powered by Socket.io at a fixed 25 Hz tick rate with spawn distribution and pilot customization.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### 1. Installation
```bash
git clone https://github.com/gmudz/3d-multiplayer-portfolio.git
cd 3d-multiplayer-portfolio
npm install
```

### 2. Development Mode (Concurrently runs Frontend + Backend)
```bash
npm run dev
```
- **Vite Client**: [http://localhost:5173](http://localhost:5173)
- **Socket.io Server**: [http://localhost:3001](http://localhost:3001)

### 3. Production Build & Start
```bash
# Compile and optimize client assets into /dist
npm run build

# Start Node.js production server serving static frontend & WebSockets
npm start
```

---

## 🏙️ Urban Districts & Corporate Landmarks

The metropolis is divided into functional enterprise sectors connected by Grand Avenues:

```
                          [ North Avenue ]
                        Financial District
                      (QTicket Global HQ)
                              |
     [ West Avenue ]          |          [ East Avenue ]
       Silicon Park      [ Central Plaza ]   Logistics Hub
  (Snapdragon Foundry)---[ Tech Monolith ]---(Laffeh Depot)
                              |
                              |
                        Telecom Quarter
                    (Call Center AI Spire)
                          [ South Avenue ]
```

### 1. Central Innovation Plaza (`(0, 0)`)
- **Central Tech Monolith**: Hovering crystalline obelisk highlighting engineering expertise across Mobile, Backend, AI, and Systems internals.
- **Cyber Soccer Playground**: Dynamic soccer ball with elastic impulse physics ($r \le 21\text{m}$). Ram the ball with your vehicle to shoot and bounce!

### 2. Financial District // QTicket Global HQ (`(0, 0, -52)`)
- **Architecture**: Multi-tier glass corporate skyscraper, rooftop helipad, and scrolling LED cyber stock ticker.
- **Platform**: **QTicket** ([qticket.net](https://qticket.net) | [`gmudz/Qticket`](https://github.com/gmudz/Qticket)) — Enterprise multi-tenant SaaS reservation platform, clean architecture with ASP.NET Core, tenant isolation, and cryptographic audit logging.

### 3. Logistics Hub // Laffeh Fulfillment Center (`(52, 0, 0)`)
- **Architecture**: Modern industrial distribution depot, 3 rollup loading bays, parked delivery van, and an autonomous dispatch quadcopter drone with rotating blades.
- **Platform**: **Laffeh Ecosystem** ([laffeh.live](https://laffeh.live) | [`gmudz/Laffeh`](https://github.com/gmudz/Laffeh)) — End-to-end multi-app food delivery network built in Flutter/Dart with sub-second real-time GPS telemetry.

### 4. Telecom Quarter // Ultimate Call Center AI Spire (`(0, 0, 52)`)
- **Architecture**: Telecommunications spire with high-frequency antenna rings, CRT telemetry station, and a 12-bar animated audio equalizer soundwave facade.
- **Platform**: **Ultimate Call Center Agent** ([`gmudz/UltimateCallCenterAgent`](https://github.com/gmudz/UltimateCallCenterAgent)) — Sub-300ms real-time AI sales copilot with multi-dialect Arabic speech recognition (ASR) and live regulatory compliance scoring.

### 5. Silicon Park // Snapdragon 732G & SedOS Tech Foundry (`(-52, 0, 0)`)
- **Architecture**: Industrial semiconductor cleanroom, high-voltage hazard markings, pulsing green coolant pipes, and a glowing silicon die.
- **Platform**: **Snapdragon 732G Kernel & SedOS** ([`gmudz/Snapdragon-732G-Linux-Kernel`](https://github.com/gmudz/Snapdragon-732G-Linux-Kernel)) — Mainline Linux 6.x kernel port, ARM64 Device Tree Source (DTS), Droidian GNU/Linux boot toolchain, and SedOS independent Linux distribution.

---

## 🏎️ Grand Prix City Street Circuit

- **Spline Circuit**: 12-control-point closed Catmull-Rom curve winding through North Avenue, Downtown Chicane, East Expressway ramp, South AI Quarter, Roundabout, and Silicon Park.
- **Start/Finish Gantry**: Located on North Avenue at `(0, 0.22, -68)` with checkered finish line decal and 5-stage animated LED starting lights.
- **F1 Timing Telemetry**:
  - 6 sequential checkpoints preventing track cutting.
  - Live lap timer, sector split differentials, and best lap persistence in `localStorage` (`gmudz_gp_best_lap`).
  - Dynamic drift score calculator with combo multiplier widget.

---

## ⚡ Zero-GC Engine Optimization & Performance

| Technique | Implementation | Benefit |
| :--- | :--- | :--- |
| **Static Scratch Math** | Pre-allocated `_scratchVec`, `_scratchMatrix`, `_scratchPacket`, `_scratchActiveContext` | Eliminates garbage collection frame drops |
| **Vehicle-Centric Shadows** | 1024x1024 shadow map, 70x70m orthographic box tracking vehicle position | Crisp shadows everywhere while rendering 90% fewer shadow casters |
| **6x6 Spatial Chunk Culling** | Thirty-six 50x50m chunks, distance culled if $> 140\text{m}$ | Minimal GPU rasterization overhead |
| **InstancedMesh Batching** | 4 skyscraper groups render hundreds of towers | Keeps scene draw calls under 20 total |
| **Ring Buffer Tire Skids** | Single static `Float32Array` ring buffer with direct index writing | Zero runtime geometry allocations |
| **Long-Lived Audio Nodes** | Single long-lived engine oscillator with throttled modulation | Zero Web Audio node leaks or parameter lockups |
| **Socket Throttling** | Strict 25 Hz (40ms) rate clamp with scalar math formatting | Eliminates socket flooding and string garbage |

---

## 🎮 Controls

### Desktop
| Action | Keybinding |
| :--- | :--- |
| **Drive / Reverse** | `W` / `S` or `↑` / `↓` Arrow keys |
| **Steer** | `A` / `D` or `←` / `→` Arrow keys *(wheels physically pivot)* |
| **Handbrake / Drift** | `Spacebar` |
| **Tactical Satellite Map** | `M` (press `ESC` or click destination to close) |
| **Interact / View Project** | `E` or `Enter` when parked near a landmark |
| **Lighting Mode Cycle** | Click `[ ☀️ Day / 🌅 Sunset / 🌙 Night ]` on top HUD |
| **Language Switcher** | Click `[ 🌐 العربية / English ]` on top HUD |

### Mobile & Touch Devices
- **Virtual Thumbstick**: Bottom-left screen area for smooth analog steering.
- **Touch Buttons**: Dedicated `GAS`, `REV`, and `BRAKE` buttons on bottom-right.
- **Responsive Navigation**: Full touch support for map selection, autopilot engagement, and project card exploration.

---

## 📁 Repository Structure

```
.
├── client/                     # WebGL Frontend Client
│   ├── audio/
│   │   └── SoundEffects.js     # Web Audio API zero-leak engine synthesizer
│   ├── data/
│   │   └── portfolioData.js    # 100% Comprehensive Bilingual Arabic/English Data
│   ├── entities/
│   │   ├── RemotePlayer.js     # Networked vehicle interpolation
│   │   └── Vehicle.js          # Advanced vehicle physics, drift & camera
│   ├── navigation/
│   │   └── Autopilot.js        # Dijkstra autonomous navigation graph
│   ├── network/
│   │   └── SocketClient.js     # 25 Hz throttled WebSocket telemetry client
│   ├── ui/
│   │   ├── HUD.js              # Speedometer, drift widget, lap timer & prompts
│   │   ├── MapOverlay.js       # Tactical 3D-to-2D satellite radar overlay
│   │   ├── ModalManager.js     # Glassmorphic bilingual project modal sheets
│   │   └── TouchControls.js    # Mobile virtual joystick & action buttons
│   ├── world/
│   │   ├── CityWorld.js        # 300x300m ground, avenues, roundabout, chunks
│   │   ├── EnvironmentManager.js # Day/Sunset/Night lighting & headlight manager
│   │   ├── ExpoPavilion.js     # 4 Corporate Landmark architectural facilities
│   │   ├── LapTimer.js         # 6-checkpoint Grand Prix time-trial engine
│   │   ├── PlaygroundBall.js   # Interactive cyber soccer playground
│   │   ├── RaceTrack.js        # 12-point spline circuit & start gantry
│   │   ├── SceneManager.js     # Three.js WebGLRenderer & 1024 shadow setup
│   │   ├── TechMonolith.js     # Hovering central skill monolith
│   │   └── WaypointManager.js  # Career milestone checkpoint arches
│   ├── index.html              # Single-page application root HTML
│   ├── main.js                 # Application entry point & render loop
│   └── style.css               # Cyberpunk glassmorphic styling & RTL layout
├── server/
│   ├── README.md               # Backend documentation
│   └── server.js               # Express static host & 25 Hz Socket.io tick loop
├── client/
│   └── README.md               # Client documentation
├── package.json
└── README.md
```

---

## 📬 Connect & Author

**Murad Ashkar (@gmudz)**
- **Portfolio Website**: [wmudz.me](https://wmudz.me)
- **GitHub**: [@gmudz](https://github.com/gmudz)
- **Email**: [mmuradashkar@gmail.com](mailto:mmuradashkar@gmail.com)
- **Location**: Istanbul, Türkiye

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
