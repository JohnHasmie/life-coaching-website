# Deployment Guide

This guide provides instructions for deploying the Life Coaching Website to various platforms.

## 🚀 Koyeb Deployment (Recommended)

### Prerequisites
- Koyeb account
- GitHub repository connected

### Steps

1. **Login to Koyeb**
   - Go to [koyeb.com](https://koyeb.com)
   - Sign up or login to your account

2. **Create New App**
   - Click "Create App"
   - Choose "GitHub" as deployment method
   - Select your repository: `JohnHasmie/life-coaching-website`

3. **Configure Build Settings**
   - **Build Command**: `npm install && npm run build`
   - **Run Command**: `npm start`
   - **Port**: `3000`

4. **Environment Variables** (Optional)
   ```
   NODE_ENV=production
   PORT=3000
   ```

5. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your app will be available at the provided Koyeb URL

### Using koyeb.yaml (Alternative)
You can also deploy using the provided `koyeb.yaml` configuration:

```bash
# Install Koyeb CLI
npm install -g @koyeb/cli

# Login to Koyeb
koyeb login

# Deploy using the configuration file
koyeb app init life-coaching-website --config koyeb.yaml
```

## 🐳 Docker Deployment

### Build and Run Locally
```bash
# Build the Docker image
docker build -t life-coaching-website .

# Run the container
docker run -p 3000:3000 life-coaching-website
```

### Deploy to Docker Hub
```bash
# Tag the image
docker tag life-coaching-website yourusername/life-coaching-website

# Push to Docker Hub
docker push yourusername/life-coaching-website
```

## 🌐 Netlify Deployment

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository

2. **Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `18`

3. **Deploy**
   - Netlify will automatically deploy on every push to master

## 📦 Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Connect your GitHub repository
   - Vercel will automatically detect Vue.js settings

## 🏠 SiteGround Deployment

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload the contents of the `dist` folder to your SiteGround hosting
   - Place files in your `public_html` directory

3. **Configure Domain**
   - Point your domain to the correct directory
   - Set up SSL certificate if needed

## 🔧 Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_APP_TITLE=Life Coaching Business
VITE_APP_DESCRIPTION=Professional life coaching services
VITE_APP_URL=https://your-domain.com
```

## 📱 Performance Optimization

The website is already optimized for:
- ✅ Fast loading times
- ✅ Mobile responsiveness
- ✅ SEO optimization
- ✅ Image optimization
- ✅ Code splitting

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Ensure Node.js version 16+ is installed
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Port Issues**
   - Ensure port 3000 is available
   - Check if another process is using the port

3. **Environment Variables**
   - Ensure all required environment variables are set
   - Check for typos in variable names

### Support

For deployment issues:
- Check the platform-specific documentation
- Review the build logs for error messages
- Ensure all dependencies are properly installed

## 🎯 Quick Deploy Commands

### Koyeb
```bash
koyeb app init life-coaching-website --config koyeb.yaml
```

### Netlify
```bash
npm run build && netlify deploy --prod --dir=dist
```

### Vercel
```bash
vercel --prod
```

---

**Your life coaching website is now ready for deployment!** 🎉 