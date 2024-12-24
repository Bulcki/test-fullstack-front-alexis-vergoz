const partners = [
    { name: 'Airbnb', image: '/assets/img/airbnb.png' },
    { name: 'Google', image: '/assets/img/google2.png' },
    { name: 'Bookmyshow', image: '/assets/img/bookmyshow.png' },
    { name: 'Oyo', image: '/assets/img/oyo.png' },
    { name: 'Amazon', image: '/assets/img/amazon.png' },
    { name: 'Microsoft', image: '/assets/img/microsoft.png' },
    { name: 'Fedex', image: '/assets/img/fedex.png' },
    { name: 'Walmart', image: '/assets/img/walmart.png' },
    { name: 'Ola', image: '/assets/img/ola.png' },
    { name: 'Hubspot', image: '/assets/img/hubspot.png' },
    { name: 'Gatsby', image: '/assets/img/gatsby.png' },
    { name: 'Strapi', image: '/assets/img/strapi.png' },
    { name: 'Atlassian', image: '/assets/img/atlassian.png' },
    { name: 'ServiceNow', image: '/assets/img/servicenow.png' },
    { name: 'Grubhub', image: '/assets/img/grubhub.png' }
];

class PartnersGrid {
    constructor(container) {
        this.container = container;
        this.render();
        this.addHoverEffect();
    }

    render() {
        const grid = document.createElement('div');
        grid.className = 'partners-grid';
        
        partners.forEach(partner => {
            const logo = document.createElement('div');
            logo.className = 'partner-logo';
            logo.innerHTML = `<img src="${partner.image}" alt="${partner.name}" loading="lazy">`;
            grid.appendChild(logo);
        });

        this.container.appendChild(grid);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.partners-section');
    if (container) {
        new PartnersGrid(container);
    }
});