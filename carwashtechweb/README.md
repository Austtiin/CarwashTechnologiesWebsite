# Carwash Technologies Website

Welcome to the Carwash Technologies project! This repository contains the source code for a modern and simple website designed to showcase our car wash services, past projects, and contact information.

## Project Structure

The project is organized as follows:

```
carwashtechweb
├── src
│   ├── app
│   │   ├── globals.css         # Global CSS styles including color scheme
│   │   ├── layout.tsx          # Main layout wrapping pages with Navbar and Footer
│   │   ├── page.tsx            # Homepage content with Hero section
│   │   ├── about
│   │   │   └── page.tsx        # About page with business information
│   │   ├── projects
│   │   │   └── page.tsx        # Projects page showcasing past projects
│   │   ├── contact
│   │   │   └── page.tsx        # Contact Us page with phone number
│   │   └── services
│   │       └── page.tsx        # Services offered by Carwash Technologies
│   ├── components
│   │   ├── Navbar.tsx          # Navigation bar component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section component
│   │   ├── Services.tsx        # Services listing component
│   │   ├── ContactSection.tsx   # Contact information component
│   │   └── ProjectCard.tsx     # Individual project card component
│   ├── lib
│   │   └── utils.ts            # Utility functions
│   └── types
│       └── index.ts            # TypeScript types and interfaces
├── public
│   ├── images
│   │   └── logo.svg            # Logo image
│   └── favicon.ico             # Favicon for the website
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── package.json                 # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Getting Started

To get started with the Carwash Technologies website, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```
   cd carwashtechweb
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Run the development server:**
   ```
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Features

- **Responsive Design:** The website is designed to be mobile-friendly and responsive.
- **Navigation Bar:** Easily navigate through Home, About, Projects, Services, and Contact pages.
- **Project Showcase:** A dedicated page to showcase past projects.
- **Contact Information:** Prominently displays the phone number 612-408-9010 and a "Contact Us" button.

## License

This project is licensed under the MIT License - see the LICENSE file for details.