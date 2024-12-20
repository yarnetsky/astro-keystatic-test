import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';


// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
    mdx(), 
    keystatic(), 
    sitemap(), react(), markdoc()],
    output: 'server',
  	adapter: vercel(),
});