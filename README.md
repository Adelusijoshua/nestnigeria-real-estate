# NestNigeria — Real Estate for Smart Buyers
 
**A responsive real-estate marketing website with live property filtering and a built-in mortgage calculator.**
 
Live demo: _add your GitHub Pages / hosting link here_
Tech: **HTML5 · CSS3 · Vanilla JavaScript**
 
---
 
## 📌 Project Overview
 
NestNigeria is a front-end concept website for a Nigerian real-estate platform, built to help buyers discover verified listings across Lagos, Abuja, Port Harcourt, and Ibadan. The site combines a marketing landing page with two interactive tools — a **property listing filter** and a **mortgage repayment calculator** — all built with plain HTML, CSS, and JavaScript (no frameworks, no build step).
 
---
 
## ✨ Features
 
- **Hero section** with key trust stats (verified listings, city coverage, client rating) and a featured investment highlight card
- **Property search & filtering** — filter listings live by location, property type, and budget range, powered by a JavaScript-driven property grid
- **Dynamic property cards** — auto-generated from a JS data array, showing price (formatted in ₦), beds/baths, area, and status tags (Featured, Luxury, Commercial, etc.)
- **Market insights panel** — average rental yield, annual price growth, and demand index
- **Mortgage estimator** — calculates loan amount, monthly payment, total repayment, and interest payable using standard amortization math, based on user-entered price, down payment, loan term, and interest rate
- **Contact / booking form** — captures buyer intent (Buying, Selling, Renting, Investing) with a simple confirmation flow
- **Fully responsive layout** — adapts from desktop down to mobile with dedicated breakpoints
- **No dependencies** — pure HTML/CSS/JS, easy to host anywhere (GitHub Pages, Netlify, Vercel, or a static file server)
---
 
## 🗂 Project Structure
 
```
├── Index.html      # Page markup and structure
├── Style.CSS        # All styling (design tokens, layout, responsive rules)
├── Script.js         # Property data, filtering logic, mortgage calculator, form handling
└── README.md         # Project documentation (this file)
```
 
---
 
## 🖥️ Pages & Sections
 
| Section | Description |
|---------|-------------|
| **Hero** | Headline, CTA buttons, trust stats, and a featured investment card |
| **Search / Listings** (`#listings`) | Location, type, and budget filters wired to a live property grid |
| **Market Pulse** (`#market`) | Rental yield, price growth, and demand index insight cards |
| **Mortgage Estimator** (`#calculator`) | Interactive loan calculator with real-time summary |
| **Why Choose Us** | Trust-building feature cards (verified listings, location data, expert support) |
| **Contact** (`#contact`) | Lead capture form for buying, selling, renting, or investing inquiries |
 
---
 
## ⚙️ How It Works
 
**Property Filtering (`Script.js`)**
- Six sample properties are stored in a `properties` array, each with location, type, price, beds/baths, area, and a tag
- `getFilteredProperties()` filters the array based on the selected location, property type, and budget bracket (Under ₦20M, ₦20M–₦60M, ₦60M–₦150M, Above ₦150M)
- `renderProperties()` re-renders the property grid on every filter change or "Find property" click, with a friendly empty state when no listings match
**Mortgage Calculator (`Script.js`)**
- Takes property price, down payment, loan term (years), and annual interest rate as inputs
- Computes loan amount, then applies the standard amortization formula to calculate monthly payment
- Displays loan amount, monthly payment, total repayment, and total interest payable, all formatted as Nigerian Naira (₦) currency
**Styling (`Style.CSS`)**
- Uses CSS custom properties (`:root` variables) for a consistent color system (primary green, accent gold, neutral text/background)
- Google Fonts (Inter) for typography
- CSS Grid for the search box, property grid, insight cards, and calculator layout
- Two responsive breakpoints (900px and 640px) collapse multi-column layouts down to mobile-friendly single columns
---
 
## 🚀 Getting Started
 
This is a static site with no build tools or dependencies required.
 
1. Clone or download this repository
2. Open `Index.html` directly in a browser, **or** serve it locally for the best experience:
```bash
   # Using Python
   python -m http.server 8000
 
   # Using Node (npx)
   npx serve .
```
3. Visit `http://localhost:8000` in your browser
> ⚠️ Note: File names (`Index.html`, `Style.CSS`) use capitalized names/extensions. Some static hosts are case-sensitive — if you deploy and see a broken stylesheet or script link, double-check the `href`/`src` paths in `Index.html` match the actual file names exactly.
 
---
 
## 🛠 Tools & Skills Used
 
- **HTML5** — semantic structure, forms, accessibility basics
- **CSS3** — custom properties, Flexbox, CSS Grid, responsive design, gradients
- **Vanilla JavaScript** — DOM manipulation, array filtering, event handling, `Intl.NumberFormat` for currency formatting, amortization calculations
- **Google Fonts** — Inter typeface
---
 
## 📷 Preview
 
_Add a screenshot or GIF of the live site here once deployed, e.g.:_
 
```markdown
![NestNigeria homepage](screenshot.png)
```
 
---
 
## 📬 Contact
 
**NestNigeria — Property Partners**
*Nigeria's smarter way to buy, sell & invest*
 
