// Kasaysayan: Web Audio API Sound Synthesizer
// Programmatic, lightweight sound effects that run fully offline.

class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = false;
    // Load muted state from localStorage if available
    try {
      const savedMute = localStorage.getItem('kasaysayan_muted');
      this.muted = savedMute === 'true';
    } catch (e) {
      this.muted = false;
    }
  }

  // Lazy initialize the AudioContext upon user interaction
  init() {
    if (this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContextClass();
    } catch (e) {
      console.warn("Web Audio API is not supported in this browser.", e);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    try {
      localStorage.setItem('kasaysayan_muted', this.muted);
    } catch (e) {}
    return this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // Play a standard button click sound
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Play a timer tick
  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1000, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.03);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }

  // Play double-chime for a correct answer (consonant major interval)
  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // Note 1: E5 (659.25 Hz)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now);
    gain1.gain.setValueAtTime(0.15, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc1.start(now);
    osc1.stop(now + 0.15);

    // Note 2: A5 (880 Hz) slightly delayed
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(880.00, now + 0.08);
    gain2.gain.setValueAtTime(0.15, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.35);
  }

  // Play buzzer for an incorrect answer (harsh descending sawtooth)
  playIncorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(90, now + 0.35);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.35);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  // Play a cheerful ascending arpeggio on leveling up
  playLevelUp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // C5 (523.25), E5 (659.25), G5 (783.99), C6 (1046.50)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const duration = 0.12;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * duration);

      gain.gain.setValueAtTime(0.15, now + idx * duration);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * duration + 0.25);

      osc.start(now + idx * duration);
      osc.stop(now + idx * duration + 0.25);
    });
  }

  // Play a dramatic minor tone on game over
  playGameOver() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // C4 (261.63), Eb4 (311.13), G3 (196.00), C3 (130.81)
    const notes = [261.63, 311.13, 196.00, 130.81];
    const duration = 0.18;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * duration);

      gain.gain.setValueAtTime(0.12, now + idx * duration);
      gain.gain.linearRampToValueAtTime(0.01, now + idx * duration + 0.4);

      osc.start(now + idx * duration);
      osc.stop(now + idx * duration + 0.4);
    });
  }

  // Play a grand victory fanfare (Major triad blast)
  playVictory() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const duration = 0.15;

    // Strummed introductory chord (C4, E4, G4, C5)
    const introFreqs = [261.63, 329.63, 392.00, 523.25];
    introFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      gain.gain.setValueAtTime(0.12, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

      osc.start(now + idx * 0.05);
      osc.stop(now + 0.4);
    });

    // High triumphant chord held together (C5, G5, C6) at +0.4s
    const chordFreqs = [523.25, 783.99, 1046.50];
    chordFreqs.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.4);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.005, now + 1.2); // Vibrato

      gain.gain.setValueAtTime(0.15, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 1.2);

      osc.start(now + 0.4);
      osc.stop(now + 1.2);
    });
  }
}

export const sounds = new SoundSynthesizer();
export default sounds;
