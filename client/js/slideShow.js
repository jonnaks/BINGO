		function fullScreen(element) {
		if(element.requestFullscreen) {
		element.requestFullscreen();
		} else if(element.webkitRequestFullscreen ) {
		element.webkitRequestFullscreen();
		} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
		}
		}


		function makeSlideshow(){
			imgs = document.getElementById('slideshow').children;
			interval = 8000;
			currentPic = 0;
			console.log("ready:" + imgs[currentPic]);
			if (imgs[currentPic]==undefined){
				console.log("UNDEFINED");
				setTimeout(function(){
					makeSlideshow()},1000);
			}
			else{
				imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
				imgs[currentPic].style.animation = 'fadey '+interval+'ms';
				var infiniteLoop = setInterval(function(){
				imgs[currentPic].removeAttribute('style');
				if ( currentPic == imgs.length - 1) { currentPic = 0; } else { currentPic++; }
					imgs[currentPic].style.webkitAnimation = 'fadey '+interval+'ms';
					imgs[currentPic].style.animation = 'fadey '+interval+'ms';
				}, interval);
			}
		}


		window.onload = function()
		{
		makeSlideshow();
		}