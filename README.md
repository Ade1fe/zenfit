# Daily Meal Dashboard

A modern, responsive meal tracking dashboard built with React, TypeScript, Redux, and Tailwind CSS.

## Features

- 📊 **Interactive Dashboard** - Track calories, carbs, heart rate, water intake, and exercise
- 🍽️ **Meal Management** - View today's meals and recommended foods
- 📈 **Data Visualization** - Beautiful charts and graphs for tracking progress
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Colorful gradients and smooth animations
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd daily-meal-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Dashboard.tsx   # Main dashboard component
│   ├── Header.tsx      # Header component
│   ├── Sidebar.tsx     # Sidebar navigation
│   └── ...
├── store/              # Redux store
│   ├── slices/         # Redux slices
│   └── store.ts        # Store configuration
├── App.tsx             # Root component
├── main.tsx           # Entry point
└── index.css          # Global styles
\`\`\`

## Features Overview

### Dashboard Components

- **Tracker Cards** - Display key metrics with progress bars
- **Calories Graph** - Interactive chart with period selection
- **Report Section** - Weekly summary with pie chart
- **Meals Section** - Today's meal list with categories
- **Recommended Food** - Suggested meals with nutritional info

### Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Tablet Support** - Adapted layouts for tablets
- **Desktop Enhanced** - Full sidebar and expanded features

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
