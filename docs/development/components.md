# Component Documentation

This document provides detailed documentation for all reusable components in the WRH Lab website.

## Core Components

### PageHero

A reusable hero section component used across all pages for consistency.

**Location:** `src/components/PageHero.tsx`

**Props:**

```typescript
interface PageHeroProps {
  title: string
  description: string
  icon: LucideIcon
  stats?: Array<{
    label: string
    value: string | number
  }>
  className?: string
  children?: ReactNode
}
```

**Usage:**

```typescript
import { BookOpen } from 'lucide-react'
import PageHero from '@/components/PageHero'

<PageHero
  title="Publications"
  description="Research contributions in hydrology and water resources"
  icon={BookOpen}
  stats={[
    { label: 'Publications', value: 56 },
    { label: 'Citations', value: '1200+' },
    { label: 'h-Index', value: 24 },
  ]}
/>
```

**Features:**

- Responsive grid layout for statistics
- Consistent gradient background
- Centered content with max-width container
- Icon integration
- Optional custom children content

### Header

Top header bar with contact information and university branding.

**Location:** `src/components/Header.tsx`

**Features:**

- Contact information display (email, phone)
- University affiliation
- Responsive text sizing
- Consistent spacing and colors

**Usage:**

```typescript
import Header from '@/components/Header'

// Used in root layout
<Header />
```

### Navigation

Main navigation component with responsive design and dropdown menus.

**Location:** `src/components/Navigation.tsx`

**Features:**

- Mobile hamburger menu
- Dropdown support for sub-menus
- Active page highlighting
- Keyboard navigation support
- ARIA accessibility labels

**Menu Structure:**

```typescript
const menuItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Team',
    href: '/members',
    submenu: [
      { label: 'Current Members', href: '/members' },
      { label: 'Group Head', href: '/group-head' },
      { label: 'Alumni', href: '/alumni' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    submenu: [
      { label: 'Publications', href: '/publications' },
      { label: 'Projects', href: '/projects' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  { label: 'Opportunities', href: '/opportunities' },
  { label: 'Updates', href: '/updates' },
  { label: 'Contact', href: '/contact' },
]
```

### Footer

Site footer with links, contact information, and social media.

**Location:** `src/components/Footer.tsx`

**Sections:**

- Quick links navigation
- Contact information
- University information
- Social media links (when available)
- Copyright information

## Page-Specific Components

### Hero (Homepage)

Homepage-specific hero section with lab introduction.

**Location:** `src/components/Hero.tsx`

**Features:**

- Lab mission statement
- Call-to-action buttons
- Research focus highlights
- Responsive layout

### NewsTicker

Scrolling news/announcements banner.

**Location:** `src/components/NewsTicker.tsx`

**Props:**

```typescript
interface NewsTickerProps {
  announcements: Array<{
    id: number
    text: string
    link?: string
    type: 'info' | 'warning' | 'success'
  }>
  speed?: number
}
```

**Usage:**

```typescript
<NewsTicker
  announcements={[
    { id: 1, text: "Dr. Jha receives Distinguished Teacher Award", type: "success" },
    { id: 2, text: "New PhD positions available", link: "/opportunities", type: "info" }
  ]}
  speed={30}
/>
```

### ResearchHighlights

Featured research showcase component.

**Location:** `src/components/ResearchHighlights.tsx`

**Features:**

- Grid layout for research areas
- Icon integration for each area
- Responsive cards
- Call-to-action links

**Data Structure:**

```typescript
interface ResearchArea {
  icon: LucideIcon
  title: string
  description: string
  link: string
  color: string
}
```

### RecentAwards

Display recent awards and achievements.

**Location:** `src/components/RecentAwards.tsx`

**Features:**

- Timeline-style layout
- Award categorization
- Date formatting
- Responsive grid

## Form Components

### ContactForm (Future Implementation)

Contact form with validation and submission handling.

**Planned Props:**

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>
  subjects?: string[]
  showOrganizationField?: boolean
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  organization?: string
  subject: string
  message: string
}
```

### SearchFilter

Reusable search and filter component for publications, gallery, etc.

**Planned Implementation:**

```typescript
interface SearchFilterProps {
  onSearch: (query: string) => void
  onFilter: (filters: Record<string, string>) => void
  filterOptions: Array<{
    key: string
    label: string
    options: Array<{ value: string; label: string; count?: number }>
  }>
  placeholder?: string
}
```

## UI Components

### Card

Base card component for consistent styling.

**Usage:**

```typescript
// Via Tailwind class
<div className="card p-6">
  {/* Card content */}
