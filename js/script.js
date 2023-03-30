/*Скрипт для видео*/
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

/*Как ведет себя скрипт, при клике по кнопке срабатывает либо if либо else. в случае с if видео встает на паузу исчезает 
привьюшка, но остается прозрачный фон и кнопка, если работает else то просто идет прокрутка видео без сторонних элементов, 
на повторе*/

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
		videoWrapper.classList.remove('video-overlay');
		videoBtn.classList.add('none');
		video.play();
	} else {
		videoWrapper.classList.add('video-overlay');
		videoBtn.classList.remove('none');
		video.pause();
	}
});
