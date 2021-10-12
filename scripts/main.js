let menu = document.getElementById('menu');
let btn = document.getElementsByClassName('btn-menu');



let goTopBtn = document.querySelector('.scroll');





function sidebar() {
	if(document.querySelector('.act-nav')){
		menu.classList.remove('act-nav');
		for(let line of btn){
			line.style.cssText = `transition:1s;`
		}
	}else{
		menu.classList.add('act-nav');
		for(let i = 0; i < btn.length; i++){
			btn[0].style.cssText = `transform: rotate(-45deg) translate(-10px, 8px);
			transition:1s;`
			btn[1].style.cssText =`display: none;
			transition:1s`;
			btn[2].style.cssText = `transform: rotate(45deg) ;
			transition:1s`
		}
	}
}




(function() {

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('scroll-act');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('scroll-act');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.scroll');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();