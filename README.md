# Life Coaching Business Website

A modern, professional life coaching website built with Vue 3, featuring a beautiful design inspired by successful coaching websites. This single-page application provides a comprehensive platform for life coaches to showcase their services, share their story, and connect with potential clients.

## 🚀 Features

### Design & User Experience
- **Modern, Professional Design**: Clean, elegant design with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Fast Performance**: Built with Vue 3 and Vite for optimal loading speeds
- **Smooth Animations**: CSS transitions and hover effects for enhanced user experience
- **Accessibility**: Semantic HTML and keyboard navigation support

### Pages & Sections
- **Home Page**: Hero section, features, testimonials, and call-to-action
- **About Page**: Coach story, philosophy, credentials, and testimonials
- **Services Page**: Detailed coaching packages, pricing, and specialized programs
- **Contact Page**: Contact form, contact information, and FAQ
- **Blog Page**: Articles, search, filtering, and newsletter signup

### Functionality
- **Contact Form**: Fully functional contact form with validation
- **Newsletter Signup**: Email subscription functionality
- **Search & Filter**: Blog search and category filtering
- **Mobile Navigation**: Responsive mobile menu
- **Social Media Integration**: Social media links and sharing

## 🛠️ Technology Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Routing**: Vue Router 4

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LiveCoachingBussines
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors & Branding
The website uses a customizable color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    // ... more shades
    900: '#701a75',
  }
}
```

### Content Updates
- **Text Content**: Update content in the respective Vue components
- **Images**: Replace placeholder icons with actual images
- **Contact Information**: Update contact details in components
- **Social Media**: Update social media links

### Styling
- **Custom CSS**: Add custom styles in `src/style.css`
- **Tailwind Classes**: Use Tailwind utility classes for styling
- **Component Styles**: Add scoped styles to individual components

## 📁 Project Structure

```
LiveCoachingBussines/
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── Navigation.vue   # Main navigation component
│   │   └── Footer.vue       # Footer component
│   ├── views/               # Page components
│   │   ├── Home.vue         # Home page
│   │   ├── About.vue        # About page
│   │   ├── Services.vue     # Services page
│   │   ├── Contact.vue      # Contact page
│   │   └── Blog.vue         # Blog page
│   ├── App.vue              # Main app component
│   ├── main.js              # App entry point
│   └── style.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project documentation
```

## 🚀 Deployment

### SiteGround Deployment
Since you mentioned hosting on SiteGround, here are the deployment steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to SiteGround**
   - Upload the contents of the `dist` folder to your SiteGround hosting
   - Place files in your public_html directory or a subdirectory

3. **Configure Domain**
   - Point your domain to the correct directory
   - Set up SSL certificate if needed

### Alternative Deployment Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive design that adapts to all screen sizes
- Touch-friendly navigation and buttons
- Optimized images and content layout
- Fast loading times on mobile networks

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configuration:

```env
VITE_APP_TITLE=Life Coaching Business
VITE_APP_DESCRIPTION=Professional life coaching services
```

### SEO Optimization
- Meta tags are included in `index.html`
- Open Graph tags for social media sharing
- Structured data for better search engine visibility

## 📞 Support

For questions or support:
- Email: hello@lifecoach.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from successful coaching websites
- Vue.js community for excellent documentation
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icon library

---

**Ready to transform your life coaching business?** This website provides everything you need to establish a professional online presence and connect with clients who are ready to begin their transformation journey. 