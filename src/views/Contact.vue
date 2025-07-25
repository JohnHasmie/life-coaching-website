<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                     Let\'s Start Your Journey
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ready to transform your life? Get in touch today to schedule your free consultation and discover how coaching can help you achieve your dreams.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p class="text-gray-600 mb-8">
              Fill out the form below and I'll get back to you within 24 hours to schedule your free consultation.
            </p>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    id="firstName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    id="lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    id="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    v-model="form.phone"
                    type="tel" 
                    id="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your phone number"
                  >
                </div>
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Interest *</label>
                <select 
                  v-model="form.service"
                  id="service"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="individual">Individual Coaching</option>
                  <option value="group">Group Programs</option>
                  <option value="executive">Executive Coaching</option>
                  <option value="career">Career Transition</option>
                  <option value="relationship">Relationship Coaching</option>
                  <option value="business">Business Growth</option>
                  <option value="work-life">Work-Life Balance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea 
                  v-model="form.message"
                  id="message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your goals and what you'd like to achieve through coaching..."
                ></textarea>
              </div>

              <div class="flex items-start space-x-3">
                <input 
                  v-model="form.newsletter"
                  type="checkbox" 
                  id="newsletter"
                  class="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                >
                <label for="newsletter" class="text-sm text-gray-600">
                  I'd like to receive weekly motivation and coaching tips via email
                </label>
              </div>

              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p class="text-gray-600 mb-8">
              I\'m here to help you on your journey. Reach out through any of these channels and I\'ll respond promptly.
            </p>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p class="text-gray-600 mb-2">hello@lifecoach.com</p>
                  <p class="text-sm text-gray-500">I typically respond within 24 hours</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p class="text-gray-600 mb-2">+1 (555) 123-4567</p>
                  <p class="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Office</h3>
                  <p class="text-gray-600 mb-2">123 Success Street<br>Dream City, DC 12345</p>
                  <p class="text-sm text-gray-500">In-person sessions available by appointment</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p class="text-gray-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST<br>Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p class="text-sm text-gray-500">Evening and weekend sessions available</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i class="fab fa-linkedin-in text-gray-600 hover:text-white"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i class="fab fa-twitter text-gray-600 hover:text-white"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i class="fab fa-instagram text-gray-600 hover:text-white"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <i class="fab fa-facebook-f text-gray-600 hover:text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about getting started with coaching
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white rounded-xl p-6 shadow-sm"
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
          Ready to Transform Your Life?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Don't wait another day to start living the life you've always dreamed of. 
          Take the first step towards your transformation today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+15551234567" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i class="fas fa-phone mr-2"></i>
            Call Now
          </a>
          <a href="mailto:hello@lifecoach.com" class="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
            <i class="fas fa-envelope mr-2"></i>
            Email Me
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      newsletter: false
    })

    const isSubmitting = ref(false)

    const faqs = [
      {
        question: 'How quickly will you respond to my message?',
        answer: 'I typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call me directly.'
      },
      {
        question: 'What happens during the free consultation?',
        answer: 'The free consultation is a 30-minute conversation where we discuss your goals, challenges, and how coaching can help. It\'s also an opportunity for us to see if we\'re a good fit to work together.'
      },
      {
        question: 'Do you offer virtual coaching sessions?',
        answer: 'Yes! I offer both in-person and virtual coaching sessions via Zoom, Skype, or phone. Virtual sessions are just as effective as in-person sessions.'
      },
      {
        question: 'What if I need to reschedule a session?',
        answer: 'I understand that life happens. I have a 24-hour cancellation policy, and I\'m happy to reschedule sessions with advance notice.'
      },
      {
        question: 'How do I know if coaching is right for me?',
        answer: 'Coaching is ideal if you\'re ready for change, open to new perspectives, and committed to taking action. The free consultation will help us determine if coaching is the right fit for your needs.'
      }
    ]

    const submitForm = async () => {
      isSubmitting.value = true
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', form.value)
      
      // Show success message
      alert('Thank you for your message! I\'ll get back to you within 24 hours.')
      
      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        newsletter: false
      }
      
      isSubmitting.value = false
    }

    return {
      form,
      isSubmitting,
      faqs,
      submitForm
    }
  }
}
</script> 