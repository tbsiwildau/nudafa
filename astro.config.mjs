import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://th-wildau-nudafa.netlify.app/',

  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://th-wildau-nudafa.netlify.app/radnetz/admin/',
    }),
  ],
  output: 'static',
  // adapter: netlify(),
  redirects: {
    '/info': '/',
    '/forschungsprojekt': '/',
    '/radnetzplanung': '/radnetz/einleitung',
    '/massnahmen/admin': '/massnahmen/admin/geodata-check',
  },
});