</div>

// Or planned Card component
<Card padding="large" shadow="medium">
  {/* Content */}
</Card>
```

**CSS Class Definition:**

```css
.card {
  @apply bg-white rounded-2xl shadow-lg;
}
```

### Button

Consistent button styling across the site.

**Classes:**

```css
.btn-primary {
  @apply px-6 py-3 bg-wrh-green text-white font-semibold rounded-lg 
         hover:bg-opacity-90 transition-colors duration-200
         focus:outline-none focus:ring-2 focus:ring-wrh-green focus:ring-offset-2;
}

.btn-secondary {
  @apply px-6 py-3 bg-transparent border-2 border-wrh-green text-wrh-green font-semibold rounded-lg
         hover:bg-wrh-green hover:text-white transition-colors duration-200
         focus:outline-none focus:ring-2 focus:ring-wrh-green focus:ring-offset-2;
}
```

### Form Inputs

Consistent form styling.

**Classes:**

```css
.form-label {
  @apply block text-sm font-medium text-wrh-dark mb-2;
}

.form-input {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg
         focus:ring-2 focus:ring-wrh-green focus:border-transparent
         transition-colors duration-200;
}

.form-textarea {
  @apply form-input resize-none;
}

.form-select {
  @apply form-input bg-white cursor-pointer;
}
```

## Layout Components

### Container

Max-width container for page content.

**Usage:**

```typescript
<div className="max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
  {/* Page content */}
</div>
```

### Section

Consistent section spacing and styling.

**Classes:**

```css
.section {
  @apply py-16 sm:py-20;
}

.section-title {
  @apply text-4xl sm:text-5xl lg:text-6xl font-bold text-wrh-dark text-center mb-6;
}

.section-subtitle {
  @apply text-xl sm:text-2xl text-wrh-gray text-center mb-12 max-w-4xl mx-auto;
}
```

## Utility Components

### LoadingSpinner

Loading state component for async operations.

**Planned Implementation:**

```typescript
interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
  text?: string
}

export default function LoadingSpinner({
  size = 'medium',
  color = 'wrh-blue',
  text = 'Loading...'
}: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`animate-spin rounded-full border-4 border-gray-200 border-t-${color}
        ${size === 'small' ? 'w-6 h-6' : size === 'large' ? 'w-16 h-16' : 'w-10 h-10'}
      `} />
      {text && <p className="mt-4 text-wrh-gray">{text}</p>}
    </div>
  )
}
```

### ErrorBoundary

Error handling component for React errors.

**Implementation:**

```typescript
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="card p-8 text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4">Something went wrong</h2>
          <p className="text-wrh-gray mb-4">Please try refreshing the page</p>
          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

## Component Development Guidelines

### Creating New Components

1. **Component Structure:**

```typescript
'use client' // Only if needed

import { ReactNode } from 'react'
import { SomeIcon } from 'lucide-react'

interface ComponentProps {
  // Define all props with proper types
  title: string
  optional?: boolean
  children?: ReactNode
}

export default function Component({
  title,
  optional = false,
  children
}: ComponentProps) {
  // Component logic
  return (
    <div className="component-wrapper">
      {/* JSX */}
    </div>
  )
}
```

2. **Styling Guidelines:**
   - Use Tailwind utilities primarily
   - Follow responsive design patterns
   - Maintain consistent spacing
   - Use WRH color palette

3. **Accessibility:**
   - Include ARIA labels where needed
   - Ensure keyboard navigation
   - Provide proper semantic HTML
   - Test with screen readers

4. **Performance:**
   - Use React.memo for expensive components
   - Implement proper prop drilling
   - Consider code splitting for large components

### Testing Components

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import Component from './Component'

describe('Component', () => {
  const defaultProps = {
    title: 'Test Title',
    optional: true
  }

  it('renders correctly', () => {
    render(<Component {...defaultProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('handles user interactions', () => {
    const mockFn = jest.fn()
    render(<Component {...defaultProps} onClick={mockFn} />)

    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalled()
  })
})
```

## Component Checklist

When creating or reviewing components:

- [ ] Props are properly typed with TypeScript
- [ ] Component follows responsive design patterns
- [ ] Accessibility features are implemented
- [ ] Performance is optimized (memo, callbacks)
- [ ] Error boundaries are considered
- [ ] Documentation is written
- [ ] Tests are added (when testing is set up)
- [ ] Code follows established patterns
- [ ] Styling is consistent with design system

---

**Component consistency ensures maintainable and scalable development across the entire website.**
