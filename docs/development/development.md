# Development Guidelines

This document outlines the development standards and practices for the WRH Lab website.

## Code Standards

### TypeScript

- Use strict TypeScript configuration
- Avoid `any` type, use proper typing
- Define interfaces for component props
- Use type assertions sparingly

**Example:**

```typescript
interface TeamMemberProps {
  name: string
  position: string
  email: string
  expertise: string[]
}

export default function TeamMember({ name, position, email, expertise }: TeamMemberProps) {
  // Component implementation
}
```

### React Components

- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices for performance
- Use memo for expensive computations

**Component Structure:**

```typescript
'use client' // Only when needed for client components

import { useState, useMemo } from 'react'
import { SomeIcon } from 'lucide-react'

interface ComponentProps {
  // Define props here
}

export default function Component({ prop1, prop2 }: ComponentProps) {
  // Hooks first
  const [state, setState] = useState()

  // Memoized values
  const computedValue = useMemo(() => {
    // Expensive computation
  }, [dependency])

  // Event handlers
  const handleClick = () => {
    // Handler logic
  }

  // Render
  return (
    <div className="component-wrapper">
      {/* JSX content */}
    </div>
  )
}
```

### CSS/Tailwind

- Use Tailwind utility classes primarily
- Create custom CSS only when Tailwind is insufficient
- Follow mobile-first responsive design
- Use consistent spacing and color classes

**Class Organization:**

```typescript
<div className={`
  // Layout
  flex flex-col gap-6
  // Sizing
  w-full max-w-4xl mx-auto
  // Spacing
  p-6 md:p-8
  // Colors
  bg-white text-wrh-dark
  // Effects
  rounded-lg shadow-md hover:shadow-lg
  // Responsive
  sm:flex-row md:gap-8
  // Transitions
  transition-shadow duration-300
`}>
```

### File Organization

```
src/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx          # Page component
│   │   ├── layout.tsx        # Layout if needed
│   │   └── loading.tsx       # Loading state
│   └── globals.css
├── components/
│   ├── ui/                   # Reusable UI components
│   ├── sections/             # Page section components
│   └── forms/                # Form components
├── lib/
│   ├── utils.ts              # Utility functions
│   ├── constants.ts          # App constants
│   └── types.ts              # Shared type definitions
└── hooks/                    # Custom React hooks
```

## Performance Guidelines

### Image Optimization

- Use Next.js Image component for all images
- Provide appropriate alt text for accessibility
- Use responsive image sizing

```typescript
import Image from 'next/image'

<Image
  src="/images/research-photo.jpg"
  alt="Team conducting fieldwork in Western Ghats"
  width={800}
  height={600}
  className="rounded-lg"
  priority={false} // Only true for above-the-fold images
/>
```

### Code Splitting

- Use dynamic imports for heavy components
- Implement route-based code splitting
- Lazy load non-critical components

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // If component should not render on server
})
```

### Bundle Optimization

- Analyze bundle size regularly
- Remove unused dependencies
- Use tree-shaking friendly imports

```typescript
// Good - tree-shakable
import { SpecificIcon } from 'lucide-react'

// Avoid - imports entire library
import * as Icons from 'lucide-react'
```

## Accessibility Standards

### ARIA Labels

- Use semantic HTML elements when possible
- Provide ARIA labels for interactive elements
- Implement proper focus management

```typescript
<button
  aria-label="Open research publication details"
  aria-expanded={isOpen}
  onClick={handleToggle}
>
  <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
</button>
```

### Keyboard Navigation

- Ensure all interactive elements are focusable
- Implement logical tab order
- Handle keyboard events appropriately

```typescript
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleAction()
  }
  if (event.key === 'Escape') {
    handleClose()
  }
}
```

### Color Contrast

- Maintain WCAG AA compliance (4.5:1 ratio)
- Test with color blindness simulators
- Don't rely solely on color for information

## Testing Guidelines

### Component Testing

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import TeamMember from './TeamMember'

describe('TeamMember Component', () => {
  const mockProps = {
    name: 'Dr. Jane Doe',
    position: 'PhD Student',
    email: 'jane@example.com',
    expertise: ['Hydrology', 'Climate Science']
  }

  it('renders team member information correctly', () => {
    render(<TeamMember {...mockProps} />)

    expect(screen.getByText('Dr. Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('PhD Student')).toBeInTheDocument()
  })

  it('handles email link click', () => {
    render(<TeamMember {...mockProps} />)

    const emailLink = screen.getByRole('link', { name: /jane@example.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:jane@example.com')
  })
})
```

### Integration Testing

- Test user workflows end-to-end
- Verify navigation between pages
- Test form submissions and interactions

## Git Workflow

### Branch Naming

- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/section-name` - Documentation updates
- `refactor/component-name` - Code refactoring

### Commit Messages

Follow conventional commit format:

```
type(scope): description

feat(pages): add group head profile page
fix(navigation): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(components): improve button hover effects
refactor(utils): optimize data processing functions
```

### Pull Request Process

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/new-component
   ```

2. **Development & Testing**

   ```bash
   npm run dev
   npm run lint
   npm run test # when tests are added
   ```

3. **Commit Changes**

   ```bash
   git add .
   git commit -m "feat(component): add new feature"
   ```

4. **Push & Create PR**

   ```bash
   git push origin feature/new-component
   ```

5. **PR Review Checklist**
   - [ ] Code follows established patterns
   - [ ] TypeScript types are properly defined
   - [ ] Components are accessible
   - [ ] Mobile responsiveness tested
   - [ ] No console errors or warnings
   - [ ] Performance impact considered

## Environment Setup

### Development Tools

**Required:**

- Node.js 18+
- npm or yarn
- Git
- VS Code (recommended)

**VS Code Extensions:**

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- Auto Rename Tag

### Environment Variables

Create `.env.local` for local development:

```bash
# Database connection (if added later)
DATABASE_URL="your-database-url"

# Email service (for contact forms)
SMTP_HOST="your-smtp-host"
SMTP_USER="your-email"
SMTP_PASS="your-password"

# Analytics (optional)
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"
```

### IDE Configuration

**VS Code Settings (.vscode/settings.json):**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## Troubleshooting

### Common Issues

**Build Errors:**

- Check TypeScript errors with `npm run type-check`
- Ensure all imports are correctly resolved
- Verify Next.js configuration

**Styling Issues:**

- Restart dev server after Tailwind config changes
- Check for conflicting CSS classes
- Verify responsive breakpoints

**Performance Issues:**

- Use Next.js built-in analytics
- Analyze bundle size with `npm run analyze`
- Optimize images and lazy load components

### Debug Tools

```typescript
// Development-only debugging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', debugData)
}

// Performance monitoring
const startTime = performance.now()
// ... expensive operation
const endTime = performance.now()
console.log(`Operation took ${endTime - startTime} milliseconds`)
```

---

**Remember**: Code quality and maintainability are priorities. When in doubt, prefer readable code over clever optimizations.
