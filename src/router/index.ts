import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { isLocale, rememberLocale, resolveInitialLocale, setI18nLocale } from '@/i18n'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => `/${resolveInitialLocale()}`,
  },
  {
    path: '/:locale(en|nl)',
    children: [
      { path: '', name: 'home', component: HomeView },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/ProjectsView.vue'),
      },
      {
        path: 'projects/:slug',
        name: 'project',
        component: () => import('@/views/ProjectDetailView.vue'),
        props: true,
      },
      { path: 'about', name: 'about', component: () => import('@/views/AboutView.vue') },
      { path: 'skills', name: 'skills', component: () => import('@/views/SkillsView.vue') },
      { path: 'notes', name: 'notes', component: () => import('@/views/NotesView.vue') },
      {
        path: 'notes/:slug',
        name: 'note',
        component: () => import('@/views/NoteDetailView.vue'),
        props: true,
      },
      { path: 'contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/NotFoundView.vue'),
      },
    ],
  },
  {
    // Anything outside a locale prefix is sent to the preferred locale's home.
    path: '/:pathMatch(.*)*',
    redirect: () => `/${resolveInitialLocale()}`,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    // Staying on the same page in another language should not jump to the top.
    if (to.name === from.name && to.params.slug === from.params.slug) return false
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const locale = to.params.locale
  if (isLocale(locale)) {
    setI18nLocale(locale)
    rememberLocale(locale)
  }
  return true
})
