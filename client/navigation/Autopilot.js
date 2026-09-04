// Autonomous Autopilot & Navigation Graph System for Urban Cyber City
// Murad Ashkar (@gmudz) Portfolio Game

export const NAV_NODES = {
  // Central Innovation Plaza
  hub_center: { id: 'hub_center', nameKey: 'destCentral', x: 0, z: 0, zone: 'hub', neighbors: ['plaza_n', 'plaza_e', 'plaza_s', 'plaza_w'] },
  plaza_n: { id: 'plaza_n', x: 0, z: -22, zone: 'plaza', neighbors: ['hub_center', 'plaza_e', 'plaza_w', 'n_ave_mid'] },
  plaza_e: { id: 'plaza_e', x: 22, z: 0, zone: 'plaza', neighbors: ['hub_center', 'plaza_n', 'plaza_s', 'e_ave_mid'] },
  plaza_s: { id: 'plaza_s', x: 0, z: 22, zone: 'plaza', neighbors: ['hub_center', 'plaza_e', 'plaza_w', 's_ave_mid'] },
  plaza_w: { id: 'plaza_w', x: -22, z: 0, zone: 'plaza', neighbors: ['hub_center', 'plaza_n', 'plaza_s', 'w_ave_mid'] },

  // North Avenue & Financial District (QTicket Global HQ)
  n_ave_mid: { id: 'n_ave_mid', x: 0, z: -38, zone: 'north_ave', neighbors: ['plaza_n', 'n_station'] },
  n_station: { id: 'n_station', nameKey: 'destNorth', projectId: 'qticket', x: 0, z: -52, zone: 'financial', neighbors: ['n_ave_mid', 'track_start', 'track_t1'] },
  track_start: { id: 'track_start', nameKey: 'destRaceTrack', x: 0, z: -68, zone: 'circuit', neighbors: ['n_station', 'n_hwy_ramp', 'track_t1', 'track_t11'] },
  n_hwy_ramp: { id: 'n_hwy_ramp', x: 0, z: -90, zone: 'north_ave', neighbors: ['track_start', 'hwy_n'] },
  hwy_n: { id: 'hwy_n', x: 0, z: -105, zone: 'highway', neighbors: ['n_hwy_ramp', 'hwy_ne', 'hwy_nw'] },

  // East Avenue & Logistics Hub (Laffeh Fulfillment Center)
  e_ave_mid: { id: 'e_ave_mid', x: 38, z: 0, zone: 'east_ave', neighbors: ['plaza_e', 'e_station'] },
  e_station: { id: 'e_station', nameKey: 'destEast', projectId: 'laffeh', x: 52, z: 0, zone: 'logistics', neighbors: ['e_ave_mid', 'e_hwy_ramp', 'track_t2'] },
  e_hwy_ramp: { id: 'e_hwy_ramp', x: 90, z: 0, zone: 'east_ave', neighbors: ['e_station', 'hwy_e'] },
  hwy_e: { id: 'hwy_e', x: 105, z: 0, zone: 'highway', neighbors: ['e_hwy_ramp', 'hwy_ne', 'hwy_se', 'track_t2'] },

  // South Avenue & Telecom Quarter (Call Center AI Spire)
  s_ave_mid: { id: 's_ave_mid', x: 0, z: 38, zone: 'south_ave', neighbors: ['plaza_s', 's_station'] },
  s_station: { id: 's_station', nameKey: 'destSouth', projectId: 'callcenter', x: 0, z: 52, zone: 'telecom', neighbors: ['s_ave_mid', 's_ave_outer'] },
  s_ave_outer: { id: 's_ave_outer', x: 0, z: 75, zone: 'south_ave', neighbors: ['s_station', 's_hwy_ramp', 'track_t5'] },
  s_hwy_ramp: { id: 's_hwy_ramp', x: 0, z: 90, zone: 'south_ave', neighbors: ['s_ave_outer', 'hwy_s'] },
  hwy_s: { id: 'hwy_s', x: 0, z: 105, zone: 'highway', neighbors: ['s_hwy_ramp', 'hwy_se', 'hwy_sw'] },

  // West Avenue & Silicon Park (Snapdragon & SedOS Foundry)
  w_ave_mid: { id: 'w_ave_mid', x: -38, z: 0, zone: 'west_ave', neighbors: ['plaza_w', 'w_station'] },
  w_station: { id: 'w_station', nameKey: 'destWest', projectId: 'kernel', x: -52, z: 0, zone: 'silicon', neighbors: ['w_ave_mid', 'w_hwy_ramp', 'track_t7'] },
  w_hwy_ramp: { id: 'w_hwy_ramp', x: -90, z: 0, zone: 'west_ave', neighbors: ['w_station', 'hwy_w'] },
  hwy_w: { id: 'hwy_w', x: -105, z: 0, zone: 'highway', neighbors: ['w_hwy_ramp', 'hwy_sw', 'hwy_nw', 'track_t8'] },

  // Outer Ring Expressway
  hwy_ne: { id: 'hwy_ne', x: 74, z: -74, zone: 'highway', neighbors: ['hwy_n', 'hwy_e'] },
  hwy_se: { id: 'hwy_se', x: 74, z: 74, zone: 'highway', neighbors: ['hwy_e', 'hwy_s', 'track_t4'] },
  hwy_sw: { id: 'hwy_sw', x: -74, z: 74, zone: 'highway', neighbors: ['hwy_s', 'hwy_w'] },
  hwy_nw: { id: 'hwy_nw', x: -74, z: -74, zone: 'highway', neighbors: ['hwy_w', 'hwy_n', 'track_t9'] },

  // Grand Prix Circuit Track Points
  track_t1: { id: 'track_t1', x: 45, z: -55, zone: 'circuit', neighbors: ['track_start', 'track_t2', 'n_station'] },
  track_t2: { id: 'track_t2', x: 105, z: -25, zone: 'circuit', neighbors: ['track_t1', 'track_t3', 'e_station', 'hwy_e'] },
  track_t3: { id: 'track_t3', x: 105, z: 45, zone: 'circuit', neighbors: ['track_t2', 'track_t4'] },
  track_t4: { id: 'track_t4', x: 75, z: 105, zone: 'circuit', neighbors: ['track_t3', 'track_t5', 'hwy_se', 'hwy_s'] },
  track_t5: { id: 'track_t5', x: 0, z: 75, zone: 'circuit', neighbors: ['track_t4', 'track_t6', 's_ave_outer'] },
  track_t6: { id: 'track_t6', x: 0, z: 24, zone: 'circuit', neighbors: ['track_t5', 'track_t7', 'plaza_s'] },
  track_t7: { id: 'track_t7', x: -50, z: 0, zone: 'circuit', neighbors: ['track_t6', 'track_t8', 'w_station'] },
  track_t8: { id: 'track_t8', x: -105, z: -25, zone: 'circuit', neighbors: ['track_t7', 'track_t9', 'hwy_w'] },
  track_t9: { id: 'track_t9', x: -75, z: -105, zone: 'circuit', neighbors: ['track_t8', 'track_t10', 'hwy_nw'] },
  track_t10: { id: 'track_t10', x: -25, z: -100, zone: 'circuit', neighbors: ['track_t9', 'track_t11'] },
  track_t11: { id: 'track_t11', x: 0, z: -85, zone: 'circuit', neighbors: ['track_t10', 'track_start'] }
};

