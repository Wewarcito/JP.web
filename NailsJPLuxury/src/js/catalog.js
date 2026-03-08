/**
 * JPLuxury - Catalog Logic
 * Handles dynamic rendering, search, and filtering of nail services
 */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('services-grid');
    const searchInput = document.getElementById('catalog-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const noResults = document.getElementById('no-results');

    const db = window.SERVICIOS_DB || (typeof SERVICIOS_DB !== 'undefined' ? SERVICIOS_DB : null);
    if (!grid || !db) {
        console.error('JPLuxury: Catalog grid or data not found');
        return;
    }

    let currentCategory = 'all';
    let searchQuery = '';

    // Initial render
    renderCatalog();

    // Search event
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCatalog();
    });

    // Filter events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentCategory = btn.getAttribute('data-category');
            renderCatalog();
        });
    });

    function renderCatalog() {
        grid.innerHTML = '';
        
        // Filter DB
        const filteredIds = Object.keys(db).filter(id => {
            const service = db[id];
            
            // Category check
            const matchCategory = currentCategory === 'all' || service.categoria === currentCategory;
            
            // Search check (title or category)
            const matchSearch = service.titulo.toLowerCase().includes(searchQuery) || 
                              service.categoria.toLowerCase().includes(searchQuery) ||
                              service.descripcion.toLowerCase().includes(searchQuery);

            return matchCategory && matchSearch;
        });

        if (filteredIds.length === 0) {
            noResults.style.display = 'block';
            return;
        }

        noResults.style.display = 'none';

        // Render matches
        filteredIds.forEach((id, index) => {
            const service = db[id];
            const card = createServiceCard(id, service, index);
            grid.appendChild(card);
        });
    }

    function createServiceCard(id, service, index) {
        const div = document.createElement('div');
        div.className = 'premium-card service-item-anim';
        div.style.animationDelay = `${index * 0.05}s`;
        
        // Icon mapping based on category or title
        let icon = 'fa-hand-sparkles';
        if (service.categoria.includes('Spa')) icon = 'fa-spa';
        if (service.titulo.toLowerCase().includes('pies')) icon = 'fa-shoe-prints';
        if (service.titulo.toLowerCase().includes('limpieza')) icon = 'fa-magic';
        if (service.titulo.toLowerCase().includes('semipermanente')) icon = 'fa-paint-brush';

        div.innerHTML = `
            <div class="card-category">${service.categoria}</div>
            <h4>${service.titulo}</h4>
            <div class="card-price">${service.precio}</div>
            <div class="card-meta">
                <span><i class="far fa-clock"></i> ${service.duracion}</span>
                <span><i class="fas ${icon}"></i> Premium</span>
            </div>
            <div class="card-footer">
                <a href="detalle-servicio.html?id=${id}" class="btn-card-primary">Ver Detalles</a>
                <a href="https://wa.me/573219055451?text=${encodeURIComponent('Hola, me interesa el servicio: ' + service.titulo)}" target="_blank" class="btn-card-outline" aria-label="Consultar por WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;
        
        return div;
    }
});
