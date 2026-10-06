import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TrackSwap VR',
  description: 'Documentation for TrackSwap VR',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
