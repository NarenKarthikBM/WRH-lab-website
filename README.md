# WRH Lab Website

A modern, responsive website for the **Water Resources and Hydrology Lab** at IISER Bhopal, led by Dr. Sanjeev K. Jha. Built with Next.js 14 and Tailwind CSS, showcasing cutting-edge research in hydrology, climate science, and water resources management.

## 🌊 About the Lab

The Water Resources and Hydrology (WRH) Lab at IISER Bhopal is dedicated to advancing water science through:

- **Hydrological Forecasting** - Developing improved prediction systems for water resources
- **Climate Data Analysis** - Post-processing hydro-meteorological data for better insights
- **Geostatistical Modeling** - Multiple-point geostatistics for spatial data analysis
- **Interdisciplinary Research** - Combining hydrology, climate science, and data analytics

Led by Dr. Sanjeev K. Jha (Associate Professor), our team includes PhD students, MS students, and research associates working on critical water challenges across India and globally.

## ✨ Website Features

### 🎨 Design & User Experience

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation
- **Modern UI**: Clean, professional design with custom WRH branding
- **Interactive Elements**: Smooth animations, hover effects, and intuitive navigation
- **SEO Optimized**: Comprehensive meta tags, structured data, and fast loading

### 🔧 Technical Stack

- **Framework**: Next.js 14 with App Router for modern React development
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety for better code quality
- **Icons**: Lucide React for consistent, scalable iconography
- **Performance**: Optimized images, lazy loading, and code splitting

### 🎯 Custom Design System

- **Colors**:
  - Primary Blue: `#6b7bfa` (Navigation header)
  - Success Green: `#19c37d` (CTAs and highlights)
  - Background Gray: `#f7fafc` (Page backgrounds)
  - Text Colors: `#2d3748` (Dark), `#718096` (Gray)
- **Typography**: Inter font family with hierarchical sizing
- **Components**: Reusable PageHero, cards, buttons, and forms

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: npm (recommended) or yarn
- **Git**: For version control

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd wrh-lab-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Commands

```bash
npm run dev      # Start development server (hot reload)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint checks
npm run format   # Format code with Prettier
```

## 📁 Project Architecture

```
src/
├── app/                       # Next.js App Router (13+)
│   ├── globals.css           # Global styles & Tailwind
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Homepage
│   ├── alumni/              # Alumni showcase page
│   ├── contact/             # Contact information & form
│   ├── gallery/             # Photo & video gallery
│   ├── group-head/          # Dr. Jha's detailed profile
│   ├── members/             # Current team members
│   ├── opportunities/       # Research positions
│   ├── projects/           # Research projects
│   ├── publications/       # Publications with filtering
│   └── updates/            # News & announcements
├── components/             # Reusable React components
│   ├── PageHero.tsx       # Reusable hero section
│   ├── Header.tsx         # Top header bar
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero
│   ├── NewsTicker.tsx     # Announcements banner
│   ├── ResearchHighlights.tsx  # Featured research
│   └── RecentAwards.tsx   # Awards display
public/                    # Static assets
├── favicon.ico
└── images/               # Placeholder for lab images
docs/                     # Project documentation
├── README.md             # Complete documentation index
├── development/          # Developer resources
│   ├── development.md    # Setup and coding standards
│   ├── components.md     # Component library reference
│   └── nextjs-best-practices.md  # Framework optimization
├── operations/           # Production and deployment
│   ├── deployment.md     # Platform deployment guide
│   └── seo-guide.md     # Search optimization strategies
└── guides/              # Implementation guides
    └── favicon-implementation.md  # Favicon setup reference
```

## � Website Sections

### ✅ Implemented Pages

- **Home** (`/`) - Hero, research highlights, recent awards
- **Publications** (`/publications`) - Filterable journal articles with stats
- **Team Members** (`/members`) - Current lab members with Dr. Jha featured
- **Group Head** (`/group-head`) - Detailed Dr. Jha profile page
- **Contact** (`/contact`) - Contact information and office details
- **Alumni** (`/alumni`) - Former members and their achievements
- **Gallery** (`/gallery`) - Research photos and videos
- **Projects** (`/projects`) - Current and completed research
- **Opportunities** (`/opportunities`) - PhD/Postdoc positions
- **Updates** (`/updates`) - Latest news and announcements

