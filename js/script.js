//ibg================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

//Burger=============================================
window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
		menuItem = document.querySelectorAll('.menu__link'),
		hamburger = document.querySelector('.header__burger'),
		body = document.querySelector('body');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('active');
			menu.classList.toggle('active');
			body.classList.toggle('lock');
		});
	});


});


//===Tab===================================================
window.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('.header__button'),
		headerText = document.querySelector('.header__descr'),
		aboutButton = document.querySelector('.about__more'),
		aboutText = document.querySelector('.about__descr'),
		servicesButton = document.querySelector('.services__more'),
		servicesText = document.querySelector('.services__descr'),
		heightHeaderText = headerText.scrollHeight,
		heightAboutText = aboutText.scrollHeight,
		heightServicesText = servicesText.scrollHeight;



	button.addEventListener('click', () => {
		headerText.classList.toggle('active');
		button.textContent = 'read more';
		if (headerText.classList.contains('active')) {
			headerText.style.setProperty('--max-height', heightHeaderText + 'px');
			button.textContent = 'read less';
		}
	});
	aboutButton.addEventListener('click', () => {
		aboutText.classList.toggle('active');
		aboutButton.textContent = 'read more';
		if (aboutText.classList.contains('active')) {
			aboutText.style.setProperty('--max-height', heightAboutText + 'px');
			aboutButton.textContent = 'read less';
		}
	});
	servicesButton.addEventListener('click', () => {
		servicesText.classList.toggle('active');
		servicesButton.textContent = 'read more';
		if (servicesText.classList.contains('active')) {
			servicesText.style.setProperty('--max-height', heightServicesText + 'px');
			servicesButton.textContent = 'read less';
		}
	});

});

//===Tabs==================================================
window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	let info = document.querySelector('.card__wrapper'),
		cardButton = document.querySelectorAll('.card__button'),
		cardText = document.querySelectorAll('.card__text');


	function showCardText(i) {
		let height = cardText[i].scrollHeight;
		if (!cardText[i].classList.contains('active')) {
			cardText[i].classList.add('active');
			cardText[i].style.setProperty('--max-height', height + 'px');
			cardButton[i].classList.add('active');
			cardButton[i].textContent = 'read less';
		}

	}
	function hideCardText() {
		for (let i = 0; i < cardText.length; i++) {
			cardText[i].classList.remove('active');
			cardButton[i].classList.remove('active');
			cardButton[i].textContent = 'read more';
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('card__button') && !target.classList.contains('active')) {
			for (let i = 0; i < cardButton.length; i++) {
				if (target == cardButton[i]) {
					hideCardText();
					showCardText(i);
				}
			}
		} else {
			hideCardText();
		}

	});

});

//Page-up=============================================
window.onscroll = function () {
	up()
};

function up() {
	if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
		document.querySelector('.page-up').style.display = "block";
	} else {
		document.querySelector('.page-up').style.display = "none";
	}

}
up();



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

