# Croxx_POE Website

Rim repair shop interactive website built for Croxx Mag Repairs.

This repository contains the Croxx Mag Repairs POE website built with HTML, CSS, and JavaScript.

## Part 2 Details

CSS & Responsive Design work completed:
- Created external stylesheet `css/styles.css` and linked it on all pages.
- Established a base style (variables, reset, font family, base font-size and line-height).
- Applied typography and layout styles using Flexbox and CSS Grid.
- Visual styles: gradients, borders, shadows, hover/focus interactions.
- Responsive design using relative units (`rem`, `%`) and breakpoints:
  - Mobile: `max-width: 480px` tweaks for titles and gallery.
  - Tablet: `max-width: 768px` collapsing nav and grid.
  - Desktop: `min-width: 1024px` wider content and 3-column services grid.
- Responsive images: `srcset` and `sizes` added to services gallery.
- Used browser dev tools to test styles across sizes; previewed locally.

## Part 3 Details

This part adds interactive JavaScript features and improves SEO:
- Image gallery with a lightbox on Services.
- Live search filter for service cards.
- Enquiry form with HTML5 validation and a JavaScript quote response.
- Contact form prepared for Formspree submission.
- Meta titles/descriptions/keywords across pages.
- Advanced SEO files: `robots.txt` and `sitemap.xml`.

## Changelog

- Date: 2025-11-03
  - Change: Part 2 CSS restructuring: moved assets to `css/` and `js/`, added breakpoints, responsive images, and nav updates.
  - Files Modified: `index.html`, `about.html`, `services.html`, `contact.html`, `enquiry.html`, `css/styles.css`, `js/scripts.js`

- Date: 2025-11-03
  - Change: Implemented image gallery with lightbox on `services.html` and added corresponding JavaScript (`script.js`) and CSS (`styles.css`).
  - Files Modified: `services.html`, `script.js`, `styles.css`

- Date: 2025-11-03
  - Change: Added services search filter (input on `services.html`) with JavaScript filtering logic.
  - Files Modified: `services.html`, `script.js`, `styles.css`

- Date: 2025-11-03
  - Change: Enhanced SEO by adding meta descriptions and improved titles across pages.
  - Files Modified: `index.html`, `about.html`, `contact.html`, `services.html`

- Date: 2025-11-03
  - Change: Added meta keywords to all pages, created `robots.txt` and `sitemap.xml` for advanced SEO.
  - Files Added/Modified: `robots.txt`, `sitemap.xml`, `index.html`, `about.html`, `contact.html`, `services.html`

- Date: 2025-11-03
  - Change: Built `enquiry.html` with HTML5 validation and JavaScript quote processing.
  - Files Added/Modified: `enquiry.html`, `script.js`

## References

- Form handling: Formspree (https://formspree.io/)
- Map embedding: Google Maps Embed API (https://developers.google.com/maps/documentation/embed)
- General JavaScript DOM APIs: MDN Web Docs (https://developer.mozilla.org/)

## Notes

- Google Maps is embedded on `contact.html` using the Google Maps Embed API.
- JavaScript is loaded at the end of each page via `script.js`.