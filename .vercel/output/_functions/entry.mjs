import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BxPOif8T.mjs';
import { manifest } from './manifest_DLb7_2UA.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/posts.astro.mjs');
const _page5 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.1_idb-keyval@6.2.1_jiti@2.4.2_rollup@4.29.0_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["node_modules/.pnpm/@keystatic+astro@5.0.3_@keystatic+core@0.5.42_react-dom@19.0.0_react@19.0.0__react@19.0.0__as_hbow2s2zza56weoiwhoxjsbfzq/node_modules/@keystatic/astro/internal/keystatic-api.js", _page2],
    ["node_modules/.pnpm/@keystatic+astro@5.0.3_@keystatic+core@0.5.42_react-dom@19.0.0_react@19.0.0__react@19.0.0__as_hbow2s2zza56weoiwhoxjsbfzq/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page3],
    ["src/pages/posts/index.astro", _page4],
    ["src/pages/posts/[...slug].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5d27fac1-ab40-47da-874d-56c5611c6224",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
