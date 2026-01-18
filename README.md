# ACT Foundation Website

A modern web application for the **ACT Foundation** — a nonprofit organization dedicated to Cancer and Sickle Cell advocacy, education, and care programs.

> **A.C.T Today, Transform Tomorrow**

## About

ACT Foundation delivers life-changing support through community outreach, health education, and awareness programs. This website serves as the digital presence for the foundation, showcasing their mission, programs, and impact.

### Key Features

- 🏠 **Homepage** — Hero section with impact statistics, foundation story, and programs overview
- 📚 **Education** — Health education resources and information
- 🤝 **Outreach** — Community outreach programs and initiatives
- 📞 **Contact** — Get in touch with the foundation
- ℹ️ **About** — Learn more about ACT Foundation's mission

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **Fonts**: Familjen Grotesk, Jost, Playfair Display, Urbanist, Bricolage Grotesque

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd act-app

# Install dependencies
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
act-app/
├── public/           # Static assets (images, icons)
├── src/
│   ├── app/          # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── outreach/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/   # Reusable React components
│   └── lib/          # Utility functions
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary to ACT Foundation.
