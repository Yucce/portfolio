<template>
  <div class="contact-container">
    <h1>Contact</h1>

    <div class="contact-content">
      <!-- Coordonnées et réseaux -->
      <div class="contact-info-section">
        <!-- Coordonnées -->
        <div class="contact-info">
          <h2>Mes Coordonnées</h2>
          <div class="contact-items">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>thomascabot34@gmail.com</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>+33 6 86 53 43 75</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Frontignan, France</span>
            </div>
          </div>
        </div>

        <!-- Réseaux sociaux -->
        <div class="social-networks">
          <h2>Réseaux Professionnels</h2>
          <div class="social-links">
            <a href="mailto:thomascabot34@gmail.com" target="_blank" rel="noopener noreferrer" class="social-link">
              <i class="fas fa-envelope"></i>
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/thomas-cabot-0376b0230" target="_blank" rel="noopener noreferrer" class="social-link">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Formulaire -->
      <div class="contact-form-section">
        <h2>Me Contacter</h2>
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Nom</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              placeholder="Votre nom"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="Votre email"
            />
          </div>

          <div class="form-group">
            <label for="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              required
              placeholder="Sujet de votre message"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              placeholder="Votre message"
            ></textarea>
          </div>

          <button type="submit" class="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default defineComponent({
  name: 'ContactView',
  setup() {
    const formData = reactive<FormData>({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const handleSubmit = () => {
      console.log('Form submitted:', formData)
      // Ici vous pourrez ajouter la logique d'envoi du formulaire
    }

    return {
      formData,
      handleSubmit
    }
  }
})
</script>

<style scoped>
.contact-container {
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

h2 {
  font-size: 1.5em;
  color: #444;
  margin-bottom: 20px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* Section informations de contact */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-info, .social-networks {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1em;
}

.contact-item i {
  width: 20px;
  color: #3498db;
}

/* Réseaux sociaux */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: #444;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: #f5f5f5;
}

.social-link i {
  font-size: 1.5em;
  width: 25px;
  color: #3498db;
}

/* Formulaire */
.contact-form-section {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
Me Contacter
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  color: #444;
  font-weight: 500;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #3498db;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #2980b9;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
