document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle functionality
    const mobileWidth = 768;
    
    function setupNavigation() {
      if (window.innerWidth <= mobileWidth) {
        // Only add mobile navigation if it doesn't already exist
        if (!document.querySelector('.mobile-nav-toggle')) {
          const nav = document.querySelector('nav');
          if (nav) {
            // Create mobile navigation toggle button
            const toggleButton = document.createElement('button');
            toggleButton.className = 'mobile-nav-toggle';
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            toggleButton.innerHTML = '<span></span><span></span><span></span>';
            
            // Insert before the nav
            nav.parentNode.insertBefore(toggleButton, nav);
            
            // Add mobile class to nav
            nav.classList.add('mobile-nav');
            
            // Add event listener to toggle
            toggleButton.addEventListener('click', function() {
              nav.classList.toggle('active');
              this.classList.toggle('active');
            });
          }
        }
      } else {
        // Remove mobile navigation if exists
        const toggle = document.querySelector('.mobile-nav-toggle');
        if (toggle) {
          toggle.remove();
        }
        
        const nav = document.querySelector('nav');
        if (nav) {
          nav.classList.remove('mobile-nav', 'active');
        }
      }
    }
    
    // Initial setup
    setupNavigation();
    
    // Reinitialize on window resize
    window.addEventListener('resize', setupNavigation);
    
    // Current year for copyright
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  });