 // Header Scroll JS Start
 $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed_header", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End

  // Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// Simple IntersectionObserver to reveal the card when scrolled into view
(function(){
  const card = document.querySelector('.role-card');
  if (!card) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        card.classList.add('in-view');
        io.unobserve(card);
      }
    });
  }, { threshold: 0.18 });
  io.observe(card);
})();










