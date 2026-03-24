type SoundName =
  | "dial_up"
  | "boot"
  | "click"
  | "hover"
  | "navigate"
  | "error"
  | "success"
  | "notification"
  | "select"
  | "back"
  | "coin"
  | "explosion"
  | "type"
  | "scanline";

type MusicTrack = {
  name: string;
  bpm: number;
  notes: Array<{ freq: number; beats: number; gate?: number }>;
};

type SoundState = {
  muted: boolean;
  volume: number;
  ambientMode: boolean;
  reducedMotion: boolean;
  unlocked: boolean;
  musicPlaying: boolean;
  musicVolume: number;
  activeTrack: number;
};

type StateListener = (state: SoundState) => void;

const STORAGE_KEYS = {
  muted: "wayback_sound_muted",
  volume: "wayback_sound_volume",
  ambientMode: "wayback_sound_ambient",
  musicVolume: "wayback_music_volume",
  activeTrack: "wayback_music_track"
};

class WebSoundEngine {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private state: SoundState = {
    muted: false,
    volume: 0.55,
    ambientMode: false,
    reducedMotion: false,
    unlocked: false,
    musicPlaying: false,
    musicVolume: 0.35,
    activeTrack: 0
  };
  private listeners = new Set<StateListener>();
  private scanlineNode: GainNode | null = null;
  private ambientInterval: number | null = null;
  private musicTimer: number | null = null;
  private trackStep = 0;

  private tracks: MusicTrack[] = [
    {
      name: "Dial-Up Dreams",
      bpm: 78,
      notes: [
        { freq: 220, beats: 1 },
        { freq: 261.63, beats: 1 },
        { freq: 329.63, beats: 1 },
        { freq: 392, beats: 1 },
        { freq: 329.63, beats: 1 },
        { freq: 261.63, beats: 1 },
        { freq: 196, beats: 2 },
        { freq: 174.61, beats: 1 },
        { freq: 220, beats: 1 },
        { freq: 261.63, beats: 1 },
        { freq: 293.66, beats: 1 },
        { freq: 261.63, beats: 2 }
      ]
    },
    {
      name: "Dot Com Hustle",
      bpm: 126,
      notes: [
        { freq: 261.63, beats: 0.5 },
        { freq: 329.63, beats: 0.5 },
        { freq: 392, beats: 0.5 },
        { freq: 523.25, beats: 0.5 },
        { freq: 392, beats: 0.5 },
        { freq: 329.63, beats: 0.5 },
        { freq: 293.66, beats: 0.5 },
        { freq: 349.23, beats: 0.5 },
        { freq: 440, beats: 1 },
        { freq: 392, beats: 1 },
        { freq: 329.63, beats: 1 },
        { freq: 261.63, beats: 1 }
      ]
    },
    {
      name: "404 Blues",
      bpm: 68,
      notes: [
        { freq: 196, beats: 1.5 },
        { freq: 233.08, beats: 1 },
        { freq: 261.63, beats: 1 },
        { freq: 196, beats: 1 },
        { freq: 174.61, beats: 2 },
        { freq: 146.83, beats: 2 },
        { freq: 164.81, beats: 1 },
        { freq: 196, beats: 1 },
        { freq: 220, beats: 1 },
        { freq: 196, beats: 2 }
      ]
    }
  ];

  constructor() {
    if (typeof window !== "undefined") {
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
      this.state.reducedMotion = reduced;
      this.state.muted = reduced ? true : localStorage.getItem(STORAGE_KEYS.muted) === "1";
      this.state.volume = this.clamp(Number(localStorage.getItem(STORAGE_KEYS.volume) || "0.55"), 0, 1);
      this.state.ambientMode = !reduced && localStorage.getItem(STORAGE_KEYS.ambientMode) === "1";
      this.state.musicVolume = this.clamp(Number(localStorage.getItem(STORAGE_KEYS.musicVolume) || "0.35"), 0, 1);
      this.state.activeTrack = Math.max(0, Math.min(this.tracks.length - 1, Number(localStorage.getItem(STORAGE_KEYS.activeTrack) || "0")));

      const unlock = () => {
        this.ensureContext();
        this.state.unlocked = true;
        this.emit();
        if (this.state.ambientMode) {
          this.startAmbient();
        }
        window.removeEventListener("pointerdown", unlock);
        window.removeEventListener("keydown", unlock);
      };

      window.addEventListener("pointerdown", unlock, { once: true });
      window.addEventListener("keydown", unlock, { once: true });
    }
  }

  private emit() {
    this.listeners.forEach((listener) => {
      listener(this.getState());
    });
  }

  private ensureContext() {
    if (typeof window === "undefined") {
      return;
    }
    if (!this.context) {
      const Ctx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) {
        return;
      }
      this.context = new Ctx();
      this.master = this.context.createGain();
      this.master.gain.value = this.state.muted ? 0 : this.state.volume;
      this.master.connect(this.context.destination);
    }

