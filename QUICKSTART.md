# Quick Start Guide

## 🎯 Getting Started in 5 Minutes

### Step 1: Customize Your Information
Edit `index.html` and replace the following placeholder text with your information:

1. **Name**: Line ~77
   ```html
   <h1 class="hero-title">Hi, I'm Your Name</h1>
   ```

2. **Professional Title**: Line ~78
   ```html
   <p class="hero-subtitle">Full Stack Web Developer | Problem Solver | Tech Enthusiast</p>
   ```

3. **Email**: Line ~193
   ```html
   <a href="mailto:your.email@example.com">your.email@example.com</a>
   ```

4. **Social Links**: Lines ~197-199
   ```html
   <a href="https://github.com/yourprofile" target="_blank">GitHub</a>
   <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
   ```

### Step 2: Add Your Projects
Replace the project cards (sections starting at line ~150) with your actual projects:

```html
<article class="project-card">
    <div class="project-image">
        <img src="assets/images/your-project.jpg" alt="Your Project">
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>A description of what your project does and the technologies used.</p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
        <div class="project-links">
            <a href="https://project-url.com" class="btn btn-secondary">View Project</a>
            <a href="https://github.com/yourprofile/project" class="btn btn-secondary">GitHub</a>
        </div>
    </div>
</article>
```

### Step 3: Add Project Images
1. Save your project screenshots to `assets/images/` folder
2. Update the image source in each project card
3. Use high-quality images (1200x600px recommended)

### Step 4: Update About Section
Edit the About section (around line ~88):

```html
<p>Welcome to my portfolio! I'm a passionate [your profession] with expertise in [your skills]. I have experience working with [technologies].</p>
<p>When I'm not coding, I enjoy [hobbies/interests].</p>
```

Update the highlight items with your actual experience:
```html
<div class="highlight-item">
    <h3>Experience</h3>
    <p>X+ years in [your field]</p>
</div>
```

### Step 5: Update Your Skills
Customize the skills section (around line ~124):

```html
<div class="skill-card">
    <h3>Your Skill Category</h3>
    <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
    </ul>
</div>
```

### Step 6: View Your Portfolio

**Option A: Direct in Browser**
- Simply double-click `index.html` file

**Option B: Using Python (Recommended)**
```bash
# Python 3.x
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option C: Using Node.js**
```bash
npx http-server
```

## 🎨 Quick Customization Tips

### Change Brand Colors
Edit `css/styles.css`, line ~10:

```css
:root {
    --primary-color: #0066cc;      /* Your main color */
    --secondary-color: #ff6b35;    /* Your accent color */
}
```

### Adjust Fonts
Add Google Fonts to `index.html` `<head>` section:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update `css/styles.css`, line ~21:
```css
font-family: 'YourFont', sans-serif;
```

### Change Hero Image/Background
Currently uses a gradient. To add a background image:

```css
.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('assets/images/hero-bg.jpg') center/cover;
}
```

## 📱 Testing Responsiveness

1. Open DevTools: `F12` or `Ctrl+Shift+I`
2. Click the mobile icon (top-left of DevTools)
3. Select different devices to preview

Test on:
- iPhone SE (375px)
- iPad (768px)
- Desktop (1200px+)

## 🚀 Ready to Deploy?

### Option 1: GitHub Pages (Free & Easy)
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select "main" branch
4. Site goes live at `https://username.github.io/portfolio`

### Option 2: Netlify (Free & Fast)
1. Connect your GitHub repository
2. Deploy automatically on every push
3. Custom domain support available

### Option 3: Vercel (Free & High Performance)
1. Import your GitHub repo
2. Auto-deploys on every update
3. Great for performance optimization

## ✅ Final Checklist

- [ ] Updated all placeholder names and emails
- [ ] Added 3-5 project cards with images
- [ ] Updated skills section with your technologies
- [ ] Modified the hero title and subtitle
- [ ] Customized brand colors (optional)
- [ ] Added social media links
- [ ] Tested on mobile, tablet, and desktop
- [ ] Optimized all images for web
- [ ] Tested all navigation links work smoothly
- [ ] Tested contact form validates properly

## 📸 File Naming Best Practices

For images in `assets/images/`:
- Use descriptive names: `ecommerce-platform.jpg`
- Use lowercase: `project-one.jpg` not `Project One.jpg`
- Optimize size: Use tools like TinyPNG or ImageOptim
- Recommended sizes: 1200x600px for project images

## 🔗 SEO Tips

Update in `index.html`:

```html
<!-- Line 4 -->
<meta name="description" content="Your professional portfolio showcasing web projects and skills">

<!-- Line 5 -->
<meta name="keywords" content="portfolio, web developer, JavaScript, React, [your skills]">

<!-- Line 6 -->
<title>Your Name | Web Developer Portfolio</title>
```

## 🆘 Common Issues & Solutions

**Images not showing?**
- Check file path is correct
- Verify image exists in `assets/images/`
- Clear browser cache (Ctrl+Shift+Delete)

**Styling looks broken?**
- Verify `css/styles.css` is linked in HTML
- Clear browser cache
- Check browser console for errors (F12)

**Contact form not working?**
- Check console (F12) for JavaScript errors
- Ensure form fields have correct IDs
- Verify email format validation

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
