import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zhengshou Lai',
  tagline: 'Associate Professor, School of Civil Engineering, Sun Yat-sen University',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lzhshou.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lzhshou', // Usually your GitHub org/user name.
  projectName: 'lzhshou.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Static site deployment branch

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/apaam/apaam.github.io/edit/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/apaam/apaam.github.io/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'APAAM',
      logo: {
        alt: 'APAAM Lab',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/people',
          position: 'left',
          label: 'nav.people',
        },
        {
          to: '/docs/research',
          position: 'left',
          label: 'nav.research',
        },
        {
          to: '/docs/publications',
          position: 'left',
          label: 'nav.publications',
        },
        {
          to: '/docs/teaching',
          position: 'left',
          label: 'nav.teaching',
        },
        {
          to: '/blog',
          position: 'left',
          label: 'nav.blog',
        },
        {
          to: '/docs/about',
          position: 'left',
          label: 'nav.about',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/apaam',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'footer.navigation',
          items: [
            {
              label: 'nav.research',
              to: '/docs/research',
            },
            {
              label: 'nav.publications',
              to: '/docs/publications',
            },
            {
              label: 'nav.people',
              to: '/docs/people',
            },
            {
              label: 'nav.teaching',
              to: '/docs/teaching',
            },
            {
              label: 'nav.about',
              to: '/docs/about',
            },
          ],
        },
        {
          title: 'footer.links',
          items: [
            {
              label: 'Google Scholar',
              href: 'https://scholar.google.com/citations?user=iiK6e1cAAAAJ',
            },
            {
              label: 'ORCID',
              href: 'https://orcid.org/0000-0002-2378-9193',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/apaam',
            },
            {
              label: 'SYSU',
              href: 'https://civil.sysu.edu.cn/teacher/1740',
            },
          ],
        },
        {
          title: 'footer.contact',
          items: [
            {
              label: 'footer.email',
              href: 'mailto:laizhengsh@mail.sysu.edu.cn',
            },
            {
              label: 'footer.address',
              to: '/docs/about',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} APAAM · Crafted with ClaudeBot`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
