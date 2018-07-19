import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import First from '../components/common/header/first.vue'
import Second from '../components/common/header/second.vue'
import Third from '../components/common/header/third.vue'
import Recommend from '../components/page2/recommend.vue'
import Friends from '../components/page2/friends.vue'
import Radio from '../components/page2/radio.vue'
import Localmusic from '../components/localmusic/loaclmusic.vue'
import Localsongs from '../components/localmusic/list1/localsongs.vue'
import Localsonger from '../components/localmusic/list1/localsonger.vue'
import Localalbum from '../components/localmusic/list1/localalbum.vue'
import Localfolder from '../components/localmusic/list1/localfolder.vue'
import Playsong from '../components/localmusic/list1/playsongs/playsong.vue'
import Diskcd from '../components/localmusic/list1/playsongs/diskcd.vue'
import Lyrics from '../components/localmusic/list1/playsongs/lyrics.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  	  path: '/',
  	  redirect: '/app/second/recommend'
  	},
    {
      path: '/app',
      name: 'app',
      component: App,
      children:[
        {
          path: 'first',
          name: 'first',
          component: First
        },
        {
          path: 'second',
          name: 'second',
          component: Second,
          children:[
          {
            path: 'recommend',
            name: 'recommend',
            component: Recommend
          },
          {
            path: 'friends',
            name: 'friends',
            component: Friends
          },
          {
            path: 'radio',
            name: 'radio',
            component: Radio
          }]
        },
        {
          path: 'third',
          name: 'third',
          component: Third
        }
      ]
    },
    {
      path: '/localmusic',
      name: 'localmusic',
      component: Localmusic,
      children: [
      {
        path: 'localsongs',
        name: 'localsongs',
        component: Localsongs
      },
      {
        path: 'localsonger',
        name: 'localsonger',
        component: Localsonger
      },
      {
        path: 'localalbum',
        name: 'localalbum',
        component: Localalbum
      },
      {
        path: 'localfolder',
        name: 'localfolder',
        component: Localfolder
      }]
    },
    {
      path: '/playsong',
      name: 'playsong',
      component: Playsong,
      children:[
      {
        path: 'diskcd',
        name: 'diskcd',
        component: Diskcd
      },
      {
        path: 'lyrics',
        name: 'lyrics',
        component: Lyrics
      }]
    }   
  ]
})
