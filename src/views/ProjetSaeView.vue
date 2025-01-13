<template>
  <div class="project-container">
    <div class="project-header">
      <h1>Projet SAE - LaBaF</h1>
      <div class="project-tags">
        <span class="tag">Leaflet</span>
        <span class="tag">OpenStreetMap</span>
        <span class="tag">Vue.js</span>
        <span class="tag">JWT</span>
        <span class="tag">API REST</span>
      </div>
    </div>

    <div class="project-content">
      <section class="project-section">
        <h2>Contexte de l'Entreprise</h2>
        <p>
          LaBaF (La Baby-Foot) est une association dédiée à la gestion et à l'organisation
          d'événements autour du baby-foot. Le projet consistait à améliorer leur plateforme
          web existante en ajoutant de nouvelles fonctionnalités clés et en optimisant
          l'expérience utilisateur.
        </p>
      </section>

      <section class="project-section">
        <h2>Missions Réalisées</h2>
        <div class="missions">
          <div class="mission-card">
            <h3>API de Localisation</h3>
            <p>
              Intégration des technologies Leaflet et OpenStreetMap pour visualiser les baby-foot
              sur une carte interactive. Développement d'un système de géolocalisation automatique
              basé sur les adresses.
            </p>
            <div class="mission-details">
              <ul>
                <li>Implémentation de cartes interactives</li>
                <li>Géocodage des adresses</li>
                <li>Visualisation des emplacements</li>
                <li>Interface de gestion des localisations</li>
              </ul>
            </div>
          </div>

          <div class="mission-card">
            <h3>Gestion des Tournois</h3>
            <p>
              Développement d'un algorithme complet pour la gestion des matchs et tournois,
              incluant l'organisation et la planification des rencontres.
            </p>
            <div class="mission-details">
              <ul>
                <li>Création de l'API pour les inscriptions</li>
                <li>Système de planification des matchs</li>
                <li>Gestion des résultats</li>
                <li>Interface d'administration des tournois</li>
              </ul>
            </div>
          </div>

          <div class="mission-card">
            <h3>Système d'Authentification</h3>
            <p>
              Mise en place d'un système d'authentification sécurisé utilisant les JWT
              (JSON Web Tokens) et implémentation d'une gestion complète des utilisateurs.
            </p>
            <div class="mission-details">
              <ul>
                <li>Authentification par JWT</li>
                <li>Gestion des rôles utilisateurs</li>
                <li>Sécurisation des routes</li>
                <li>Interface de connexion/inscription</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Technologies Utilisées</h2>
        <div class="tech-stack">
          <div class="tech-category">
            <h3>Frontend</h3>
            <ul>
              <li>Vue.js pour l'interface utilisateur</li>
              <li>Leaflet pour la cartographie</li>
              <li>OpenStreetMap pour les données géographiques</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>Backend</h3>
            <ul>
              <li>API REST pour la communication</li>
              <li>JWT pour l'authentification</li>
              <li>Algorithmes de gestion de tournois</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Compétences Développées</h2>
        <div class="competences">
          <div class="competence-group">
            <h3>Réaliser</h3>
            <ul>
              <li>AC1: Implémentation d'architectures complexes</li>
              <li>AC2: Évolution d'applications existantes</li>
              <li>AC3: Intégration en environnement de production</li>
            </ul>
          </div>
          <div class="competence-group">
            <h3>Optimiser</h3>
            <ul>
              <li>AC2: Analyse de performances</li>
              <li>AC3: Utilisation de bibliothèques spécialisées</li>
            </ul>
          </div>
          <div class="competence-group">
            <h3>Collaborer</h3>
            <ul>
              <li>AC1: Veille technologique</li>
              <li>AC3: Gestion du changement</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Résultats et Impact</h2>
        <div class="results">
          <p>
            L'intégration des nouvelles fonctionnalités a permis d'améliorer significativement
            l'expérience utilisateur du site LaBaF. La carte interactive facilite la localisation
            des baby-foot, tandis que le nouveau système de gestion des tournois simplifie
            l'organisation des événements.
          </p>
          <p>
            Le système d'authentification sécurisé a renforcé la protection des données utilisateurs
            tout en maintenant une expérience fluide grâce aux JWT.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjetSaeView'
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
  flex-wrap: wrap;
  gap: 10px;
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
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.project-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

h2 {
  font-size: 1.8em;
  color: #444;
  margin-bottom: 25px;
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

.missions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.mission-card {
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.mission-details ul {
  list-style-type: none;
  padding: 0;
  margin-top: 15px;
}

.mission-details li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.mission-details li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3498db;
}

.tech-stack, .competences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.tech-category ul, .competence-group ul {
  list-style-type: none;
  padding: 0;
}

.tech-category li, .competence-group li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #666;
}

.tech-category li::before, .competence-group li::before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: 0;
}

.results {
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .missions,
  .tech-stack,
  .competences {
    grid-template-columns: 1fr;
  }

  .project-header {
    padding: 0 20px;
  }
}
</style>
