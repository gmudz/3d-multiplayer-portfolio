import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEffects } from '../audio/SoundEffects.js';

export class HUD {
  constructor(callbacks = {}) {
    this.callbacks = callbacks;
    this.currentLanguage = 'en';
    this.currentContext = null;
    this.playerCount = 1;
    this.currentEnvMode = 'night';

    // DOM Elements
    this.brandTitleEl = document.getElementById('brand-title');
    this.brandSubtitleEl = document.getElementById('brand-subtitle');

    this.langBtn = document.getElementById('lang-toggle-btn');
    this.langLabelEl = document.getElementById('lang-current-label');

    this.envBtn = document.getElementById('env-toggle-btn');
    this.envLabelEl = document.getElementById('env-mode-label');

    this.speedValueEl = document.getElementById('speed-value');
    this.speedUnitEl = document.getElementById('speed-unit-label');
    this.speedBarEl = document.getElementById('speed-bar-fill');
    this.gearEl = document.getElementById('gear-indicator');

    this.playerCountEl = document.getElementById('player-count');
    this.pingDotEl = document.getElementById('ping-indicator');
    this.playerNameEl = document.getElementById('player-name-badge');

    this.promptEl = document.getElementById('interaction-prompt');
    this.promptTitleEl = document.getElementById('prompt-project-title');
    this.promptPrefixEl = document.getElementById('prompt-prefix');
    this.promptSuffixEl = document.getElementById('prompt-suffix');
    this.promptKeyEl = document.getElementById('prompt-key-label');

    this.hintDriveEl = document.getElementById('hint-drive-text');
    this.hintBrakeEl = document.getElementById('hint-brake-text');
    this.hintExploreEl = document.getElementById('hint-explore-text');

    this.audioBtn = document.getElementById('audio-toggle-btn');
    this.audioIcon = document.getElementById('audio-icon');

    // Tactical Map & Autopilot elements
    this.mapBtn = document.getElementById('map-toggle-btn');
    this.mapBtnLabel = document.getElementById('map-btn-label');

    this.apBanner = document.getElementById('autopilot-banner');
    this.apLabelTitle = document.getElementById('ap-label-title');
    this.apDestName = document.getElementById('ap-dest-name');
    this.apHintText = document.getElementById('ap-hint-text');
    this.apCancelBtn = document.getElementById('ap-cancel-btn');
    this.currentApDest = null;

    // Grand Prix Circuit HUD Lap Timer elements
    this.lapTimerEl = document.getElementById('hud-lap-timer');
    this.lapNumEl = document.getElementById('lap-current-num');
    this.lapLabelEl = document.getElementById('lap-label-tag');
    this.bestLabelEl = document.getElementById('best-label-tag');
    this.bestTimeEl = document.getElementById('best-time-val');
    this.currentLapTimeEl = document.getElementById('current-lap-val');
    this.sectorStripEl = document.getElementById('lap-sectors-strip');

    // Dynamic Drift Score Widget elements
    this.driftWidget = document.getElementById('hud-drift-widget');
    this.driftTitleEl = document.getElementById('drift-label-text');
    this.driftPointsEl = document.getElementById('drift-points-val');
    this.driftPtsLabel = document.getElementById('drift-pts-label');
    this.driftMultEl = document.getElementById('drift-mult-val');

    // Finish Celebration Fanfare elements
    this.finishBanner = document.getElementById('finish-celebration-banner');
    this.finishTitleEl = document.getElementById('finish-title-text');
    this.finishTimeEl = document.getElementById('finish-time-sub');
    this.finishTimeout = null;

    // Touch button elements
    this.btnGas = document.getElementById('btn-gas');
    this.btnRev = document.getElementById('btn-rev');
    this.btnBrake = document.getElementById('btn-brake');

    this.setupListeners();
    this.setLanguage('en');
  }

