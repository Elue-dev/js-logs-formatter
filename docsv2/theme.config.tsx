import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://js-logs-formatter-docs.vercel.app/img/logo.webp"
        alt="js-logs-formatter logo"
        style={{ height: 35, width: 35, marginRight: 5, borderRadius: 50 }}
      />
      <p style={{ fontWeight: 700 }}>JS Logs Formatter</p>
    </div>
  ),
  project: {
    link: "https://github.com/Elue-dev/js-logs-formatter",
  },
  docsRepositoryBase: "https://github.com/Elue-dev/js-logs-formatter",
  footer: {
    content: `JS Logs Formatter © ${new Date().getFullYear()}`,
  },
  editLink: {
    content: () => null,
  },

  head: () => {
    const pathToTitleMap: Record<string, string> = {
      "/basic-usage": "Basic Usage",
      "/advanced-usage/api-reference": "API Reference",
      "/advanced-usage/customising-log-outputs": "Customising Log Outputs",
      "/intro": "Introduction",
      "/contributing": "Contributing",
    };
    const { asPath } = useRouter();

    const title = pathToTitleMap[asPath]
      ? `${pathToTitleMap[asPath]} – JS Logs Formatter`
      : "JS Logs Formatter";

    return (
      <>
        <title>{title}</title>
        <meta
          name="description"
          content="Documentation for JS Logs Formatter"
        />
      </>
    );
  },
};

export default config;
