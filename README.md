# TruHR - HRMS Marketing Landing Page

A modern, fully responsive single-page landing page for TruHR, an HRMS product built for India's distributed workforces.

## 🎨 Design Features

- **Color Palette**: Deep Navy (#1a1f3c) + Warm Beige (#fdf6ec) with Orange (#f97316) accents
- **Font**: Inter sans-serif family
- **Responsive**: Mobile-first design with full responsive support
- **Modern Components**: Built with React + Tailwind CSS

## 🏗️ Project Structure

```
src/
├── App.tsx           # Main landing page component with all sections
├── App.css           # Tailwind CSS styles
├── index.css         # Global styles and Tailwind directives
├── main.tsx          # React entry point
└── assets/           # Static assets
```

## 📋 Landing Page Sections

1. **Navbar** - Fixed navigation with CTA buttons and mobile menu
2. **Hero Section** - Two-column layout with lead form
3. **Problem Statement** - Context and pain points
4. **Value Pillars** - Three key product benefits
5. **Field Staff Feature** - "Pin My Visit" capabilities
6. **CTA Banner** - Call-to-action section
7. **Industries** - 6 industry-specific cards (Healthcare highlighted)
8. **FAQs** - Expandable accordion with 5 questions
9. **Testimonials** - 3 customer testimonials with star ratings
10. **Footer** - Company info and navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Note on Node Version

If you encounter Vite version compatibility issues with older Node versions, you may need to upgrade Node.js:

```bash
# Check your current Node version
node --version

# Consider upgrading to LTS or latest stable version
```

## 🎯 Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Interactive FAQ accordion
- ✅ Mobile hamburger menu
- ✅ Form placeholders ready for backend integration
- ✅ Smooth hover transitions and animations
- ✅ Accessibility-friendly semantic HTML
- ✅ Production-ready build setup

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  'navy': '#1a1f3c',
  'beige': '#fdf6ec',
  'orange': '#f97316',
}
```

### Content

Edit `src/App.tsx` to update:
- Copy/messaging
- Logo and branding
- Navigation links
- Form fields
- FAQ questions and answers
- Testimonials

## 📦 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

Uses Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎓 Component Structure

The main `App.tsx` exports a complete React component with:
- Icon components (MenuIcon, ArrowIcon, StarIcon, Logo)
- State management for mobile menu and FAQ accordion
- Semantic HTML structure
- Tailwind utility classes for styling

## 🚢 Deployment

Build the project and deploy the `dist/` folder to any static host:

```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

## 📄 License

Part of Diyos InfoTech Pvt. Ltd.
