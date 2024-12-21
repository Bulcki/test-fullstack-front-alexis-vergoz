document.addEventListener('DOMContentLoaded', function() {
    function createBurgerMenu() {
        const navbar = document.querySelector('.navbar');
        
        // Vérifier si le menu burger existe déjà
        if (navbar.querySelector('.burger-menu')) return;

        // Créer l'élément du menu burger
        const burgerMenu = document.createElement('div');
        burgerMenu.classList.add('burger-menu');
        burgerMenu.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        // Ajouter le menu burger à droite du navbar
        navbar.appendChild(burgerMenu);
    }

    function applyMobileLayout() {
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.navbar');
            
            // Repositionner le logo
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

            // Masquer les liens de navigation
            const navLinks = navbar.querySelector('.nav-links');
            if (navLinks) {
                navLinks.style.display = 'none';
            }

            // Masquer les boutons des app stores
            const appStores = navbar.querySelector('.app-stores');
            if (appStores) {
                appStores.style.display = 'none';
            }

            // Créer le menu burger
            createBurgerMenu();
        }
    }

    // Appliquer le layout mobile au chargement et au redimensionnement
    applyMobileLayout();
    window.addEventListener('resize', applyMobileLayout);
});