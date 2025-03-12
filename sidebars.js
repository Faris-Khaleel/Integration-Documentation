// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Health Insurance',
      items: ['health-insurance/index'],
    },
    {
      type: 'category',
      label: 'Motor Insurance',
      items: ['motor-insurance/index'],
    },
    {
      type: 'category',
      label: 'Home Insurance',
      items: ['home-insurance/index'],
    },
    {
      type: 'category',
      label: 'Pet Insurance',
      items: ['pet-insurance/index'],
    },
  ],
};

module.exports = sidebars;
