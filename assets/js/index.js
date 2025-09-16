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
(function () {
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



// Login Form Validation Start

document.getElementById("loginForm").addEventListener("submit", function (e) {
  let isValid = true;


  const email = document.getElementById("login_email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }


  const password = document.getElementById("login_password").value.trim();
  const passwordError = document.getElementById("passwordError");

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }


  if (!isValid) {
    e.preventDefault();
  }
});
// Login Form Validation End


// Signup Form Validation Start
document.getElementById("signupForm").addEventListener("submit", function (e) {
  let isValid = true;


  const name = document.getElementById("signup_name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }


  const username = document.getElementById("signup_username").value.trim();
  const usernameError = document.getElementById("usernameError");
  if (username.length < 4 || /\s/.test(username)) {
    usernameError.textContent = "Username must be at least 4 characters with no spaces.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  const email = document.getElementById("signup_email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,10}(?:\.[a-zA-Z]{2,10})*$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email (e.g. user@gmail.com, john@company.co.in).";
    isValid = false;
  } else {
    emailError.textContent = "";
  }


  const phone = document.getElementById("signup_phone").value.trim();
  const phoneError = document.getElementById("phoneError");
  const phoneRegex = /^\+[0-9]{7,15}$/; // + followed by 7–15 digits total
  if (phone && !phoneRegex.test(phone)) {
    phoneError.textContent = "Phone must start with + and contain only digits, total 7–15 digits (e.g. +919876543210).";
    isValid = false;
  } else {
    phoneError.textContent = "";
  }


  const password = document.getElementById("signup_password").value.trim();
  const passwordError = document.getElementById("passwordError");
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
  if (!passwordRegex.test(password)) {
    passwordError.textContent = "Password must be 6–20 chars, include 1 uppercase, 1 number, and 1 special character.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }


  const confirmPassword = document.getElementById("signup_confirm_password").value.trim();
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }


  if (!isValid) {
    e.preventDefault();
  }
});
// Signup Form Validation End