### 🎯 Key Features per Page

- **Publications**: Advanced filtering, citation stats, open access indicators
- **Team Members**: Group head prominently featured, research areas highlighted
- **Group Head**: Comprehensive CV, research stats, collaboration info
- **Gallery**: Image/video gallery with categories and search
- **Projects**: Project status tracking, funding information

## ⚙️ Configuration Details

### Tailwind CSS Setup

Custom configuration in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'wrh-header': '#6b7bfa',
        'wrh-nav': '#f4f7fa',
        'wrh-bg': '#f7fafc',
        'wrh-green': '#19c37d',
        'wrh-dark': '#2d3748',
        'wrh-gray': '#718096',
        'wrh-blue': '#3182ce',
      },
    },
  },
}
```

### TypeScript Configuration

Strict mode enabled with path mapping:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Next.js Features Used

- App Router for file-based routing
- Server Components for better performance
- Image optimization with next/image
- Metadata API for SEO
- TypeScript support

## 🌐 Deployment Guide

### Vercel (Recommended)

1. **Connect Repository**
   - Link your GitHub repo to Vercel
   - Auto-deployment on every push to main

2. **Environment Setup**
   - Configure any environment variables
   - Ensure build succeeds

3. **Custom Domain** (Optional)
   - Add custom domain in Vercel dashboard
   - Configure DNS records

### Alternative Hosting

**Netlify**

```bash
npm run build
# Deploy the 'out' directory
```

**Static Export**

```bash
npm run build
npm run export
# Deploy the 'out' directory to any static host
```

## 🎨 Design Guidelines

### Color Usage

- **Primary Actions**: WRH Green (#19c37d)
- **Navigation**: WRH Blue (#3182ce)
- **Backgrounds**: Light grays for sections
- **Text**: Dark gray for readability

### Component Patterns

- **PageHero**: Consistent hero sections across pages
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (green) and secondary (outline) variants
- **Forms**: Accessible inputs with proper labels

### Typography Scale

- **H1**: 4xl (36px) for page titles
- **H2**: 3xl (30px) for section headers
- **H3**: 2xl (24px) for subsections
- **Body**: Base (16px) with 1.5 line height

## 🔍 SEO Optimization

### Implemented SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for research organization
- **Performance**: Fast loading, optimized images
- **Accessibility**: WCAG compliant markup

### Content Strategy

- **Research Keywords**: Hydrology, water resources, climate change
- **Academic Terms**: PhD opportunities, publications, collaborations
- **Location-based**: IISER Bhopal, India, water research
- **Authority Building**: Dr. Jha's expertise, lab achievements

## 🤝 Contributing

### Development Workflow

1. **Fork & Clone**

   ```bash
   git clone [your-fork-url]
   cd wrh-lab-website
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feature/new-component
   ```

3. **Development**

   ```bash
   npm run dev
   # Make your changes
   npm run lint
   ```

4. **Commit & Push**

   ```bash
   git commit -m "feat: add new component"
   git push origin feature/new-component
   ```

5. **Pull Request**
   - Create PR with clear description
   - Include screenshots for UI changes

### Code Standards

- **TypeScript**: Use proper types, avoid `any`
- **Components**: Functional components with hooks
- **Styling**: Tailwind classes, custom CSS only when needed
- **Accessibility**: ARIA labels, semantic HTML
- **Performance**: Lazy loading, optimized images

## 📞 Support & Contact

### Lab Contact Information

- **Principal Investigator**: Dr. Sanjeev K. Jha
- **Email**: sanjeevj@iiserb.ac.in
- **Phone**: +91-755-6691-306
- **Office**: Room 227, Academic Building 1, IISER Bhopal
- **Address**: IISER Bhopal, Bhauri, Bhopal - 462066, MP, India

### Technical Support

- **Repository Issues**: Use GitHub Issues for bug reports
- **Development Questions**: Contact through lab email
- **Collaboration Inquiries**: Reach out to Dr. Jha directly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**🌊 Advancing Water Science Through Innovation & Collaboration**

_Built with ♡ by the WRH Lab team for the global water research community_
