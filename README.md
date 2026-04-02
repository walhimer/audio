# Soundscapes (mark-walhimer.com/audio)

Static pages for browser-based listening pieces. The hub is [`index.html`](index.html); each piece is a separate HTML file.

---

## Painting with John

**File:** [`painting-with-john.html`](painting-with-john.html)

A small generative soundtrack inspired by the loose, patient feel of the *Painting with John* vibe: a low **bass drone** (sine), a **clarinet-like** line built from a triangle oscillator playing a **minor pentatonic** (MIDI notes 48–60), and occasional **pink-noise** hits—all through **reverb**. Nothing is sampled; it is all synthesized in real time.

### Stack (what it’s actually built with)

| Piece | Role |
|--------|------|
| **HTML** | Page shell, layout, “tap to start” overlay (needed for browser autoplay rules). |
| **JavaScript** | Patch logic: timers, note picks, amplitude envelopes. |
| **[p5.js](https://p5js.org/)** | Runs `setup` / `draw` and provides helpers like `random`, `midiToFreq`. |
| **[p5.sound](https://p5js.org/reference/#/libraries/p5.sound)** | Oscillators, noise, reverb—implemented **on top of the Web Audio API** inside the library. |

So: **yes, it ends up using the Web Audio API**, but you don’t write raw `AudioContext` nodes here—the **p5.sound** addon does that for you.

**Not used in this patch:** [Tone.js](https://tonejs.github.io/). (Tone.js is Web Audio–based too, but it’s a different library.)

**CDN (current):** p5 `1.11.11` from jsDelivr, loaded in the HTML file.

### How to run locally

1. Serve the folder over HTTP (browsers are picky about `file://` + audio), for example:  
   `python3 -m http.server 8080`
2. Open  
   `http://localhost:8080/painting-with-john.html`  
   and click / tap to start audio.

### Deploy

This repo powers **Soundscapes** on the main site (e.g. `/audio/`). Push to `main` on the remote you use for hosting; details depend on your DNS / Git host.

### License / attribution

The **code** is yours to manage under your usual project license. The **sound** is generative from oscillators and noise—no third-party sample packs in this file.

---

## Repo layout (short)

| File | Purpose |
|------|---------|
| `index.html` | Soundscapes hub — list of pieces. |
| `painting-with-john.html` | Painting with John patch. |
| `synths.html` | Redirect to the hub (legacy path). |

Add new pieces as `your-piece.html` and link them from `index.html`.
