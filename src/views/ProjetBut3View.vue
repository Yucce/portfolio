<template>
  <div class="project-container">
    <div class="project-header">
      <h1>Projet Web Symfony et Vue.js</h1>
      <div class="project-tags">
        <span class="tag">Symfony</span>
        <span class="tag">API Platform</span>
        <span class="tag">Vue.js</span>
        <span class="tag">TypeScript</span>
      </div>
    </div>

    <div class="project-content">
      <section class="project-section">
        <h2>Aperçu du Projet</h2>
        <div class="project-preview">
          <img
            src="/assets/projet-but3-front.png"
            alt="Capture d'écran du projet FightClub"
            class="project-image"
          />
        </div>
      </section>

      <section class="project-section">
        <h2>Contexte du Projet</h2>
        <p>
          Projet réalisé en trinôme dans le cadre du BUT Informatique. L'objectif était de développer
          une API REST de gestion d'événements avec Symfony et API Platform, suivie d'une interface
          utilisateur en Vue.js.
        </p>
      </section>

      <section class="project-section">
        <h2>Spécifications Techniques</h2>
        <div class="specs-list">
          <div class="spec-item">
            <h3>Backend (API REST)</h3>
            <ul>
              <li>Gestion des utilisateurs et authentification</li>
              <li>CRUD complet pour les événements</li>
              <li>Gestion des inscriptions aux événements</li>
              <li>Système de rôles (utilisateur, organisateur, admin)</li>
              <li>Validation des données et gestion des conflits</li>
            </ul>
          </div>
          <div class="spec-item">
            <h3>Frontend (Vue.js)</h3>
            <ul>
              <li>Interface responsive et moderne</li>
              <li>Gestion de la connexion et des tokens JWT</li>
              <li>Système de notifications</li>
              <li>Intégration avec le projet annuaire</li>
              <li>Typage strict avec TypeScript</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Compétences Développées</h2>
        <div class="competences">
          <div class="competence">
            <h3>Réaliser</h3>
            <ul>
              <li>AC1: Choix et implémentation d'architectures adaptées</li>
              <li>AC2: Évolution d'une application existante</li>
              <li>AC3: Intégration de solutions dans un environnement de production</li>
            </ul>
          </div>
          <div class="competence">
            <h3>Optimiser</h3>
            <ul>
              <li>AC3: Utilisation de bibliothèques dédiées au domaine d'application</li>
            </ul>
          </div>
          <div class="competence">
            <h3>Collaborer</h3>
            <ul>
              <li>AC1: Organisation et partage d'une veille numérique</li>
              <li>AC4: Accompagnement du management de projet informatique</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Ma Contribution</h2>
        <p>
          Dans ce projet, j'ai principalement travaillé sur le développement frontend avec Vue.js,
          incluant la conception de l'architecture, la gestion des relations entre composants et
          la mise en place de la sécurité. J'ai également participé au développement de certaines
          fonctionnalités de l'API.
        </p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjetBut3View'
})
</script>

<style scoped>
.project-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.project-header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.project-tags {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tag {
  background: #f0f4f8;
  color: #3498db;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9em;
}

.project-content {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.project-section {
  margin-bottom: 40px;
}

.project-section:last-child {
  margin-bottom: 0;
}

h2 {
  font-size: 1.8em;
  color: #444;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f4f8;
}

h3 {
  font-size: 1.3em;
  color: #555;
  margin-bottom: 15px;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.specs-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.spec-item ul, .competence ul {
  list-style-type: none;
  padding: 0;
}

.spec-item li, .competence li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #666;
}

.spec-item li::before, .competence li::before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: 0;
}

.competences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .specs-list, .competences {
    grid-template-columns: 1fr;
  }
}
</style>
