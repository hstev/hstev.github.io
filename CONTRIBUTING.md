# Contributing

Thanks for wanting to improve this project! Bug fixes, accessibility improvements, new pixel-font glyphs, new page types and documentation are all welcome.

## Before you start

- For anything bigger than a small fix, **open an issue first** to talk about it. That way nobody spends time on a change that won't be merged.
- If you only want to use the portfolio for yourself, you don't need to contribute anything back: just fork it (see the README).

## Development

Requires **Node 24** (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

Before opening a pull request, make sure `npm run build` succeeds.

## Guidelines

- **No frameworks or runtime dependencies.** The site is vanilla JS on purpose; Vite is only the build tool.
- **Content goes in `src/data/`, not in the code.** New pages read their text from a JSON file and are registered in `src/pages/index.js`.
- **Escape text from JSON** with `esc()` from `src/lib/dom.js` before putting it into HTML.
- **Keep the phone feel:** everything must work with the keyboard (arrows, Enter, Esc, number shortcuts), touch and the two soft keys.
- **Mobile-first:** check your change on a phone-sized screen as well as on desktop.
- **Accessibility:** keep `aria-label`s up to date and respect `prefers-reduced-motion`.
- Match the style of the surrounding code: small modules, short functions, CSS in the file of its component.

## Pull requests

1. Fork the repository and create a branch from `main`.
2. Keep each pull request focused on one change.
3. Describe what changed and why. For visual changes, add a screenshot or GIF.
4. Make sure the build passes.

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
