<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 hero-gradient opacity-90"></div>
      <div class="absolute inset-0 bg-black/20"></div>
      
      <div class="relative z-10 container-custom text-center text-white">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Transform Your Life
            <span class="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2">With Expert Coaching</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Discover your potential, overcome obstacles, and achieve your dreams with personalized life coaching that empowers you to create lasting change.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <router-link to="/contact" class="btn-primary text-lg px-8 py-4">
              Start Your Journey
            </router-link>
            <router-link to="/services" class="btn-secondary text-lg px-8 py-4">
              Learn More
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i class="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Life Coaching?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of professional guidance that helps you unlock your full potential and achieve extraordinary results.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i :class="feature.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Journey to Success Starts Here
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                             With over a decade of experience in life coaching, I\'ve helped hundreds of individuals transform their lives, 
              overcome challenges, and achieve their most ambitious goals.
            </p>
            <div class="space-y-4 mb-8">
              <div class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-primary-600 text-xl"></i>
                <span class="text-gray-700">Personalized coaching approach</span>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-primary-600 text-xl"></i>
                <span class="text-gray-700">Proven strategies for success</span>
              </div>
              <div class="flex items-center space-x-3">
                <i class="fas fa-check-circle text-primary-600 text-xl"></i>
                <span class="text-gray-700">Ongoing support and accountability</span>
              </div>
            </div>
            <router-link to="/about" class="btn-primary">
              Learn More About Me
            </router-link>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl p-8 text-white">
              <div class="text-center">
                <i class="fas fa-quote-left text-4xl mb-4 opacity-50"></i>
                <p class="text-xl mb-6 leading-relaxed">
                  "Life coaching transformed my perspective and helped me achieve goals I never thought possible. 
                  The guidance and support I received were invaluable."
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i class="fas fa-user text-white"></i>
                  </div>
                  <div class="text-left">
                    <p class="font-semibold">Sarah Johnson</p>
                    <p class="text-sm opacity-80">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coaching Services
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the coaching program that best fits your needs and goals.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
          >
            <div class="p-8">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-6">
                <i :class="service.icon" class="text-white text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
              <ul class="space-y-2 mb-6">
                <li v-for="feature in service.features" :key="feature" class="flex items-center space-x-2">
                  <i class="fas fa-check text-primary-600 text-sm"></i>
                  <span class="text-gray-700 text-sm">{{ feature }}</span>
                </li>
              </ul>
              <router-link to="/services" class="btn-secondary w-full text-center">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding gradient-bg text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Life?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Take the first step towards your dreams. Book a free consultation and discover how life coaching can help you achieve extraordinary results.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Free Consultation
          </router-link>
          <a href="tel:+15551234567" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
            <i class="fas fa-phone mr-2"></i>
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    const features = [
      {
        icon: 'fas fa-target',
        title: 'Goal Achievement',
        description: 'Set clear, achievable goals and develop actionable plans to reach them with expert guidance.'
      },
      {
        icon: 'fas fa-brain',
        title: 'Mindset Transformation',
        description: 'Transform limiting beliefs and develop a powerful mindset that supports your success.'
      },
      {
        icon: 'fas fa-users',
        title: 'Personal Development',
        description: 'Build confidence, improve relationships, and develop essential life skills for lasting change.'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Performance Enhancement',
        description: 'Optimize your performance in all areas of life with proven strategies and techniques.'
      },
      {
        icon: 'fas fa-balance-scale',
        title: 'Work-Life Balance',
        description: 'Create harmony between your personal and professional life for greater fulfillment.'
      },
      {
        icon: 'fas fa-rocket',
        title: 'Accelerated Growth',
        description: 'Experience rapid personal and professional growth with focused, intensive coaching.'
      }
    ]

    const services = [
      {
        icon: 'fas fa-user-graduate',
        title: 'Individual Coaching',
        description: 'One-on-one personalized coaching sessions tailored to your specific needs and goals.',
        features: ['Personalized approach', 'Flexible scheduling', 'Ongoing support', 'Progress tracking']
      },
      {
        icon: 'fas fa-users',
        title: 'Group Programs',
        description: 'Join a community of like-minded individuals in structured group coaching programs.',
        features: ['Community support', 'Structured curriculum', 'Group accountability', 'Cost-effective']
      },
      {
        icon: 'fas fa-crown',
        title: 'Executive Coaching',
        description: 'High-level coaching for executives and business leaders to enhance leadership skills.',
        features: ['Leadership development', 'Strategic thinking', 'Performance optimization', 'Confidential sessions']
      }
    ]

    return {
      features,
      services
    }
  }
}
</script> 