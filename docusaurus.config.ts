import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { themes as prismThemes } from "prism-react-renderer";
import { version } from "./package.json";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Corepilot",
  tagline: "Maximize Your CORE Staking Rewards",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.corepilot.finance/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs",
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          auth: {
            specPath: "docs/api/auth/swagger.yaml",
            outputDir: "docs/api/auth",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          apiKey: {
            specPath: "docs/api/api-key/swagger.yaml",
            outputDir: "docs/api/api-key",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          subscription: {
            specPath: "docs/api/subscription/swagger.yaml",
            outputDir: "docs/api/subscription",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          apy: {
            specPath: "docs/api/apy/swagger.yaml",
            outputDir: "docs/api/apy",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          history: {
            specPath: "docs/api/history/swagger.yaml",
            outputDir: "docs/api/history",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig: {
    image: "img/logo.png",
    navbar: {
      logo: {
        alt: "b14g",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs/api",
          label: "API",
          position: "left",
          type: "docSidebar",
          sidebarId: "apiSidebar",
          activeBaseRegex: `/docs/`,
        },
        {
          href: "#",
          label: "X",
          position: "right",
        },
        {
          href: "#",
          label: "Discord",
          position: "right",
        },
        {
          href: "#",
          label: "Telegram",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Terms",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "API",
              to: "/docs/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "#",
            },
            {
              label: "Discord",
              href: "#",
            },
            {
              label: "X",
              href: "#",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Corepilot, All Rights Reserved. v${version}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
