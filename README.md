# Spirograph Design Process Documentation

A documentation website demonstrating AI collaboration using LMCouncil.ai to optimize prompts for a feature-rich spirograph drawing application. The site showcases how multiple LLMs worked together to create comprehensive specifications for a web-based spirograph tool that traces patterns along user-defined paths.

editing readme to try to push to main and trigger deploy - but I also changed pnpm to npm in the deploy so watch that
Still trying to get pnpm to run, not sure if it can.

## 🚀 Live Demo

(revising) Visit the live documentation: [https://toddwmac.github.io/spirograph-manus/](https://toddwmac.github.io/lmcouncil-spirograph-prompts/)

## 📋 Overview

This project serves as both documentation and a case study in AI-assisted development. It presents the collaborative process where three AI models (Qwen3 Coder, Gemini 2.5 Flash, and Deepseek 3.1 Terminus) worked together on LMCouncil.ai to design optimized prompts for creating a sophisticated spirograph application.

### Key Features
- **Interactive Documentation**: Tabbed interface showcasing different AI model approaches
- **Complete Prompt Examples**: Full prompts from each model with detailed explanations
- **Design Synthesis**: How the best elements were combined into a final optimized prompt
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Automatic theme switching with user preference persistence

## 🛠 Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Routing**: Wouter (client-side routing)
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation & Development

### Prerequisites
- Node.js (version 20 or higher)
- pnpm package manager

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/toddwmac/spirograph-manus.git
   cd spirograph-manus
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Preview production build locally
- `pnpm preview` - Preview production build
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm deploy` - Deploy to GitHub Pages (manual deployment)

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment
1. **Push to main branch**: The site automatically deploys when you push changes to the `main` branch
2. **Manual deployment**: Go to Actions tab → "Deploy to GitHub Pages" → "Run workflow"

### Repository Setup
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The site will be available at `https://[username].github.io/spirograph-manus/`

### Manual Deployment (Alternative)
If you prefer manual deployment:
```bash
pnpm deploy
```
This requires `gh-pages` package and proper GitHub authentication.

## 📁 Project Structure

```
spirograph-manus/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   │   └── 404.html       # SPA routing support for GitHub Pages
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/        # Route components
│       ├── contexts/     # React contexts
│       └── lib/          # Utilities
├── .github/
│   └── workflows/        # GitHub Actions deployment
├── shared/               # Shared types/constants
├── dist/                 # Build output (generated)
└── patches/              # Package patches
```

## 🤝 Contributing

This project demonstrates AI collaboration techniques. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LMCouncil.ai**: For providing the collaborative AI platform
- **AI Models**: Qwen3 Coder, Gemini 2.5 Flash, and Deepseek 3.1 Terminus for their prompt engineering contributions
- **Open Source Community**: For the excellent tools and libraries used in this project

---

*This documentation showcases the power of AI collaboration in software development and serves as a reference for creating optimized prompts for complex web applications.*
