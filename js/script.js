let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let videoBtn = document.querySelectorAll('.vid-btn');


let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');

	menu.classList.remove('fa-times');
	navBar.classList.remove('active');
	loginForm.classList.remove('active');

}


searchBtn.addEventListener('click', () =>{

searchBtn.classList.toggle('fa-times');
searchBar.classList.toggle('active');
});



/*login form-----*/

formBtn.addEventListener('click', () =>{

loginForm.classList.add('active');

});


formClose.addEventListener('click', () =>{

loginForm.classList.remove('active');

});


/* responsive menu*/
menu.addEventListener('click', () =>{

menu.classList.toggle('fa-times');
navBar.classList.toggle('active');
});

//add slider button

videoBtn.forEach(btn =>{
	btn.addEventListener('click', ()=>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');

		let src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;


	});

});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

