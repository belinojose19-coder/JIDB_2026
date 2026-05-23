// ========================================
// Mobile Navigation Toggle
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========================================
// Smooth Navigation
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Contact Form Handler
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // 1. Form validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(formData.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Get button elements for loading states
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton ? submitButton.textContent : 'Send Message';

        try {
            // 2. Show loading state
            if (submitButton) {
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
            }

            // 3. Send data to your live Formspree endpoint
            const response = await fetch('https://formspree.io/f/xkoebleb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // 4. Handle response success/failure
            if (response.ok) {
                showNotification("Message sent successfully! I'll get back to you soon.", 'success');
                contactForm.reset();
            } else {
                // Formspree returned an error status code (e.g., 400 or 500)
                const data = await response.json();
                if (data.hasOwnProperty('errors')) {
                    showNotification(data.errors.map(error => error.message).join(", "), 'error');
                } else {
                    throw new Error('Form submission failed');
                }
            }
        } catch (error) {
            // Catches network errors or thrown exceptions
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // 5. Always restore the button state regardless of success or failure
            if (submitButton) {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        }
    });
}

// ========================================
// Helper Functions
// ========================================

/**
 * Validate email format
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Simulate form submission
 */
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data:', data);
            resolve();
        }, 1000);
    });
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles dynamically if not in CSS
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        fontSize: '1rem',
        zIndex: '1000',
        animation: 'slideIn 0.3s ease'
    });

    if (type === 'success') {
        notification.style.backgroundColor = '#4caf50';
        notification.style.color = 'white';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = 'white';
    } else {
        notification.style.backgroundColor = '#2196f3';
        notification.style.color = 'white';
    }

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// Scroll Effects
// ========================================

/**
 * Add scroll effects (e.g., fade in elements on scroll)
 */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all project cards and skill cards
    document.querySelectorAll('.project-card, .skill-card, .highlight-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Active Navigation Link on Scroll
// ========================================

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    highlightActiveNavLink();
    console.log('Portfolio script loaded successfully!');
});

// ========================================
// Utility: Get URL Parameters
// ========================================

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// ========================================
// Optional: Typing Animation for Hero
// ========================================

function createTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;

    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;

    const typeInterval = setInterval(() => {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
}

// Uncomment to enable typing animation
// document.addEventListener('DOMContentLoaded', createTypingAnimation);
