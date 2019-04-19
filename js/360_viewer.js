//playerChange
changeBotton = () => {

let btnPlayer = document.getElementById("img_player").getElementsByClassName("btn_player")[0],
    btnPause = document.getElementById("img_player").getElementsByClassName("btn_pause")[0];

console.log(btnPlayer);

changePause = () => {
    btnPause.classList.add("open");
    btnPlayer.classList.remove("open");
}

changePlayer = () => {
    btnPlayer.classList.add("open");
    btnPause.classList.remove("open");
}

btnPlayer.addEventListener('click', changePause);
btnPause.addEventListener('click', changePlayer);

};

changeBotton();


//fullscreen
const imgScreen = document.getElementById('img_viewer');
const itemInfo = document.getElementById('info_table');
const ele = document.documentElement;

let fsButton = document.getElementById('btn_fs');
let fsExitButton = document.getElementById('btn_exitfs');

var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

fsButton.addEventListener('click', function(e) {
	e.preventDefault();
    requestFullscreen(document.documentElement);

    fsButton.classList.remove('open');
    fsExitButton.classList.add('open');
	imgScreen.classList.add('full');
	itemInfo.classList.add('close');
});

fsExitButton.addEventListener('click', function(e) {
	e.preventDefault();
    exitFullscreen();
    
    fsButton.classList.add('open');
    fsExitButton.classList.remove('open');
	imgScreen.classList.remove('full');
	itemInfo.classList.remove('close');
});