import { createRouter, createWebHistory } from 'vue-router'

// Import de tes vues
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import RealisationsView from '@/views/RealisationsView.vue'
import ProjetBut3View from '@/views/ProjetBut3View.vue'
import ProjetAnnuaireView from '@/views/ProjetAnnuaireView.vue'
import ProjetSaeView from '@/views/ProjetSaeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ReshapedByEternityView from '@/views/ReshapeByEternity.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/realisations',
    name: 'realisations',
    component: RealisationsView
  },
  {
    path: '/realisations/projet-but-3',
    name: 'projet-but-3',
    component: ProjetBut3View
  },
  {
    path: '/realisations/projet-annuaire',
    name: 'projet-annuaire',
    component: ProjetAnnuaireView
  },
  {
    path: '/realisations/projet-sae',
    name: 'projet-sae',
    component: ProjetSaeView
  },
  // Page 404
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  },
  {
    path: '/realisations/reshaped-by-eternity',
    name: 'Reshaped-By-Eternity',
    component: ReshapedByEternityView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