  setupListeners() {
    // Language toggle
    if (this.langBtn) {
      this.langBtn.addEventListener('click', () => {
        soundEffects.playClick();
        const nextLang = this.currentLanguage === 'en' ? 'ar' : 'en';
        this.setLanguage(nextLang);
        if (this.callbacks.onLanguageChange) {
          this.callbacks.onLanguageChange(nextLang);
        }
      });
    }

    // Environment Lighting cycle toggle
    if (this.envBtn) {
      this.envBtn.addEventListener('click', () => {
        soundEffects.playClick();
        if (this.callbacks.onToggleEnvironment) {
          const mode = this.callbacks.onToggleEnvironment();
          this.setEnvironmentMode(mode);
        }
      });
    }

    // Audio toggle
    if (this.audioBtn) {
      this.audioBtn.addEventListener('click', () => {
        soundEffects.init();
        const isMuted = soundEffects.toggleMute();
        this.updateAudioIcon(isMuted);
      });
    }

    // Map toggle button
    if (this.mapBtn) {
      this.mapBtn.addEventListener('click', () => {
        soundEffects.playClick();
        if (this.callbacks.onToggleMap) {
          this.callbacks.onToggleMap();
        }
      });
    }

    // Autopilot cancel button
    if (this.apCancelBtn) {
      this.apCancelBtn.addEventListener('click', () => {
        soundEffects.playClick();
        if (this.callbacks.onCancelAutopilot) {
          this.callbacks.onCancelAutopilot();
        }
      });
    }

    // Interaction prompt click
    if (this.promptEl) {
      this.promptEl.addEventListener('click', () => {
        this.triggerInteraction();
      });
    }

    // Keyboard 'E' / Enter interaction
    window.addEventListener('keydown', (e) => {
      if ((e.code === 'KeyE' || e.code === 'Enter') && this.currentContext) {
        this.triggerInteraction();
      }
    });

    window.addEventListener('resize', () => {
      this.updateControlsKey();
    });
  }

  triggerInteraction() {
    if (!this.currentContext) return;

    if (this.currentContext.type === 'project' && this.callbacks.onOpenProject) {
      this.callbacks.onOpenProject(this.currentContext.data);
    } else if (this.currentContext.type === 'monolith' && this.callbacks.onOpenMonolith) {
      this.callbacks.onOpenMonolith(this.currentContext.data);
    } else if (this.currentContext.type === 'waypoint' && this.callbacks.onOpenWaypoint) {
      this.callbacks.onOpenWaypoint(this.currentContext.data);
    }
  }

  setEnvironmentMode(mode) {
    this.currentEnvMode = mode;
    if (!this.envLabelEl) return;
    const ui = PORTFOLIO_DATA.ui;
    const lang = this.currentLanguage;
    if (mode === 'day') this.envLabelEl.textContent = ui.envDay[lang];
    else if (mode === 'sunset') this.envLabelEl.textContent = ui.envSunset[lang];
    else this.envLabelEl.textContent = ui.envNight[lang];
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    const ui = PORTFOLIO_DATA.ui;
    const profile = PORTFOLIO_DATA.profile;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (this.langLabelEl) {
      this.langLabelEl.textContent = lang === 'en' ? 'العربية' : 'English';
    }

    if (this.brandTitleEl) {
      this.brandTitleEl.textContent = ui.brand[lang];
    }
    if (this.brandSubtitleEl) {
      this.brandSubtitleEl.textContent = profile.title[lang];
    }

    if (this.speedUnitEl) {
      this.speedUnitEl.textContent = ui.speedUnit[lang];
    }

    if (this.hintDriveEl) this.hintDriveEl.textContent = ui.controlsHintDrive[lang];
    if (this.hintBrakeEl) this.hintBrakeEl.textContent = ui.controlsHintBrake[lang];
    if (this.hintExploreEl) this.hintExploreEl.textContent = ui.controlsHintExplore[lang];

    // Localize Touch Buttons
    if (this.btnGas) this.btnGas.textContent = ui.touchGas[lang];
    if (this.btnRev) this.btnRev.textContent = ui.touchRev[lang];
    if (this.btnBrake) this.btnBrake.textContent = ui.touchBrake[lang];

    // Localize Map Button
    if (this.mapBtnLabel) {
      this.mapBtnLabel.textContent = lang === 'ar' ? 'الخريطة' : 'Map';
    }

    // Localize Environment Button
    this.setEnvironmentMode(this.currentEnvMode);

    // Localize Lap Timer & Drift Widgets
    if (this.lapLabelEl) this.lapLabelEl.textContent = ui.lapTimerLap[lang];
    if (this.bestLabelEl) this.bestLabelEl.textContent = `${ui.lapTimerBest[lang]}:`;
    if (this.driftTitleEl) this.driftTitleEl.textContent = ui.driftScore[lang];
    if (this.driftPtsLabel) this.driftPtsLabel.textContent = ui.driftPts[lang];

    this.updatePlayerCountText();

    if (this.currentContext) {
      this.showPrompt(this.currentContext);
    }

    this.updateAutopilotText();
    this.updateControlsKey();
  }

