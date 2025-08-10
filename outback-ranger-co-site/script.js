// Tiny product renderer with search/filter
const grid = document.getElementById('grid');
const q = document.getElementById('search');
const filter = document.getElementById('filter');
if (grid){
  let items = [];
  fetch('products.json')
    .then(r => r.json())
    .then(data => { items = data; render() });

  function render(){
    const term = (q?.value || '').toLowerCase().trim();
    const cat = filter?.value || 'all';
    grid.innerHTML = '';
    items
      .filter(p => cat==='all' || p.category===cat)
      .filter(p => !term || (p.name+p.description+p.tags.join(' ')).toLowerCase().includes(term))
      .forEach(p => {
        const el = document.createElement('article');
        el.className = 'card product';
        el.innerHTML = `
          <div class="pill">${p.category}</div>
          <img alt="${p.name}" src="${p.image}" onerror="this.style.display='none'">
          <div class="title">${p.name}</div>
          <div class="desc">${p.description}</div>
          <div class="price">A$${p.price.toFixed(2)}</div>
          <a class="btn" href="${p.link}" target="_blank" rel="noopener">Enquire</a>
        `;
        grid.appendChild(el);
      });
  }
  q?.addEventListener('input', render);
  filter?.addEventListener('change', render);
}
