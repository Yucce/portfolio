<template>
  <nav class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">Portfolio</router-link>
      <div class="flex space-x-4">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="hover:text-gray-300 transition duration-300"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      menuItems: [
        { name: 'Accueil', path: '/' },
        { name: 'Réalisations', path: '/realisations' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
})
</script>
