// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'pronak.',
  tagline: 'Cats are the cutest animals (and otters too 🦦).',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#94CEC4',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '8BF6E7884998D807',
      },
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ronaksahai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/kite-tutorials/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ronaksahai', // Usually your GitHub org/user name.
  projectName: 'kite-tutorials', // Usually your repo name.

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'UT7PE2HGLJ',
        apiKey: '1e172ad4e33b00012ee3d858b284ec9a',
        indexName: 'Tutorials Website',
        contextualSearch: true,
      },

      // Replace with your project's social card
      image: 'img/pronak-social-card.png',
      navbar: {
        title: 'pronak.',
        logo: {
          alt: 'pronak. avatar',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/ronaksahai/kite-tutorials',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Official Kite Links',
            items: [
              {
                label: 'Kite Support Server',
                href: 'https://discord.gg/dvGj3CmwP6',
              },
              {
                label: 'Kite Dashboard',
                href: 'https://kite.onl/',
              },
              {
                label: 'Kite Docs',
                href: 'https://docs.kite.onl/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Discord - Personal Account',
                href: 'https://discord.com/users/632593971104841728',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ronaksahai/kite-tutorials',
              },
            ],
          },
        ],
        // copyright: `The site icon is a Copyright © ${new Date().getFullYear()} Ronak Sahai`,
        copyright: `This site is <b>in no way officially affiliated with Kite</b> or its creators. <br/>Tutorials made with 💛 by Ronak Sahai.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
