export class TouchControls {
  constructor(onInputChange) {
    this.onInputChange = onInputChange;
    this.state = {
      steer: 0,
      throttle: 0,
      brake: false
    };

    this.joystickActive = false;
    this.joystickTouchId = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.maxRadius = 45;

    this.dom = {
      container: document.getElementById('touch-controls'),
      joystickZone: document.getElementById('joystick-zone'),
      joystickBase: document.getElementById('joystick-base'),
      joystickKnob: document.getElementById('joystick-knob'),
      btnGas: document.getElementById('btn-gas'),
      btnRev: document.getElementById('btn-rev'),
      btnBrake: document.getElementById('btn-brake')
    };

    this.checkVisibility();
    this.setupListeners();
  }

  checkVisibility() {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 850);
    if (this.dom.container) {
      this.dom.container.style.display = isTouch ? 'flex' : 'none';
    }
  }

  setupListeners() {
    window.addEventListener('resize', () => this.checkVisibility());

    if (!this.dom.joystickZone) return;

    // Joystick Touch Events
    this.dom.joystickZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.joystickActive) return;

      const touch = e.changedTouches[0];
      this.joystickActive = true;
      this.joystickTouchId = touch.identifier;

      const rect = this.dom.joystickZone.getBoundingClientRect();
      this.touchStartX = rect.left + rect.width / 2;
      this.touchStartY = rect.top + rect.height / 2;

      this.updateJoystickKnob(touch.clientX, touch.clientY);
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
      if (!this.joystickActive) return;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === this.joystickTouchId) {
          e.preventDefault();
          this.updateJoystickKnob(touch.clientX, touch.clientY);
          break;
        }
      }
    }, { passive: false });

    const endJoystick = (e) => {
      if (!this.joystickActive) return;

      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === this.joystickTouchId) {
          this.joystickActive = false;
          this.joystickTouchId = null;
          this.state.steer = 0;
          if (this.dom.joystickKnob) {
            this.dom.joystickKnob.style.transform = `translate(0px, 0px)`;
          }
          this.emit();
          break;
        }
      }
    };

    window.addEventListener('touchend', endJoystick);
    window.addEventListener('touchcancel', endJoystick);

    // Gas Button
    this.setupButton(this.dom.btnGas, (pressed) => {
      if (pressed) {
        this.state.throttle = 1;
        this.state.brake = false;
      } else if (this.state.throttle === 1) {
        this.state.throttle = 0;
      }
      this.emit();
    });

    // Reverse Button
    this.setupButton(this.dom.btnRev, (pressed) => {
      if (pressed) {
        this.state.throttle = -1;
        this.state.brake = false;
      } else if (this.state.throttle === -1) {
        this.state.throttle = 0;
      }
      this.emit();
    });

    // Brake Button
    this.setupButton(this.dom.btnBrake, (pressed) => {
      this.state.brake = pressed;
      if (pressed) {
        this.state.throttle = 0;
      }
      this.emit();
    });
  }

  updateJoystickKnob(clientX, clientY) {
    let dx = clientX - this.touchStartX;
    let dy = clientY - this.touchStartY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > this.maxRadius) {
      dx = (dx / distance) * this.maxRadius;
      dy = (dy / distance) * this.maxRadius;
    }

    if (this.dom.joystickKnob) {
      this.dom.joystickKnob.style.transform = `translate(${dx}px, ${dy}px)`;
    }

    // Steering is horizontal axis
    this.state.steer = dx / this.maxRadius;
    this.emit();
  }

  setupButton(element, onChange) {
    if (!element) return;

    element.addEventListener('touchstart', (e) => {
      e.preventDefault();
      element.classList.add('active');
      onChange(true);
    }, { passive: false });

    element.addEventListener('touchend', (e) => {
      e.preventDefault();
      element.classList.remove('active');
      onChange(false);
    }, { passive: false });

    element.addEventListener('touchcancel', (e) => {
      element.classList.remove('active');
      onChange(false);
    });
  }

  emit() {
    if (this.onInputChange) {
      this.onInputChange(this.state);
    }
  }
}
