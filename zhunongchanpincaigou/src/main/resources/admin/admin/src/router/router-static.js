import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import juanzeng from '@/views/modules/juanzeng/list'
    import juanzengYuyue from '@/views/modules/juanzengYuyue/list'
    import news from '@/views/modules/news/list'
    import nongchanpin from '@/views/modules/nongchanpin/list'
    import nongchanpinCollection from '@/views/modules/nongchanpinCollection/list'
    import nongchanpinCommentback from '@/views/modules/nongchanpinCommentback/list'
    import nongchanpinOrder from '@/views/modules/nongchanpinOrder/list'
    import shangjia from '@/views/modules/shangjia/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryJuanzeng from '@/views/modules/dictionaryJuanzeng/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryNongchanpin from '@/views/modules/dictionaryNongchanpin/list'
    import dictionaryNongchanpinCollection from '@/views/modules/dictionaryNongchanpinCollection/list'
    import dictionaryNongchanpinOrder from '@/views/modules/dictionaryNongchanpinOrder/list'
    import dictionaryNongchanpinOrderPayment from '@/views/modules/dictionaryNongchanpinOrderPayment/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangjia from '@/views/modules/dictionaryShangjia/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryJuanzeng',
        name: '捐赠项目类型',
        component: dictionaryJuanzeng
    }
    ,{
        path: '/dictionaryNews',
        name: '资讯类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryNongchanpin',
        name: '商品类型',
        component: dictionaryNongchanpin
    }
    ,{
        path: '/dictionaryNongchanpinCollection',
        name: '收藏表类型',
        component: dictionaryNongchanpinCollection
    }
    ,{
        path: '/dictionaryNongchanpinOrder',
        name: '订单类型',
        component: dictionaryNongchanpinOrder
    }
    ,{
        path: '/dictionaryNongchanpinOrderPayment',
        name: '订单支付类型',
        component: dictionaryNongchanpinOrderPayment
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangjia',
        name: '商家类型',
        component: dictionaryShangjia
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/juanzeng',
        name: '捐赠项目',
        component: juanzeng
      }
    ,{
        path: '/juanzengYuyue',
        name: '捐赠记录',
        component: juanzengYuyue
      }
    ,{
        path: '/news',
        name: '商品资讯',
        component: news
      }
    ,{
        path: '/nongchanpin',
        name: '商品',
        component: nongchanpin
      }
    ,{
        path: '/nongchanpinCollection',
        name: '商品收藏',
        component: nongchanpinCollection
      }
    ,{
        path: '/nongchanpinCommentback',
        name: '商品评价',
        component: nongchanpinCommentback
      }
    ,{
        path: '/nongchanpinOrder',
        name: '商品订单',
        component: nongchanpinOrder
      }
    ,{
        path: '/shangjia',
        name: '商家',
        component: shangjia
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
