let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let shoppingCart = document.querySelector('.shopping-cart');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}



document.querySelector('#cart-btn').onclick = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.toggle('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}



document.querySelector('#login-btn').onclick = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
  loop: true,
  // slidesPerView: 3,
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false

  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1020: {
      slidesPerView: 3,

    },
  },
});


var swiper = new Swiper(".review-slider", {
  loop: true,
  // slidesPerView: 3,
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false

  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1020: {
      slidesPerView: 3,

    },
  },
});