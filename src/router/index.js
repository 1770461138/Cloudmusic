import Vue from 'vue'
import VueRouter from 'vue-router'

const Find = ()=>import('@/views/find/Find')
const RadioView = ()=>import('@/views/radio/RadioView')
const PlayListDetail = ()=>import('@/views/playlistview/PlayListDetail')
const TopList = ()=>import('@/views/toplistView/TopList')
const Profile = ()=>import('@/views/profile/Profile')
const CloudTribe = ()=>import('@/views/cloudtribe/CloudTribe')
const Video = ()=>import('@/views/video/Video')
const Search = ()=>import('@/views/searchview/Search')
const SignIn = ()=>import('@/views/signin/SignIn')
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'',
    redirect: '/find'
  },
  {
    path:'/signin',
    component:SignIn,
    meta: {
      keepAlive: true
    }
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/find',
    component:Find
  },
  {
    path:'/cloudtribe',
    component:CloudTribe
  },
  {
    path:'/video',
    component:Video
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/radioview',
    component:RadioView
  },
  {
    path:'/playlist/:id',
    component:PlayListDetail
  },
  {
    path:'/toplist',
    component:TopList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
