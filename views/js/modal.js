document.addEventListener('DOMContentLoaded', function() {

    if (window.innerWidth <= 768) {
        return;
        }

    const modalHTML = `
       <div id="affiliateModal" class="modal">
            <div class="modal-content">
            <span class="close">&times;</span>
                <div class="modal-body">
                <div class="title">
                 <img src="/assets/img/poignetmain.png" alt="Hero image">
                    <span class"title-text"="" style="margin: 20px; font-size: 24px; font-weight: 600;">
                        Become an affiliate
                    </span>
                 </div>
                    <div class="text-content">
                        <p>Join Landify affiliate program and earn <span class="highlight">25%</span> of every purchase</p>
                    </div>
                    <a href="#" class="cta-button">
                        Register and start to earn
                        <i class="las la-arrow-right arrow-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Ajouter la modale au body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('affiliateModal');
    const closeBtn = modal.querySelector('.close');
    let hasShownModal = false;

    // Fonction pour afficher la modale
    function showModal() {
        if (!hasShownModal) {
            modal.classList.add('show');
            hasShownModal = true;
        }
    }

    // Fonction pour fermer la modale
    function closeModal() {
        modal.classList.remove('show');
    }

    // Détecter quand la souris quitte la page vers le haut
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0) {
            showModal();
        }
    });

    // Détecter le coin supérieur droit
    document.addEventListener('mousemove', function(e) {
        if (e.clientX >= window.innerWidth - 50 && e.clientY <= 50) {
            showModal();
        }
    });

    // Fermer la modale avec le bouton de fermeture
    closeBtn.addEventListener('click', closeModal);

    // Fermer la modale en cliquant en dehors
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    const lineAwesomeLink = document.createElement('link');
        lineAwesomeLink.rel = 'stylesheet';
        lineAwesomeLink.href = 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';
        document.head.appendChild(lineAwesomeLink);
});