export const DESTINATION_TARGET_MAP = {
  qticket: 'n_station',
  north: 'n_station',
  laffeh: 'e_station',
  east: 'e_station',
  callcenter: 's_station',
  south: 's_station',
  kernel: 'w_station',
  west: 'w_station',
  hub: 'hub_center',
  center: 'hub_center',
  racetrack: 'track_start',
  circuit: 'track_start',
  track: 'track_start',
  highway: 'hwy_n'
};

// Zero-GC static scratch object for autopilot input dispatch
const _scratchAutopilotInput = {
  steer: 0,
  throttle: 0,
  brake: false,
  active: false
};

export class Autopilot {
  constructor(vehicle, callbacks = {}) {
    this.vehicle = vehicle;
    this.callbacks = callbacks; // { onArrived, onDisengaged, onStateChange }

    this.active = false;
    this.targetDestination = null;
    this.targetNodeId = null;
    this.waypointPath = [];
    this.currentWaypointIndex = 0;

    // Attach manual override handler to vehicle
    this.vehicle.onManualInput = () => {
      if (this.active) {
        this.disengage('manual');
      }
    };
  }

  // Find shortest path between two nodes using Dijkstra's algorithm
  findPath(startNodeId, targetNodeId) {
    if (startNodeId === targetNodeId) {
      return [NAV_NODES[startNodeId]];
    }

    const distances = {};
    const previous = {};
    const unvisited = new Set(Object.keys(NAV_NODES));

    for (const id of Object.keys(NAV_NODES)) {
      distances[id] = Infinity;
    }
    distances[startNodeId] = 0;

    while (unvisited.size > 0) {
      let current = null;
      let shortestDist = Infinity;
      for (const id of unvisited) {
        if (distances[id] < shortestDist) {
          shortestDist = distances[id];
          current = id;
        }
      }

      if (!current || shortestDist === Infinity) break;
      if (current === targetNodeId) break;

      unvisited.delete(current);

      const currentNode = NAV_NODES[current];
      for (const neighborId of currentNode.neighbors) {
        if (!unvisited.has(neighborId)) continue;
        const neighbor = NAV_NODES[neighborId];
        if (!neighbor) continue;
        const edgeWeight = Math.hypot(neighbor.x - currentNode.x, neighbor.z - currentNode.z);
        const alt = distances[current] + edgeWeight;
        if (alt < distances[neighborId]) {
          distances[neighborId] = alt;
          previous[neighborId] = current;
        }
      }
    }

    // Reconstruct path
    const path = [];
    let curr = targetNodeId;
    while (curr) {
      path.unshift(NAV_NODES[curr]);
      curr = previous[curr];
    }

    return path;
  }

