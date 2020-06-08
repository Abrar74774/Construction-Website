var navbar = document.getElementById('navbar');
var home = document.getElementById('home');
var about = document.getElementById('about');
var services = document.getElementById('services');
var projects = document.getElementById('projects');
var testim = document.getElementById('testimonial');
var contact = document.getElementById('contact');
let sidebar = document.getElementById("sidebar");
let menu = document.querySelector(".menu");
let overlay = document.getElementById("moberlay");

menu.addEventListener("click", function () {
  overlay.style.opacity = "0.5";
  overlay.style.zIndex = "999999"
  sidebar.style.left = "0px";
});

overlay.addEventListener("click", function () {
  setTimeout('overlay.style.zIndex = "-1";', 400)
  overlay.style.opacity = "0";
  sidebar.style.left = "-70%";
})

window.addEventListener('scroll', function () {
  if (window.innerWidth > 845) {
    if (window.scrollY >= 34) {
      navbar.style.position = 'fixed'
      navbar.style.top = 0;
      home.style.marginTop = '120px'
    } else {
      navbar.style.position = 'relative';
      navbar.style.top = 'auto'
      home.style.marginTop = '0'
    }
    console.log(window.scrollY)
  }
})
//==================== INTERSECTION OBSERVER ===========
var options = {
  threshold: '-33% 0%'
}

var observer = new IntersectionObserver(function (entries) {
  console.log(entries);
  if (entries.filter(entry => entry.isIntersecting)) {  //heeeerrrrreee
  }
}, options)

observer.observe(home);
observer.observe(about);
observer.observe(services);
observer.observe(testim);
observer.observe(contact);



/*Testimonial*/
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [769, 1],
    pagination: true,
    transitionStyle: "goDown",
    autoplay: true
  });
});