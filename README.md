# CarwashTechnologiesWebsite
 Fuhr-CarwashTechnologiesWebsite
# Carwash Technologies Website

A modern, responsive website for Carwash Technologies - a leading provider of car wash equipment sales, service, and consulting in the Minnesota, North Dakota, South Dakota, and Wisconsin markets.

## 🚀 Features

- **Modern Design**: Clean, professional interface with animated components
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Security-First**: Built-in XSS protection and input sanitization
- **Performance Optimized**: Next.js 14 with App Router for fast loading
- **Interactive Elements**: Smooth animations and transitions
- **Contact Forms**: Secure form handling with rate limiting
- **SDS Management**: Safety Data Sheet viewer with search and filtering
- **Service Showcase**: Comprehensive display of equipment and services

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Custom animation components (BlurText, ShinyText)
- **Security**: Custom security utilities with input sanitization
- **Form Handling**: Secure form processing with validation
- **PDF Management**: Dynamic SDS document handling

## 📁 Project Structure

```
CarwashTechnologiesWebsite/
├── web/
│   ├── src/
│   │   ├── app/
│   │   │   ├── about/                 # About page
│   │   │   ├── chemical-sales/        # Chemical sales page
│   │   │   ├── contact/               # Contact form page
│   │   │   ├── equipment-sales/       # Equipment sales page
│   │   │   ├── installation-setup/    # Installation services page
│   │   │   ├── sds/                   # Safety Data Sheets viewer
│   │   │   ├── service-maintenance/   # Service & maintenance page
│   │   │   ├── components/
│   │   │   │   ├── animations/        # Custom animation components
│   │   │   │   └── ui/                # UI components (SafeLink, etc.)
│   │   │   └── page.tsx               # Homepage
│   │   ├── lib/
│   │   │   └── security.ts            # Security utilities
│   │   └── data/
│   │       └── pdf-list.json          # SDS document metadata
│   ├── public/
│   │   └── sds/                       # Safety Data Sheet PDFs
│   └── package.json
└── README.md
```

## 🔒 Security Features

- **Input Sanitization**: All user inputs are sanitized to prevent XSS attacks
- **Rate Limiting**: Form submissions are rate-limited to prevent abuse
- **Safe Routing**: Custom `SafeLink` component for secure navigation
- **Validation**: Comprehensive form validation with Zod schemas
- **Content Security**: Sanitized className and text rendering

## � API Integration

The website includes Next.js API routes for handling contact forms and other backend operations.

### Contact Form API
- **Endpoint**: `POST /api/contact`
- **Integration**: Azure Queue Storage for asynchronous processing
- **Features**: Validation, error handling, health checks

### Setup
For detailed API setup instructions, see [API_SETUP.md](API_SETUP.md).

Quick start:
```bash
cd web
cp .env.example .env.local
# Edit .env.local with your Azure credentials
npm install
npm run dev
```

### Documentation
- **API Documentation**: [web/src/app/api/README.md](web/src/app/api/README.md)
- **Integration Guide**: [web/src/app/contact/INTEGRATION_GUIDE.md](web/src/app/contact/INTEGRATION_GUIDE.md)
- **Setup Guide**: [API_SETUP.md](API_SETUP.md)

## �🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/CarwashTechnologiesWebsite.git
cd CarwashTechnologiesWebsite/web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Pages Overview

### Homepage (`/`)
- Hero section with company introduction
- Service overview cards
- Equipment showcase
- Call-to-action sections

### About (`/about`)
- Company history and values
- Team information
- Service area coverage

### Services
- **Equipment Sales** (`/equipment-sales`): New and used equipment catalog
- **Installation & Setup** (`/installation-setup`): Professional installation services
- **Service & Maintenance** (`/service-maintenance`): Ongoing support and repairs
- **Chemical Sales** (`/chemical-sales`): Chemical programs and solutions

### Safety Data Sheets (`/sds`)
- Searchable SDS document library
- Filter by manufacturer and category
- Direct PDF downloads
- Mobile-responsive document viewer

### Contact (`/contact`)
- Secure contact form
- Multiple contact methods
- Service request options

## 🔧 Development

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your component
3. Use the `SafeLink` component for internal navigation
4. Follow existing patterns for styling and animations

### Security Guidelines

- Always use `SafeLink` for navigation
- Sanitize user inputs with the security utilities
- Validate form data with appropriate schemas
- Use rate limiting for sensitive operations

### Styling

- Use Tailwind CSS classes
- Follow the established color scheme:
  - Primary: `#f0da11` (yellow)
  - Secondary: `#d0b211` (darker yellow)
  - Accent: `#bfb986` (muted gold)
- Maintain responsive design principles

## 📦 Build & Deployment

### Production Build

```bash
npm run build
# or
yarn build
```

### Static Export (if needed)

```bash
npm run export
# or
yarn export
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Carwash Technologies.

## 📞 Support

For technical support or questions about this project, please contact:
- **Company**: Carwash Technologies
- **Phone**: (612) 408-9010
- **Service Areas**: Minnesota, North Dakota, South Dakota, Wisconsin

---

**Built with ❤️ for the car wash industry**