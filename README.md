# Yanki-Store
# YANKI — Women's Clothing Online Store

This is a repository for a simple static website of the **YANKI** women's clothing online store — a brand of modern classics.

The site is a single-page application with a homepage, product catalog, "About Us" page, and shopping cart. Built using pure HTML, CSS, and JavaScript (no backend).

test: https://prossew.github.io/Yanki-Store/

## Features

- Responsive design (desktop-first, partially mobile-friendly)
- Homepage with a large banner for the new collection
- Product catalog with category filtering (New, Bestsellers, Outerwear, etc.)
- "About Us" page with brand description and philosophy
- Shopping cart with add-to-cart functionality, quantity counter, and total price (data stored in localStorage)
- Minimalist and elegant design in beige-brown tones
- Newsletter subscription form (frontend only)

## Project Structure
/
├── index.html          # Homepage
├── pages/
│   ├── about.html      # About Us page
│   ├── catalog.html    # Product catalog
│   └── cart.html       # Shopping cart
├── style.css           # Main styles
├── main.js             # Cart logic, filters, and interactive elements
├── img/
│   ├── icon/           # Icons (logo, search, cart, etc.)
│   └── pictures/       # Product photos and backgrounds
└── README.md           # This file
text## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/yanki-store.git

Navigate to the project folder:Bashcd yanki-store
Open index.html in your browser (double-click or use Live Server in VS Code).

No dependencies or build tools required — works out of the box.
Technologies

HTML5
CSS3 (Flexbox, Grid, responsive layout)
Vanilla JavaScript (ES6+)
Raleway font from Google Fonts

What's Implemented

Category filtering in the catalog (sidebar links)
Adding products to the cart
Cart icon counter update
Empty/filled cart view with subtotal
Mobile dropdown menu

