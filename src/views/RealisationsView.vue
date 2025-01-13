<template>
  <div class="realisations-container">
    <h1>Mes Réalisations</h1>

    <div class="projects-grid">
      <!-- Projet Web Symfony/Vue.js -->
      <div class="project-card">
        <div class="project-content">
          <h2>Projet Web Symfony/Vue.js</h2>
          <p>Gestion d'événements avec API REST et interface utilisateur</p>
          <div class="tech-stack">
            <span class="tech">Symfony</span>
            <span class="tech">API Platform</span>
            <span class="tech">Vue.js</span>
            <span class="tech">TypeScript</span>
          </div>
          <router-link to="/realisations/projet-but-3" class="project-link">
            Voir les détails
          </router-link>
        </div>
      </div>

      <!-- Projet Annuaire -->
      <div class="project-card">
        <div class="project-content">
          <h2>Projet Annuaire</h2>
          <p>Application d'annuaire en ligne avec Symfony</p>
          <div class="tech-stack">
            <span class="tech">Symfony</span>
            <span class="tech">API Platform</span>
            <span class="tech">Twig</span>
            <span class="tech">JavaScript</span>
          </div>
          <router-link to="/realisations/projet-annuaire" class="project-link">
            Voir les détails
          </router-link>
        </div>
      </div>

      <!-- Projet SAE -->
      <div class="project-card">
        <div class="project-content">
          <h2>Projet SAE - LaBaF</h2>
          <p>Site web pour une association de babyfoot avec API de localisation</p>
          <div class="tech-stack">
            <span class="tech">Symfony</span>
            <span class="tech">API Platform</span>
            <span class="tech">Vue.js</span>
            <span class="tech">Leaflet</span>
            <span class="tech">JWT</span>
          </div>
          <router-link to="/realisations/projet-sae" class="project-link">
            Voir les détails
          </router-link>
        </div>
      </div>

      <!-- Projet Reshaped by Eternity -->
      <div class="project-card">
        <div class="project-content">
          <h2>Reshaped by Eternity</h2>
          <p>Rogue-like en 2D avec une narration immersive et un système de réincarnation</p>
          <div class="tech-stack">
            <span class="tech">Unity</span>
            <span class="tech">C#</span>
            <span class="tech">Game Design</span>
            <span class="tech">Pixel Art</span>
          </div>
          <router-link to="/realisations/reshaped-by-eternity" class="project-link">
            Voir les détails
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RealisationsView'
})
</script>

<style scoped>
.realisations-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-content {
  padding: 25px;
}

h2 {
  font-size: 1.5em;
  color: #444;
  margin-bottom: 15px;
}

p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tech {
  background: #f0f4f8;
  color: #3498db;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9em;
}

.project-link {
  display: inline-block;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
