import { PORTFOLIO_DATA } from '../data/portfolioData.js';
import { soundEffects } from '../audio/SoundEffects.js';

export class ModalManager {
  constructor() {
    this.currentLanguage = 'en';

    // 1. Project Modal Elements
    this.projectModal = document.getElementById('project-modal');
    this.projectCard = document.getElementById('modal-card');
    this.projectCloseBtn = document.getElementById('modal-close-btn');

    this.bannerContainer = document.getElementById('modal-banner-container');
    this.logoContainer = document.getElementById('modal-logo-container');
    this.statusBadgeEl = document.getElementById('modal-status-badge');
    this.titleEl = document.getElementById('modal-title');
    this.categoryEl = document.getElementById('modal-category');
    this.taglineEl = document.getElementById('modal-tagline');
    this.roleLabelEl = document.getElementById('modal-role-label');
    this.roleValEl = document.getElementById('modal-role-val');
    this.summaryEl = document.getElementById('modal-summary');
    this.secHighlightsEl = document.getElementById('modal-sec-highlights');
    this.highlightsEl = document.getElementById('modal-highlights');
    this.secMetricsEl = document.getElementById('modal-sec-metrics');
    this.metricsEl = document.getElementById('modal-metrics');
    this.secTechEl = document.getElementById('modal-sec-tech');
    this.techStackEl = document.getElementById('modal-tech-stack');

    this.demoLink = document.getElementById('modal-link-demo');
    this.githubLink = document.getElementById('modal-link-github');
    this.caseStudyLink = document.getElementById('modal-link-casestudy');
    this.btnLabelDemo = document.getElementById('btn-label-demo');
    this.btnLabelGithub = document.getElementById('btn-label-github');
    this.btnLabelCase = document.getElementById('btn-label-case');

    // 2. Monolith Modal Elements
    this.monolithModal = document.getElementById('monolith-modal');
    this.monolithCloseBtn = document.getElementById('monolith-close-btn');
    this.monolithBadgeEl = document.getElementById('monolith-badge-label');
    this.monolithTitleEl = document.getElementById('monolith-title');
    this.monolithSubtitleEl = document.getElementById('monolith-subtitle');
    this.monolithGridEl = document.getElementById('monolith-grid');

    // 3. Waypoint Modal Elements
    this.waypointModal = document.getElementById('waypoint-modal');
    this.waypointCloseBtn = document.getElementById('waypoint-close-btn');
    this.waypointBadgeEl = document.getElementById('waypoint-badge-label');
    this.waypointTitleEl = document.getElementById('waypoint-title');
    this.waypointOrgEl = document.getElementById('waypoint-org');
    this.waypointPeriodEl = document.getElementById('waypoint-period');
    this.waypointDescEl = document.getElementById('waypoint-desc');

    // Active state
    this.activeType = null;
    this.activeData = null;

    this.setupListeners();
  }

