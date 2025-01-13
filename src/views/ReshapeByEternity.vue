<template>
  <div class="project-container">
    <div class="project-header">
      <h1>Reshaped by Eternity</h1>
      <div class="project-tags">
        <span class="tag">Unity</span>
        <span class="tag">C#</span>
        <span class="tag">2D Game</span>
        <span class="tag">Game Design</span>
      </div>
    </div>

    <div class="project-content">
      <section class="project-section">
        <h2>Aperçu du Projet</h2>
        <div class="project-preview">
          <img
            src="/assets/reshaped-by-eternity.png"
            alt="Capture d'écran du projet Reshaped by Eternity"
            class="project-image"
          />
        </div>
      </section>

      <section class="project-section">
        <h2>Contexte du Projet</h2>
        <p>
          "Reshaped by Eternity" est un jeu vidéo rogue-like en 2D développé avec Unity. Ce projet
          explore des thèmes profonds tels que la réincarnation, la lutte contre ses propres démons
          et la quête de la vérité. Le joueur incarne une âme brisée cherchant à se libérer d'un
          labyrinthe mystique en constante transformation.
        </p>
      </section>

      <section class="project-section">
        <h2>Fonctionnalités Principales</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>Système de Réincarnation</h3>
            <ul>
              <li>Réincarnations dynamiques influencées par les actions du joueur</li>
              <li>Corps aléatoires avec forces et faiblesses spécifiques</li>
              <li>Possibilité de personnaliser les capacités lors des Portails de Réincarnation</li>
            </ul>
          </div>

          <div class="feature-card">
            <h3>Labyrinthe Mystique</h3>
            <ul>
              <li>Environnements en constante transformation</li>
              <li>Salles spéciales révélant des fragments d'identité</li>
              <li>Enigmes et choix moraux influençant la progression</li>
            </ul>
          </div>

          <div class="feature-card">
            <h3>Combat et Exploration</h3>
            <ul>
              <li>Ennemis symboliques représentant des souvenirs et des péchés</li>
              <li>Boss uniques incarnant les grandes fautes du passé</li>
              <li>Système de progression basé sur la collecte de fragments d'identité</li>
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
              <li>AC 1: Choisir et implémenter les architectures adaptées</li>
              <li>AC 3: Intégrer des solutions dans un environnement de production</li>
            </ul>
          </div>

          <div class="skill-group">
            <h3>Optimiser</h3>
            <ul>
              <li>AC 1: Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire…)</li>
              <li>AC 3: Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application (jeux vidéo, immersion)</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project-section">
        <h2>Défis et Solutions</h2>
        <div class="challenges">
          <p>
            Le principal défi était de créer un labyrinthe en perpétuelle mutation, tout en
            garantissant une expérience fluide pour le joueur. Nous avons utilisé des algorithmes de
            génération procédurale pour garantir une diversité constante des environnements tout en
            optimisant les performances.
          </p>
          <p>
            La mise en œuvre du système de réincarnation était également complexe : il fallait
            équilibrer les forces et faiblesses des corps tout en maintenant une progression juste.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ReshapedByEternityView'
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

.skills-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-group ul {
  list-style-type: none;
  padding: 0;
}

.skill-group li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  color: #666;
}

.skill-group li::before {
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
  .skills-section {
    grid-template-columns: 1fr;
  }
}
</style>
