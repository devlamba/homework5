var video = document.querySelector("#videoplayer");

window.addEventListener("load", function() {
	video.loop = false;
	video.autoplay = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	if (video.playbackRate === 0.5) {
		window.alert("Video is at slowest speed!");
	} else if (video.playbackRate === 1) {
		video.playbackRate = 0.5;
	} else if (video.playbackRate === 2) {
		video.playbackRate = 0.5;
	}
});

document.querySelector("#faster").addEventListener("click", function() {
	if (video.playbackRate === 0.5) {
		video.playbackRate = 1;
	} else if (video.playbackRate === 1) {
		video.playbackRate = 2;
	} else if (video.playbackRate === 2) {
		window.alert("Video is at fastest speed!");
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	if (video.currentTime > video.duration) {
		video.currentTime = 0;
	}
});

var muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
	if (video.muted === true) {
		video.muted = false;
		muteButton.innerHTML = 'Mute';
	} else {
		video.muted = true;
		muteButton.innerHTML = 'Unmute';
	}
});

var slider = document.querySelector("#slider");
slider.addEventListener("change", function() {
	video.volume = slider.value/100;
	document.querySelector("#volume").innerHTML = slider.value;
});
