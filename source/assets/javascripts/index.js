import { tns } from "tiny-slider/src/tiny-slider.module.js"

const counters = document.querySelectorAll('.counter');
const speed = 12; // The lower the slower

const isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const counterContainer = document.querySelector('.counter-container');
window.addEventListener('scroll', function (event) {
	if (isInViewport(counterContainer)) {
		counters.forEach(counter => {
			const updateCount = () => {
				const target = +counter.getAttribute('data-target');
				const count = +counter.innerText;
		
				// Lower inc to slow and higher to slow
				const inc = target / speed;
		
				// console.log(inc);
				// console.log(count);
		
				// Check if target is reached
				if (count < target) {
					// Add inc to count and output in counter
					counter.innerText = count + inc;
					// Call function every ms
					setTimeout(updateCount, 100);
				} else {
					counter.innerText = target;
				}
			};
		
			updateCount();
		});
	}
}, false);



const navbarItems = document.querySelectorAll(".navbar-tabs-item");


navbarItems.forEach(el => el.addEventListener('click', event => {
	if(document.querySelector('.active')) {
		document.querySelector('.active').classList.remove('active');
	}
	event.target.classList.add('active');
}));

let slider = tns({
	container: '.my-slider',
	items: 1,
	slideBy: 'page',
	autoplay: true,
	responsive: {
	  640: {
		items: 2,
	  },
	  1000: {
		items: 3,
	  },
	  1400: {
		items: 4
	  }
	}
  });

