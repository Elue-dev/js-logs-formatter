import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "JS Logs Formatter",
  tagline: "Readable and customizable server logs for development",
  favicon: "img/js-logs-formatter.webp",

  url: "https://js-logs-formatter-docs.vercel.app",
  baseUrl: "/",

  organizationName: "Elu-dev",
  projectName: "js-logs-formatter",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.webp",
    navbar: {
      title: "JS Logs Formatter",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/Elue-dev/js-logs-formatter",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `
      Created with ❤️ by <a href='https://x.com/eluewisdom_'>Wisdom Elue</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
