# Deployment Guide

This guide covers deployment options and procedures for the WRH Lab website.

## Prerequisites

Before deploying, ensure you have:

- [ ] Completed development and testing
- [ ] Built the project successfully (`npm run build`)
- [ ] Verified all environment variables
- [ ] Tested production build locally
- [ ] Completed SEO optimization
- [ ] Verified all links and forms work correctly

## Deployment Options

### 1. Vercel (Recommended)

Vercel provides the best integration with Next.js and is the recommended deployment platform.

#### Initial Setup

1. **Create Vercel Account**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Connect Repository**

   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Deploy from project directory
   vercel
   ```

3. **Automatic Deployments**
   - Connect GitHub repository in Vercel dashboard
   - Enable automatic deployments on push to main branch
   - Configure preview deployments for pull requests

#### Configuration

**vercel.json** (optional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["bom1", "hnd1"],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

#### Environment Variables

Set in Vercel dashboard under Project Settings > Environment Variables:

```bash
# Production
NODE_ENV=production

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (if implemented)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=contact@wrh-lab.iiserb.ac.in
SMTP_PASS=your-app-password

# Database (if needed later)
DATABASE_URL=postgresql://user:pass@host:port/db
```

#### Custom Domain

1. **Purchase Domain** (if not already owned)
   - Recommended: `wrh-lab.iiserb.ac.in` or similar
   - Configure with domain registrar

2. **Add to Vercel**
   - Go to Project Settings > Domains
   - Add custom domain
   - Follow DNS configuration instructions

3. **DNS Configuration**

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.19.61
   ```

### 2. Netlify

Alternative deployment platform with good Next.js support.

#### Setup Steps

1. **Build Configuration**

   **netlify.toml**:

   ```toml
   [build]
     publish = ".next"
     command = "npm run build"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
   ```

2. **Deploy Process**

   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod
   ```

### 3. Traditional Hosting

For deployment on traditional web hosts or self-managed servers.

#### Static Export

**next.config.js**:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

**Build and Export**:

```bash
npm run build
npm run export
# Deploy 'out' directory to web server
```

#### Server Deployment

For full Next.js features on a server:

```bash
# Build application
npm run build

# Install production dependencies only
npm ci --production

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start ecosystem.config.js
```

**ecosystem.config.js**:

```javascript
module.exports = {
  apps: [
    {
      name: 'wrh-lab-website',
      script: './node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: '/path/to/project',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
}
```

## Performance Optimization

### Pre-Deployment Checklist

1. **Bundle Analysis**

   ```bash
   # Install bundle analyzer
   npm install --save-dev @next/bundle-analyzer

   # Analyze bundle
   ANALYZE=true npm run build
   ```

2. **Image Optimization**
   - Compress images before deployment
   - Use WebP format when possible
   - Implement responsive image sizing

3. **Code Optimization**

   ```bash
   # Check for unused dependencies
   npm install -g depcheck
   depcheck

   # Remove unused packages
   npm uninstall package-name
   ```

### Performance Monitoring

**Core Web Vitals Monitoring**:

```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

## Security Configuration

### Headers and Security

**next.config.js**:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

### SSL/TLS

- Ensure HTTPS is properly configured
- Use strong SSL certificates
- Implement proper redirects from HTTP to HTTPS

## Monitoring and Maintenance

### Analytics Setup

**Google Analytics 4**:

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

**Google Search Console**:

- Add and verify property
- Submit sitemap
- Monitor search performance

### Error Monitoring

**Sentry Integration** (optional):

```bash
npm install --save @sentry/nextjs

# Configure sentry.client.config.js
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "YOUR_DSN_HERE",
  tracesSampleRate: 1.0,
})
```

### Backup Strategy

1. **Code Repository**
   - Maintain Git repository with all code
   - Regular pushes to remote repository
   - Tag releases for easy rollback

2. **Content Backup**
   - Regular database backups (if applicable)
   - Content file backups
   - Configuration backups

3. **Deployment Rollback**

   ```bash
   # Vercel rollback
   vercel rollback [deployment-url]

   # Git-based rollback
   git revert HEAD
   git push origin main
   ```

## Domain and DNS

### Domain Setup

1. **Domain Registration**
   - Choose appropriate domain (e.g., wrh-lab.iiserb.ac.in)
   - Register with reputable registrar
   - Consider domain privacy protection

2. **DNS Configuration**

   ```
   # Primary domain
   A    @    76.76.19.61

   # WWW subdomain
   CNAME www cname.vercel-dns.com

   # Email (if using custom email)
   MX   @    10 mail.iiserb.ac.in

   # Verification records
   TXT  @    "google-site-verification=..."
   ```

### Email Configuration

If setting up custom email addresses:

```
# Example DNS records
MX   @    1  ASPMX.L.GOOGLE.COM
MX   @    5  ALT1.ASPMX.L.GOOGLE.COM
MX   @    5  ALT2.ASPMX.L.GOOGLE.COM

CNAME mail ghs.googlehosted.com
```

## Staging Environment

### Setup Staging

1. **Separate Branch**

   ```bash
   git checkout -b staging
   git push origin staging
   ```

2. **Staging Deployment**
   - Create separate Vercel project for staging
   - Connect to staging branch
   - Use staging environment variables

3. **Testing on Staging**
   - Full functionality testing
   - Performance testing
   - SEO verification
   - Form testing

## Troubleshooting

### Common Issues

**Build Failures**:

```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

**Performance Issues**:

- Check bundle size
- Optimize images
- Review third-party scripts
- Check Core Web Vitals

**SEO Problems**:

- Verify meta tags
- Check sitemap generation
- Validate structured data
- Test search console

### Deployment Checklist

Pre-deployment verification:

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms submit successfully
- [ ] Contact information is accurate
- [ ] Images load and are optimized
- [ ] SEO meta tags are complete
- [ ] Analytics tracking is configured
- [ ] SSL certificate is valid
- [ ] Performance scores are acceptable
- [ ] Accessibility standards are met
- [ ] Content is up-to-date

---

**Successful deployment requires careful planning, testing, and monitoring to ensure optimal performance and user experience.**
