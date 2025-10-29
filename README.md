
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, responsive portfolio website showcasing my journey as a Software Engineering student and developer.

## 📖 About

Welcome to my personal portfolio! I'm **Dimas Assa**, a passionate Junior Software Developer from Central Java, Indonesia. This website showcases my skills, projects, and experiences as I continue my journey in software development.

### 👨‍💻 Background
- 🎓 **Current**: Software Engineering Student at **Universitas Pignatelli Triputra** (2025-2029)
- 🎓 **Graduate**: Software Engineering from **SMK N 5 Surakarta** (2025)
- 💼 **Role**: Junior Software Developer
- 🌱 **Focus**: Building clean, functional, and meaningful digital solutions
- 📍 **Location**: Central Java, Indonesia
- ✉️ **Email**: dimashizkiawan@gmail.com

## ✨ Features

- **🎨 Modern UI/UX**: Clean, minimalistic design following modern web standards
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🧭 Smooth Navigation**: Seamless page transitions using React Router
- **🎯 Interactive Sections**: Dynamic components powered by Radix UI
- **🌓 Professional Layout**: Well-structured content presentation
- **⚡ Fast Performance**: Optimized build with Create React App and CRACO
- **🎨 Custom Styling**: Beautiful UI components with Tailwind CSS

### 📑 Portfolio Sections

1. **About Me** - Introduction, background, and professional summary
2. **Skills** - Technical proficiencies across different categories (Frontend, Backend, Mobile, Database, Tools)
3. **Projects** - Showcase of key projects with technologies used
4. **Experience** - Professional journey and certifications
5. **Education** - Academic background and qualifications
6. **Contact** - Ways to connect and collaborate

## 🛠️ Technologies Used

### Frontend
- **React 19.0.0** - JavaScript library for building user interfaces
- **React Router DOM 7.5.1** - Declarative routing for React applications
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful and consistent icon toolkit
- **Class Variance Authority** - For creating variant-based component APIs

### Development Tools
- **Create React App 5.0.1** - Official React toolchain
- **CRACO 7.1.0** - Create React App Configuration Override
- **ESLint** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### State Management & Forms
- **React Hook Form 7.56.2** - Performant form validation
- **Zod 3.24.4** - TypeScript-first schema validation
- **Axios 1.8.4** - Promise-based HTTP client

### UI Libraries
- **Shadcn/ui Components** - Re-usable component collection
- **Sonner** - Toast notifications
- **Embla Carousel** - Lightweight carousel library
- **React Day Picker** - Date picker component

## 📂 Project Structure

```
portfolio-website/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ui/         # Shadcn/ui components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.js          # Main application component
│   │   ├── App.css         # Component styles
│   │   ├── index.js        # Application entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Dependencies and scripts
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── craco.config.js     # CRACO configuration
│   └── jsconfig.json       # JavaScript configuration
├── backend/                 # FastAPI backend (optional)
│   ├── server.py           # API endpoints
│   └── requirements.txt    # Python dependencies
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **Yarn** (v1.22.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DimasHizkiawan/portfolio-website.git
   cd portfolio-website
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `frontend` directory:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio website.

### 🏗️ Building for Production

To create an optimized production build:

```bash
cd frontend
yarn build
```

The build folder will contain the optimized static files ready for deployment.

## 📜 Available Scripts

In the frontend directory, you can run:

### `yarn start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `yarn build`
Builds the app for production to the `build` folder

### `yarn test`
Launches the test runner in interactive watch mode

## 🎯 Featured Projects

### 1. 📱 Mobile Gallery Application
A Flutter-based application for managing and displaying photo galleries with cloud storage integration.
- **Tech Stack**: Flutter, Firebase, Dart, Cloud Storage
- **Features**: Image upload, categorization, sharing capabilities

### 2. 🏘️ Village Information Application
A comprehensive system for managing village information and administration built with Native Java.
- **Tech Stack**: Java, XML, MySQL
- **Features**: Real-time updates, data management

### 3. 💬 Local Server Chat Application
Real-time chat application with socket programming capabilities.
- **Tech Stack**: Flutter, HTML, CSS, JavaScript, Local Storage
- **Features**: Instant messaging, user authentication, message history

## 💼 Skills & Expertise

### Frontend Development
- JavaScript (75%)
- HTML & CSS (70%)

### Backend Development
- PHP (70%)
- Laravel (75%)
- Java (60%)
- Firebase (60%)

### Mobile Development
- Flutter (60%)

### Database
- MySQL (60%)

### Tools & Others
- Git (60%)
- C++ (60%)

## 🎓 Education & Certifications

- **Certified Software Engineering** - Universitas Gadjah Mada (2023)
  - Intensive training in web and mobile application development
  - Technologies: Laravel, React, Android Native Java, SQL Database

- **Computer Hardware & Networking** - Internship (2024)
  - Hands-on experience with hardware troubleshooting and network maintenance

## 🌐 Deployment

This project can be deployed on various platforms:

- **Vercel** - Recommended for React apps
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for static sites
- **AWS Amplify** - Scalable cloud hosting

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DimasHizkiawan/portfolio-website)

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Dimas Assa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the \"Software\"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📬 Contact & Connect

I'm always open to collaboration and new opportunities!

- **📧 Email**: [dimashizkiawan@gmail.com](mailto:dimashizkiawan@gmail.com)
- **💼 GitHub**: [@DimasHizkiawan](https://github.com/DimasHizkiawan)
- **📸 Instagram**: [@neverzkingz](https://instagram.com/neverzkingz)
- **💼 LinkedIn**: [Connect with me](#)
- **🐦 Twitter**: [Follow me](#)

## 🙏 Credits & Acknowledgments

- **Design Inspiration**: Modern portfolio designs from Dribbble and Behance
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) for beautiful component primitives
- **Icons**: [Lucide Icons](https://lucide.dev/) for consistent iconography
- **Fonts**: System fonts for optimal performance
- **Images**: Project screenshots and personal photos

## 🚧 Roadmap

Future enhancements planned:
- [ ] Add blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add project case studies with detailed breakdowns
- [ ] Integrate contact form with email service
- [ ] Add animations and micro-interactions
- [ ] Implement multilingual support (English/Indonesian)

## ⭐ Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub!

---

<div align=\"center\">
  <p>Built with ❤️ by Dimas Assa</p>
  <p>© 2025 Dimas Assa. All rights reserved.</p>
  <p><i>\"Turning ideas into clean and functional code\"</i></p>
</div>"
Observation: Edit was successful.
