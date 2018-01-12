/*Loader Timeout*/
$(document).ready(function() {
	//Scroll key animation pt.1
	$('body').addClass('ismainpage');
	
    setTimeout(function() {
        $('body').addClass('loaded');
		$('body').addClass('loadmenu');
		
		$('#fullpage').fullpage( {
			anchors:['main', 'about', 'resume', 'portfolio', 'contact'],
			scrollingSpeed: 1500,
			
			onLeave: function(index, nextIndex, direction){
				//Main Page Animation Fix pt.1
				if(nextIndex == 1) {
					$('body').removeClass('accessmenu');
				}
				//Scroll Key href
				if(nextIndex == 1) {
					document.getElementById("scroll-button").setAttribute('href', "#about");
				} else if(nextIndex == 2) {
					document.getElementById("scroll-button").setAttribute('href', "#resume");
				} else if(nextIndex == 3) {
					document.getElementById("scroll-button").setAttribute('href', "#portfolio");
				} else if(nextIndex == 4) {
					document.getElementById("scroll-button").setAttribute('href', "#contact");
				}	
				//Scroll Key animation pt.2
				if (nextIndex != 1) {
					setTimeout(function() {
						$('body').addClass('notmainpage');
					},100);
				} else {
					$('body').removeClass('notmainpage');
				}
				if (nextIndex == 5) {
					$('body').addClass('islastpage');
				} else {
					$('body').removeClass('islastpage');
				}
				//Menu Bar
				$('body').removeClass('p1'); $('body').removeClass('p2'); $('body').removeClass('p3'); $('body').removeClass('p4');
				if (nextIndex == 2) {
					$('body').addClass('p1');
				} else if(nextIndex == 3) {
					$('body').addClass('p2');
				} else if(nextIndex == 4) {
					$('body').addClass('p3');
				} else if(nextIndex == 5) {
					$('body').addClass('p4');
				}
				console.log('1:'+ (index - 1));
				var subString = 'sub';
				if (index != 1) {
					setTimeout(function(){
					var curElem = document.getElementById(subString.concat(String(index - 1)));
					curElem.style.transition = 'opacity 1.5s ease-in';
					}, 500);
				}
			},
			
			//Main Page Animation Fix pt.2
			afterLoad: function(anchorLink, index){
				if(index == 1) {
					setTimeout(function() {
						$('body').addClass('accessmenu');
					}, 1000);
				}
				console.log('0.25:'+ (index - 1));
				var subString = 'sub';
				if (index != 1) {
					var nextElem = document.getElementById(subString.concat(String(index - 1)));
					nextElem.style.transition = 'opacity 0.25s ease-in-out';
				}
				
				
			},
		});
    }, 4000);
	setTimeout(function(){
		$('body').removeClass('loadmenu');
		$('body').addClass('scroll-fade-in');
    }, 7000);
});