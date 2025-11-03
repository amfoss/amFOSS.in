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
amFOSS.in/  
├── app/                    # Next.js App Router pages  
│   ├── (root)/            # Main route group  
│   │   ├── (home)/        # Home page  
│   │   ├── about/         # About page  
│   │   ├── story/         # Story page  
│   │   ├── team/          # Team page  
│   │   └── contact/       # Contact page  
│   ├── layout.jsx         # Root layout  
│   └── globals.css        # Global styles  
├── components/            # Reusable React components  
│   ├── ui/               # UI components  
│   ├── shared/           # Shared components  
│   └── [feature]/        # Feature-specific components  
├── content/              # JSON data files  
│   ├── members.json      # Team member data  
│   ├── about.json        # About page content  
│   └── [other].json      # Other content files  
├── public/               # Static assets  
└── package.json          # Dependencies and scripts
```

## Content Management
The site uses a JSON-based content management system. All textual content, member information, and achievements are stored in JSON files under the `content/` directory. This allows content updates without code modifications

.
## Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request
