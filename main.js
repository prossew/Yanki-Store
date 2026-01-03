'use strict';


const button = document.querySelector('.menu-button');
const dropdown = document.querySelector('.dropdown');

if (button && dropdown) {
  button.addEventListener('click', () => {
    dropdown.style.display =
      dropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const filterLinks = document.querySelectorAll('.filter-link');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterLinks.length || !productCards.length) return;

  function filterProducts(filterValue) {
    productCards.forEach(card => {

      if (filterValue === 'all') {
        card.style.display = 'block';
        return;
      }

      if (filterValue === 'new') {
        const hasNewSpan = card.querySelector('.product-name span');
        const isNewCategory = card.dataset.category === 'new';

        card.style.display = (hasNewSpan || isNewCategory) ? 'block' : 'none';
        return;
      }

      const category = card.dataset.category;
      const type = card.dataset.type;

      card.style.display =
        category === filterValue || type === filterValue
          ? 'block'
          : 'none';
    });
  }

  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      filterLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      filterProducts(link.dataset.filter);
    });
  });

  filterProducts('all');
});

