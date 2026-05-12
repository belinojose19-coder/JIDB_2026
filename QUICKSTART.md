# Quick Start Guide

## 🎯 Launch the JIDB Portfolio

This guide matches the current project code for the `JIDB_2026` portfolio, including the green theme, Lordicon icons, and the `core` section.

### Step 1: Open the Project

Open the project folder and locate:
- `index.html`
- `css/styles.css`
- `js/script.js`

### Step 2: Update Your Personal Info

Edit `index.html` and replace the current text with your details.

#### Hero Section
```html
<h1 class="hero-title">Hi! I'm Jose Isabelo D. Belino</h1>
<p class="hero-subtitle">Educational Instructor | Former Modeling Mentor | Web Developer</p>
```

#### Contact Section
Update email, phone, location, and social links:
```html
<a href="mailto:belinojose19@gmail.com">belinojose19@gmail.com</a>
<p>+63 976 597 6095</p>
<p>18B Simpson St., Gordon Heights<br>Olongapo City, 2200, Philippines</p>
```

> Note: Phone is displayed as plain text instead of a telephone link.

### Step 3: Update the Core Development Section

The project section is currently titled `Core Development` and uses the ID `#core`.

Replace the project cards in `index.html` with your own:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Your Project">
    </div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p>Describe what the project is and why it matters.</p>
        <div class="project-tags">
            <span class="tag">Education</span>
            <span class="tag">Web Development</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn btn-secondary">Learn More</a>
        </div>
    </div>
</article>
```

### Step 4: Update the Skills Section

Current categories are:
- Professional Skills
- Technical Skills
- Languages

Edit the list items under each `.skill-card` to match your expertise.

### Step 5: Update the About Section

Change the About section copy and highlights:

```html
<p>A passionate instructor and former modeling mentor with extensive experience...</p>
<div class="highlight-item">
    <h3>Teaching Experience</h3>
    <p>IT Instructor | Education & Mentoring</p>
</div>
```

### Step 6: Customize the Theme

The project uses a dark green theme in `css/styles.css`.

To update colors, edit the variables at the top:

```css
:root {
    --primary-color: #00d4aa;
    --secondary-color: #2ecc71;
    --dark-color: #1a1a1a;
    --light-color: #2c3e50;
    --text-color: #ecf0f1;
}
```

### Step 7: Run Locally

Open `index.html` directly or use a local server.

```bash
# Python 3
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Step 8: Verify Interactive Features

The current JavaScript supports:
- mobile hamburger menu
- smooth scroll navigation
- contact form validation
- fade-in scroll effects

### Helpful Notes

- `lordicon.js` is already loaded in the `<head>` of `index.html`.
- The project uses `assets/images/IMG_0420.jpg`, `IMG_2865.jpg`, `IMG_1198.jpg`, and `IMG_0163.JPG`.
- The navigation links use `#home`, `#about`, `#skills`, `#core`, and `#contact`.

### Deployment Tips

For a quick deploy, use GitHub Pages:
1. Push your repository.
2. Enable Pages in GitHub settings.
3. Use the provided Pages URL.

### Quick Checklist

- [ ] Updated hero text
- [ ] Updated About section
- [ ] Customized skills cards
- [ ] Replaced project cards and images
- [ ] Updated contact email and social links
- [ ] Tested on mobile and desktop
- [ ] Verified contact form validation

**Mobile menu not working?**
- Check `js/script.js` is linked in HTML
- Clear browser cache
- Test in incognito mode

## 📞 Need Help?

1. Check the main [README.md](README.md)
2. Review browser console (F12) for errors
3. Validate HTML at https://validator.w3.org
4. Validate CSS at https://jigsaw.w3.org/css-validator

---

**You're all set! Your portfolio is ready to impress employers and clients.** 🚀
