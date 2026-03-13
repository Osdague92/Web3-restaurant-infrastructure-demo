# web3-restaurant-infrastructure-demo

A decentralized restaurant landing page prototype for **Fogón del Chino**, built with **Vite + Vanilla JavaScript**, designed for static hosting on **IPFS** and mapping to a **Web3 domain**.

## Features

- Hero section with neon styling and Chinese street-food aesthetic.
- Dynamic menu grid of dishes with image, description, and price.
- Web3 payments section for BTC, ETH, and MATIC wallet support.
- Educational Web3 section covering IPFS, Web3 domains, and censorship resistance.
- Footer links to OpenSea, Polygonscan, and GitHub.
- Mobile-first responsive design with dark UI and neon accents.
- Lightweight `.svg` images and lazy loading for performance.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vite

## Local Development

```bash
npm install
npm run dev
```

## Build for IPFS

```bash
npm run build
```

The production-ready static site is generated in:

```bash
dist/
```

This folder is ready to upload directly to IPFS pinning services.

## GitHub Action: IPFS Deployment via Pinata

The workflow file is located at:

```bash
.github/workflows/deploy-ipfs.yml
```

It performs:

1. Checkout repo
2. Install dependencies
3. Build the site
4. Upload `dist` artifact to IPFS using Pinata API

### Required GitHub Secret

- `PINATA_JWT` — JWT from your Pinata account.

## Suggested Web3 Domain Flow

1. Upload `dist` to IPFS and note CID.
2. Configure your Web3 domain (e.g., ENS/Unstoppable) content hash to that CID.
3. Access your decentralized site from compatible wallets, browsers, or gateways.

## Nota sobre PR y archivos binarios

GitHub no puede mostrar diff legible de imágenes binarias (`.webp`, `.png`, etc.), por eso las revisiones con comentarios inline se dificultan.
Para facilitar revisión de código en PR, este demo usa imágenes **SVG en texto plano**, que sí permiten diff y comentarios línea por línea.

Si prefieres assets fotográficos `.webp` para producción, puedes reemplazar los SVG sin cambiar la arquitectura estática/IPFS.
