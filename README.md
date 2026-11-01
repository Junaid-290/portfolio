# Muhammad Junaid Akbar — Portfolio

Personal portfolio of **Muhammad Junaid Akbar**, a Full-Stack Developer (React, Node.js, MongoDB) based in Multan, Pakistan. Built with plain HTML, CSS and JavaScript (ES modules), with no frameworks and no build step.

## Features

- Four switchable themes: Midnight Rose, Porcelain Light, Arctic Blue and Sunset Ember (the choice is remembered)
- Animated hero with typewriter text, animated stat counters and scroll-reveal sections
- Filterable project grid (All / Full-Stack / Frontend)
- Built-in resume preview with one-click **Download PDF** (print stylesheet exports only the resume)
- Fully responsive, from small phones to large desktops
- Respects `prefers-reduced-motion`

## Sections

Home · About · Skills · Experience · Projects · Education & Certifications · Resume · Contact

## Tech

HTML5 · CSS3 (custom properties, grid, flexbox) · JavaScript (ES modules) · Google Fonts (Baloo 2, Poppins)

## Project structure

```
portfolio/
├── index.html
├── README.md
├── assets/
│   ├── images/          profile photo (junaid-profile.png)
│   └── docs/
├── css/
│   ├── base.css         tokens, reset, background, loader
│   ├── layout.css       navbar, sections, footer
│   ├── components.css   buttons, tags, theme toggle
│   ├── sections.css     hero, about, skills, projects, resume, contact
│   ├── themes.css       theme variants
│   ├── responsive.css   breakpoints
│   └── print.css        resume PDF export
└── js/
    ├── main.js          entry point, wires everything together
    ├── loader.js  reveal.js  counters.js  filter.js
    └── typed.js   nav.js     theme.js
```

## Run locally

ES modules do not load from `file://`, so serve the folder:

```bash
git clone https://github.com/Junaid-290/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Then open http://localhost:8000. Alternatively, open the folder in VS Code and use the **Live Server** extension.

## Customize

- **Content:** edit `index.html` (each section is marked with a comment).
- **Colors and themes:** change the variables in `css/base.css` and `css/themes.css`.
- **Typed hero text:** edit the `WORDS` array in `js/typed.js`.
- **Profile photo:** replace `assets/images/junaid-profile.png`.

## Deploy

It is a static site, so any static host works.

- **GitHub Deployed: https://junaid-290.github.io/portfolio/** 

## Contact

- Email: Junaidakbar2900@gmail.com
- LinkedIn: https://www.linkedin.com/in/muhammad-junaid-akbar/
- GitHub: https://github.com/Junaid-290
