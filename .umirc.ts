import { defineConfig } from "dumi";

export default defineConfig({
	title: "tudou",
	favicon: "https://avatars.githubusercontent.com/u/23497764?s=400&u=9e73b762305e0b25d2ef6a16e004e22c6739e5e9&v=4",
	logo: "https://avatars.githubusercontent.com/u/23497764?s=400&u=9e73b762305e0b25d2ef6a16e004e22c6739e5e9&v=4",
  locales: [['zh-CN', '中文']],
  base: "tudou/",
  publicPath: "tudou/",
	exportStatic: {
		dynamicRoot: true
	},
	outputPath: "docs-dist",
	mode: "site",
	hash: true,
  navs: [
    null,
    {
      title: "Ant Mobile",
      path: "https://mobile.ant.design/index-cn",
    },
    {
      title: "RC",
      path: "http://react-component.github.io/badgeboard/",
    },
    {
      title: "GitHub",
      path: 'https://github.com/umijs/dumi',
    },
  ]
});
