

// JavaScript to add the 'scrolled' class to the navbar when scrolling
    const navbar = document.querySelector('nav');
    const mobileNav = document.querySelector('nav.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.mobile-menu-container .close-icon');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');

    document.addEventListener('DOMContentLoaded', function () {
        const textContainer = document.querySelector('.content__container__text');
        const listItems = document.querySelectorAll('.content__container__list__item');
    
        setInterval(function () {
          // Toggle visibility of text items
          textContainer.style.opacity = 0;
          setTimeout(function () {
            textContainer.textContent = textContainer.textContent === 'UI/UX DESIGNER' ? 'WEB DEVELOPER' : 'UI/UX DESIGNER';
            textContainer.style.opacity = 1;
          }, 1000); // Adjust the delay as needed
    
          // Toggle visibility of list items
          listItems.forEach(function (item) {
            item.style.display = item.style.display === 'none' ? 'block' : 'none';
          });
        }, 3000); // Adjust the interval as needed
      });      
        

      window.addEventListener('scroll', function () {


        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
            mobileNav.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            mobileNav.classList.remove('scrolled');
        }
    });
    

menuIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.remove('active');
});

// JavaScript for smooth scrolling to Skills section
function scrollToSection(linkId, sectionId) {
    document.getElementById(linkId).addEventListener('click', function (event) {
        event.preventDefault();
        console.log(`${linkId} link clicked`);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Usage
scrollToSection('about-link', 'about-section');
scrollToSection('skills-link', 'skills-section');
scrollToSection('myprojects-link', 'myprojects-section');
scrollToSection('design-link', 'design-section'); // Corrected section ID
