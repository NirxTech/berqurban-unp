// Handle authentication logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const navbarContainer = document.querySelector('.flex.space-x-4');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Add logout button only if navbar exists
    if (navbarContainer) {
        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'text-white hover:text-gray-200';
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = logout;
        navbarContainer.appendChild(logoutBtn);
    }
});

async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Loading...';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Store auth token (in real app, this would come from backend)
        localStorage.setItem('auth_token', 'sample_token');
        localStorage.setItem('user_role', 'participant');
        
        window.location.href = '../dashboard.html';
    } catch (error) {
        alert('Login failed! Please try again.');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Loading...';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Registration successful! Please login.');
        window.location.href = 'login.html';
    } catch (error) {
        alert('Registration failed! Please try again.');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = 'Daftar Sekarang';
    }
}

// Check authentication status
function checkAuth() {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        window.location.href = 'auth/login.html';
    }
    return token;
}

// Logout function
function logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    window.location.href = 'auth/login.html';
}