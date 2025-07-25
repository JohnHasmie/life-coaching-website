<template>
  <div class="blog">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Life Coaching Blog
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Insights, tips, and inspiration to help you on your journey of personal growth and transformation.
        </p>
      </div>
    </section>

    <!-- Search and Filter -->
    <section class="py-8 bg-white border-b border-gray-200">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div class="flex-1 max-w-md">
            <div class="relative">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Search articles..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
              <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="toggleCategory(category)"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              :class="selectedCategories.includes(category) 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="section-padding bg-white" v-if="featuredPost">
      <div class="container-custom">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
        <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {{ featuredPost.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ featuredPost.date }}</span>
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ featuredPost.title }}</h3>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">{{ featuredPost.excerpt }}</p>
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-user text-primary-600 text-sm"></i>
                  </div>
                  <span class="text-gray-700">{{ featuredPost.author }}</span>
                </div>
                <span class="text-gray-500">•</span>
                <span class="text-gray-500">{{ featuredPost.readTime }} min read</span>
              </div>
            </div>
            <div class="bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl p-8 text-white text-center">
              <i class="fas fa-lightbulb text-4xl mb-4"></i>
              <h4 class="text-xl font-semibold mb-2">Transform Your Life</h4>
              <p class="opacity-90">Discover powerful strategies for personal growth and success</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
          >
            <div class="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
              <i :class="post.icon" class="text-white text-4xl"></i>
            </div>
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-4">
                <span class="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {{ post.category }}
                </span>
                <span class="text-gray-500 text-sm">{{ post.date }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <i class="fas fa-user text-gray-600 text-xs"></i>
                  </div>
                  <span class="text-gray-700 text-sm">{{ post.author }}</span>
                </div>
                <span class="text-gray-500 text-sm">{{ post.readTime }} min</span>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMorePosts">
          <button 
            @click="loadMorePosts"
            class="btn-primary"
          >
            Load More Articles
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Stay Inspired
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get weekly motivation, coaching tips, and exclusive content delivered directly to your inbox.
        </p>
        <form @submit.prevent="subscribeNewsletter" class="max-w-md mx-auto flex space-x-2">
          <input 
            v-model="newsletterEmail"
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            required
          >
          <button type="submit" class="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors">
            Subscribe
          </button>
        </form>
        <p class="text-sm opacity-75 mt-4">No spam, unsubscribe at any time.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Blog',
  setup() {
    const searchQuery = ref('')
    const selectedCategories = ref([])
    const newsletterEmail = ref('')
    const postsPerPage = ref(6)

    const categories = [
      'All',
      'Personal Development',
      'Career Growth',
      'Mindset',
      'Relationships',
      'Productivity',
      'Leadership',
      'Wellness'
    ]

    const featuredPost = {
      id: 'featured',
      title: 'The 5 Key Principles of Successful Life Transformation',
      excerpt: 'Discover the fundamental principles that successful people use to transform their lives and achieve extraordinary results. Learn how to apply these principles to your own journey.',
      category: 'Personal Development',
      author: 'Life Coach',
      date: 'Dec 15, 2024',
      readTime: 8,
      icon: 'fas fa-star'
    }

    const allPosts = [
      {
        id: 1,
        title: 'How to Build Unshakeable Confidence in 30 Days',
        excerpt: 'Learn proven strategies to develop genuine confidence that will transform how you approach challenges and opportunities in life.',
        category: 'Personal Development',
        author: 'Life Coach',
        date: 'Dec 12, 2024',
        readTime: 6,
        icon: 'fas fa-crown'
      },
      {
        id: 2,
        title: 'The Art of Goal Setting: From Dreams to Reality',
        excerpt: 'Master the science of effective goal setting and learn how to turn your biggest dreams into achievable, actionable plans.',
        category: 'Productivity',
        author: 'Life Coach',
        date: 'Dec 10, 2024',
        readTime: 7,
        icon: 'fas fa-target'
      },
      {
        id: 3,
        title: 'Overcoming Imposter Syndrome: A Complete Guide',
        excerpt: 'Discover practical techniques to overcome imposter syndrome and embrace your true capabilities and achievements.',
        category: 'Mindset',
        author: 'Life Coach',
        date: 'Dec 8, 2024',
        readTime: 9,
        icon: 'fas fa-brain'
      },
      {
        id: 4,
        title: 'Building Meaningful Relationships in the Digital Age',
        excerpt: 'Navigate the challenges of modern relationships and learn how to build deeper, more authentic connections.',
        category: 'Relationships',
        author: 'Life Coach',
        date: 'Dec 5, 2024',
        readTime: 5,
        icon: 'fas fa-heart'
      },
      {
        id: 5,
        title: 'Leadership Skills That Will Accelerate Your Career',
        excerpt: 'Develop essential leadership qualities that will help you advance in your career and inspire others around you.',
        category: 'Leadership',
        author: 'Life Coach',
        date: 'Dec 3, 2024',
        readTime: 8,
        icon: 'fas fa-users'
      },
      {
        id: 6,
        title: 'Creating a Morning Routine That Sets You Up for Success',
        excerpt: 'Design a powerful morning routine that will energize your day and help you achieve your most important goals.',
        category: 'Productivity',
        author: 'Life Coach',
        date: 'Dec 1, 2024',
        readTime: 6,
        icon: 'fas fa-sun'
      },
      {
        id: 7,
        title: 'The Science of Habit Formation: Building Lasting Change',
        excerpt: 'Understand the psychology behind habit formation and learn how to create positive habits that stick.',
        category: 'Personal Development',
        author: 'Life Coach',
        date: 'Nov 28, 2024',
        readTime: 10,
        icon: 'fas fa-cogs'
      },
      {
        id: 8,
        title: 'Work-Life Balance: Myth or Achievable Reality?',
        excerpt: 'Explore practical strategies for creating true work-life balance in today\'s fast-paced world.',
        category: 'Wellness',
        author: 'Life Coach',
        date: 'Nov 25, 2024',
        readTime: 7,
        icon: 'fas fa-balance-scale'
      },
      {
        id: 9,
        title: 'Networking Strategies That Actually Work',
        excerpt: 'Learn authentic networking techniques that will help you build valuable professional relationships.',
        category: 'Career Growth',
        author: 'Life Coach',
        date: 'Nov 22, 2024',
        readTime: 6,
        icon: 'fas fa-network-wired'
      }
    ]

    const filteredPosts = computed(() => {
      let filtered = allPosts

      // Filter by search query
      if (searchQuery.value) {
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      }

      // Filter by categories
      if (selectedCategories.value.length > 0 && !selectedCategories.value.includes('All')) {
        filtered = filtered.filter(post => 
          selectedCategories.value.includes(post.category)
        )
      }

      return filtered.slice(0, postsPerPage.value)
    })

    const hasMorePosts = computed(() => {
      return filteredPosts.value.length < allPosts.length
    })

    const toggleCategory = (category) => {
      if (category === 'All') {
        selectedCategories.value = selectedCategories.value.includes('All') ? [] : ['All']
      } else {
        const index = selectedCategories.value.indexOf(category)
        if (index > -1) {
          selectedCategories.value.splice(index, 1)
        } else {
          selectedCategories.value.push(category)
        }
        // Remove 'All' if other categories are selected
        const allIndex = selectedCategories.value.indexOf('All')
        if (allIndex > -1) {
          selectedCategories.value.splice(allIndex, 1)
        }
      }
    }

    const loadMorePosts = () => {
      postsPerPage.value += 6
    }

    const subscribeNewsletter = () => {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', newsletterEmail.value)
      alert('Thank you for subscribing to our newsletter!')
      newsletterEmail.value = ''
    }

    return {
      searchQuery,
      selectedCategories,
      newsletterEmail,
      categories,
      featuredPost,
      filteredPosts,
      hasMorePosts,
      toggleCategory,
      loadMorePosts,
      subscribeNewsletter
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 