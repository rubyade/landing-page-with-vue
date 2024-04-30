import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../views/LoginForm.vue';
import SignUpForm from '../views/SignUpForm.vue';
import HomePage from '../views/HomePage.vue';
import BlogPostForm from '../views/BlogPostForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpForm,
  },
  {
    path: '/blogpost',
    name: 'blogpost',
    component: BlogPostForm,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
