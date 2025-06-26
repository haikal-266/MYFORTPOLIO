// Portfolio Gaming Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    // Initialize tab navigation
    initTabNavigation();
    
    // Initialize particle effects
    initParticleEffects();
    
    // Initialize sound effects
    initSoundEffects();
    
    // Initialize typing animation
    initTypingAnimation();
    
    // Initialize whale animation enhancements
    initWhaleEffects();
    
    // Initialize level progression
    initLevelProgression();
}

// Tab Navigation System
function initTabNavigation() {
    const tabs = document.querySelectorAll('.tab');
    const mainContent = document.querySelector('.main-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            // If the tab is a link to another page, let the browser handle it
            if (this.hasAttribute('href') && this.getAttribute('href') !== '#') {
                return;
            }

            event.preventDefault(); // Prevent default action for non-linking tabs

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Update content based on tab
            updateTabContent(this.dataset.tab);
        });
    });
}

// Update content based on selected tab
function updateTabContent(tabName) {
    const missionBrief = document.querySelector('.mission-brief h1');
    const missionSubtitle = document.querySelector('.mission-subtitle');
    
    const content = {
        beginning: {
            title: 'SWIMMING THROUGH A VAST NETWORK OF INTERCONNECTED DEVICES AND SERVICES, SPREADING JOY AND WHIMSY TO USERS ACROSS THE GLOBE',
            subtitle: 'NETWORK SYNERGETIC WEB PROGRAMMING'
        },
        logs: {
            title: 'DEVELOPMENT LOGS: TRACKING PROGRESS THROUGH COUNTLESS LINES OF CODE AND DIGITAL ARCHITECTURES',
            subtitle: 'SYSTEM LOGS & PROJECT HISTORY'
        },
        achievements: {
            title: 'UNLOCKED ACHIEVEMENTS: MASTERING FRAMEWORKS, CONQUERING BUGS, AND DELIVERING EXCEPTIONAL USER EXPERIENCES',
            subtitle: 'SKILL TREE & ACCOMPLISHMENTS'
        },
        creations: {
            title: 'DIGITAL CREATIONS: WEBSITES, APPLICATIONS, AND INTERACTIVE EXPERIENCES BROUGHT TO LIFE',
            subtitle: 'PORTFOLIO SHOWCASE'
        },
        gamer: {
            title: 'GAMER PROFILE: BALANCING CODE AND PLAY, FINDING INSPIRATION IN VIRTUAL WORLDS',
            subtitle: 'GAMING ACHIEVEMENTS & STATS'
        }
    };
    
    if (content[tabName]) {
        typeWriter(missionBrief, content[tabName].title, 50);
        setTimeout(() => {
            missionSubtitle.textContent = content[tabName].subtitle;
        }, 1000);
    }
}

