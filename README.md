# Koranko - Modern Business Website

A modern, responsive business website built with Next.js and Tailwind CSS, showcasing AI-powered business solutions including website templates, chatbots, voice assistants, and telephony systems.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional tech SaaS design
- **Performance Optimized**: Built with Next.js for optimal performance
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **TypeScript**: Type-safe development experience
- **Smooth Animations**: Subtle hover effects and transitions
- **SEO Friendly**: Optimized for search engines

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd BusinessSite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Features.tsx         # Product features section
│   ├── Testimonials.tsx     # Customer testimonials
│   └── Footer.tsx           # Footer with links and newsletter
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## Sections

### Header
- Company logo (Koranko)
- Navigation menu (Templates, Chatbots, Voice AI, Telephony, Contact)
- Call-to-action button
- Mobile-responsive hamburger menu

### Hero Section
- Bold headline with gradient text
- Compelling description
- Two CTA buttons ("Explore Templates", "Try AI Chat Demo")
- Statistics showcase
- Animated elements

### Features Section
- Four product cards:
  - Website Templates
  - AI Chatbots
  - Voice Assistants
  - AI Telephony
- Hover animations and icons
- Feature lists for each product

### Testimonials Section
- Customer reviews with ratings
- Company logos
- Performance statistics
- Social proof elements

### Footer
- Company information and contact details
- Quick links organized by category
- Newsletter signup form
- Legal links and copyright

## Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
}
```

### Content
- Update company name and branding in components
- Modify testimonials and statistics in `Testimonials.tsx`
- Customize product features in `Features.tsx`
- Update contact information in `Footer.tsx`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes
- Custom animations defined in Tailwind config

## Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy
The website can be deployed to any platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO**: Meta tags and structured data
- **Responsive Images**: Tailwind responsive utilities
- **Smooth Scrolling**: CSS scroll-behavior for anchor links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: hello@koranko.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js and Tailwind CSS 