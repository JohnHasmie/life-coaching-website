<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <i class="fas fa-lightbulb text-white text-lg"></i>
            </div>
            <span class="text-2xl font-bold">LifeCoach</span>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            Transform your life with personalized coaching that empowers you to discover your potential, 
            overcome obstacles, and achieve your dreams. Your journey to success starts here.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-300 hover:text-white transition-colors duration-200">
                Services
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-300 hover:text-white transition-colors duration-200">
                Blog
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <i class="fas fa-map-marker-alt text-primary-400 mt-1"></i>
              <p class="text-gray-300">123 Success Street<br>Dream City, DC 12345</p>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-phone text-primary-400"></i>
              <p class="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-envelope text-primary-400"></i>
              <p class="text-gray-300">hello@lifecoach.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="max-w-md">
          <h3 class="text-xl font-semibold mb-4">Stay Inspired</h3>
          <p class="text-gray-300 mb-4">Get weekly motivation and tips delivered to your inbox.</p>
          <form @submit.prevent="subscribeNewsletter" class="flex space-x-2">
            <input 
              v-model="email"
              type="email" 
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              required
            >
            <button type="submit" class="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} LifeCoach. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const email = ref('')

    const subscribeNewsletter = () => {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email.value)
      alert('Thank you for subscribing!')
      email.value = ''
    }

    return {
      email,
      subscribeNewsletter
    }
  }
}
</script> 