  showAutopilot(destinationKey) {
    this.currentApDest = destinationKey;
    if (!this.apBanner) return;

    this.updateAutopilotText();
    this.apBanner.classList.remove('hidden');
    this.apBanner.classList.add('visible');
  }

  hideAutopilot() {
    this.currentApDest = null;
    if (!this.apBanner) return;
    this.apBanner.classList.remove('visible');
    this.apBanner.classList.add('hidden');
  }

  updateAutopilotText() {
    if (!this.currentApDest || !this.apBanner) return;
    const ui = PORTFOLIO_DATA.ui;
    const lang = this.currentLanguage;

    if (this.apLabelTitle) {
      this.apLabelTitle.textContent = `${ui.autopilotActive[lang]}:`;
    }
    if (this.apHintText) {
      this.apHintText.textContent = ui.autopilotCancelHint[lang];
    }

    let destName = this.currentApDest;
    if (this.currentApDest === 'qticket') destName = ui.destNorth[lang];
    else if (this.currentApDest === 'laffeh') destName = ui.destEast[lang];
    else if (this.currentApDest === 'callcenter') destName = ui.destSouth[lang];
    else if (this.currentApDest === 'kernel') destName = ui.destWest[lang];
    else if (this.currentApDest === 'hub') destName = ui.destCentral[lang];
    else if (this.currentApDest === 'racetrack') destName = ui.destRaceTrack[lang];

    if (this.apDestName) {
      this.apDestName.textContent = destName;
    }
  }

