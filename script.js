// Resize based on screen width
function adjustPageSize() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');
    if (width <= 600) {
      container.style.transform = 'scale(0.5)';
    } else if (width <= 700) {
      container.style.transform = 'scale(0.75)';
    } else if (width <= 767) {
      container.style.transform = 'scale(0.8)';
    } else if (width <= 1600) {
      container.style.transform = 'scale(0.9)';
    } else {
      container.style.transform = 'scale(1)';
    }
  }
  
  // Toggle collapsible menu
  const toggleMenuBtn = document.getElementById('toggleMenu');
  const leftMenu = document.querySelector('.left-menu');
  
  toggleMenuBtn.addEventListener('click', () => {
    leftMenu.classList.toggle('hidden');
  
    // Update button text based on the menu's state
    if (leftMenu.classList.contains('hidden')) {
      toggleMenuBtn.textContent = 'Show Menu';
    } else {
      toggleMenuBtn.textContent = 'Hide Menu';
    }
  });
  
  // Add hidden class for menu toggle
  const style = document.createElement('style');
  style.textContent = `
    .hidden {
      display: none;
    }
  `;
  document.head.appendChild(style);
  
  // Load dynamic content
  const loadContentBtn = document.getElementById('loadContent');
  const dynamicContentDiv = document.getElementById('dynamicContent');
  
  loadContentBtn.addEventListener('click', () => {
    const newContent = document.createElement('p');
    newContent.textContent = "Here's some new dynamic content loaded on demand!";
    dynamicContentDiv.appendChild(newContent);
  });
  
  // Resize listener
  window.addEventListener('resize', adjustPageSize);
  document.addEventListener('DOMContentLoaded', adjustPageSize);
  