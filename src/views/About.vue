<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Life Coach
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              I\'m passionate about helping individuals discover their true potential and create the life they\'ve always dreamed of. 
                             With over a decade of experience in life coaching, I\'ve guided hundreds of people through transformative journeys.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <i class="fas fa-certificate text-primary-600"></i>
                <span class="text-gray-700 font-medium">Certified Coach</span>
              </div>
              <div class="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <i class="fas fa-users text-primary-600"></i>
                <span class="text-gray-700 font-medium">500+ Clients</span>
              </div>
              <div class="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <i class="fas fa-star text-primary-600"></i>
                <span class="text-gray-700 font-medium">10+ Years</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl p-8 text-white text-center">
              <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-user-tie text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-semibold mb-4">Professional Coach</h3>
              <p class="text-lg opacity-90 mb-6">
                "My mission is to empower you to break through limitations and create extraordinary results in every area of your life."
              </p>
              <div class="flex justify-center space-x-4">
                <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Story Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Story
            </h2>
            <p class="text-xl text-gray-600">
              How I discovered my passion for helping others transform their lives
            </p>
          </div>
          
          <div class="prose prose-lg max-w-none">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              My journey into life coaching began over a decade ago when I was struggling with my own personal and professional challenges. 
              I felt stuck, unfulfilled, and unsure about my direction in life. It was during this difficult period that I discovered 
              the transformative power of coaching.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Through working with my own coach, I experienced profound personal growth and transformation. I learned to identify and 
              overcome limiting beliefs, set clear goals, and take consistent action toward my dreams. The results were life-changing.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              This experience ignited my passion for helping others achieve similar breakthroughs. I dedicated myself to becoming a 
              certified life coach and developing the skills and methodologies that would enable me to guide others on their own 
              transformative journeys.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
                             Today, I\'m honored to work with clients from all walks of life, helping them overcome obstacles, discover their potential, 
                             and create the extraordinary lives they deserve. Every client\'s success story fuels my commitment to this meaningful work.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Coaching Philosophy
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide my approach to helping you achieve lasting transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(principle, index) in principles" 
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6">
              <i :class="principle.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ principle.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Credentials Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Credentials & Certifications
          </h2>
          <p class="text-xl text-gray-600">
            Professional qualifications and ongoing education
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(credential, index) in credentials" 
            :key="index"
            class="bg-gray-50 p-6 rounded-xl border border-gray-200"
          >
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i :class="credential.icon" class="text-primary-600 text-xl"></i>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ credential.title }}</h3>
                <p class="text-gray-600 text-sm">{{ credential.issuer }}</p>
                <p class="text-gray-500 text-sm">{{ credential.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p class="text-xl opacity-90 max-w-2xl mx-auto">
            Real stories from real people who have transformed their lives through coaching
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
          >
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <i class="fas fa-user text-white"></i>
              </div>
              <div>
                <h4 class="font-semibold">{{ testimonial.name }}</h4>
                <p class="text-sm opacity-80">{{ testimonial.title }}</p>
              </div>
            </div>
            <p class="text-lg leading-relaxed mb-4">{{ testimonial.quote }}</p>
            <div class="flex text-yellow-300">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gray-900 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Work Together?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                     Let\'s start your transformation journey. Book a free consultation to discuss your goals and see how coaching can help you achieve them.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary text-lg px-8 py-4">
            Book Free Consultation
          </router-link>
          <router-link to="/services" class="btn-secondary text-lg px-8 py-4">
            View Services
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const principles = [
      {
        icon: 'fas fa-heart',
        title: 'Client-Centered Approach',
        description: 'Every coaching relationship is unique. I tailor my approach to your specific needs, goals, and learning style.'
      },
      {
        icon: 'fas fa-lightbulb',
        title: 'Potential-Focused',
        description: 'I believe everyone has unlimited potential. My role is to help you discover and unleash your innate capabilities.'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Partnership-Based',
        description: 'Coaching is a collaborative partnership. We work together as equals, with you as the expert on your own life.'
      },
      {
        icon: 'fas fa-target',
        title: 'Action-Oriented',
        description: 'Real change happens through consistent action. I help you develop practical strategies and hold you accountable.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Safe & Confidential',
        description: 'Your privacy and trust are paramount. All sessions are confidential and conducted in a safe, judgment-free space.'
      },
      {
        icon: 'fas fa-infinity',
        title: 'Continuous Growth',
        description: 'I\'m committed to my own ongoing development to provide you with the most effective coaching methodologies.'
      }
    ]

    const credentials = [
      {
        icon: 'fas fa-certificate',
        title: 'Certified Life Coach',
        issuer: 'International Coach Federation',
        year: '2018'
      },
      {
        icon: 'fas fa-graduation-cap',
        title: 'Master\'s in Psychology',
        issuer: 'University of Success',
        year: '2015'
      },
      {
        icon: 'fas fa-award',
        title: 'NLP Practitioner',
        issuer: 'NLP Institute',
        year: '2019'
      },
      {
        icon: 'fas fa-medal',
        title: 'Executive Coach Certification',
        issuer: 'Executive Coaching Institute',
        year: '2020'
      },
      {
        icon: 'fas fa-star',
        title: 'Mindfulness Teacher',
        issuer: 'Mindfulness Academy',
        year: '2021'
      },
      {
        icon: 'fas fa-trophy',
        title: 'Business Coach Certification',
        issuer: 'Business Coaching Federation',
        year: '2022'
      }
    ]

    const testimonials = [
      {
        name: 'Sarah Johnson',
        title: 'Entrepreneur',
        quote: 'Working with my coach completely transformed my perspective on success. I\'ve achieved more in the past year than in the previous five.'
      },
      {
        name: 'Michael Chen',
        title: 'Corporate Executive',
        quote: 'The coaching sessions helped me develop leadership skills I never knew I had. My team\'s performance has improved dramatically.'
      },
      {
        name: 'Emily Rodriguez',
        title: 'Career Changer',
        quote: 'I was stuck in a job I hated. Through coaching, I found the courage to pursue my passion and now I\'m living my dream career.'
      }
    ]

    return {
      principles,
      credentials,
      testimonials
    }
  }
}
</script> 