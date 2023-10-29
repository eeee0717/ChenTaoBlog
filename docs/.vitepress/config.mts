import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  // 标题（浏览器后缀）
  title: "Chen Tao",
  titleTemplate: false,
  // 描述
  lang: 'zh-CN',
  // 根目录，如果需要部署成htpps://github.com/blog/的形式，则设置/blog/
  base: '/',
  // 文档最后更新时间展示
  lastUpdated: true,
  // 去除浏览器链接中的.html后缀
  cleanUrls: true,
  // markdown显示行数
  markdown: {
    lineNumbers: true,
  },
  // head设置
  head: [
    // 浏览器中图标
    ["link", { rel: "icon", href: "/logo.ico" }],
  ],
  // 主题设置
  themeConfig: {
    // 左上角logo
    logo: '/logo.png',
    // 首页右上角导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/aboutme' },

    ],
    // 文章左侧导航栏
    sidebar: [
      { text: '书籍阅读', collapsed: false, items: sidebarCodeBook() },
      { text: '我的demo', collapsed:false, items: sidebarDemo()},
    ],
    // 文章底部导航栏的自定义配置，默认是英语
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 文章右侧目录展示级别和标题
    outline: {
      level: [2, 6],
      label: '文章目录'
    },
    // 文章更新时间的前缀文本
    lastUpdatedText: '最后更新时间',
    // 开启本地搜索（左上角）
    search: {
      provider: 'local',
    },
    // 右上角Github链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/eeee0717' }
    ],
    // 页脚
    footer: {
      copyright: 'Copyright © 2023-present Chen Tao',
    }
  }
})

function sidebarCodeBook(): DefaultTheme.SidebarItem[] {
  return [
    {
      base: '/blog/codeBook',
      text: '编程书籍',
      collapsed: false,
      items: [
        {
          text: '设计模式',
          collapsed: true,
          items: [
            { text: '工厂方法', link: '/设计模式/创建型模式——工厂方法' },
            { text: '抽象工厂', link: '/设计模式/创建型模式——抽象工厂' },
            { text: '单例模式', link: '/设计模式/创建型模式——单例模式' },
            { text: '原型对象', link: '/设计模式/创建型模式——原型对象' },
            { text: 'builder模式', link: '/设计模式/创建型模式——builder模式' },
            { text: '桥接模式', link: '/设计模式/结构型模式——桥接模式' },
            { text: '适配器模式', link: '/设计模式/结构型模式——适配器模式' },
            { text: '组合模式', link: '/设计模式/结构型模式——组合模式' },
          ]
        },
        {
          text: '重构',
          collapsed: true,
          items: [
            { text: '第二章 重构原则', link: '/重构/第二章 重构原则' },
            { text: '第三章 代码的坏味道', link: '/重构/第三章 代码的坏味道' },
            { text: '第四章 构筑测试体系', link: '/重构/第四章 构筑测试体系' },
            { text: '第五章 重新组织你的函数', link: '/重构/第五章 重新组织你的函数' },
            { text: '第六章 在对象之间搬移特性', link: '/重构/第六章 在对象之间搬移特性' },
            { text: '第七章 重新组织数据', link: '/重构/第七章 重新组织数据' },
            { text: '第八章 简化条件表达式', link: '/重构/第八章 简化条件表达式' },
            { text: '第九章 简化函数调用', link: '/重构/第九章 简化函数调用' },
            { text: '第十章 处理概括关系', link: '/重构/第十章 处理概括关系' },
            { text: '第十一章 大型重构', link: '/重构/第十一章 大型重构' },
          ]
        },
        {
          text: 'CLR via C#',
          collapsed: true,
          items: [
            { text: '第一章 CLR基础', link: '/CLR/1-CLR基础' },
            { text: '第二章 类型基础', link: '/CLR/2-类型基础' },
            { text: '第三章 基元类型、引用类型和值类型', link: '/CLR/3-基元类型、引用类型和值类型' },
            { text: '第四章 类型与成员基础', link: '/CLR/4-类型与成员基础' },
            { text: '第五章 参数', link: '/CLR/5-参数' },
            { text: '第六章 属性', link: '/CLR/6-属性' },
          ]
        },
        {
          text:"C#学习",
          collapsed: true,
          items: [
            { text: '接口', link: '/CSharp/接口' },
            { text: '模式匹配', link: '/CSharp/模式匹配' },
            { text: '委托', link: '/CSharp/委托' },
            { text: '值类型和引用类型', link: '/CSharp/值类型和引用类型' },
            { text: 'IEnumerable与IQuerable', link: '/CSharp/IEnumerable与IQueryable' },
            { text: 'LINQ', link: '/CSharp/LINQ' },
            { text: 'Nunit单元测试', link: '/CSharp/Nunit单元测试' },
            { text: 'Record', link: '/CSharp/Record' },
          ]
        }
      ]
    }
  ]
}
function sidebarDemo(): DefaultTheme.SidebarItem[] | undefined {
  return [
    {
      text:'minesweeper',
      link:'https://www.chentao0717.me/minesweeper/'
    }
  ]
}

