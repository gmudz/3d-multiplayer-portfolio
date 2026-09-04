import * as THREE from 'three';
import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEffects } from '../audio/SoundEffects.js';

// Static scratch vector for screen-space projection (Zero Per-Frame Allocations)
const _scratchMapVec = new THREE.Vector3();

export class MapOverlay {
  constructor(callbacks = {}) {
    this.callbacks = callbacks; // { onOpen, onClose, onSelectDestination }
    this.isOpenState = false;
    this.currentLanguage = 'en';

    // 3D coordinates for tactical radar markers across the Cyber City
    this.markersData = [
      {
        id: 'qticket',
        nameKey: 'destNorth',
        icon: '🏢',
        color: '#00f0ff',
        coords: new THREE.Vector3(0, 1.2, -52),
        badgeText: {
          en: 'Financial District // QTicket HQ',
          ar: 'المنطقة المالية // المقر الرئيسي'
        }
      },
      {
        id: 'laffeh',
        nameKey: 'destEast',
        icon: '🚚',
        color: '#ff6b35',
        coords: new THREE.Vector3(52, 1.2, 0),
        badgeText: {
          en: 'Logistics Hub // Laffeh Depot',
          ar: 'المركز اللوجستي // مركز التوزيع'
        }
      },
      {
        id: 'callcenter',
        nameKey: 'destSouth',
        icon: '🎙️',
        color: '#00ff88',
        coords: new THREE.Vector3(0, 1.2, 52),
        badgeText: {
          en: 'Telecom Quarter // AI Spire',
          ar: 'حي الاتصالات // برج الذكاء الاصطناعي'
        }
      },
      {
        id: 'kernel',
        nameKey: 'destWest',
        icon: '⚙️',
        color: '#ffaa00',
        coords: new THREE.Vector3(-52, 1.2, 0),
        badgeText: {
          en: 'Silicon Park // Tech Foundry',
          ar: 'واحة السيليكون // مسبك التكنولوجيا'
        }
      },
      {
        id: 'hub',
        nameKey: 'destCentral',
        icon: '🏛️',
        color: '#bf55ec',
        coords: new THREE.Vector3(0, 1.2, 0),
        badgeText: {
          en: 'Innovation Plaza // Monolith',
          ar: 'ساحة الابتكار // المسلة التقنية'
        }
      },
      {
        id: 'racetrack',
        nameKey: 'destRaceTrack',
        icon: '🏁',
        color: '#ff2255',
        coords: new THREE.Vector3(0, 1.2, -68),
        badgeText: {
          en: 'City Street Circuit // Grand Prix',
          ar: 'حلبة شوارع المدينة // الجائزة الكبرى'
        }
      }
    ];

    this.containerEl = document.getElementById('map-overlay');
    this.titleEl = document.getElementById('map-title');
    this.subtitleEl = document.getElementById('map-subtitle');
    this.closeBtn = document.getElementById('map-close-btn');
    this.markersLayer = document.getElementById('map-markers-layer');
    this.hintEl = document.getElementById('map-hint-instruction');

    this.markerElements = new Map();
    this.playerMarkerEl = null;

    this.initDOM();
    this.setupListeners();
  }

