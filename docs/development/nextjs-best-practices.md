# Next.js Best Practices - WRH Lab Website

## Code Quality Review and Optimization Guidelines

### 1. App Router Best Practices ✅

**Current Implementation:**

- ✅ Using App Router (`src/app/` structure)
- ✅ Proper file-based routing with `page.tsx` files
- ✅ Layout components implemented (`layout.tsx`)
- ✅ Metadata API usage for SEO

**Recommendations Applied:**

- Page-level metadata exports for better SEO
- Consistent component organization
- Proper TypeScript integration

### 2. Component Architecture ✅

**Current Structure:**

```
src/
├── app/                 # App Router pages
├── components/          # Reusable components
│   ├── PageHero.tsx    # Unified hero component
│   ├── Header.tsx      # Site header
│   ├── Footer.tsx      # Site footer
│   └── Navigation.tsx  # Navigation component
```

**Best Practices Applied:**

- ✅ Reusable component pattern (PageHero)
- ✅ Separation of concerns
- ✅ Consistent naming conventions
- ✅ TypeScript interfaces for props

### 3. Performance Optimizations

**Image Optimization:**

```tsx
// Recommended: Use Next.js Image component
import Image from 'next/image'

;<Image
  src="/hero-image.jpg"
  alt="Water Resources Research"
  width={800}
  height={600}
  priority={true} // For above-fold images
  className="rounded-lg"
/>
```

**Font Optimization:**

```tsx
// In layout.tsx
import { Inter, Roboto_Slab } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
```

### 4. SEO Optimization ✅

**Metadata Implementation:**

- ✅ Page-level metadata exports
- ✅ OpenGraph tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Robots.txt configuration

**Best Practices Applied:**

```tsx
export const metadata: Metadata = {
  title: 'Page Title - WRH Lab',
  description: 'Detailed description for SEO',
  keywords: ['relevant', 'keywords'],
  openGraph: {
    title: 'Social Media Title',
    description: 'Social media description',
  },
}
```

### 5. Code Organization Best Practices ✅

**File Structure:**

- ✅ Consistent component exports
- ✅ Proper TypeScript types
- ✅ Logical file organization
- ✅ Clear separation of client/server components

**Component Patterns:**

```tsx
// Server Component (default)
export default function Page() {
  return <div>Server-rendered content</div>
}

// Client Component (when needed)
;('use client')
import { useState } from 'react'
export default function InteractiveComponent() {
  const [state, setState] = useState()
  return <div>Interactive content</div>
}
```

### 6. Accessibility Best Practices

**Recommendations to Implement:**

1. **Semantic HTML:**

```tsx
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<section aria-labelledby="research-heading">
  <h2 id="research-heading">Research Areas</h2>
</section>
```

2. **Focus Management:**

```tsx
<button type="button" aria-expanded={isOpen} aria-controls="menu" onClick={toggleMenu}>
  Menu
</button>
```

3. **Alt Text for Images:**

```tsx
<Image
  src="/research-photo.jpg"
  alt="Researchers collecting water samples in the field"
  width={600}
  height={400}
/>
```

### 7. Performance Monitoring

**Core Web Vitals Optimization:**

1. **Loading Performance:**
   - Use `next/image` for automatic optimization
   - Implement lazy loading for below-fold content
   - Optimize bundle size with dynamic imports

2. **Interactivity:**
   - Minimize JavaScript bundle size
   - Use `'use client'` only when necessary
   - Implement proper loading states

3. **Visual Stability:**
   - Set explicit dimensions for images
   - Avoid layout shifts with skeleton loaders

### 8. Error Handling

**Error Boundaries:**

```tsx
// app/error.tsx
'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

**Loading States:**

```tsx
// app/loading.tsx
export default function Loading() {
  return <div>Loading...</div>
}
```

### 9. Environment Configuration

**Environment Variables:**

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://wrh-lab.iiserb.ac.in
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

**Usage:**

```tsx
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
```

### 10. Production Deployment Checklist

**Build Optimization:**

- ✅ TypeScript compilation without errors
- ✅ ESLint rules compliance
- ✅ Bundle size optimization
- ✅ Static asset optimization

**SEO Checklist:**

- ✅ Metadata for all pages
- ✅ Sitemap generation
- ✅ Robots.txt configuration
- ✅ Structured data implementation
- ✅ Open Graph tags

**Performance Checklist:**

- [ ] Image optimization implementation
- [ ] Font optimization
- [ ] Bundle size analysis
- [ ] Core Web Vitals monitoring

### 11. Security Best Practices

**Content Security Policy:**

```tsx
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ]
  },
}
```

### 12. Testing Strategy

**Recommended Testing Approach:**

```tsx
// __tests__/components/PageHero.test.tsx
import { render, screen } from '@testing-library/react'
import PageHero from '@/components/PageHero'

test('renders hero with title', () => {
  render(<PageHero title="Test Title" description="Test Description" />)
  expect(screen.getByText('Test Title')).toBeInTheDocument()
})
```

### Summary

The WRH Lab website follows Next.js best practices in:

- ✅ App Router implementation
- ✅ Component architecture
- ✅ SEO optimization
- ✅ TypeScript integration
- ✅ File organization

**Priority Improvements:**

1. Implement Next.js Image component for performance
2. Add accessibility enhancements
3. Set up monitoring and analytics
4. Implement comprehensive testing
5. Add error handling components

**Current Status:** Production-ready with excellent SEO foundation and component architecture.
