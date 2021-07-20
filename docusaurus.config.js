/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Basic guide",
  tagline: "React are cool",
  url: "https://jung0han.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jung0han", // Usually your GitHub org/user name.
  projectName: "jung0han.github.io", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
  },
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    navbar: {
      title: "Dongwoo",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Doc",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/jung0han",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Basic Guide, Inc. Built with React.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/jung0han/jung0han.github.io/edit/documentation/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/jung0han/jung0han.github.io/edit/documentation/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