  initDOM() {
    if (!this.markersLayer) return;
    this.markersLayer.innerHTML = '';

    // Create tactical markers for each city district & landmark
    this.markersData.forEach((marker) => {
      const pin = document.createElement('div');
      pin.className = 'radar-pin';
      pin.dataset.id = marker.id;
      pin.style.setProperty('--pin-color', marker.color);

      const localizedBadge = marker.badgeText[this.currentLanguage] || marker.badgeText.en;

      pin.innerHTML = `
        <div class="radar-pulse"></div>
        <div class="radar-content glass">
          <div class="radar-header">
            <span class="radar-icon">${marker.icon}</span>
            <span class="radar-name">${PORTFOLIO_DATA.ui[marker.nameKey][this.currentLanguage]}</span>
          </div>
          <div class="radar-badge" style="border-color: ${marker.color}88; color: ${marker.color}">
            ${localizedBadge}
          </div>
          <div class="radar-action">
            <span class="radar-nav-icon">⚡</span>
            <span class="radar-action-text">${this.currentLanguage === 'ar' ? 'انقر للتنقل الآلي' : 'Click to Autopilot'}</span>
          </div>
        </div>
      `;

      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectDestination(marker.id);
      });

      this.markersLayer.appendChild(pin);
      this.markerElements.set(marker.id, pin);
    });

    // Create current vehicle position blip
    this.playerMarkerEl = document.createElement('div');
    this.playerMarkerEl.className = 'player-radar-blip';
    this.playerMarkerEl.innerHTML = `
      <div class="blip-ring"></div>
      <div class="blip-dot"></div>
      <div class="blip-label">${this.currentLanguage === 'ar' ? 'موقعك الحالي' : 'YOU ARE HERE'}</div>
    `;
    this.markersLayer.appendChild(this.playerMarkerEl);
  }

  setupListeners() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Close on background click
    if (this.containerEl) {
      this.containerEl.addEventListener('click', (e) => {
        if (e.target === this.containerEl || e.target === this.markersLayer) {
          this.close();
        }
      });
    }

    // Keyboard 'M' to toggle map & 'Escape' to close
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyM') {
        // Prevent toggle if typing in an input
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        this.toggle();
      } else if (e.code === 'Escape' && this.isOpenState) {
        this.close();
      }
    });
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    const ui = PORTFOLIO_DATA.ui;

    if (this.titleEl) this.titleEl.textContent = ui.mapTitle[lang];
    if (this.subtitleEl) this.subtitleEl.textContent = ui.mapSubtitle[lang];
    if (this.hintEl) this.hintEl.textContent = `${ui.mapSubtitle[lang]} // [M / ESC]`;

    this.markersData.forEach((m) => {
      const el = this.markerElements.get(m.id);
      if (el) {
        const nameEl = el.querySelector('.radar-name');
        if (nameEl && ui[m.nameKey]) nameEl.textContent = ui[m.nameKey][lang];
        const badgeEl = el.querySelector('.radar-badge');
        if (badgeEl && m.badgeText) badgeEl.textContent = m.badgeText[lang] || m.badgeText.en;
        const actionEl = el.querySelector('.radar-action-text');
        if (actionEl) actionEl.textContent = lang === 'ar' ? 'انقر للتنقل الآلي' : 'Click to Autopilot';
      }
    });

    if (this.playerMarkerEl) {
      const label = this.playerMarkerEl.querySelector('.blip-label');
      if (label) label.textContent = lang === 'ar' ? 'موقعك الحالي' : 'YOU ARE HERE';
    }
  }

  open() {
    this.isOpenState = true;
    soundEffects.playClick();

    if (this.containerEl) {
      this.containerEl.classList.remove('hidden');
      this.containerEl.classList.add('visible');
    }

    if (this.callbacks.onOpen) {
      this.callbacks.onOpen();
    }
  }

  close() {
    if (!this.isOpenState) return;
    this.isOpenState = false;
    soundEffects.playClick();

    if (this.containerEl) {
      this.containerEl.classList.remove('visible');
      this.containerEl.classList.add('hidden');
    }

    if (this.callbacks.onClose) {
      this.callbacks.onClose();
    }
  }

  toggle() {
    if (this.isOpenState) {
      this.close();
    } else {
      this.open();
    }
  }

  isOpen() {
    return this.isOpenState;
  }

  selectDestination(destId) {
    soundEffects.playPodChime();
    this.close();

    if (this.callbacks.onSelectDestination) {
      this.callbacks.onSelectDestination(destId);
    }
  }

  // Update 2D screen positions of holographic island pins based on 3D satellite camera (Zero Per-Frame Allocations)
  update(camera, vehiclePos) {
    if (!this.isOpenState || !camera) return;

    const widthHalf = window.innerWidth / 2;
    const heightHalf = window.innerHeight / 2;

    // 1. Update District / Landmark Pins
    this.markersData.forEach((m) => {
      const el = this.markerElements.get(m.id);
      if (!el) return;

      _scratchMapVec.copy(m.coords);
      _scratchMapVec.project(camera);

      // Visible if in front of camera
      if (_scratchMapVec.z < 1.0) {
        const x = (_scratchMapVec.x * widthHalf) + widthHalf;
        const y = -(_scratchMapVec.y * heightHalf) + heightHalf;
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
      } else {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
      }
    });

    // 2. Update Player Vehicle Blip
    if (this.playerMarkerEl && vehiclePos) {
      _scratchMapVec.set(vehiclePos.x, vehiclePos.y + 0.8, vehiclePos.z);
      _scratchMapVec.project(camera);

      if (_scratchMapVec.z < 1.0) {
        const px = (_scratchMapVec.x * widthHalf) + widthHalf;
        const py = -(_scratchMapVec.y * heightHalf) + heightHalf;
        this.playerMarkerEl.style.transform = `translate(-50%, -50%) translate(${px}px, ${py}px)`;
        this.playerMarkerEl.style.opacity = '1';
      } else {
        this.playerMarkerEl.style.opacity = '0';
      }
    }
  }
}
