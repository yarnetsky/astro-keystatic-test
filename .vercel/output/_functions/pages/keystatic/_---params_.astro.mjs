import { a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_3vvffOZR.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspaces/astro-keystatic-test/node_modules/.pnpm/@keystatic+astro@5.0.3_@keystatic+core@0.5.42_react-dom@19.0.0_react@19.0.0__react@19.0.0__as_hbow2s2zza56weoiwhoxjsbfzq/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "/workspaces/astro-keystatic-test/node_modules/.pnpm/@keystatic+astro@5.0.3_@keystatic+core@0.5.42_react-dom@19.0.0_react@19.0.0__react@19.0.0__as_hbow2s2zza56weoiwhoxjsbfzq/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "/workspaces/astro-keystatic-test/node_modules/.pnpm/@keystatic+astro@5.0.3_@keystatic+core@0.5.42_react-dom@19.0.0_react@19.0.0__react@19.0.0__as_hbow2s2zza56weoiwhoxjsbfzq/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
