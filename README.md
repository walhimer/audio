# Soundscapes (mark-walhimer.com/audio)

Static, **self-contained** pages for browser-based listening pieces: **vendored scripts** in-repo so the site works without relying on CDN availability (except where noted for optional remote samples).

The hub is [`index.html`](index.html); each piece lives in its own HTML file (or subfolder).

---

## What’s in this repo

| Path | Description |
|------|-------------|
| [`index.html`](index.html) | Soundscapes hub — links to each piece. |
| [`painting-with-john.html`](painting-with-john.html) | Generative *Painting with John*–style layer (p5 + p5.sound). |
| [`lib/p5.min.js`](lib/p5.min.js), [`lib/p5.sound.min.js`](lib/p5.sound.min.js) | **Vendored** p5 + p5.sound (no CDN required for this patch). |
| [`toneflow-lite/`](toneflow-lite/) | **Flow Lite** — Tone.js app; [`toneflow-lite/tone.js`](toneflow-lite/tone.js) is the library (bundled). |
| [`synths.html`](synths.html) | Redirect to the hub (legacy URL). |

---

## Painting with John

**File:** [`painting-with-john.html`](painting-with-john.html)

Generative soundtrack: bass drone (sine), triangle “clarinet” line on a minor pentatonic, pink-noise hits, reverb. All **synthesized** (no samples).

### Stack

| Piece | Role |
|--------|------|
| **HTML / CSS** | Layout, site nav, tap-to-start overlay. |
| **JavaScript** | Patch logic, timers, envelopes. |
| **[p5.js](https://p5js.org/)** | `setup` / `draw`, `random`, `midiToFreq`. |
| **[p5.sound](https://p5js.org/reference/#/libraries/p5.sound)** | Oscillators, noise, reverb (built on **Web Audio** inside the library). |

Scripts load from **`./lib/`** (committed in this repo), not from a CDN.

---

## Flow Lite (Tone.js)

**Entry:** [`toneflow-lite/index.html`](toneflow-lite/index.html)

Step sequencer / generative note UI using **Tone.js**. The **`toneflow-lite/tone.js`** file is a bundled copy of the library so the page runs **without a CDN**.

- **Synth modes:** fully offline once the page is loaded.
- **“Piano (samples)” mode:** loads **Salamander** MP3s from Tone’s public demo URL (`tonejs.github.io/audio/salamander/`). That part **requires network** the first time samples are fetched.

---

## Run locally

```bash
cd /path/to/this/repo
python3 -m http.server 8080
```

Then open e.g. `http://localhost:8080/`, `http://localhost:8080/painting-with-john.html`, or `http://localhost:8080/toneflow-lite/`.

(Audio often fails on raw `file://` opens — use a local server.)

---

## Deploy

Push **`main`** to the remote used for **mark-walhimer.com** `/audio/` (or GitHub Pages). No build step.

---

## Adding a new piece

1. Add `your-piece.html` (or a folder with `index.html`).
2. Link it from [`index.html`](index.html).
3. Prefer **vendoring** any third-party JS under `lib/` or next to the page so the repo stays deployable without CDN dependency.

---

## License

Your code: your usual project terms. Painting with John uses only synthesized audio (no sample packs). Flow Lite’s optional piano uses the public Salamander set documented by Tone.js for demos; check [Tone.js](https://tonejs.github.io/) / sample licensing if you redistribute that mode commercially.
