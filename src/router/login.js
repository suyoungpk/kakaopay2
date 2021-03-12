
import Main from '@/components/Main'
import Login from '@/components/Login'

const router = [
  {
    path: '/',
    component: Main,
    children: [
      {path: 'login', name: 'login', component: Login}
    ]
  }
]

export default router
