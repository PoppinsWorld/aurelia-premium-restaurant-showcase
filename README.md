# AURELIA — Premium Cinematic Restaurant Showcase

A premium, cinematic luxury restaurant showcase built with cutting-edge web technologies and integrated with the Flutter ecosystem.

**Live Site:** [https://poppinsworld.github.io/aurelia-premium-restaurant-showcase/](https://poppinsworld.github.io/aurelia-premium-restaurant-showcase/)

---

## Screenshots

<!-- Replace with actual screenshots -->
| Hero Section | Gallery | Mobile |
|:---:|:---:|:---:|
| ![Hero](public/screenshots/hero.png) | ![Gallery](public/screenshots/gallery.png) | ![Mobile](public/screenshots/mobile.png) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js (Static Export) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Smooth Scroll** | Lenis |
| **Language** | TypeScript |
| **Mobile Ecosystem** | Flutter (APK integration) |
| **Deployment** | GitHub Pages via GitHub Actions |

---

## Features

- **Cinematic hero section** with parallax and motion effects
- **Premium dark luxury design** with gold accent tokens
- **Seamless scrolling** powered by Lenis
- **Responsive layout** — optimized for all screen sizes
- **GPU-friendly animations** for buttery-smooth performance
- **Flutter APK downloads** — native mobile app available directly from the site
- **Static export** — fully compatible with GitHub Pages

---

## APK Downloads

The site hosts Flutter-built APKs for download directly from the browser. Three architectures are supported:

| Architecture | File |
|---|---|
| ARM64 (modern devices) | `app-arm64-v8a-release.apk` |
| ARMv7 (older devices) | `app-armeabi-v7a-release.apk` |
| x86_64 (emulators/Chrome OS) | `app-x86_64-release.apk` |

APK files are located in `public/apk/` and served as static assets via GitHub Pages.

---

## GitHub Pages Deployment

This project uses **GitHub Actions** to automatically deploy to GitHub Pages:

1. Push to the `main` branch triggers the workflow
2. `npm ci` installs dependencies
3. `npm run build` produces a static export in `out/`
4. The `out/` directory is deployed to GitHub Pages

The static export is configured in `next.config.ts` with `output: "export"` and `trailingSlash: true`.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/PoppinsWorld/aurelia-premium-restaurant-showcase.git
cd aurelia-premium-restaurant-showcase

# Install dependencies
npm install

# Run development server
npm run dev

# Build static export
npm run build
```

---

## Project Structure

```
├── app/                  # Next.js app directory (pages, layouts)
├── components/           # React components
│   ├── animations/       # Motion & animation utilities
│   ├── downloads/        # APK download section
│   ├── effects/          # Visual effects
│   ├── hero/             # Hero section
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── showcase/         # Showcase gallery
├── content/              # Content data
├── data/                 # Static data files
├── lib/                  # Utility libraries
├── public/               # Static assets
│   ├── apk/              # Flutter APK files
│   ├── images/           # Hero & showcase images
│   ├── logo/             # Brand assets
│   └── screenshots/      # Site screenshots
├── flutter-apk/          # Flutter APK source builds
└── .github/workflows/    # CI/CD — GitHub Pages deployment
```

---

## Developer

**Souvik Sengupta**
Flutter Developer & UI/UX Product Designer

---

## License

This project is a portfolio showcase. All rights reserved.