  updateControlsKey() {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 850);
    if (this.promptKeyEl) {
      this.promptKeyEl.textContent = isTouch ? (this.currentLanguage === 'ar' ? 'المس' : 'TAP') : 'E';
    }
  }

  updatePlayerCountText() {
    if (!this.playerCountEl) return;
    const ui = PORTFOLIO_DATA.ui;
    if (this.playerCount === 1) {
      this.playerCountEl.textContent = `1 ${ui.singlePilot[this.currentLanguage]}`;
    } else {
      this.playerCountEl.textContent = `${this.playerCount} ${ui.onlinePilots[this.currentLanguage]}`;
    }
  }

  updateAudioIcon(isMuted) {
    if (!this.audioIcon) return;
    if (isMuted) {
      this.audioIcon.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
        </svg>
      `;
    } else {
      this.audioIcon.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
    }
  }

  updateSpeed(speedKmH, speedRatio) {
    if (this.speedValueEl) {
      this.speedValueEl.textContent = speedKmH;
    }

    if (this.speedBarEl) {
      const pct = Math.min(Math.abs(speedRatio) * 100, 100);
      this.speedBarEl.style.width = `${pct}%`;
    }

    if (this.gearEl) {
      if (speedRatio > 0.05) {
        this.gearEl.textContent = 'D';
        this.gearEl.className = 'gear-badge gear-d';
      } else if (speedRatio < -0.05) {
        this.gearEl.textContent = 'R';
        this.gearEl.className = 'gear-badge gear-r';
      } else {
        this.gearEl.textContent = 'P';
        this.gearEl.className = 'gear-badge gear-p';
      }
    }
  }

  updateLapTimer(data) {
    if (!this.lapTimerEl || !data) return;

    if (this.lapNumEl) {
      this.lapNumEl.textContent = data.currentLap || 1;
    }

    if (this.currentLapTimeEl) {
      this.currentLapTimeEl.textContent = data.currentLapTimeStr || '00:00.000';
    }

    if (this.bestTimeEl) {
      this.bestTimeEl.textContent = data.bestLapTimeStr || '--:--.---';
    }

    if (this.sectorStripEl && data.nextCheckpoint !== undefined) {
      const dots = this.sectorStripEl.querySelectorAll('.sector-dot');
      dots.forEach((dot, idx) => {
        if (idx < data.nextCheckpoint) {
          dot.className = 'sector-dot passed';
        } else if (idx === data.nextCheckpoint) {
          dot.className = 'sector-dot active';
        } else {
          dot.className = 'sector-dot';
        }
      });
    }
  }

  showLapFinishedBanner(lapData) {
    if (!this.finishBanner || !lapData) return;
    const ui = PORTFOLIO_DATA.ui;
    const lang = this.currentLanguage;

    if (this.finishTitleEl) {
      this.finishTitleEl.textContent = lapData.isNewRecord
        ? ui.newLapRecord[lang]
        : `🏁 ${ui.lapCompleted[lang]}`;
      this.finishTitleEl.style.color = lapData.isNewRecord ? '#00ff88' : '#00f0ff';
    }

    if (this.finishTimeEl) {
      const lapStr = `${ui.lapTimerLap[lang]} ${lapData.lapNumber}`;
      this.finishTimeEl.textContent = `${lapStr}: ${lapData.lapTimeStr} ${lapData.isNewRecord ? '⚡' : ''}`;
    }

    this.finishBanner.classList.remove('hidden');
    this.finishBanner.classList.add('visible');

    if (this.finishTimeout) {
      clearTimeout(this.finishTimeout);
    }
    this.finishTimeout = setTimeout(() => {
      if (this.finishBanner) {
        this.finishBanner.classList.remove('visible');
        this.finishBanner.classList.add('hidden');
      }
    }, 4500);
  }

  updateDriftWidget(driftData) {
    if (!this.driftWidget || !driftData) return;

    if (driftData.isDrifting || driftData.currentCombo > 5) {
      this.driftWidget.classList.remove('hidden');
      this.driftWidget.classList.add('visible');

      if (this.driftPointsEl) {
        this.driftPointsEl.textContent = Math.floor(driftData.currentCombo);
      }
      if (this.driftMultEl) {
        this.driftMultEl.textContent = `x${driftData.driftMultiplier.toFixed(1)}`;
      }
    } else {
      if (this.driftWidget.classList.contains('visible')) {
        this.driftWidget.classList.remove('visible');
        this.driftWidget.classList.add('hidden');
      }
    }
  }

  updateMultiplayer(playerCount, connectionState, myPlayerInfo) {
    this.playerCount = playerCount;
    this.updatePlayerCountText();

    if (this.pingDotEl) {
      this.pingDotEl.className = `status-dot ${connectionState}`;
    }

    if (this.playerNameEl && myPlayerInfo) {
      const ui = PORTFOLIO_DATA.ui;
      const pilotPrefix = ui.pilot[this.currentLanguage];
      const pilotNum = myPlayerInfo.name.replace(/^Pilot-/, '');
      this.playerNameEl.textContent = `${pilotPrefix}-${pilotNum}`;
      this.playerNameEl.style.borderColor = myPlayerInfo.color;
      this.playerNameEl.style.color = myPlayerInfo.color;
    }
  }

  showPrompt(context) {
    this.currentContext = context;
    if (!this.promptEl) return;

    if (context) {
      const lang = this.currentLanguage;
      const ui = PORTFOLIO_DATA.ui;

      if (this.promptPrefixEl) this.promptPrefixEl.textContent = `${ui.parkedAt[lang]} `;
      if (this.promptSuffixEl) this.promptSuffixEl.textContent = ` — ${ui.pressEOrTap[lang]}`;

      let title = '';
      let color = '#00f0ff';

      if (context.type === 'project') {
        title = context.data.title[lang];
        color = context.data.color;
      } else if (context.type === 'monolith') {
        title = ui.skillsMatrixTitle[lang];
        color = '#00f0ff';
      } else if (context.type === 'waypoint') {
        title = context.data.title[lang];
        color = '#ffaa00';
      }

      if (this.promptTitleEl) {
        this.promptTitleEl.textContent = title;
        this.promptTitleEl.style.color = color;
      }

      this.promptEl.classList.remove('hidden');
      this.promptEl.classList.add('visible');
    } else {
      this.promptEl.classList.remove('visible');
      this.promptEl.classList.add('hidden');
    }
  }
}
