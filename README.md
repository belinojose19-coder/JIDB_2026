# JIDB Portfolio

A modern personal portfolio built for Jose Isabelo D. Belino, featuring a vibrant green dark theme, animated Lordicon icons, and a responsive layout for industry-ready presentation.

## 🌟 What’s Included

- **Green dark theme** with rich green accents and dim backgrounds
- **Responsive layout** optimized for mobile, tablet, and desktop
- **Hero, About, Skills, Core Development, Contact** sections
- **Lordicon animated icons** for skills, projects, and social links
- **Contact form validation** with JavaScript feedback
- **Mobile menu** and smooth scroll navigation
- **Plain text phone display** for a cleaner contact layout

## 📁 Project Structure

```
JIDB_2026/
├── index.html             # Main portfolio page
├── css/
│   └── styles.css         # Styling and dark green theme
├── js/
│   └── script.js          # Mobile menu, form validation, scroll effects
├── assets/
│   └── images/            # Portfolio images used on the site
├── README.md              # Project documentation
├── QUICKSTART.md          # Quick start guide
└── LICENSE                # License information
```

## 🚀 Getting Started

### Prerequisites
- Modern browser (Chrome, Edge, Firefox, Safari)
- Code editor such as VS Code
- Optional: Python for local server

### Run Locally

1. Open the project folder.
2. Open `index.html` directly in the browser, or run a local server.

```bash
# Python 3
python -m http.server 8000
```

3. Visit `http://localhost:8000`

## ✏️ Update Your Content

Open `index.html` and update the following sections:

- **Hero**: name, subtitle, call-to-action button
- **About**: biography, teaching experience, background, skills
- **Skills**: professional, technical, language categories
- **Core Development**: project cards for instruction, web development, and mentoring
- **Contact**: email, phone, location, and social links

### Current Section IDs

- `#home` — Hero
- `#about` — About
- `#skills` — Skills
- `#core` — Core Development
- `#contact` — Contact

## 🎨 Theme Customization

Customize colors in `css/styles.css`:

```css
:root {
    --primary-color: #00d4aa;
    --secondary-color: #2ecc71;
    --dark-color: #1a1a1a;
    --light-color: #2c3e50;
    --text-color: #ecf0f1;
    --border-color: #34495e;
}
```

Change fonts by updating the `font-family` in `body`, or add a Google Font link inside `index.html`.

## 🔧 JavaScript Features

The portfolio currently includes:

- **Hamburger menu toggle** for mobile navigation
- **Smooth scrolling** to section anchors
- **Contact form validation** for name, email, and message
- **Section fade-in animations** on scroll

## 📸 Images and Assets

Place your images in `assets/images/` and update image `src` values in the project cards.

Current image files used in the portfolio:
- `assets/images/IMG_0420.jpg`
- `assets/images/IMG_2865.jpg`
- `assets/images/IMG_1198.jpg`
- `assets/images/IMG_0163.JPG`

## 📱 Responsive Layout

The portfolio is built to look great at:
- Desktop: 1200px+
- Tablet: 768px–1199px
- Mobile: under 768px

## 🔗 Deployment

### GitHub Pages
1. Push the repository to GitHub.
2. In repository Settings → Pages, select the branch.
3. Use the generated GitHub Pages URL.

### Alternatives
- **Netlify**: automatic deploys from GitHub
- **Vercel**: easy static site deployment
- **FTP/SFTP hosting** for traditional hosting

## ✅ Notes

- The phone number is displayed as plain text in the contact section.
- Lordicon icons are loaded from `https://cdn.lordicon.com/lordicon.js`.
- The project section is named **Core Development** and uses `class="core"`.
- The contact area includes social icon links for GitHub, LinkedIn, and email.

- Visual checkmark indicators
- Hover animations

### Contact Section
- Contact information display
- Functional contact form
- Social media links

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with flexbox and grid
- **JavaScript (Vanilla)** - No dependencies, lightweight
- **Modern Features** - IntersectionObserver, Fetch API

## 📝 Best Practices

1. **Content Quality**
   - Use high-quality project images (optimize for web)
   - Write clear, concise project descriptions
   - Keep information up-to-date

2. **SEO**
   - Use descriptive page titles
   - Add alt text to all images
   - Include proper meta descriptions
   - Use semantic HTML

3. **Performance**
   - Optimize images (use WebP format)
   - Minify CSS and JavaScript for production
   - Lazy load images if needed
   - Use a CDN for assets

4. **Accessibility**
   - Ensure proper color contrast
   - Add ARIA labels where needed
   - Test with screen readers
   - Use semantic HTML elements

## 🐛 Troubleshooting

### Navigation Links Not Working
- Ensure section IDs match the href values
- Check for typos in ID and href attributes
- Verify JavaScript is enabled

### Form Not Submitting
- Check browser console for errors
- Verify email format validation
- Ensure all required fields are filled
- Check form submission endpoint

### Responsive Layout Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS media queries
- Verify viewport meta tag exists
- Test in different browsers

### Images Not Displaying
- Check image paths are correct
- Verify files exist in `assets/images/`
- Use correct file extensions
- Check file permissions

## 📚 Resources

- **HTML Documentation**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Basics**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Responsive Design**: https://web.dev/responsive-web-design-basics/
- **Web Accessibility**: https://www.w3.org/WAI/

## 📄 License

This project is provided under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.

## 👨‍💻 Author

Your Name - [GitHub](https://github.com/belinojose19-coder) | [LinkedIn](https://linkedin.com/in/yourprofile)

## 📧 Support

For questions or support, please reach out via email or submit an issue in the repository.

---

**Last Updated**: May 2026

**Note**: Remember to replace all placeholder text (Your Name, email addresses, links) with your actual information before deploying!
