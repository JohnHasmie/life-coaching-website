<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm transition-all duration-300" :class="{ 'bg-white/98 shadow-md': isScrolled }">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
            <i class="fas fa-lightbulb text-white text-lg"></i>
          </div>
          <span class="text-xl md:text-2xl font-bold text-gray-900">LifeCoach</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <router-link to="/contact" class="btn-primary">
            Start Your Journey
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in"
      >
        <div class="px-4 py-6 space-y-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
          >
            {{ item.name }}
          </router-link>
          <div class="pt-4 border-t border-gray-100">
            <router-link 
              to="/contact" 
              @click="closeMobileMenu"
              class="btn-primary w-full text-center block"
            >
              Start Your Journey
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Navigation',
  setup() {
    const isMobileMenuOpen = ref(false)
    const isScrolled = ref(false)

    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ]

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isMobileMenuOpen,
      isScrolled,
      navItems,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script> 