import { a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, e as addAttribute } from '../chunks/astro/server_3vvffOZR.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_BwsDgwP9.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_BuHq6iFx.mjs';
import { g as getCollection } from '../chunks/_astro_content_CFhz15zx.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_CmKEX0nt.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-fjqfnjxi> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-fjqfnjxi": true })}${renderHead()}</head> <body data-astro-cid-fjqfnjxi> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-fjqfnjxi": true })} <main data-astro-cid-fjqfnjxi> <section data-astro-cid-fjqfnjxi> <ul data-astro-cid-fjqfnjxi> ${posts.map((post) => renderTemplate`<li data-astro-cid-fjqfnjxi> <a${addAttribute(`/posts/${post.id}/`, "href")} data-astro-cid-fjqfnjxi> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-fjqfnjxi> <h4 class="title" data-astro-cid-fjqfnjxi>${post.data.title}</h4> <p class="date" data-astro-cid-fjqfnjxi> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-fjqfnjxi": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-fjqfnjxi": true })} </body></html>`;
}, "/workspaces/astro-keystatic-test/src/pages/posts/index.astro", void 0);

const $$file = "/workspaces/astro-keystatic-test/src/pages/posts/index.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
