'use strict'

const button = document.querySelector('.menu-button')
const dropdown = document.querySelector('.dropdown')

button.addEventListener('click', () => {
dropdown.style.display = dropdown.style.display === 'block' ? 'none' :  'block';
});

document.addEventListener('click', function(event)  {
if(!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
}

});