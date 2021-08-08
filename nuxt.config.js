/**
 * Nuxt 配置文件
 */

module.exports = {
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
      ]
    }
  },
  router: {
    linkActiveClass: "active",
    //自定义路由规则表
    extendRoutes(routes, resolve) {
      console.log(routes)
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0)

      routes.push(...[{
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        children: [
          {
            path: '', //默认子路由
            name: 'home',
            component: resolve(__dirname, 'pages/home/')
          },
          {
            path: '/login', //默认子路由
            name: 'login',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/register', //默认子路由
            name: 'register',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            path: '/profile/:username', //默认子路由
            name: 'profile',
            component: resolve(__dirname, 'pages/profile/')
          },
          {
            path: '/settings', //默认子路由
            name: 'settings',
            component: resolve(__dirname, 'pages/settings/')
          },
          {
            path: '/editor', //默认子路由
            name: 'editor',
            component: resolve(__dirname, 'pages/editor/')
          },
          {
            path: '/article/:slug', //默认子路由
            name: 'article',
            component: resolve(__dirname, 'pages/article/')
          }
        ]
      }])
      // routes.push({
      //   name: 'custom',
      //   path: '*',
      //   component: resolve(__dirname, 'pages/404.vue')
      // })
    }
  },

  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}