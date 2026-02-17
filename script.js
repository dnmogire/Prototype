// ===== Tab Switching =====
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// ===== Service Form Toggle =====
function toggleServiceForm() {
    const form = document.getElementById('serviceForm');
    if (form) {
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'block';
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            form.style.display = 'none';
        }
    }
}

// ===== Login Role Toggle =====
function switchRole(role) {
    const roleButtons = document.querySelectorAll('.role-btn');
    roleButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
}

// ===== Handle Login =====
function handleLogin(event) {
    event.preventDefault();
    
    // Demo mode - just redirect to dashboard
    window.location.href = 'dashboard.html';
}

// ===== Smooth Scroll for Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// ===== Form Validation =====
function validateServiceForm() {
    const form = document.querySelector('.service-form form');
    if (!form) return true;
    
    const required = form.querySelectorAll('[required]');
    let isValid = true;
    
    required.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--danger-color)';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--border-color)';
        }
    });
    
    return isValid;
}

// ===== Demo Interactions =====
// Add click handlers for demo buttons
document.addEventListener('DOMContentLoaded', function() {
    // Confirm booking buttons
    const confirmButtons = document.querySelectorAll('.btn-success');
    confirmButtons.forEach(btn => {
        if (btn.textContent.includes('Confirm')) {
            btn.addEventListener('click', function() {
                alert('Booking confirmed! (Demo mode)');
            });
        }
    });
    
    // Decline booking buttons
    const declineButtons = document.querySelectorAll('.btn-danger');
    declineButtons.forEach(btn => {
        if (btn.textContent.includes('Decline')) {
            btn.addEventListener('click', function() {
                if (confirm('Are you sure you want to decline this booking?')) {
                    alert('Booking declined. (Demo mode)');
                }
            });
        }
    });
    
    // Edit buttons
    const editButtons = document.querySelectorAll('.btn-secondary');
    editButtons.forEach(btn => {
        if (btn.textContent.includes('Edit')) {
            btn.addEventListener('click', function() {
                alert('Edit functionality coming soon! (Demo mode)');
            });
        }
    });
});