// Typing animation effect
function typeWriter(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation for mission brief
function initTypingAnimation() {
    const missionBrief = document.querySelector('.mission-brief h1');
    const originalText = missionBrief.textContent;
    
    // Start typing animation after a short delay
    setTimeout(() => {
        typeWriter(missionBrief, originalText, 30);
    }, 500);
}

// Optimized particle effects
function initParticleEffects() {
    const whaleContainer = document.querySelector('.whale-container');
    
    // Reduce particle count for better performance
    for (let i = 0; i < 8; i++) {
        createFloatingParticle(whaleContainer, i);
    }
    
    // Create matrix-style falling code
    createMatrixEffect();
}

function createFloatingParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    
    // Optimized positioning and styling
    const size = Math.random() * 3 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${Math.random() > 0.5 ? '#64b5f6' : '#e91e63'};
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: floatParticle ${duration}s linear infinite;
        animation-delay: ${index * 0.3}s;
        box-shadow: 0 0 6px currentColor;
        pointer-events: none;
        will-change: transform;
    `;
    
    container.appendChild(particle);
}

function createMatrixEffect() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translate3d(0, 100vh, 0) rotate(0deg);
                opacity: 0;
            }
            15% {
                opacity: 1;
            }
            85% {
                opacity: 1;
            }
            100% {
                transform: translate3d(0, -100px, 0) rotate(180deg);
                opacity: 0;
            }
        }
        
        @keyframes matrixFall {
            0% {
                transform: translate3d(0, -100px, 0);
                opacity: 0;
            }
            15% {
                opacity: 1;
            }
            85% {
                opacity: 1;
            }
            100% {
                transform: translate3d(0, 100vh, 0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Optimized whale effects
function initWhaleEffects() {
    const whale = document.querySelector('.digital-whale');
    const whaleBody = document.querySelector('.whale-body');
    
    let isHovered = false;
    
    // Add optimized hover effect
    whale.addEventListener('mouseenter', function() {
        if (!isHovered) {
            isHovered = true;
            whaleBody.style.animation = 'gentleFloat 4s ease-in-out infinite, gentlePulse 2s ease-in-out infinite';
            whaleBody.style.transform = 'scale(1.05)';
        }
    });
    
    whale.addEventListener('mouseleave', function() {
        isHovered = false;
        whaleBody.style.animation = 'gentleFloat 8s ease-in-out infinite';
        whaleBody.style.transform = 'scale(1)';
    });
    
    // Add optimized click effect
    whale.addEventListener('click', function(event) {
        createClickRipple(event, whale);
        
        // Subtle color change
        whaleBody.style.filter = 'hue-rotate(60deg)';
        setTimeout(() => {
            whaleBody.style.filter = 'none';
        }, 800);
    });
}

function createClickRipple(event, container) {
    const ripple = document.createElement('div');
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ripple.style.cssText = `
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgba(0, 255, 255, 0.6);
        border-radius: 50%;
        left: ${x - 10}px;
        top: ${y - 10}px;
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1000;
    `;
    
    container.appendChild(ripple);
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(10);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Sound effects system
function initSoundEffects() {
    const soundToggle = document.querySelector('.sound-toggle');
    let soundEnabled = true;
    
    soundToggle.addEventListener('click', function() {
        soundEnabled = !soundEnabled;
        this.textContent = soundEnabled ? 'ON' : 'OFF';
        this.style.background = soundEnabled ? '#00ff00' : '#ff0000';
        
        // Play toggle sound (if sounds were implemented)
        if (soundEnabled) {
            playSound('toggle');
        }
    });
    
    // Add sound effects to interactive elements
    document.querySelectorAll('.tab, .social-link, .settings-icon').forEach(element => {
        element.addEventListener('click', function() {
            if (soundEnabled) {
                playSound('click');
            }
        });
        
        element.addEventListener('mouseenter', function() {
            if (soundEnabled) {
                playSound('hover');
            }
        });
    });
}

// Placeholder sound function (would integrate with Web Audio API)
function playSound(type) {
    // In a real implementation, this would play actual sound files
    console.log(`Playing ${type} sound`);
    
    // Visual feedback for sound
    const soundIndicator = document.createElement('div');
    soundIndicator.textContent = '♪';
    soundIndicator.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        color: #00ffff;
        font-size: 1.5rem;
        animation: soundPulse 0.5s ease-out;
        pointer-events: none;
        z-index: 10000;
    `;
    
    document.body.appendChild(soundIndicator);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes soundPulse {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        soundIndicator.remove();
    }, 500);
}

// Level progression system
function initLevelProgression() {
    const expBar = document.querySelector('.exp-fill');
    const levelNumber = document.querySelector('.level-number');
    let currentLevel = 48;
    let currentExp = 75; // percentage
    
    // Simulate experience gain with reduced frequency
    setInterval(() => {
        if (Math.random() > 0.98) { // 2% chance every interval
            gainExperience(Math.floor(Math.random() * 3) + 1);
        }
    }, 5000);
    
    function gainExperience(amount) {
        currentExp += amount;
        
        if (currentExp >= 100) {
            levelUp();
            currentExp = currentExp - 100;
        }
        
        updateExpBar();
    }
    
    function levelUp() {
        currentLevel++;
        levelNumber.textContent = currentLevel;
        
        // Level up effect
        levelNumber.style.animation = 'none';
        setTimeout(() => {
            levelNumber.style.animation = 'pulse 0.5s ease-in-out 3';
        }, 10);
        
        // Create level up notification
        showNotification('LEVEL UP!', '#00ff00');
    }
    
    function updateExpBar() {
        expBar.style.width = currentExp + '%';
    }
}

// Notification system
function showNotification(message, color = '#00ffff') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: ${color};
        padding: 20px 40px;
        border: 2px solid ${color};
        border-radius: 10px;
        font-family: 'Orbitron', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        text-shadow: 0 0 10px ${color};
        box-shadow: 0 0 30px ${color};
        animation: notificationShow 2s ease-out;
        pointer-events: none;
        z-index: 10000;
    `;
    
    document.body.appendChild(notification);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes notificationShow {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            20% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Initialize settings panel
function initSettings() {
    const settingsIcon = document.querySelector('.settings-icon');
    
    settingsIcon.addEventListener('click', function() {
        showNotification('Settings Panel Coming Soon!', '#ff6600');
    });
}

// Add some easter eggs
document.addEventListener('keydown', function(event) {
    // Konami code easter egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    if (!window.konamiProgress) {
        window.konamiProgress = 0;
    }
    
    if (event.code === konamiCode[window.konamiProgress]) {
        window.konamiProgress++;
        
        if (window.konamiProgress === konamiCode.length) {
            activateKonamiCode();
            window.konamiProgress = 0;
        }
    } else {
        window.konamiProgress = 0;
    }
});

function activateKonamiCode() {
    showNotification('CHEAT CODE ACTIVATED!', '#ff0066');
    
    // Add special effects
    document.body.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 5000);
}

// Initialize everything when script loads
console.log('🎮 Portfolio Gaming System Initialized');
console.log('💻 Welcome to the Digital Realm');
console.log('🚀 Ready for Adventure!');
