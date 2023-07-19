export const menu = [
  {
    title: 'articles',
    name: '文库',
    icon: 'heroicons:book-open',
    children: [
      {
        name: '归档',
        icon: 'heroicons:clipboard-document-list',
        path: '/'
      },
      // {
      //   name: '分类',
      //   icon: 'heroicons:cube',
      //   path: '/blog/articles/categories'
      // }
      // ,
      // {
      //   name: '标签',
      //   icon: 'heroicons:tag',
      //   path: '/blog/articles/tags'
      // }
    ]
  },
  // {
  //   title: 'share',
  //   name: '分享',
  //   icon: 'heroicons:share',
  //   children: [
  //     {
  //       name: '书籍',
  //       icon: 'heroicons:book-open',
  //       path: '/blog/share/book'
  //     },
  //     {
  //       name: '电影',
  //       icon: 'heroicons:film',
  //       path: '/blog/share/movies'
  //     },
  //     {
  //       name: '收藏',
  //       icon: 'heroicons:inbox',
  //       path: '/blog/share/favorites'
  //     }
  //   ]
  // },
  // {
  //   title: 'mine',
  //   name: '我的',
  //   icon: 'heroicons:user',
  //   children: [
  //     {
  //       name: '相册',
  //       icon: 'heroicons:photo',
  //       path: '/blog/mine/gallery'
  //     },
  //     {
  //       name: '待办',
  //       icon: 'heroicons:bell-alert',
  //       path: '/blog/mine/todo'
  //     },
  //     {
  //       name: '日记',
  //       icon: 'heroicons:pencil-square',
  //       path: '/blog/mine/essay'
  //     }
  //   ]
  // },
  // {
  //   title: 'about',
  //   name: '关于',
  //   icon: 'heroicons:at-symbol',
  //   children: [
  //     {
  //       name: '关于本站',
  //       icon: 'heroicons:information-circle',
  //       path: '/blog/about/me'
  //     },
  //     {
  //       name: '留言板',
  //       icon: 'heroicons:chat-bubble-bottom-center-text',
  //       path: '/blog/about/message'
  //     },
  //     {
  //       name: '友链',
  //       icon: 'heroicons:user-group',
  //       path: '/blog/about/friend'
  //     },
  //     {
  //       name: '随便逛逛',
  //       icon: 'heroicons:arrow-top-right-on-square',
  //       path: '/blog/details/-1'
  //     }
  //   ]
  // },
];

export const adminMenu = [
  {
    title: 'articles',
    name: '文库管理',
    icon: 'heroicons:book-open',
    children: [
      {
        name: '文章管理',
        icon: 'heroicons:clipboard-document-list',
        path: '/admin/articles/archives'
      },
      {
        name: '分类管理',
        icon: 'heroicons:cube',
        path: '/admin/articles/categories'
      }
      ,
      {
        name: '标签管理',
        icon: 'heroicons:tag',
        path: '/admin/articles/tags'
      }
    ]
  },
  {
    title: 'share',
    name: '分享管理',
    icon: 'heroicons:share',
    children: [
      {
        name: '书籍/电影',
        icon: 'heroicons:share',
        path: '/admin/share/bookMoives'
      },
      {
        name: '收藏',
        icon: 'heroicons:inbox',
        path: '/admin/share/favorites'
      }
    ]
  },
  {
    title: 'mine',
    name: '个人管理',
    icon: 'heroicons:user',
    children: [
      {
        name: '相册',
        icon: 'heroicons:photo',
        path: '/admin/mine/gallery'
      },
      {
        name: '待办',
        icon: 'heroicons:bell-alert',
        path: '/admin/mine/todo'
      },
      {
        name: '日记',
        icon: 'heroicons:pencil-square',
        path: '/admin/mine/essay'
      }
    ]
  },
  {
    title: 'about',
    name: '信息管理',
    icon: 'heroicons:at-symbol',
    children: [
      {
        name: '网站信息',
        icon: 'heroicons:information-circle',
        path: '/admin/about/me'
      },
      {
        name: '友链管理',
        icon: 'heroicons:user-group',
        path: '/admin/about/friend'
      },
      {
        name: '留言板',
        icon: 'heroicons:chat-bubble-bottom-center-text',
        path: '/admin/about/message'
      }
    ]
  },
  {
    name: '首页',
    icon: 'heroicons:home',
    type: 'button',
    path: '/admin/index'
  },
  {
    name: '注销',
    icon: 'heroicons:arrow-right-on-rectangle',
    type: 'button',
    path: '/logout'
  }
];