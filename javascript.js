
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const anchor = link.getAttribute('href');
    document.querySelector(anchor).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const offeringToggles = document.querySelectorAll('.offering-toggle');

offeringToggles.forEach(toggle => {
  toggle.addEventListener('click', event => {
    const offering = toggle.parentNode;
    const description = offering.querySelector('.offering-description');
    const icon = toggle.querySelector('i');
    if (description.style.display === 'block') {
      description.style.display = 'none';
      icon.textContent = '+';
    } else {
      description.style.display = 'block';
      icon.textContent = '-';
    }
  });
});

const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(image => {
  image.addEventListener('click', event => {
    const project = image.parentNode;
    const category = project.querySelector('.project-category');
    const title = project.querySelector('.project-title');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <h2>${category.textContent}</h2>
        <h1>${title.textContent}</h1>
        <img src="${image.src}" alt="${image.alt}">
        <button class="close-modal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    const closeModal = modal.querySelector('.close-modal');
    closeModal.addEventListener('click', event => {
      modal.remove();
    });
  });
});

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const text = button.textContent;
    if (text === 'Lat\'s See More') {
      const projects = document.querySelector('.projects');
      const seeMore = document.querySelector('.see-more');
      projects.style.display = 'flex';
      seeMore.style.display = 'none';
    }
  });
});

const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
  icon.addEventListener('click', event => {
    event.preventDefault();
    const url = icon.getAttribute('href');
    window.open(url, '_blank');
  });
});