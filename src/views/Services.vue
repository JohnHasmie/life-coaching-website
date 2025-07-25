<template>
  <div class="services">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Coaching Services
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Choose the coaching program that best fits your needs and goals. Each program is designed to provide 
          personalized guidance and support for your unique journey of transformation.
        </p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How I Can Help You
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching solutions designed to address your specific challenges and goals
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="bg-gray-50 rounded-2xl p-8 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6">
              <i :class="service.icon" class="text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="benefit in service.benefits" :key="benefit" class="flex items-center space-x-2">
                <i class="fas fa-check text-primary-600 text-sm"></i>
                <span class="text-gray-700 text-sm">{{ benefit }}</span>
              </li>
            </ul>
            <router-link :to="service.link" class="btn-primary w-full text-center">
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coaching Programs
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the program that best fits your needs and budget
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(plan, index) in plans" 
            :key="index"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border-2"
            :class="plan.featured ? 'border-primary-500 relative' : 'border-gray-100'"
          >
            <div v-if="plan.featured" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div class="p-8">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
                <p class="text-gray-600 mb-6">{{ plan.description }}</p>
                <div class="mb-4">
                  <span class="text-4xl font-bold text-gray-900">${{ plan.price }}</span>
                  <span class="text-gray-600">/{{ plan.period }}</span>
                </div>
                <p class="text-sm text-gray-500">{{ plan.sessions }} sessions</p>
              </div>

              <ul class="space-y-4 mb-8">
                <li v-for="feature in plan.features" :key="feature" class="flex items-start space-x-3">
                  <i class="fas fa-check text-primary-600 mt-1"></i>
                  <span class="text-gray-700">{{ feature }}</span>
                </li>
              </ul>

              <router-link to="/contact" class="btn-primary w-full text-center">
                Get Started
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coaching Process -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Coaching Process
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to help you achieve lasting transformation
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(step, index) in process" 
            :key="index"
            class="text-center relative"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ step.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
            
            <!-- Connector line -->
            <div v-if="index < process.length - 1" class="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform translate-x-4"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Programs -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized Programs
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Targeted coaching programs for specific areas of life and business
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(program, index) in specializedPrograms" 
            :key="index"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover p-8"
          >
            <div class="flex items-start space-x-4">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <i :class="program.icon" class="text-white text-2xl"></i>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ program.title }}</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ program.description }}</p>
                <div class="space-y-2 mb-6">
                  <div v-for="focus in program.focusAreas" :key="focus" class="flex items-center space-x-2">
                    <i class="fas fa-arrow-right text-primary-600 text-sm"></i>
                    <span class="text-gray-700 text-sm">{{ focus }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-lg font-semibold text-primary-600">${{ program.price }}</span>
                  <router-link to="/contact" class="btn-secondary">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about coaching and how it can help you
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-gray-50 rounded-xl p-6"
          >
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ faq.question }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding gradient-bg text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Transformation?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Book a free consultation to discuss your goals and find the perfect coaching program for you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Free Consultation
          </router-link>
          <a href="tel:+15551234567" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
            <i class="fas fa-phone mr-2"></i>
            Call to Discuss
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  setup() {
    const services = [
      {
        icon: 'fas fa-user-graduate',
        title: 'Individual Coaching',
        description: 'One-on-one personalized coaching sessions tailored to your specific needs and goals.',
        benefits: ['Personalized approach', 'Flexible scheduling', 'Deep transformation', 'Accountability'],
        link: '#individual'
      },
      {
        icon: 'fas fa-users',
        title: 'Group Programs',
        description: 'Join a community of like-minded individuals in structured group coaching programs.',
        benefits: ['Community support', 'Cost-effective', 'Shared learning', 'Group accountability'],
        link: '#group'
      },
      {
        icon: 'fas fa-crown',
        title: 'Executive Coaching',
        description: 'High-level coaching for executives and business leaders to enhance leadership skills.',
        benefits: ['Leadership development', 'Strategic thinking', 'Performance optimization', 'Confidential sessions'],
        link: '#executive'
      }
    ]

    const plans = [
      {
        name: 'Starter',
        description: 'Perfect for those new to coaching',
        price: '297',
        period: 'month',
        sessions: '4',
        features: [
          '4 one-on-one sessions',
          'Goal setting & planning',
          'Email support',
          'Resource library access',
          '30-day follow-up'
        ],
        featured: false
      },
      {
        name: 'Transformation',
        description: 'Most popular for lasting change',
        price: '597',
        period: 'month',
        sessions: '8',
        features: [
          '8 one-on-one sessions',
          'Comprehensive assessment',
          'Priority email support',
          'Weekly check-ins',
          'Resource library access',
          '90-day follow-up',
          'Bonus group session'
        ],
        featured: true
      },
      {
        name: 'Elite',
        description: 'Intensive program for rapid results',
        price: '997',
        period: 'month',
        sessions: '12',
        features: [
          '12 one-on-one sessions',
          'Deep dive assessment',
          '24/7 priority support',
          'Daily accountability',
          'Premium resources',
          '6-month follow-up',
          '2 bonus group sessions',
          'Personal action plan'
        ],
        featured: false
      }
    ]

    const process = [
      {
        title: 'Discovery',
        description: 'We start with a comprehensive assessment to understand your current situation, goals, and challenges.'
      },
      {
        title: 'Planning',
        description: 'Together, we create a personalized action plan with clear milestones and strategies for success.'
      },
      {
        title: 'Implementation',
        description: 'You take action with my guidance, support, and accountability to ensure consistent progress.'
      },
      {
        title: 'Transformation',
        description: 'Through consistent effort and support, you achieve lasting change and reach your goals.'
      }
    ]

    const specializedPrograms = [
      {
        icon: 'fas fa-briefcase',
        title: 'Career Transition',
        description: 'Navigate career changes with confidence and clarity.',
        focusAreas: [
          'Career assessment and planning',
          'Resume and interview preparation',
          'Networking strategies',
          'Skill development planning'
        ],
        price: '497'
      },
      {
        icon: 'fas fa-heart',
        title: 'Relationship Coaching',
        description: 'Build stronger, more fulfilling relationships in all areas of life.',
        focusAreas: [
          'Communication skills',
          'Boundary setting',
          'Conflict resolution',
          'Emotional intelligence'
        ],
        price: '397'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Business Growth',
        description: 'Scale your business and develop leadership skills.',
        focusAreas: [
          'Strategic planning',
          'Team leadership',
          'Performance optimization',
          'Business development'
        ],
        price: '697'
      },
      {
        icon: 'fas fa-balance-scale',
        title: 'Work-Life Balance',
        description: 'Create harmony between your personal and professional life.',
        focusAreas: [
          'Time management',
          'Priority setting',
          'Stress management',
          'Life integration'
        ],
        price: '347'
      }
    ]

    const faqs = [
      {
        question: 'How long does a typical coaching program last?',
        answer: 'Most coaching programs range from 3-6 months, depending on your goals and the program you choose. We offer flexible options to fit your schedule and needs.'
      },
      {
        question: 'What happens during a coaching session?',
        answer: 'Sessions are collaborative conversations where we explore your goals, identify obstacles, develop strategies, and create action plans. Each session is tailored to your specific needs.'
      },
      {
        question: 'How do I know if coaching is right for me?',
        answer: 'Coaching is ideal if you\'re ready for change, open to new perspectives, and committed to taking action. We offer a free consultation to help you determine if coaching is the right fit.'
      },
      {
        question: 'What if I\'m not satisfied with the coaching?',
        answer: 'Your satisfaction is guaranteed. If you\'re not completely satisfied after your first session, we\'ll provide a full refund. We\'re committed to your success.'
      },
      {
        question: 'Can I switch between different coaching programs?',
        answer: 'Yes, you can upgrade or modify your program as your needs evolve. We\'ll work together to ensure you\'re getting the most value from your coaching experience.'
      }
    ]

    return {
      services,
      plans,
      process,
      specializedPrograms,
      faqs
    }
  }
}
</script> 