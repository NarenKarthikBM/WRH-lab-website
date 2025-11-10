# Favicon Implementation Guide

## Overview

This document explains how favicons are implemented in the WRH Lab website using Next.js best practices.

## Favicon Files

### Core Favicon Files

- `favicon.ico` - Traditional favicon for older browsers (16x16, 32x32, 48x48 sizes)
- `favicon-16x16.png` - Small favicon for browser tabs
- `favicon-32x32.png` - Standard favicon for browser tabs

### Apple/iOS Icons

- `apple-touch-icon.png` - 180x180 icon for iOS devices when website is added to home screen

### Android/Chrome Icons

- `android-chrome-192x192.png` - 192x192 icon for Android Chrome
- `android-chrome-512x512.png` - 512x512 icon for Android Chrome and PWA

### Configuration Files

- `site.webmanifest` - Web app manifest for PWA functionality
- `browserconfig.xml` - Configuration for Internet Explorer/Edge

## Implementation Details

### Next.js Metadata API Configuration

The favicons are configured in `/src/app/layout.tsx` using the Next.js Metadata API:

```typescript
icons: {
  icon: [
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon.ico', sizes: 'any' }
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
  ],
},
manifest: '/site.webmanifest',
```

### Generated HTML Output

Next.js automatically generates these HTML tags in the `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" type="image/png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#ffffff" />
```

## Browser Compatibility

### Desktop Browsers

- **Chrome/Firefox/Safari**: Uses PNG favicons (16x16, 32x32)
- **Internet Explorer/Edge**: Uses favicon.ico and browserconfig.xml

### Mobile Browsers

- **iOS Safari**: Uses apple-touch-icon.png when site is added to home screen
- **Android Chrome**: Uses android-chrome icons from web manifest

## Web App Manifest Features

The `site.webmanifest` file enables:

- **PWA functionality**: Allows users to install the website as an app
- **Custom app name**: "WRH Lab - Water Resources & Hydrology Research"
- **Theme colors**: White background and theme color
- **Display mode**: Standalone (hides browser UI when installed)

## Best Practices Implemented

1. **Multiple Sizes**: Different icon sizes for different use cases
2. **Format Optimization**: PNG for modern browsers, ICO for legacy support
3. **Proper MIME types**: Specified for all icon references
4. **Manifest Integration**: Linked web app manifest for PWA functionality
5. **Theme Colors**: Consistent with website design
6. **Accessibility**: Proper alt texts and descriptions in manifest

## Testing Your Favicons

### Browser Testing

1. Open your website in different browsers
2. Check the favicon appears in tabs
3. Test bookmarking functionality

### Mobile Testing

1. **iOS**: Add to home screen and check icon
2. **Android**: Add to home screen and check icon
3. Test PWA installation flow

### Online Tools

- [Favicon Checker](https://realfavicongenerator.net/favicon_checker)
- [Web App Manifest Validator](https://manifest-validator.appspot.com/)

## File Locations

All favicon files are located in the `/public` directory:

```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── site.webmanifest
└── browserconfig.xml
```

## Future Considerations

1. **SVG Favicons**: Consider adding SVG favicon for vector scalability
2. **Dark Mode Icons**: Add separate icons for dark mode browsers
3. **Maskable Icons**: Add maskable icons for better Android adaptation
4. **Custom Themes**: Update theme colors to match lab branding

## Source Information

The current favicons were generated using Inter font and can be regenerated or updated as needed. See `about.txt` for generation details.
