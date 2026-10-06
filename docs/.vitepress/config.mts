import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'TrackSwap VR',
      description: 'TrackSwap VR 使用文档',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide/getting-started' }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '快速开始', link: '/guide/getting-started' }
            ]
          }
        ],
        outline: {
          label: '本页内容',
          level: 'deep'
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        lastUpdated: {
          text: '最后更新于'
        },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到深色主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        navMenuLabel: '主导航',
        skipToContentLabel: '跳到正文'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'TrackSwap VR',
      description: 'Documentation for TrackSwap VR',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/getting-started' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Getting Started', link: '/en/guide/getting-started' }
            ]
          }
        ]
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上',
                  navigateDownKeyAriaLabel: '向下',
                  closeText: '关闭',
                  closeKeyAriaLabel: '退出'
                }
              }
            }
          }
        }
      }
    }
  }
})
