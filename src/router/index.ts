import { createRouter, createWebHistory } from 'vue-router'
import FloorView from '../views/FloorView.vue'
import ParkingView from '../views/ParkingView.vue'
import OtherView from '../views/OtherView.vue'
import EntranceView from '../views/EntranceView.vue'
import KitchenView from '../views/KitchenView.vue'
import LivingRoomView from '../views/LivingRoomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'floor',
      component: FloorView
    },
    {
      path: '/parking',
      name: 'parking',
      component: ParkingView
    },
    {
      path: '/other',
      name: 'other',
      component: OtherView
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: EntranceView
    },
    {
      path: '/kintchen',
      name: 'kintchen',
      component: KitchenView
    },
    {
      path: '/livingRoom',
      name: 'livingRoom',
      component: LivingRoomView
    },
  ]
})

export default router
