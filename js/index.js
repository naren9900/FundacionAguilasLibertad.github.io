let btnMenu = document.getElementById('btnmenu');

let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});


let btnMenu1 = document.getElementById('btnmenu');
btnMenu1.addEventListener('click', function(){
    'use strict';
    btnMenu1.classList.toggle('esicon');
});


/*------------ para el menu---------------------------*/

const banner = document.querySelector("#container_banner");
let bannerSection = document.querySelectorAll(".banners");
let bannerSectionLast = bannerSection[bannerSection.length -1];

const btnLeft = document.querySelector("#btn--left-banner");
const btnRight = document.querySelector("#btn-right-banner");

banner.insertAdjacentElement('afterbegin', bannerSectionLast);


function NextTes(){
	let bannerSectionFirst = document.querySelectorAll(".banners")[0];
	banner.style.marginLeft = "-200%";
	banner.style.transition = "all 0.5s";
	setTimeout(function(){
		banner.style.transition = "none";
		banner.insertAdjacentElement('beforeend', bannerSectionFirst);
		banner.style.marginLeft = "-100%";
	},500); 
} 

function PrevTes(){
	let bannerSection = document.querySelectorAll(".banners");
	let bannerSectionLast = bannerSection[bannerSection.length -1];
	banner.style.marginLeft ="0";
	banner.style.transition = "all 0.5s";
	setTimeout(function(){
		banner.style.transition = "none";
		banner.insertAdjacentElement('afterbegin', bannerSectionLast);
		banner.style.marginLeft = "-100%";
	},500);
}

btnLeft.addEventListener('click', function(){
	PrevTes();
});

btnRight.addEventListener('click' , function(){
	NextTes();
})

setInterval(function(){
	NextTes();
},9000);



/*--------animación de  slider de Testimonio

const testimonio = document.querySelector("#testimonio");
let testimonioSection = document.querySelectorAll(".testimonio--section");
let testimonioSectionLast = testimonioSection[testimonioSection.length -1];

const btnLeft = document.querySelector("#btn--left");
const btnRight = document.querySelector("#btn-right");

testimonio.insertAdjacentElement('afterbegin', testimonioSectionLast);

function NextTes(){
	let testimonioSectionFirst = document.querySelectorAll(".testimonio--section")[0];
	testimonio.style.marginLeft = "-200%";
	testimonio.style.transition = "all 0.5s";
	setTimeout(function(){
		testimonio.style.transition = "none";
		testimonio.insertAdjacentElement('beforeend', testimonioSectionFirst);
		testimonio.style.marginLeft = "-100%";
	},500); 
} 

function PrevTes(){
	let testimonioSection = document.querySelectorAll(".testimonio--section");
	let testimonioSectionLast = testimonioSection[testimonioSection.length -1];
	testimonio.style.marginLeft ="0";
	testimonio.style.transition = "all 0.5s";
	setTimeout(function(){
		testimonio.style.transition = "none";
		testimonio.insertAdjacentElement('afterbegin', testimonioSectionLast);
		testimonio.style.marginLeft = "-100%";
	},500);
}

btnLeft.addEventListener('click', function(){
	PrevTes();
});

btnRight.addEventListener('click' , function(){
	PrevTes();
})
setInterval(function(){
	NextTes();
},7000);


*/

