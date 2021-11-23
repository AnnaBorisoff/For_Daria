$(document).ready(function() {

	function fullHeight(){
		var winHeight = $(window).height();
		$('.start_s').height(winHeight);
	};
	fullHeight();
	$(window).resize(function(){
		fullHeight();
	});
	
});


        var video = document.querySelector("video");
        var towards = document.querySelector("#towards")
        var backwards = document.querySelector("#backwards");
        towards.onclick = function () {
            video.playbackRate += 0.1
        }
        backwards.onclick = function () {
            video.playbackRate -= 0.1
        }