// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://page-atro-acdc.netlify.app/",
  integrations: [preact()]
});