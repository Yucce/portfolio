<template>
  <div class="home-container">
    <!-- Section Présentation -->
    <section class="presentation-section">
      <h1>Portfolio</h1>
      <div class="about-card">
        <h2>À propos de moi</h2>
        <p>
          Passionné par le développement web et l'innovation technologique, je suis actuellement en
          troisième année à l'IUT Informatique de Montpellier. Mon parcours est marqué par un intérêt
          particulier pour l'architecture logicielle et le développement d'applications web modernes.
        </p>
        <p>
          Fervent amateur de jeux vidéo et grand lecteur, je trouve dans ces passions une source
          constante d'inspiration. Les jeux m'ont appris la résolution de problèmes complexes,
          tandis que la lecture nourrit ma créativité et ma capacité à envisager différentes
          approches dans le développement informatique. Cette combinaison unique m'aide à aborder
          les défis techniques avec une perspective originale et innovante.
        </p>
      </div>
    </section>

    <!-- Section Parcours -->
    <section class="background-section">
      <div class="background-card">
        <h2>Mon Parcours</h2>
        <p>
          Mon parcours à l'IUT de Montpellier m'a permis de développer une expertise solide en
          développement web fullstack. Je maîtrise particulièrement bien l'écosystème JavaScript/TypeScript
          avec Vue.js, ainsi que le développement backend avec Symfony.
        </p>
        <p>
          Mes projets académiques m'ont permis de travailler sur des applications concrètes, notamment :
        </p>
        <ul class="experience-list">
          <li>Une API REST complète pour la gestion d'événements</li>
          <li>Un système d'annuaire en ligne avec authentification avancée</li>
          <li>Une plateforme de gestion de tournois pour une association sportive</li>
        </ul>
        <p>
          Cette expérience pratique, combinée à ma formation théorique, m'a permis de développer
          une approche méthodique et efficace du développement logiciel.
        </p>
      </div>
    </section>

    <!-- Section Projet Professionnel -->
    <section class="professional-section">
      <div class="professional-card">
        <h2>Projet Professionnel</h2>
        <p>
          Déterminé à approfondir mes connaissances dans le développement web avancé, je souhaite
          poursuivre mes études en master en alternance. Mon objectif est de combiner formation
          académique et expérience professionnelle pour développer une expertise pointue en
          architectures web modernes et en développement d'applications cloud.
        </p>
        <p>
          À terme, j'aspire à devenir Lead Developer, pour pouvoir allier expertise technique et
          gestion d'équipe, tout en restant à la pointe des nouvelles technologies.
        </p>
      </div>
    </section>

    <!-- Section CV -->
    <section class="cv-section">
      <div class="cv-card">
        <h2>Mon CV</h2>
        <div class="cv-download">
          <a href="/assets/CV.pdf" target="_blank" class="download-button">
            <span>Voir mon CV</span>
          </a>
          <a href="/assets/CV.pdf" download class="download-button">
            <span>Télécharger mon CV</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  methods: {
    handleCVUpload(event: Event) {
      const target = event.target as HTMLInputElement
      if (target.files && target.files[0]) {
        console.log('CV uploaded:', target.files[0])
      }
    }
  }
})
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: bold;
}

h2 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1.5rem;
}

p {
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.2rem;
}

p:last-child {
  margin-bottom: 0;
}

.experience-list {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.experience-list li {
  color: #4a5568;
  margin-bottom: 0.8rem;
  position: relative;
}

.experience-list li::before {
  content: "•";
  color: #3498db;
  position: absolute;
  left: -1.2rem;
  font-weight: bold;
}

.about-card, .background-card, .professional-card, .cv-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.about-card:hover, .background-card:hover, .professional-card:hover, .cv-card:hover {
  transform: translateY(-5px);
}

.cv-download {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

.download-button {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #2980b9;
}
</style>
