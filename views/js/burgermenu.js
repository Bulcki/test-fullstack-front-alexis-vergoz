document.addEventListener('DOMContentLoaded', function() {
    function createBurgerMenu() {
        const navbar = document.querySelector('.navbar');
        
        if (navbar.querySelector('.burger-menu')) return;

        const burgerMenu = document.createElement('div');
        burgerMenu.classList.add('burger-menu');
        burgerMenu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        navbar.appendChild(burgerMenu);
    }

    function applyMobileLayout() {
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.navbar');
            
            const logo = navbar.querySelector('.logo');
            if (logo) {
                logo.style.cssText = `
                    position: absolute !important;
                    left: 20px !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    height: 40px !important;
                `;
            }

            const navLinks = navbar.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = 'none';
            }

            const appStores = navbar.querySelector('.app-stores');
            if (appStores) {
                appStores.style.display = 'none';
            }
            createBurgerMenu();
        }
    }

    applyMobileLayout();
    window.addEventListener('resize', applyMobileLayout);
});