<template>
  <div class="project-container">
    <div class="project-header">
      <h1>Projet Annuaire</h1>
      <div class="project-tags">
        <span class="tag">Symfony</span>
        <span class="tag">Twig</span>
        <span class="tag">JavaScript</span>
        <span class="tag">MySQL</span>
      </div>
    </div>

    <div class="project-content">
      <section class="project-section">
        <h2>Aperçu du Projet</h2>
        <div class="project-preview">
          <img
            src="/assets/projet-annuaire.png"
            alt="Capture d'écran du projet Annuaire"
            class="project-image"
          />
        </div>
      </section>

      <section class="project-section">
        <h2>Contexte du Projet</h2>
        <p>
          Développement d'un annuaire en ligne en utilisant Symfony et Twig. Ce projet en trinôme
          visait à créer une application web complète en "server-side rendering" permettant la
          gestion de profils utilisateurs avec des fonctionnalités avancées.
        </p>
      </section>

      <section class="project-section">
        <h2>Fonctionnalités Principales</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Gestion des Profils</h3>
            <ul>
              <li>Création et édition de profil</li>
              <li>Système de code unique par profil</li>
              <li>Mode de visibilité configurable</li>
              <li>Informations personnalisables</li>
            </ul>
          </div>

          <div class="feature-card">
            <h3>Système d'Authentification</h3>
            <ul>
              <li>Inscription sécurisée</li>
              <li>Connexion utilisateur</li>
              <li>Gestion des rôles</li>
              <li>Administration des comptes</li>
            </ul>
          </div>

          <div class="feature-card">
            <h3>Interface Utilisateur</h3>
            <ul>
              <li>Validation en temps réel</li>
              <li>Interface responsive</li>
              <li>Mode maintenance configurable</li>
              <li>API JSON pour les profils</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Aspects Techniques</h2>
        <div class="technical-details">
          <div class="tech-item">
            <h3>Backend</h3>
            <ul>
              <li>Framework Symfony pour la structure MVC</li>
              <li>Base de données MySQL</li>
              <li>Système de commandes Symfony</li>
              <li>Services et contrôleurs personnalisés</li>
            </ul>
          </div>
          <div class="tech-item">
            <h3>Frontend</h3>
            <ul>
              <li>Templates Twig pour le rendu</li>
              <li>JavaScript natif pour les interactions</li>
              <li>Validation asynchrone des formulaires</li>
              <li>Design responsive et moderne</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Compétences Développées</h2>
        <div class="skills-section">
          <div class="skill-group">
            <h3>Réaliser</h3>
            <ul>
              <li>AC1: Implémentation d'une architecture MVC</li>
              <li>AC2: Développement d'une application web complète</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Optimiser</h3>
            <ul>
              <li>AC2: Analyse et amélioration des performances</li>
              <li>AC3: Utilisation efficace du framework Symfony</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Défis et Solutions</h2>
        <div class="challenges">
          <p>
            Un des principaux défis était la gestion en temps réel de la validation des codes uniques
            des profils. Nous avons résolu ce problème en implémentant un système de requêtes
            asynchrones en JavaScript qui vérifie la disponibilité du code avant la soumission du
            formulaire.
          </p>
          <p>
            La gestion des dates de modification et de connexion a également nécessité une attention
            particulière pour éviter la duplication de code et assurer une mise à jour cohérente
            des informations.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjetAnnuaireView'
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
  padding-bottom: 20px;
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
  margin-bottom: 20px;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-card {
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
}

.feature-card ul {
  list-style-type: none;
  padding: 0;
}

.feature-card li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.feature-card li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3498db;
}

.technical-details, .skills-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.tech-item ul, .skill-group ul {
  list-style-type: none;
  padding: 0;
}

.tech-item li, .skill-group li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #666;
}

.tech-item li::before, .skill-group li::before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: 0;
}

.challenges p {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .features-grid,
  .technical-details,
  .skills-section {
    grid-template-columns: 1fr;
  }
}
</style>