    if (this.context.state === "suspended") {
      void this.context.resume();
    }
  }

  private now() {
    return this.context?.currentTime || 0;
  }

  private clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  }

  private createVoice(type: OscillatorType, frequency: number, start: number, duration: number, gainAmount: number, filterFreq?: number) {
    if (!this.context || !this.master) {
      return;
    }

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    let target: AudioNode = gain;

    if (filterFreq) {
      const filter = this.context.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = filterFreq;
      filter.Q.value = 5;
      gain.connect(filter);
      filter.connect(this.master);
      target = filter;
    } else {
      gain.connect(this.master);
    }

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainAmount, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.connect(gain);
    osc.start(start);
    osc.stop(start + duration + 0.02);

    void target;
  }

  private playNoise(start: number, duration: number, gainAmount: number, lowPass = 2200) {
    if (!this.context || !this.master) {
      return;
    }

    const bufferSize = Math.ceil(this.context.sampleRate * duration);
    const noiseBuffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      output[i] = Math.random() * 2 - 1;
    }

    const source = this.context.createBufferSource();
    const filter = this.context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = lowPass;

    const gain = this.context.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainAmount, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    source.buffer = noiseBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    source.start(start);
    source.stop(start + duration + 0.02);
  }

  play(name: SoundName, opts?: { volume?: number }) {
    if (this.state.reducedMotion || this.state.muted) {
      return;
    }

    this.ensureContext();
    if (!this.context || !this.master || !this.state.unlocked) {
      return;
    }

    const base = this.now();
    const volume = this.clamp((opts?.volume ?? 1) * this.state.volume, 0, 1);

    switch (name) {
      case "click":
        this.createVoice("square", 880, base, 0.04, 0.15 * volume);
        this.playNoise(base, 0.025, 0.06 * volume, 4200);
        break;
      case "hover":
        this.createVoice("triangle", 660, base, 0.05, 0.07 * volume);
        break;
      case "navigate":
        this.createVoice("sawtooth", 260, base, 0.2, 0.06 * volume);
        this.createVoice("sawtooth", 420, base + 0.08, 0.22, 0.05 * volume);
        this.playNoise(base, 0.2, 0.03 * volume, 1800);
        break;
      case "boot":
        this.createVoice("sine", 523.25, base, 0.25, 0.08 * volume);
        this.createVoice("sine", 659.25, base + 0.15, 0.35, 0.08 * volume);
        this.createVoice("sine", 783.99, base + 0.3, 0.4, 0.08 * volume);
        break;
      case "error":
        this.createVoice("square", 220, base, 0.16, 0.12 * volume);
        this.createVoice("square", 164.81, base + 0.1, 0.22, 0.12 * volume);
        break;
      case "success":
        this.createVoice("square", 523.25, base, 0.1, 0.09 * volume);
        this.createVoice("square", 659.25, base + 0.1, 0.1, 0.09 * volume);
        this.createVoice("square", 783.99, base + 0.2, 0.18, 0.09 * volume);
        break;
      case "notification":
        this.createVoice("sine", 392, base, 0.18, 0.08 * volume);
        this.createVoice("sine", 523.25, base + 0.15, 0.24, 0.08 * volume);
        break;
      case "select":
        this.createVoice("square", 740, base, 0.06, 0.08 * volume);
        break;
      case "back":
        this.createVoice("triangle", 540, base, 0.06, 0.06 * volume);
        this.createVoice("triangle", 420, base + 0.05, 0.08, 0.06 * volume);
        break;
      case "coin":
        this.createVoice("square", 1318.5, base, 0.05, 0.1 * volume);
        this.createVoice("square", 1760, base + 0.05, 0.09, 0.1 * volume);
        break;
      case "explosion":
        this.playNoise(base, 0.26, 0.12 * volume, 900);
        this.createVoice("sawtooth", 110, base, 0.18, 0.06 * volume);
        this.createVoice("triangle", 74, base + 0.06, 0.24, 0.05 * volume);
        break;
      case "type":
        this.createVoice("square", 1020, base, 0.025, 0.05 * volume);
        break;
      case "dial_up": {
        const steps = [420, 620, 510, 980, 760, 1480, 430, 1200, 680, 390, 1020, 540, 1600];
        steps.forEach((freq, index) => {
          this.createVoice(index % 2 ? "sine" : "square", freq, base + index * 0.25, 0.2, 0.05 * volume);
        });
        this.playNoise(base + 0.7, 2.8, 0.035 * volume, 2800);
        break;
      }
      case "scanline":
        this.startScanlineLoop();
        break;
      default:
        break;
    }
  }

  private startScanlineLoop() {
    if (!this.context || !this.master || this.scanlineNode) {
      return;
    }

    const osc = this.context.createOscillator();
    const lfo = this.context.createOscillator();
    const lfoGain = this.context.createGain();
    const gain = this.context.createGain();
    const filter = this.context.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.value = 58;
    lfo.type = "sine";
    lfo.frequency.value = 0.07;
    lfoGain.gain.value = 3;
    gain.gain.value = this.state.muted ? 0 : this.state.volume * 0.02;
    filter.type = "lowpass";
    filter.frequency.value = 220;

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);

    osc.start();
    lfo.start();

    this.scanlineNode = gain;
  }

  private stopAmbient() {
    if (this.ambientInterval) {
      window.clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
    this.stopMusic();
  }

  private randomAmbientChirp() {
    if (this.state.muted || !this.state.ambientMode) {
      return;
    }
    this.play("dial_up", { volume: 0.22 });
  }

  startAmbient() {
    if (typeof window === "undefined") {
      return;
    }
    this.play("scanline");
    this.stopAmbient();

    const schedule = () => {
      const nextMs = 10000 + Math.floor(Math.random() * 20000);
      this.ambientInterval = window.setTimeout(() => {
        this.randomAmbientChirp();
        schedule();
      }, nextMs);
    };

    schedule();
  }

  setAmbientMode(enabled: boolean) {
    this.state.ambientMode = enabled;
    localStorage.setItem(STORAGE_KEYS.ambientMode, enabled ? "1" : "0");
    if (enabled && this.state.unlocked && !this.state.muted) {
      this.startAmbient();
    } else {
      this.stopAmbient();
    }
    this.emit();
  }

  setMuted(muted: boolean) {
    this.state.muted = muted;
    localStorage.setItem(STORAGE_KEYS.muted, muted ? "1" : "0");
    if (this.master) {
      this.master.gain.value = muted ? 0 : this.state.volume;
    }
    if (muted) {
      this.stopMusic();
      this.stopAmbient();
    } else if (this.state.ambientMode && this.state.unlocked) {
      this.startAmbient();
    }
    this.emit();
  }

  toggleMute() {
    this.setMuted(!this.state.muted);
  }

  setVolume(volume: number) {
    this.state.volume = this.clamp(volume, 0, 1);
    localStorage.setItem(STORAGE_KEYS.volume, String(this.state.volume));
    if (this.master && !this.state.muted) {
      this.master.gain.value = this.state.volume;
    }
    this.emit();
  }

  getTracks() {
    return this.tracks.map((track, index) => ({
      index,
      name: track.name
    }));
  }

  private playMusicStep() {
    if (!this.state.musicPlaying || this.state.muted || !this.state.unlocked) {
      return;
    }

    const track = this.tracks[this.state.activeTrack];
    const note = track.notes[this.trackStep % track.notes.length];
    const beatDuration = 60 / track.bpm;
    const stepDuration = note.beats * beatDuration;

    this.ensureContext();
    if (!this.context || !this.master) {
      return;
    }

    const start = this.now();
    const osc = this.context.createOscillator();
    const vib = this.context.createOscillator();
    const vibGain = this.context.createGain();
    const gain = this.context.createGain();
    const filter = this.context.createBiquadFilter();

    osc.type = "square";
    osc.frequency.value = note.freq;
    vib.type = "sine";
    vib.frequency.value = 5;
    vibGain.gain.value = 3;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(this.state.musicVolume * this.state.volume * 0.25, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + stepDuration * (note.gate ?? 0.9));
    filter.type = "lowpass";
    filter.frequency.value = 1900;

    vib.connect(vibGain);
    vibGain.connect(osc.frequency);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);

    osc.start(start);
    vib.start(start);
    osc.stop(start + stepDuration);
    vib.stop(start + stepDuration);

    this.trackStep += 1;
    this.musicTimer = window.setTimeout(() => this.playMusicStep(), stepDuration * 1000);
  }

  toggleMusic() {
    this.state.musicPlaying = !this.state.musicPlaying;
    if (this.state.musicPlaying) {
      this.trackStep = 0;
      this.playMusicStep();
    } else {
      this.stopMusic();
    }
    this.emit();
  }

  stopMusic() {
    this.state.musicPlaying = false;
    if (this.musicTimer) {
      window.clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
    this.emit();
  }

  nextTrack() {
    this.state.activeTrack = (this.state.activeTrack + 1) % this.tracks.length;
    localStorage.setItem(STORAGE_KEYS.activeTrack, String(this.state.activeTrack));
    this.trackStep = 0;
    if (this.state.musicPlaying) {
      this.stopMusic();
      this.state.musicPlaying = true;
      this.playMusicStep();
    }
    this.play("select", { volume: 0.7 });
    this.emit();
  }

  setMusicVolume(volume: number) {
    this.state.musicVolume = this.clamp(volume, 0, 1);
    localStorage.setItem(STORAGE_KEYS.musicVolume, String(this.state.musicVolume));
    this.emit();
  }

  subscribe(listener: StateListener) {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  getState(): SoundState {
    return { ...this.state };
  }
}

export const SoundEngine = new WebSoundEngine();