  setupListeners() {
    // Project modal close
    if (this.projectCloseBtn) {
      this.projectCloseBtn.addEventListener('click', () => this.close());
    }
    if (this.projectModal) {
      this.projectModal.addEventListener('click', (e) => {
        if (e.target === this.projectModal) this.close();
      });
    }

    // Monolith modal close
    if (this.monolithCloseBtn) {
      this.monolithCloseBtn.addEventListener('click', () => this.close());
    }
    if (this.monolithModal) {
      this.monolithModal.addEventListener('click', (e) => {
        if (e.target === this.monolithModal) this.close();
      });
    }

    // Waypoint modal close
    if (this.waypointCloseBtn) {
      this.waypointCloseBtn.addEventListener('click', () => this.close());
    }
    if (this.waypointModal) {
      this.waypointModal.addEventListener('click', (e) => {
        if (e.target === this.waypointModal) this.close();
      });
    }

    // Keyboard Escape
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.activeType) {
        this.close();
      }
    });
  }

  setLanguage(lang) {
    this.currentLanguage = lang;

    if (this.activeType === 'project' && this.activeData) {
      this.renderProject(this.activeData);
    } else if (this.activeType === 'monolith' && this.activeData) {
      this.renderMonolith(this.activeData);
    } else if (this.activeType === 'waypoint' && this.activeData) {
      this.renderWaypoint(this.activeData);
    }
  }

  openProject(project) {
    this.closeAll();
    this.activeType = 'project';
    this.activeData = project;
    this.renderProject(project);

    soundEffects.playClick();
    if (this.projectModal) {
      this.projectModal.classList.remove('hidden');
      this.projectModal.classList.add('visible');
    }
  }

  renderProject(project) {
    const lang = this.currentLanguage;
    const ui = PORTFOLIO_DATA.ui;

    // Dual Branding: Crisp Vector SVGs vs Monospace Cyber ASCII Terminal
    if (this.projectCard) {
      if (project.brandType === 'ascii') {
        this.projectCard.classList.add('crt-terminal-card');
        this.projectCard.style.borderColor = `${project.color}66`;
      } else {
        this.projectCard.classList.remove('crt-terminal-card');
        this.projectCard.style.borderColor = 'var(--panel-border)';
      }
    }

    if (this.bannerContainer) {
      this.bannerContainer.style.background = project.bannerGradient || '#0f172a';

      if (project.brandType === 'ascii') {
        this.bannerContainer.className = 'modal-banner banner-terminal-mode';
        this.bannerContainer.innerHTML = `
          <div class="terminal-banner-box">
            <div class="terminal-banner-bar">
              <div class="terminal-dots">
                <span class="t-dot red"></span>
                <span class="t-dot yellow"></span>
                <span class="t-dot green"></span>
              </div>
              <span class="terminal-banner-label">TTY1: /dev/${project.id} // [${project.category[lang]}]</span>
              <span class="status-chip" style="border-color: ${project.color}; color: ${project.color}">
                ${project.status[lang]}
              </span>
            </div>
            <div class="terminal-screen-crt">
              <div class="terminal-scanlines"></div>
              <pre class="terminal-ascii-pre" style="color: ${project.color}; text-shadow: 0 0 10px ${project.color}99;">${project.asciiArt.trim()}</pre>
            </div>
          </div>
        `;
      } else {
        this.bannerContainer.className = 'modal-banner banner-svg-mode';
        this.bannerContainer.innerHTML = `
          <div class="modal-logo-badge">${project.logoSvg || ''}</div>
          <div class="modal-banner-chips">
            <span class="status-chip" style="border-color: ${project.color}; color: ${project.color}">
              ${project.status[lang]}
            </span>
            <span class="category-chip" style="border-color: ${project.color}66; color: ${project.color}">
              ${project.category[lang]}
            </span>
          </div>
        `;
      }
    }

    if (this.titleEl) this.titleEl.textContent = project.title[lang];
    if (this.taglineEl) this.taglineEl.textContent = project.tagline[lang];

    if (this.roleLabelEl) this.roleLabelEl.textContent = `${ui.modalRole[lang]}:`;
    if (this.roleValEl) {
      this.roleValEl.textContent = project.role[lang];
      this.roleValEl.style.color = project.color;
    }

    if (this.summaryEl) this.summaryEl.textContent = project.summary[lang];

    // Section Titles
    if (this.secHighlightsEl) this.secHighlightsEl.textContent = ui.modalHighlights[lang];
    if (this.secMetricsEl) this.secMetricsEl.textContent = ui.modalMetrics[lang];
    if (this.secTechEl) this.secTechEl.textContent = ui.modalTechStack[lang];

    // Highlights
    if (this.highlightsEl) {
      this.highlightsEl.innerHTML = project.highlights[lang]
        .map(h => `<li><span class="bullet" style="color: ${project.color}">▸</span> ${h}</li>`)
        .join('');
    }

    // Metrics
    if (this.metricsEl && project.metrics[lang]) {
      this.metricsEl.innerHTML = Object.entries(project.metrics[lang])
        .map(([key, value]) => `
          <div class="metric-box">
            <span class="metric-val" style="color: ${project.color}">${value}</span>
            <span class="metric-key">${key.toUpperCase()}</span>
          </div>
        `).join('');
    }

    // Tech Stack with Brand Colors
    if (this.techStackEl) {
      this.techStackEl.innerHTML = project.techStack
        .map(t => `<span class="tech-badge" style="border-color: ${t.color}66; color: #fff;">${t.name}</span>`)
        .join('');
    }

    // Action Buttons
    if (this.btnLabelDemo) this.btnLabelDemo.textContent = ui.liveDemo[lang];
    if (this.btnLabelGithub) this.btnLabelGithub.textContent = ui.sourceCode[lang];
    if (this.btnLabelCase) this.btnLabelCase.textContent = ui.caseStudy[lang];

    if (this.demoLink) {
      this.demoLink.href = project.links.demo;
      this.demoLink.style.display = project.links.demo ? 'inline-flex' : 'none';
    }
    if (this.githubLink) {
      this.githubLink.href = project.links.github;
      this.githubLink.style.display = project.links.github ? 'inline-flex' : 'none';
    }
    if (this.caseStudyLink) {
      this.caseStudyLink.href = project.links.caseStudy;
      this.caseStudyLink.style.display = project.links.caseStudy ? 'inline-flex' : 'none';
    }

    if (this.projectCard) {
      this.projectCard.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px ${project.color}33`;
    }
  }

  openMonolith(matrixData) {
    this.closeAll();
    this.activeType = 'monolith';
    this.activeData = matrixData;
    this.renderMonolith(matrixData);

    soundEffects.playClick();
    if (this.monolithModal) {
      this.monolithModal.classList.remove('hidden');
      this.monolithModal.classList.add('visible');
    }
  }

  renderMonolith(matrixData) {
    const lang = this.currentLanguage;
    const ui = PORTFOLIO_DATA.ui;

    if (this.monolithBadgeEl) this.monolithBadgeEl.textContent = ui.skillsMatrixTitle[lang];
    if (this.monolithTitleEl) this.monolithTitleEl.textContent = matrixData.title[lang];
    if (this.monolithSubtitleEl) this.monolithSubtitleEl.textContent = matrixData.subtitle[lang];

    if (this.monolithGridEl) {
      this.monolithGridEl.innerHTML = matrixData.categories
        .map(cat => `
          <div class="monolith-category-card" style="border-top: 3px solid ${cat.color};">
            <h4 class="monolith-category-title" style="color: ${cat.color};">${cat.name[lang]}</h4>
            <div class="monolith-skill-chips">
              ${cat.skills.map(skill => `<span class="monolith-skill-chip">${skill}</span>`).join('')}
            </div>
          </div>
        `).join('');
    }
  }

  openWaypoint(waypointData) {
    this.closeAll();
    this.activeType = 'waypoint';
    this.activeData = waypointData;
    this.renderWaypoint(waypointData);

    soundEffects.playClick();
    if (this.waypointModal) {
      this.waypointModal.classList.remove('hidden');
      this.waypointModal.classList.add('visible');
    }
  }

  renderWaypoint(waypointData) {
    const lang = this.currentLanguage;
    const ui = PORTFOLIO_DATA.ui;

    if (this.waypointBadgeEl) this.waypointBadgeEl.textContent = ui.waypointTitle[lang];
    if (this.waypointTitleEl) this.waypointTitleEl.textContent = waypointData.title[lang];
    if (this.waypointOrgEl) this.waypointOrgEl.textContent = waypointData.organization[lang];
    if (this.waypointPeriodEl) this.waypointPeriodEl.textContent = waypointData.period[lang];
    if (this.waypointDescEl) this.waypointDescEl.textContent = waypointData.description[lang];
  }

  closeAll() {
    if (this.projectModal) {
      this.projectModal.classList.remove('visible');
      this.projectModal.classList.add('hidden');
    }
    if (this.monolithModal) {
      this.monolithModal.classList.remove('visible');
      this.monolithModal.classList.add('hidden');
    }
    if (this.waypointModal) {
      this.waypointModal.classList.remove('visible');
      this.waypointModal.classList.add('hidden');
    }
  }

  close() {
    if (!this.activeType) return;
    this.activeType = null;
    this.activeData = null;
    soundEffects.playClick();
    this.closeAll();
  }

  isOpen() {
    return this.activeType !== null;
  }
}
