# amFOSS Website

The official website for amFOSS (FOSS@Amrita), one of India's premier student communities focused on Free and Open Source Software development. This website showcases the club's mission, achievements, team members, and activities.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amfoss/amFOSS.in.git
cd amFOSS.in
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server: amFOSS.in:6-6 
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
├── content/              # JSON data files for website content
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── postcss.config.js     # PostCSS configuration
```

The content for different sections is managed through JSON files in the `content/` 

## Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request
