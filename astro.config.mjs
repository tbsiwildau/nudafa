import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: process.env.URL ?? 'https://th-wildau-nudafa.netlify.app/',

  integrations: [
    keystatic(),
    tailwind(),
    react(),
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://th-wildau-nudafa.netlify.app/radnetz/admin/',
    }),
  ],

  output: 'static',
  
  adapter: netlify(),

  redirects: {
    '/info': '/',
    '/forschungsprojekt': '/',
    '/radnetzplanung': '/radnetz/einleitung',
    '/massnahmen/admin': '/massnahmen/admin/geodata-check',
  },
})