  // Determine the best entry node based on Euclidean distance to nearest node
  getClosestNavNode(carPos) {
    let closestId = 'hub_center';
    let minDist = Infinity;
    const x = carPos.x;
    const z = carPos.z;

    for (const id in NAV_NODES) {
      const node = NAV_NODES[id];
      const d = Math.hypot(x - node.x, z - node.z);
      if (d < minDist) {
        minDist = d;
        closestId = id;
      }
    }

    return closestId;
  }

  // Engage Autopilot to destination
  navigate(destinationKey) {
    const targetNodeId = DESTINATION_TARGET_MAP[destinationKey] || destinationKey;
    if (!NAV_NODES[targetNodeId]) {
      console.warn(`[Autopilot] Unknown destination: ${destinationKey}`);
      return false;
    }

    const startNodeId = this.getClosestNavNode(this.vehicle.position);
    const path = this.findPath(startNodeId, targetNodeId);

    if (path.length === 0) {
      console.warn(`[Autopilot] No path found from ${startNodeId} to ${targetNodeId}`);
      return false;
    }

    this.active = true;
    this.targetDestination = destinationKey;
    this.targetNodeId = targetNodeId;
    this.waypointPath = path;
    this.currentWaypointIndex = 0;

    // If already very close to first node and path has more nodes, advance to next
    const firstWp = path[0];
    const initialDist = Math.hypot(this.vehicle.position.x - firstWp.x, this.vehicle.position.z - firstWp.z);
    if (initialDist < 3.0 && path.length > 1) {
      this.currentWaypointIndex = 1;
    }

    if (this.callbacks.onStateChange) {
      this.callbacks.onStateChange({
        active: true,
        destination: destinationKey,
        targetNode: NAV_NODES[targetNodeId],
        path: this.waypointPath
      });
    }

    return true;
  }

