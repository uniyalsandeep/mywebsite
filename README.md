# Uniyal's Web Tech Solution 🚀

A full React website for Uniyal's Web Tech Solution — software services + online learning platform.

## 🛠 Tech Stack
- React 18
- React Router v6 (multi-page routing)
- No external UI libraries (pure CSS-in-JS)

## 📁 Project Structure
```
uniyals/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Routes
│   ├── index.js
│   ├── index.css
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── data/
│   │   ├── data.js         # All content data
│   │   └── logo.js         # Logo (base64)
│   └── pages/
│       ├── Home.js
│       ├── Services.js
│       ├── ServiceDetail.js
│       ├── Courses.js
│       ├── CourseDetail.js
│       ├── Pricing.js
│       ├── About.js
│       ├── Testimonials.js
│       └── Contact.js
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```

Opens at: **http://localhost:3000**

## 📄 Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | All Services |
| `/services/:id` | Service Detail (e.g. `/services/web-development`) |
| `/courses` | All Courses (filterable by tag) |
| `/courses/:id` | Course Detail (e.g. `/courses/react-js`) |
| `/pricing` | Pricing & FAQ |
| `/about` | About & Team |
| `/testimonials` | All Student Stories |
| `/contact` | Contact Form |

## ✅ Features
- ✅ Full React Router v6 navigation
- ✅ Dynamic service detail pages (6 services)
- ✅ Dynamic course detail pages (8 courses) with curriculum accordion
- ✅ Filterable courses by category
- ✅ Monthly/Annual pricing toggle
- ✅ FAQ accordion
- ✅ Working contact form
- ✅ Scroll animations
- ✅ Fully responsive (mobile + desktop)
- ✅ Sticky navbar with active link highlighting
- ✅ Scroll to top on route change

## 🎨 Brand Colors
- Navy: `#1e3a8a`
- Gold: `#c9a227`
- Dark: `#0d0d1a`
- Background: `#f8f7f3`
