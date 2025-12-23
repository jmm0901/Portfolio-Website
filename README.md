Data Science Portfolio (Local)

A small static portfolio site with animated background particles (emoji / Pokémon sprites), a projects section, and a resume preview modal.

Features
- Title/home section with animated particles (dots, emoji, or Pokémon sprites).
- Projects, About, Contact sections built with Tailwind utility classes.
- Resume preview modal (loads `/resume.pdf` in an iframe if present).
- Responsive layout with a mobile hamburger menu and particles disabled on small screens for performance.

Quick start (local)
1. Open a terminal in the project root (`c:\Website 2`).
2. Run a static server, for example with Python 3:

```powershell
py -3 -m http.server 8000
# or
python -m http.server 8000
```

3. Open http://localhost:8000/index.html in your browser.

Alternative (Node):
```powershell
npx serve -l 8000
```

Resume preview
- To enable the preview, add a `resume.pdf` file to the project root (`c:\Website 2\resume.pdf`).
- Click the **Resume** button to open a preview modal. If the file is missing you'll see a fallback message with instructions.

Customize
- Change site copy and default colors in `index.js` (the `defaultConfig` object).
- Adjust the Pokémon sprites used by editing the `pokemonSprites` array in `index.js` (currently loads from PokeAPI sprites).
- Edit styles in `style.css` to change particle sizes, modal appearance, or responsive breakpoints.

Troubleshooting
- If Pokémon images do not appear, the external sprite host may be blocked or offline. You can add local PNGs and update `pokemonSprites` to point to local file paths (e.g., `sprites/25.png`).
- If JavaScript errors appear, open DevTools → Console and paste the error here for assistance.

Files
- `index.html` — main page
- `style.css` — styles
- `index.js` — page scripts (particles, nav, resume modal)
- `resume.pdf` — (optional) put here to enable the preview

License
This project contains example code and public sprite URLs; review third-party asset licensing if you redistribute.