  // Manual or arrival disengage
  disengage(reason = 'manual') {
    if (!this.active) return;

    this.active = false;
    const prevDestination = this.targetDestination;
    this.targetDestination = null;
    this.targetNodeId = null;
    this.waypointPath = [];
    this.currentWaypointIndex = 0;

    // Neutralize vehicle inputs
    this.vehicle.setAutopilotInput(null);

    if (this.callbacks.onDisengaged) {
      this.callbacks.onDisengaged(reason, prevDestination);
    }
    if (this.callbacks.onStateChange) {
      this.callbacks.onStateChange({
        active: false,
        destination: null,
        targetNode: null,
        path: []
      });
    }
  }

  // Called when reaching destination station
  arrive() {
    const destination = this.targetDestination;
    const targetNode = NAV_NODES[this.targetNodeId];

    this.active = false;
    this.targetDestination = null;
    this.targetNodeId = null;
    this.waypointPath = [];
    this.currentWaypointIndex = 0;

    // Stop vehicle smoothly using reusable scratch object
    _scratchAutopilotInput.steer = 0;
    _scratchAutopilotInput.throttle = 0;
    _scratchAutopilotInput.brake = true;
    _scratchAutopilotInput.active = false;
    this.vehicle.setAutopilotInput(_scratchAutopilotInput);
    this.vehicle.speed = 0;

    if (this.callbacks.onArrived) {
      this.callbacks.onArrived(destination, targetNode);
    }
    if (this.callbacks.onStateChange) {
      this.callbacks.onStateChange({
        active: false,
        destination: null,
        targetNode: null,
        path: []
      });
    }
  }

  // Pure Pursuit Steering & Dynamic Velocity Loop (Zero Per-Frame Allocations)
  update(delta) {
    if (!this.active || this.waypointPath.length === 0) return;

    const currentWp = this.waypointPath[this.currentWaypointIndex];
    if (!currentWp) {
      this.arrive();
      return;
    }

    const carX = this.vehicle.position.x;
    const carZ = this.vehicle.position.z;
    const dx = currentWp.x - carX;
    const dz = currentWp.z - carZ;
    const dist = Math.hypot(dx, dz);

    const isFinalWaypoint = (this.currentWaypointIndex === this.waypointPath.length - 1);

    // Waypoint passage threshold
    const arrivalRadius = isFinalWaypoint ? 2.8 : 3.8;
    if (dist < arrivalRadius) {
      if (isFinalWaypoint) {
        this.arrive();
        return;
      } else {
        this.currentWaypointIndex++;
        return;
      }
    }

    // 1. Target Heading Angle
    const targetAngle = Math.atan2(dx, dz);
    let angleDiff = targetAngle - this.vehicle.rotationY;

    // Normalize angle to [-PI, PI]
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

    // 2. Pure Pursuit Steering
    const steerSensitivity = 2.4;
    const steer = -Math.max(-1, Math.min(1, angleDiff * steerSensitivity));

    // 3. Dynamic Throttle & Braking Profile
    const absAngle = Math.abs(angleDiff);
    let throttle = 0.68;
    let brake = false;

    if (absAngle > 1.1) {
      // Sharp corner: brake or turn slowly
      if (this.vehicle.speed > 3.8) {
        brake = true;
        throttle = 0;
      } else {
        throttle = 0.35;
      }
    } else if (absAngle > 0.5) {
      // Moderate turn
      if (this.vehicle.speed > 6.8) {
        brake = true;
        throttle = 0;
      } else {
        throttle = 0.52;
      }
    } else {
      // Straight segment or avenue
      if (isFinalWaypoint && dist < 14.0) {
        // Smooth deceleration on final approach
        throttle = Math.max(0.24, (dist / 14.0) * 0.5);
      } else {
        throttle = 0.78;
      }
    }

    // Apply computed inputs to vehicle via scratch object (Zero-GC)
    _scratchAutopilotInput.steer = steer;
    _scratchAutopilotInput.throttle = throttle;
    _scratchAutopilotInput.brake = brake;
    _scratchAutopilotInput.active = true;
    this.vehicle.setAutopilotInput(_scratchAutopilotInput);
  }
}
