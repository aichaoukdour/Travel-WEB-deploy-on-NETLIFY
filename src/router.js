import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Tours from '@/views/Tours.vue';
import Gallery from '@/views/Gallery.vue';
import Reviews from '@/views/Reviews.vue';
import Contact from '@/views/Contact.vue';

const routes = [
{ path: '/homeSection', component: HomeSection },
{ path: '/about', component: About },
  { path: '/popularTours', component: PopularTours },
 

  { path: '/gallery', component: Gallery },
  { path: '/reviews', component: Reviews },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
