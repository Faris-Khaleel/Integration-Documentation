// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shory API Documentation',
  tagline: 'Integration guide for insurance brokers',
  favicon: 'img/shory-logo.png',

  // Set the production url of your site here
  url: 'https://api-docs.shory.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shory', // Updated to match organization name
  projectName: 'api-docs', // Updated to match repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove or replace the edit URL if needed
          editUrl: 'https://github.com/shory/api-docs/tree/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'Current',
              path: '',
            },
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0',
            },
          },
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with Shory logo
      logo: {
        alt: 'Shory Logo',
        src: 'img/shory-logo.png',
      },
      navbar: {
        title: 'Shory API',
        logo: {
          alt: 'Shory Logo',
          src: 'img/shory-logo.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'docs/health-insurance',
            position: 'left',
            label: 'Health Insurance',
          },
          {
            to: 'docs/home-insurance',
            position: 'left',
            label: 'Home Insurance',
          },
          {
            to: 'docs/motor-insurance',
            position: 'left',
            label: 'Motor Insurance',
          },
          {
            to: 'docs/pet-insurance',
            position: 'left',
            label: 'Pet Insurance',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [], // Removed the Docs section from footer
        copyright: `Copyright © ${new Date().getFullYear()} Shory Insurance Brokers. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

// Update the references to match your actual folder structure
// For example, if you have 'car-ins' instead of 'car-insurance', update accordingly

export default config;
