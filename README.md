# OCARS Car Rental Landing Page

A responsive, single-screen landing page for the OCARS car rental mobile app built with Next.js 15 and Tailwind CSS.

## 🚗 Features

- **Responsive Design**: Optimized for desktop (≥1024px) and mobile (≤768px)
- **Modern UI**: Clean, airy layout with OCARS brand colors
- **Accessibility**: AA+ contrast, proper focus states, semantic HTML
- **Performance**: Optimized images, lazy loading, minimal bundle size
- **SEO Ready**: Meta tags, Open Graph, Twitter cards

## 🎨 Design System

### Color Palette
- **Primary**: #DC2626 (Red)
- **Primary Hover**: #B91C1C (Darker Red)
- **Text**: #111827 (Dark Gray)
- **Subtext**: #6B7280 (Medium Gray)
- **Background**: #FFFFFF (White)
- **Surface**: #F9FAFB (Light Gray)
- **Border**: #E5E7EB (Light Border)

### Typography
- **Font**: Inter (fallback: system-ui, Arial)
- **Border Radius**: 12px
- **Spacing Scale**: 8/12/16/24/32/48/56px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd ocars

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Customization

### App Store Links
Update the store badge URLs in `app/page.tsx`:
```tsx
// Replace placeholder URLs
href="https://apps.apple.com/..."  // Your App Store URL
href="https://play.google.com/..." // Your Google Play URL
```

### Logo
Replace `/public/ocars-logo.svg` with your actual logo file.

### Hero Image
Replace `/public/hero-car.svg` with your car photo or phone mockup.

### Content
Update the following content in `app/page.tsx`:
- Tagline: "Rent a car in minutes with OCARS."
- One-liner: "Doorstep delivery, flexible pricing, and 24×7 support."
- Feature points: "No membership fees • Instant KYC • Insurance included"

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push
3. Custom domain can be configured in Vercel dashboard

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📱 Mobile Optimization

- Sticky header with mobile-optimized navigation
- Responsive grid layouts
- Touch-friendly button sizes (≥44×44px)
- Mobile-specific bottom bar with store buttons
- Optimized spacing for mobile devices

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- ARIA labels for interactive elements
- Focus visible states
- High contrast ratios
- Keyboard navigation support

## 🔧 Technical Details

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Font**: Inter from Google Fonts
- **Images**: SVG illustrations with Next.js Image optimization
- **Build Tool**: Turbopack for faster builds
- **TypeScript**: Full type safety

## 📄 File Structure

```
ocars/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page component
├── public/
│   ├── app-store-badge.svg  # App Store download badge
│   ├── google-play-badge.svg # Google Play download badge
│   ├── hero-car.svg         # Hero section car illustration
│   └── ocars-logo.svg       # OCARS logo
├── package.json
└── README.md
```

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~5.38 kB (gzipped)
- **First Load JS**: ~119 kB
- **Image Optimization**: WebP/AVIF support with Next.js Image component

## 🔄 Updates & Maintenance

### Adding New Sections
1. Create new components in `app/components/`
2. Import and use in `page.tsx`
3. Update navigation links if needed

### Styling Changes
1. Modify `app/globals.css` for global changes
2. Use Tailwind classes for component-specific styling
3. Follow the established design system

### Content Updates
1. Edit text content directly in `page.tsx`
2. Update metadata in `layout.tsx`
3. Replace images in `public/` directory

## 📞 Support

For questions or issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Open an issue in this repository

---

Built with ❤️ for OCARS Car Rental
