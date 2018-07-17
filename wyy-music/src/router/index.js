import Vue from 'vue'
import Router from 'vue-router'
import First from '../components/common/header/first.vue'
import Second from '../components/common/header/second.vue'
import Third from '../components/common/header/third.vue'
import Recommend from '../components/page2/recommend.vue'
import Friends from '../components/page2/friends.vue'
import Radio from '../components/page2/radio.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  	  path: '/',
  	  redirect: '/second/recommend'
  	},
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
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
		}
	  ]
    },
    {
      path: '/third',
      name: 'third',
      component: Third
    }
  ]
})
