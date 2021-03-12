import Main from '@/components/Main'

const router = [{
    path: '/',
    component: Main
  },
  { path: '*', component: Error }
]

export default router
