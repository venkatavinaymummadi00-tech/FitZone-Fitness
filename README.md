# FitZone Fitness Club — Premium Gym Website

A modern, high-performance, responsive React web application built for **FitZone Fitness Club**, located near BJP Office, Kukatpally, Hyderabad, Telangana, India.

---

## 🏋️‍♂️ Features & Highlights

- **Luxury Fitness Club Aesthetic**: Deep Black (`#080808`), Dark Charcoal (`#151515`), and Bold FitZone Red (`#E50914`) with subtle neon glow effects and typography using Oswald & Montserrat.
- **Centralized Configuration**: All contact numbers, WhatsApp numbers, address details, club timings, and membership prices are defined once in [`src/config/gymConfig.js`](src/config/gymConfig.js).
- **Responsive Layout**: Seamless experience across mobile, tablet, and desktop screens with an interactive hamburger navigation drawer on mobile.
- **Interactive Membership Enquiry System**:
  - Accessible across the site via "JOIN NOW", service cards, trainer cards, and membership plans.
  - Automatically pre-selects chosen plans or coaching disciplines.
  - Full Indian mobile number validation (`/^[6-9]\d{9}$/`).
  - Instant submission feedback and 1-click WhatsApp forward so zero leads are lost.
- **Direct WhatsApp Integration**: Floating action button on every page with dynamic official `wa.me` links and prefilled messages.
- **Filterable Gallery with Lightbox**: Categorized gallery (Strength, Cardio, Training, Equipment, Interior) with keyboard arrow support, touch support, and high-res view.
- **Full Route Suite**:
  - `/` — Homepage (Hero, Highlights, Programs preview, Memberships preview, Trainers, Testimonials, CTA)
  - `/about` — About Us, Club Philosophy, 4 Gym Training Zones, Mission & Infrastructure
  - `/services` — 7 Core Fitness Programs with highlight tags and direct enquiry triggers
  - `/membership` — Monthly (₹1,499), Quarterly (₹3,999), and Yearly (₹11,999) comparison matrix & FAQs
  - `/gallery` — Filterable photo showcase with touch/keyboard lightbox
  - `/trainers` — Certified coach profiles, specializations, and direct 1-on-1 booking
  - `/reviews` — Member feedback wall with interactive "Submit a Review" modal
  - `/contact` — Club location near BJP Office Kukatpally, Google Maps embed, phone/email, and contact form
  - `*` — Branded 404 error page

---

## 🛠️ Technology Stack

- **React 18** with functional components & custom hooks
- **Vite 5** for lightning-fast build and development
- **Tailwind CSS 3** for custom luxury theme styles
- **React Router DOM 6** for client-side routing and automatic scroll restoration
- **Lucide React** for modern fitness icons
- **Framer Motion** & CSS animations for smooth transitions

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How the Gym Owner Can Update Details

| Detail to Update | File Location | Key Variable / Object |
|---|---|---|
| **Gym Name & Tagline** | [`src/config/gymConfig.js`](src/config/gymConfig.js) | `gymConfig.name`, `gymConfig.tagline` |
| **Address & Location** | [`src/config/gymConfig.js`](src/config/gymConfig.js) | `gymConfig.location` |
| **Phone & WhatsApp Numbers** | [`src/config/gymConfig.js`](src/config/gymConfig.js) | `gymConfig.contact.phoneDisplay`, `gymConfig.contact.whatsappNumber` |
| **Opening Hours** | [`src/config/gymConfig.js`](src/config/gymConfig.js) | `gymConfig.hours.schedule` |
| **Membership Prices** | [`src/config/gymConfig.js`](src/config/gymConfig.js) | `gymConfig.pricing.plans` |
| **Services & Offerings** | [`src/data/services.js`](src/data/services.js) | `servicesData` array |
| **Trainer Profiles & Photos** | [`src/data/trainers.js`](src/data/trainers.js) | `trainersData` array |
| **Customer Reviews** | [`src/data/testimonials.js`](src/data/testimonials.js) | `testimonialsData` array |
| **Gallery Images** | [`src/data/gallery.js`](src/data/gallery.js) | `galleryImages` array |

---

## 🌐 Deployment Configuration

- **Netlify / Cloudflare Pages**: SPA routing is pre-configured via [`public/_redirects`](public/_redirects).
- **Vercel**: SPA rewrite rules are pre-configured in [`vercel.json`](vercel.json).
- **Apache**: Add standard `.htaccess` URL rewrite to `/index.html`.
- **Nginx**: Add `try_files $uri $uri/ /index.html;` to your server block.
