// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

//import cloudflare from '@astrojs/cloudflare';

import unocss from '@unocss/astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig(
  { site: 'https://math.gdn'
  , trailingSlash: 'never'

  , integrations: 
      [ mdx()
      , sitemap()
      , unocss()
      ]
     , adapter: cloudflare(
       { platformProxy: 
         { enabled: true
         }
       , imageService: "cloudflare"
       })
  , server: 
      { port: import.meta.env.PORT ?? 9000
      , host: true
      }
  , experimental:
      { //serializeConfig: true
      }
  }
);