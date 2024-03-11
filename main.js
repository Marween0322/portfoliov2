

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

document.addEventListener("DOMContentLoaded", function() {
    // Get references to your sections
    var headerSection = document.getElementById("header-section");
    var aboutSection = document.getElementById("about-section");
    var skillsSection = document.getElementById("skills-section");
    var myProjectsSection = document.getElementById("myprojects-section");
    var designSection = document.getElementById("design-section");
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  
    function handleScroll() {
      handleSectionScroll(headerSection);
      handleSectionScroll(aboutSection);
      handleSectionScroll(skillsSection);
      handleSectionScroll(myProjectsSection);
      handleSectionScroll(designSection);
    }
  
    function handleSectionScroll(section) {
      if (isElementInViewport(section)) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    handleScroll(); // Check on page load
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the button and body elements
    var toggleBackgroundButton = document.getElementById('toggleBackgroundButton');
    var body = document.body;

    // Add click event listener to the button
    toggleBackgroundButton.addEventListener('click', function() {
        // Toggle between 'light-blue-background' and 'dark-blue-background' classes on the body
        body.classList.toggle('light-blue-background');
        body.classList.toggle('dark-blue-background');
    });
});

// Function to show the loading sequence
// Function to show the loading sequence
function showLoadingSequence() {
  setTimeout(() => {
    document.getElementById('developer').style.opacity = '1';
    document.getElementById('ui-ux').style.opacity = '0';
    document.getElementById('designer').style.opacity = '0';
  }, 300); // Faster delay for the first text

  setTimeout(() => {
    document.getElementById('developer').style.opacity = '0';
    document.getElementById('ui-ux').style.opacity = '1';
    document.getElementById('designer').style.opacity = '0';
  }, 600); // Faster delay for hiding the texts

  setTimeout(() => {
    document.getElementById('developer').style.opacity = '0';
    document.getElementById('ui-ux').style.opacity = '0';
    document.getElementById('designer').style.opacity = '1';
  }, 900); // Faster delay for the second text

  setTimeout(() => {
    document.getElementById('developer').style.opacity = '1';
    document.getElementById('ui-ux').style.opacity = '0';
    document.getElementById('designer').style.opacity = '0';
  }, 1200); // Faster delay for hiding the texts

  setTimeout(() => {
    document.getElementById('developer').style.opacity = '0';
    document.getElementById('ui-ux').style.opacity = '1';
    document.getElementById('designer').style.opacity = '0';
  }, 1500); // Faster delay for the third text

  setTimeout(() => {
    document.getElementById('developer').style.opacity = '0';
    document.getElementById('ui-ux').style.opacity = '1';
    document.getElementById('designer').style.opacity = '0';
  }, 1800); // Faster delay for hiding the texts
}

// Repeat the loading sequence 3 times
for (let i = 0; i < 3; i++) {
  showLoadingSequence();
}

// Show the page after the loading sequence is complete
setTimeout(() => {
  document.querySelector('.loading-screen').style.animation = 'slideUp 0.8s ease-out forwards'; // Trigger the sliding-up animation
   // Add any additional actions to show the main page content here
}, 2000); // Total duration for 3 repetitions, adjust as needed


let mouseX = 0;
let mouseY = 0;
let lastTimestamp = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function update(timestamp) {
  const cursor = document.getElementById('cursor');
  const circle = document.getElementById('circle');

  const elapsed = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  const smoothFactor = 0.1;
  const deltaX = (mouseX - cursor.offsetLeft) * smoothFactor;
  const deltaY = (mouseY - cursor.offsetTop) * smoothFactor;

  cursor.style.left = `${cursor.offsetLeft + deltaX}px`;
  cursor.style.top = `${cursor.offsetTop + deltaY}px`;

  circle.style.transform = `translate(-50%, -50%)`;

  requestAnimationFrame(update);
}

function start() {
  lastTimestamp = performance.now();
  update(lastTimestamp);
}

start();

 // Get the container and clone its children
 const carouselContainer = document.getElementById('text-carousel');
 const textItems = carouselContainer.querySelectorAll('.text-item');

 // Function to clone and append text items
 function cloneAndAppend() {
     textItems.forEach(item => {
         const clone = item.cloneNode(true);
         carouselContainer.appendChild(clone);
     });
 }

 // Initial clone
 cloneAndAppend();

 // Animation
 function startAnimation() {
     let position = 0;

     function animate() {
         position -= 5; // Adjust speed by changing decrement value
         carouselContainer.style.transform = `translateX(${position}px)`;

         if (position <= -textItems[0].offsetWidth) {
             position += textItems[0].offsetWidth;
             cloneAndAppend();
         }

         requestAnimationFrame(animate);
     }

     animate();
 }

 startAnimation();