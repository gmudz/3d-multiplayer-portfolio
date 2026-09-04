// Web Audio API Procedural Sound Synthesizer
// Completely self-contained with 0 external sound files needed.
// Zero-allocation audio node modulation & long-lived oscillator lifecycle.

class SoundEffectsManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isInitialized = false;

    // Engine sound nodes (SINGLE long-lived oscillator lifecycle)
    this.engineMasterGain = null;
    this.engineOsc = null;
    this.engineFilter = null;
    this.isEngineRunning = false;
    this.lastAudioUpdate = 0;
    this.lastRatio = -1;

    // Master volume
    this.masterGain = null;

    // Pre-allocated static noise buffer for skids/brakes
    this.skidNoiseBuffer = null;
  }

  init() {
    if (this.isInitialized) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.5;
      this.masterGain.connect(this.ctx.destination);

      // Pre-allocate static noise buffer for skids
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.2);
      this.skidNoiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = this.skidNoiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
      }

      this.initEngineAudio();
      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e);
    }
  }

  resumeContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initEngineAudio() {
    if (!this.ctx || this.isEngineRunning) return;

    // 1. Engine Master Gain - starts muted at 0
    this.engineMasterGain = this.ctx.createGain();
    this.engineMasterGain.gain.value = 0.0;

    // 2. Low pass filter for mechanical motor rumble
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.value = 180;
    this.engineFilter.Q.value = 2.5;

    // 3. SINGLE long-lived sawtooth oscillator created once at startup
    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 50;

    this.engineOsc.connect(this.engineFilter);
    this.engineFilter.connect(this.engineMasterGain);
    this.engineMasterGain.connect(this.masterGain);

    this.engineOsc.start();
    this.isEngineRunning = true;
  }

  // Smoothly modulate single long-lived engine oscillator (ZERO allocations or node re-instantiations)
  updateEngine(speedRatio) {
    if (!this.isInitialized || !this.isEngineRunning || this.isMuted) return;

    const absRatio = Math.min(Math.max(Math.abs(speedRatio || 0), 0), 1);
    const now = this.ctx.currentTime;

    // Mute gain to 0 when vehicle is idle / nearly stationary
    if (absRatio < 0.02) {
      if (this.lastRatio !== 0) {
        this.engineMasterGain.gain.setTargetAtTime(0.0, now, 0.05);
        this.lastRatio = 0;
      }
      return;
    }

    // Throttle parameter automation to max ~30Hz and significant delta to prevent audio thread lock
    if (now - this.lastAudioUpdate < 0.033 && Math.abs(absRatio - this.lastRatio) < 0.015) {
      return;
    }
    this.lastAudioUpdate = now;
    this.lastRatio = absRatio;

    // Target frequencies modulate with vehicle velocity
    const baseFreq = 50 + absRatio * 160; // 50Hz idle -> 210Hz top speed
    const filterFreq = 180 + absRatio * 620;
    const targetGain = 0.04 + absRatio * 0.12;

    this.engineOsc.frequency.setTargetAtTime(baseFreq, now, 0.06);
    this.engineFilter.frequency.setTargetAtTime(filterFreq, now, 0.06);
    this.engineMasterGain.gain.setTargetAtTime(targetGain, now, 0.06);
  }

  // Futuristic crystal chime when entering a project pod
  playPodChime() {
    if (!this.isInitialized || this.isMuted) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 arpeggio

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.65);
    });
  }

  // Soft UI click when opening / closing modals
  playClick() {
    if (!this.isInitialized || this.isMuted) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Tire skid / brake sound when braking abruptly (reuses pre-allocated buffer)
  playBrakeSkid() {
    if (!this.isInitialized || this.isMuted || !this.skidNoiseBuffer) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.skidNoiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.value = 3.0;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.16);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.value = this.isMuted ? 0 : 0.5;
    }
    return this.isMuted;
  }
}

export const soundEffects = new SoundEffectsManager();
