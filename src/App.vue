<template>
  <div class="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-content">
        <router-link to="/" class="nav-brand">Portfolio</router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Accueil</router-link>
          <router-link to="/realisations" class="nav-link">Réalisations</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content avec transition -->
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/realisations">Réalisations</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Réalisations</h3>
          <ul>
            <li>
              <router-link to="/realisations/projet-but-3">
                Projet Web Symfony/Vue.js
              </router-link>
            </li>
            <li>
              <router-link to="/realisations/projet-annuaire">
                Projet Annuaire
              </router-link>
            </li>
            <li>
              <router-link to="/realisations/projet-sae">
                Projet SAE
              </router-link>
            </li>
            <li>
              <router-link to="/realisations/reshaped-by-eternity">
                Reshaped By Eternity
              </router-link>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:thomascabot34@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-envelope"></i> thomascabot34@gmail.com
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/thomas-cabot-0376b0230" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ currentYear }} - Portfolio - Tous droits réservés</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    }
  }
})
</script>

<style>
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variables globales */
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --background-color: #f5f6fa;
  --text-color: #333;
  --border-radius: 8px;
  --transition-duration: 0.3s;
}

/* Styles globaux */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 100vh;
}

/* Structure de l'application */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar */
.navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--secondary-color);
  padding: 0.5rem;
  transition: color var(--transition-duration);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-color);
}

/* Main Content */
.main-content {
  flex: 1;
  width: 100%;
  background-color: var(--background-color);
}

/* Footer */
.footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity var(--transition-duration);
}

.footer-section a:hover {
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Transitions de page */
.page-enter-active,
.page-leave-active {
  transition: opacity var(--transition-duration);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Media Queries */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

/* Styles communs pour les sections */
.section-title {
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Styles pour les boutons */
.button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-duration);
}

.button:hover {
  background-color: #2980b9;
}

/* Utilitaires */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.text-center {
  text-align: center;
}

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }
</style>
