# ClipDen Network — website stub

A free, static companion website stub for **Boss / LuLu KEEP ClipDen Network**. Soft Chair cream/plum/sage look with the new ClipDen mark. Preparation only: no paid hosting, no store upload, no account system, no live map, no payments, and no live booking engine.

## Brand / logo (2026-09-30)

| Asset | Use |
|-------|-----|
| `logo/clipden-mark.svg` | Primary app mark (plum rounded square + scissors) |
| `logo/clipden-lockup.svg` | Mark + ClipDen wordmark (light) |
| `logo/clipden-lockup-on-dark.svg` | Mark + wordmark for dark grounds |
| `logo/clipden-mark-render.jpg` | Raster app-icon render / apple-touch |
| `logo/hero-atmosphere.jpg` | Full-bleed home hero atmosphere |

Header and hero lead with the **ClipDen** mark as the brand signal. Soft Chair honesty copy unchanged.

## Pages

| File | Role |
|------|------|
| `index.html` | Brand-first full-bleed hero, how ClipDen feels, map tease, feed tease |
| `feed.html` | Style/news feed with curated trend links (+ beard/grooming slot) |
| `settings.html` | Richer web settings: feed topics, gender, grooming, privacy, area |
| `for-clients.html` | Client discovery and profile preview |
| `for-providers.html` | Provider profile fields and manual-availability booking rule |
| `privacy.html` | Granular privacy controls (Cuts-specific — **not** the EST Google Sites URL) |
| `terms-prep.html` | Terms PREP placeholder + links to desk UGC/AUP pack |
| `help-assist-contact.html` | Help / Assist / Contact Us with Soft Chair honesty |

Shared: `styles.css` · `site.js` (hamburger drawer) · mobile app dock

## KEEP references

- `../WEBSITE-VISION-KEEP-2026-09-28.md` — app-like companion, style news feed, richer settings
- `../GENDER-PREFERENCE-KEEP-2026-09-28.md` — Male / Female / Other
- `../BEARD-MOUSTACHE-STYLES-KEEP-2026-09-28.md` — first-class facial-hair prefs
- Desk UGC: `/workspace/endrody-ops/desk/safety-ugc/` (AUP + liability PREP — not lawyer-reviewed)

## Open locally

```bash
cd /workspace/clipden
python3 -m http.server 8000
```

Then open <http://localhost:8000>. No build step.

This redesign also ships under `/clipden/` on the EST preview host when served from the parent site root.

## Scope honesty

- Forms are non-submitting visual stubs.
- Booking slots appear only after a provider manually publishes availability (none live here).
- Addresses default to hidden; “Licensed” / “Pending verify” are not official verification.
- Assist ≠ AI — human Help / Assist / Contact language only.
- Privacy for Cuts needs its **own** public URL later (do not reuse EST privacy).
- Terms / AUP are **PREP / not lawyer-reviewed**.
