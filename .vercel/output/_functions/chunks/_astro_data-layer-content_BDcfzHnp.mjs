const _astro_dataLayerContent = [["Map",1,2,9,10],"meta::meta",["Map",3,4,5,6,7,8],"astro-version","5.1.1","content-config-digest","0f983bfb1b4394e1","astro-config-digest","{\"root\":{},\"srcDir\":{},\"publicDir\":{},\"outDir\":{},\"cacheDir\":{},\"site\":\"https://example.com\",\"compressHTML\":true,\"base\":\"/\",\"trailingSlash\":\"ignore\",\"output\":\"server\",\"scopedStyleStrategy\":\"attribute\",\"build\":{\"format\":\"directory\",\"client\":{},\"server\":{},\"assets\":\"_astro\",\"serverEntry\":\"entry.mjs\",\"redirects\":false,\"inlineStylesheets\":\"auto\",\"concurrency\":1},\"server\":{\"open\":false,\"host\":\"127.0.0.1\",\"port\":4321,\"streaming\":true},\"redirects\":{},\"image\":{\"endpoint\":{\"route\":\"/_image\"},\"service\":{\"entrypoint\":\"astro/assets/services/sharp\",\"config\":{}},\"domains\":[],\"remotePatterns\":[]},\"devToolbar\":{\"enabled\":true},\"markdown\":{\"syntaxHighlight\":\"shiki\",\"shikiConfig\":{\"langs\":[],\"langAlias\":{},\"theme\":\"github-dark\",\"themes\":{},\"wrap\":false,\"transformers\":[]},\"remarkPlugins\":[],\"rehypePlugins\":[],\"remarkRehype\":{},\"gfm\":true,\"smartypants\":true},\"security\":{\"checkOrigin\":true},\"env\":{\"schema\":{},\"validateSecrets\":false},\"experimental\":{\"clientPrerender\":false,\"contentIntellisense\":false,\"responsiveImages\":false},\"legacy\":{\"collections\":false}}","posts",["Map",11,12],"using-mdx",{id:11,data:13,body:18,filePath:19,digest:20,deferredRender:21},{title:14,description:15,pubDate:16,heroImage:17},"Using MDX","Lorem ipsum dolor sit amet",["Date","2024-06-01T00:00:00.000Z"],"/blog-placeholder-5.jpg","This theme comes with the [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) integration installed and configured in your `astro.config.mjs` config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file.\n\n## Why MDX?\n\nMDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to [mix JavaScript and UI Components into your Markdown content](https://docs.astro.build/en/guides/markdown-content/#mdx-features) for things like interactive charts or alerts.\n\nIf you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze.\n\n## Example\n\nHere is how you import and use a UI component inside of MDX.  \nWhen you open this page in the browser, you should see the clickable button below.\n\nimport HeaderLink from '../../components/HeaderLink.astro';\n\n<HeaderLink href=\"#\" onclick=\"alert('clicked!')\">\n\tEmbedded component in MDX\n</HeaderLink>\n\n## More Links\n\n- [MDX Syntax Documentation](https://mdxjs.com/docs/what-is-mdx)\n- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\n- **Note:** [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default.","src/content/posts/using-mdx.mdx","e841a54ebe3d0df7",true];

export { _astro_dataLayerContent as default };