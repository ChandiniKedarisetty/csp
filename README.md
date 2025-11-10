# Health & Nutrition Awareness Web App

A colorful, educational React web application designed to teach school students about health, nutrition, and hygiene in a fun and engaging way.

## 🌟 Features

- **Food Groups Section**: Interactive cards showing the 5 main food groups with examples and benefits
- **Healthy Plate Guide**: Visual representation of how to build a balanced meal
- **Hygiene Tips**: Interactive component with tips on handwashing, dental care, and more
- **Kid-Friendly Design**: Colorful, emoji-rich interface designed for children
- **Responsive Layout**: Works on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
csp/
├── src/
│   ├── App.js                 # Main application component
│   ├── main.jsx               # React entry point
│   ├── index.css              # Tailwind CSS imports
│   ├── components/
│   │   ├── Header.jsx         # App header
│   │   ├── FoodGroups.jsx     # Food groups section
│   │   ├── HealthyPlate.jsx   # Healthy plate guide
│   │   ├── HygieneTips.jsx    # Interactive hygiene tips
│   │   └── Footer.jsx         # App footer
│   ├── assets/                # Images and other assets
│   └── styles/
│       └── custom.css         # Additional custom styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## 🎨 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📝 Customization

### Adding Images

1. Place your images in the `src/assets/` folder
2. Import them in your components:
```javascript
import foodImage from '../assets/food-image.jpg'
```

### Modifying Colors

Edit `tailwind.config.js` to customize the color scheme.

### Adding New Sections

Create new component files in `src/components/` and import them in `App.js`.

## 🎯 Educational Goals

This app helps students learn:
- The 5 main food groups and their benefits
- How to build a balanced, healthy plate
- Important hygiene practices for staying healthy
- The importance of nutrition for growth and development

## 📄 License

This project is created for educational purposes as part of a community service project.

## 💝 Made With

Made with ❤️ for school students to promote health and nutrition awareness.

