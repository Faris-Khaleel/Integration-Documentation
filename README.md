# Shory API Documentation

This repository contains the API documentation for Shory Insurance Brokers built using [Docusaurus 2](https://docusaurus.io/).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# OR if you use yarn
yarn install
```

### Local Development

```bash
# Start the development server
npm run start

# OR with yarn
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build the static site
npm run build

# OR with yarn
yarn build
```

This command generates static content into the `build` directory and can be served using any static hosting service.

### Serve the Build Locally

```bash
# Serve the built website locally
npm run serve

# OR with yarn
yarn serve
```

This will serve the built website locally so you can test the production build.

## Project Structure

- `/docs/` - Documentation pages written in Markdown
- `/src/` - React components, pages, and CSS
- `/static/` - Static assets like images and favicons
- `/docusaurus.config.js` - Main configuration file
- `/sidebars.js` - Documentation sidebar configuration

## Additional Information

- For more information on Docusaurus, refer to the [official documentation](https://docusaurus.io/docs).
- For customizing the site further, check out the [API reference](https://docusaurus.io/docs/api).
