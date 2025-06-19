// Hire Me Page JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHirePage();
});

function initializeHirePage() {
    // Initialize form handling
    initFormHandling();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize form animations
    initFormAnimations();
    
    // Initialize typing effects for hire page
    initHirePageTyping();
    
    // Initialize contact form validation
    initFormValidation();
}

// Form Handling
function initFormHandling() {
    const form = document.getElementById('hireForm');
    const sendBtn = document.querySelector('.send-btn');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Enter to submit (when form is focused)
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            if (form && validateForm()) {
                handleFormSubmit(e);
            }
        }
        
        // Escape to discard
        if (e.key === 'Escape') {
            e.preventDefault();
            discardForm();
        }
    });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const sendBtn = document.querySelector('.send-btn');
    const formData = new FormData(form);
    
    // Show loading state
    sendBtn.classList.add('loading');
    sendBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Create form data object
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            project: formData.get('project'),
            budget: formData.get('budget'),
            timeline: formData.get('timeline'),
            message: formData.get('message')
        };
        
        // Log form data (replace with actual submission)
        console.log('Form submitted:', data);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        
        // Reset button state
        sendBtn.classList.remove('loading');
        sendBtn.disabled = false;
        
        // Add success effect
        addSuccessEffect();
        
    }, 2000); // Simulate network delay
}

// Show success message
function showSuccessMessage() {
    const formContainer = document.querySelector('.contact-form-container');
    
    // Remove existing success message
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message show';
    successMessage.innerHTML = `
        <h3>🚀 MESSAGE TRANSMITTED SUCCESSFULLY!</h3>
        <p>Your message has been received. I'll get back to you within 24 hours.</p>
        <p><strong>TRANSMISSION ID:</strong> ${generateTransmissionId()}</p>
    `;
    
    // Insert success message
    formContainer.appendChild(successMessage);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.remove();
            }
        }, 500);
    }, 5000);
}

// Generate transmission ID
function generateTransmissionId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'TX-';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Add success effect
function addSuccessEffect() {
    const container = document.querySelector('.contact-form-container');
    container.style.borderColor = '#4caf50';
    container.style.boxShadow = '0 0 30px rgba(76, 175, 80, 0.5)';
    
    setTimeout(() => {
        container.style.borderColor = '#e91e63';
        container.style.boxShadow = '0 0 30px rgba(233, 30, 99, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
    }, 3000);
}

// Discard form
function discardForm() {
    const form = document.getElementById('hireForm');
    const sendBtn = document.querySelector('.send-btn');
    
    if (confirm('Are you sure you want to discard all form data?')) {
        form.reset();
        
        // Reset button state
        sendBtn.classList.remove('loading');
        sendBtn.disabled = false;
        
        // Add discard effect
        const container = document.querySelector('.contact-form-container');
        container.style.borderColor = '#ff4444';
        container.style.boxShadow = '0 0 20px rgba(255, 68, 68, 0.3)';
        
        setTimeout(() => {
            container.style.borderColor = '#e91e63';
            container.style.boxShadow = '0 0 30px rgba(233, 30, 99, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
        }, 1500);
        
        // Show discard message
        showNotification('Form data discarded', 'warning');
    }
}

// Form validation
function initFormValidation() {
    const form = document.getElementById('hireForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing error
    clearFieldError(e);
    
    // Validate based on field type
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function clearFieldError(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.classList.remove('error');
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #ff4444;
        font-size: 0.75rem;
        margin-top: 5px;
        font-weight: 500;
    `;
    
    field.parentNode.appendChild(errorElement);
}

function validateForm() {
    const form = document.getElementById('hireForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const event = { target: input };
        if (!validateField(event)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Smooth scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to form function
function scrollToForm() {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
        formElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = formElement.querySelector('input');
            if (firstInput) {
                firstInput.focus();
            }
        }, 500);
    }
}

// Download CV function
function downloadCV() {
    // Simulate CV download
    showNotification('CV download started', 'success');
    
    // In a real implementation, you would trigger an actual download
    // window.open('/path/to/cv.pdf', '_blank');
    
    console.log('CV download triggered');
}

// Form animations
function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form-group');
    
    // Animate form groups on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(group);
    });
}

// Hire page typing effect
function initHirePageTyping() {
    const title = document.querySelector('.mission-brief h1');
    if (title && title.textContent === 'CONNECT WITH ME') {
        // Add typing effect to title
        typeWriter(title, 'CONNECT WITH ME', 100);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'warning' ? '#ff9800' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .field-error {
        animation: shake 0.3s ease;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ff4444 !important;
        box-shadow: 0 0 10px rgba(255, 68, 68, 0.3) !important;
        animation: shake 0.3s ease;
    }
`;
document.head.appendChild(notificationStyles);

// Auto-save form data to localStorage
function initAutoSave() {
    const form = document.getElementById('hireForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Load saved data
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(`hire_form_${input.name}`);
        if (savedValue && input.type !== 'submit') {
            input.value = savedValue;
        }
    });
    
    // Save data on input
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.name && this.type !== 'submit') {
                localStorage.setItem(`hire_form_${this.name}`, this.value);
            }
        });
    });
    
    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        inputs.forEach(input => {
            if (input.name) {
                localStorage.removeItem(`hire_form_${input.name}`);
            }
        });
    });
}

// Initialize auto-save
initAutoSave();

// Add some cyberpunk effects
function addCyberpunkEffects() {
    // Add glitch effect to form on hover
    const formContainer = document.querySelector('.contact-form-container');
    
    formContainer.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s ease';
    });
    
    formContainer.addEventListener('animationend', function() {
        this.style.animation = '';
    });
}

// Add glitch animation CSS
const glitchStyles = document.createElement('style');
glitchStyles.textContent = `
    @keyframes glitch {
        0% { transform: translateX(0); }
        10% { transform: translateX(-2px) skew(-1deg); }
        20% { transform: translateX(2px) skew(1deg); }
        30% { transform: translateX(-1px) skew(-0.5deg); }
        40% { transform: translateX(1px) skew(0.5deg); }
        50% { transform: translateX(0); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(glitchStyles);

// Initialize cyberpunk effects
addCyberpunkEffects();