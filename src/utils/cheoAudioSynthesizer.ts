/**
 * Web Audio API synthesizer for authentic Vietnamese Chèo traditional instruments and melodies.
 * Procedurally generates realistic acoustic timbres: Trống Đế, Đàn Nguyệt, Đàn Nhị, Sáo Trúc, Trống Cơm, Thanh La & Mõ.
 */

class CheoAudioSynthesizer {
  private ctx: AudioContext | null = null
  private activeNodes: Array<{ stop?: () => void; disconnect: () => void }> = []
  private stopTimer: number | null = null

  private getContext(): AudioContext {
    if (!this.ctx || this.ctx.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.ctx = new AudioCtx()
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume()
    }
    return this.ctx
  }

  public stopAll() {
    if (this.stopTimer) {
      window.clearTimeout(this.stopTimer)
      this.stopTimer = null
    }
    this.activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop()
        node.disconnect()
      } catch {
        // ignore
      }
    })
    this.activeNodes = []
  }

  // --- TRỐNG ĐẾ (Chèo Small Drum): Tùng (membrane) & Cắc (wood rim) ---
  public playTrongDe(onEnded?: () => void) {
    this.stopAll()
    const ctx = this.getContext()
    const now = ctx.currentTime

    // Pattern: Tùng (0.0s) ... Cắc (0.4s) ... Tùng (0.8s) - Tùng (1.05s) - Cắc (1.3s)
    const playTung = (time: number, isShort = false) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(140, time)
      osc.frequency.exponentialRampToValueAtTime(55, time + (isShort ? 0.2 : 0.35))

      gain.gain.setValueAtTime(0.8, time)
      gain.gain.exponentialRampToValueAtTime(0.001, time + (isShort ? 0.22 : 0.38))

      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(time)
      osc.stop(time + (isShort ? 0.25 : 0.4))
      this.activeNodes.push(osc, gain)
    }

    const playCac = (time: number) => {
      const bufferSize = Math.floor(ctx.sampleRate * 0.08)
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }
      const noise = ctx.createBufferSource()
      noise.buffer = buffer

      const filter = ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(1800, time)
      filter.Q.setValueAtTime(6, time)

      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.9, time)
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.07)

      const osc = ctx.createOscillator()
      const oscGain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(950, time)
      osc.frequency.exponentialRampToValueAtTime(400, time + 0.05)
      oscGain.gain.setValueAtTime(0.5, time)
      oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.05)

      noise.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.connect(oscGain)
      oscGain.connect(ctx.destination)

      noise.start(time)
      noise.stop(time + 0.08)
      osc.start(time)
      osc.stop(time + 0.06)
      this.activeNodes.push(noise, filter, gain, osc, oscGain)
    }

    playTung(now + 0.05)
    playCac(now + 0.45)
    playTung(now + 0.85, true)
    playTung(now + 1.1, true)
    playCac(now + 1.35)

    this.stopTimer = window.setTimeout(() => {
      if (onEnded) onEnded()
    }, 1700)
  }

  // --- ĐÀN NGUYỆT (Moon Lute): Plucked pentatonic with pitch bends ---
  public playDanNguyet(onEnded?: () => void) {
    this.stopAll()
    const ctx = this.getContext()
    const now = ctx.currentTime

    const notes = [
      { f: 293.66, t: 0.05, d: 0.45, bendTo: 329.63 },
      { f: 392.00, t: 0.55, d: 0.40, bendTo: 440.00 },
      { f: 440.00, t: 0.95, d: 0.35, bendTo: 440.00 },
      { f: 523.25, t: 1.30, d: 0.45, bendTo: 587.33 },
      { f: 392.00, t: 1.80, d: 0.80, bendTo: 293.66 }
    ]

    notes.forEach(note => {
      const startT = now + note.t
      const osc = ctx.createOscillator()
      const osc2 = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc2.type = 'sawtooth'

      osc.frequency.setValueAtTime(note.f, startT)
      osc.frequency.linearRampToValueAtTime(note.bendTo, startT + note.d * 0.5)

      osc2.frequency.setValueAtTime(note.f * 2, startT)
      osc2.frequency.linearRampToValueAtTime(note.bendTo * 2, startT + note.d * 0.5)

      gain.gain.setValueAtTime(0.001, startT)
      gain.gain.linearRampToValueAtTime(0.6, startT + 0.015)
      gain.gain.exponentialRampToValueAtTime(0.001, startT + note.d)

      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1600, startT)
      filter.frequency.exponentialRampToValueAtTime(600, startT + note.d)

      osc.connect(filter)
      osc2.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(startT)
      osc.stop(startT + note.d + 0.05)
      osc2.start(startT)
      osc2.stop(startT + note.d + 0.05)
      this.activeNodes.push(osc, osc2, filter, gain)
    })

    this.stopTimer = window.setTimeout(() => {
      if (onEnded) onEnded()
    }, 2800)
  }

  // --- ĐÀN NHỊ (Two-String Bowed Fiddle): Expressive bowed saw with vibrato ---
  public playDanNhi(onEnded?: () => void) {
    this.stopAll()
    const ctx = this.getContext()
    const now = ctx.currentTime

    const phrases = [
      { f: 392.00, t: 0.05, d: 0.7, slideTo: 440.00 },
      { f: 440.00, t: 0.80, d: 0.6, slideTo: 523.25 },
      { f: 587.33, t: 1.45, d: 0.9, slideTo: 523.25 },
      { f: 392.00, t: 2.40, d: 1.1, slideTo: 392.00 }
    ]

    phrases.forEach(p => {
      const startT = now + p.t
      const osc = ctx.createOscillator()
      const vibrato = ctx.createOscillator()
      const vibratoGain = ctx.createGain()
      const bodyFilter = ctx.createBiquadFilter()
      const bodyFilter2 = ctx.createBiquadFilter()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(p.f, startT)
      osc.frequency.exponentialRampToValueAtTime(p.slideTo, startT + p.d * 0.7)

      vibrato.frequency.setValueAtTime(5.5, startT)
      vibratoGain.gain.setValueAtTime(10, startT)
      vibrato.connect(osc.frequency)

      bodyFilter.type = 'bandpass'
      bodyFilter.frequency.setValueAtTime(480, startT)
      bodyFilter.Q.setValueAtTime(3, startT)

      bodyFilter2.type = 'bandpass'
      bodyFilter2.frequency.setValueAtTime(1200, startT)
      bodyFilter2.Q.setValueAtTime(4, startT)

      gain.gain.setValueAtTime(0.001, startT)
      gain.gain.linearRampToValueAtTime(0.45, startT + 0.12)
      gain.gain.setValueAtTime(0.4, startT + p.d * 0.75)
      gain.gain.exponentialRampToValueAtTime(0.001, startT + p.d)

      osc.connect(bodyFilter)
      osc.connect(bodyFilter2)
      bodyFilter.connect(gain)
      bodyFilter2.connect(gain)
      gain.connect(ctx.destination)

      vibrato.start(startT)
      vibrato.stop(startT + p.d)
      osc.start(startT)
      osc.stop(startT + p.d)
      this.activeNodes.push(osc, vibrato, vibratoGain, bodyFilter, bodyFilter2, gain)
    })

    this.stopTimer = window.setTimeout(() => {
      if (onEnded) onEnded()
    }, 3600)
  }

  // --- SÁO TRÚC (Bamboo Flute): Breathy, pure tone with throat vibrato ---
  public playSaoTruc(onEnded?: () => void) {
    this.stopAll()
    const ctx = this.getContext()
    const now = ctx.currentTime

    const notes = [
      { f: 587.33, t: 0.05, d: 0.6 },
      { f: 659.25, t: 0.70, d: 0.5 },
      { f: 783.99, t: 1.25, d: 0.6 },
      { f: 880.00, t: 1.90, d: 0.9 }
    ]

    notes.forEach(n => {
      const startT = now + n.t
      const osc = ctx.createOscillator()
      const oscHarmonic = ctx.createOscillator()
      const vibrato = ctx.createOscillator()
      const vibGain = ctx.createGain()
      const gain = ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(n.f, startT)

      oscHarmonic.type = 'sine'
      oscHarmonic.frequency.setValueAtTime(n.f * 2, startT)

      vibrato.frequency.setValueAtTime(5.8, startT)
      vibGain.gain.setValueAtTime(8, startT)
      vibrato.connect(osc.frequency)

      gain.gain.setValueAtTime(0.001, startT)
      gain.gain.linearRampToValueAtTime(0.4, startT + 0.08)
      gain.gain.exponentialRampToValueAtTime(0.001, startT + n.d)

      const harmGain = ctx.createGain()
      harmGain.gain.setValueAtTime(0.12, startT)

      osc.connect(gain)
      oscHarmonic.connect(harmGain)
      harmGain.connect(gain)
      gain.connect(ctx.destination)

      vibrato.start(startT)
      vibrato.stop(startT + n.d)
      osc.start(startT)
      osc.stop(startT + n.d)
      oscHarmonic.start(startT)
      oscHarmonic.stop(startT + n.d)
      this.activeNodes.push(osc, oscHarmonic, vibrato, vibGain, harmGain, gain)
    })

    this.stopTimer = window.setTimeout(() => {
      if (onEnded) onEnded()
    }, 2900)
  }

  // --- TRỐNG CƠM (Rice Drum): Muted, warm hand patting ---
  public playTrongCom(onEnded?: () => void) {
    this.stopAll()
    const ctx = this.getContext()
    const now = ctx.currentTime

    const beats = [
      { t: 0.05, f: 120, g: 0.7, d: 0.25 },
      { t: 0.45, f: 165, g: 0.5, d: 0.18 },
      { t: 0.85, f: 120, g: 0.7, d: 0.25 },
      { t: 1.25, f: 190, g: 0.6, d: 0.15 },
      { t: 1.48, f: 165, g: 0.5, d: 0.15 },
      { t: 1.70, f: 120, g: 0.8, d: 0.35 }
    ]

    beats.forEach(b => {
      const startT = now + b.t
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(b.f, startT)
      osc.frequency.exponentialRampToValueAtTime(b.f * 0.7, startT + b.d)

      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(450, startT)

      gain.gain.setValueAtTime(b.g, startT)
      gain.gain.exponentialRampToValueAtTime(0.001, startT + b.d)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(startT)
      osc.stop(startT + b.d + 0.05)
      this.activeNodes.push(osc, filter, gain)
    })

    this.stopTimer = window.setTimeout(() => {
      if (onEnded) onEnded()
    }, 2200)
  }

  // --- THANH LA & MÕ: Metallic chime and hollow woodblock ---
  public playThanhLaMo(onEnded?: () => void) {
    this.stopAll()
    const ctx = this.getContext()
    const now = ctx.currentTime

    const playMo = (time: number) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      osc.type = 'square'
      osc.frequency.setValueAtTime(680, time)
      osc.frequency.exponentialRampToValueAtTime(320, time + 0.04)

      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(850, time)
      filter.Q.setValueAtTime(4, time)

      gain.gain.setValueAtTime(0.8, time)
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.045)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(time)
      osc.stop(time + 0.05)
      this.activeNodes.push(osc, filter, gain)
    }

    const playThanhLa = (time: number) => {
      const freqs = [840, 1260, 2180, 3100]
      freqs.forEach(f => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.setValueAtTime(f, time)
        gain.gain.setValueAtTime(0.25, time)
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.7)

        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(time)
        osc.stop(time + 0.75)
        this.activeNodes.push(osc, gain)
      })
    }

    playMo(now + 0.05)
    playMo(now + 0.25)
    playThanhLa(now + 0.5)
    playMo(now + 1.1)
    playMo(now + 1.25)
    playThanhLa(now + 1.45)

    this.stopTimer = window.setTimeout(() => {
      if (onEnded) onEnded()
    }, 2300)
  }

  // --- PLAY ANY INSTRUMENT BY ID ---
  public playInstrument(id: string, onEnded?: () => void) {
    if (id === 'trong-de') this.playTrongDe(onEnded)
    else if (id === 'dan-nguyet') this.playDanNguyet(onEnded)
    else if (id === 'dan-nhi') this.playDanNhi(onEnded)
    else if (id === 'sao-truc') this.playSaoTruc(onEnded)
    else if (id === 'trong-com') this.playTrongCom(onEnded)
    else if (id === 'thanh-la-mo') this.playThanhLaMo(onEnded)
    else this.playDanNguyet(onEnded)
  }

  // --- MELODIES (Phòng thẩm âm) ---
  public playMelody(melodyId: string, onEnded?: () => void) {
    this.stopAll()
    if (melodyId === 'dao-lieu') {
      this.playSaoTruc(() => {
        this.playDanNguyet(onEnded)
      })
    } else if (melodyId === 'quan-tu-vu-dich') {
      this.playDanNhi(onEnded)
    } else if (melodyId === 'sa-lech-chenh') {
      this.playDanNguyet(onEnded)
    } else if (melodyId === 'he-moi') {
      this.playThanhLaMo(() => {
        this.playTrongDe(onEnded)
      })
    } else {
      this.playDanNguyet(onEnded)
    }
  }
}

export const cheoAudio = new CheoAudioSynthesizer()
