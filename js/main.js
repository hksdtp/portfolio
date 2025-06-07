// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang gửi...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Không sử dụng hiệu ứng typing để tránh mất thẻ HTML highlight
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    // Giữ nguyên nội dung HTML có tag span.highlight
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease';
        heroTitle.style.opacity = '1';
    }, 300);
});

// Add hover effects to project cards (desktop only)
if (window.innerWidth > 768) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Touch-friendly interactions for mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Improve button touch feedback
    document.querySelectorAll('.btn, .social-links a').forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Expertise expand/collapse functionality
document.addEventListener('DOMContentLoaded', function() {
    const expandBtn = document.getElementById('expandBtn');
    const expertiseDetails = document.getElementById('expertiseDetails');

    if (expandBtn && expertiseDetails) {
        expandBtn.addEventListener('click', function() {
            const isExpanded = expertiseDetails.classList.contains('expanded');

            if (isExpanded) {
                // Collapse
                expertiseDetails.classList.remove('expanded');
                expandBtn.classList.remove('expanded');
                expandBtn.querySelector('span').textContent = 'Xem chi tiết';
            } else {
                // Expand
                expertiseDetails.classList.add('expanded');
                expandBtn.classList.add('expanded');
                expandBtn.querySelector('span').textContent = 'Thu gọn';
            }
        });
    }
});
