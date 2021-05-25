/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}

navLink.forEach( x => x.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id')


function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(c => {
    const sectionHeight = c.offsetHeight;
    const sectionTop = c.offsetTop - 50;
    sectionId = c.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')
      .classList.add('active-link')
    } else {
      document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']')
      .classList.remove('active-link')
    }

  });
}

window.addEventListener('scroll', scrollActive);
/*===== CHANGE BACKGROUND HEADER =====*/ 

function scrollHeader() {
  const header = document.getElementById('header');
  if(this.scrollY >= 200) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');

  }
}


/*===== SHOW SCROLL TOP =====*/ 

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');

  }
}
window.addEventListener('scroll', scrollTop);

/*===== SHOW SCROLL TOP =====*/ 


/*===== MIXITUP FILTER PORTFOLIO =====*/ 

/* Link active portfolio */ 


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 

