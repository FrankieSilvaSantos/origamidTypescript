document.querySelector('video'); //HTMLVideoElement
document.querySelector('img'); //HTMLImageElement
var link1 = document.querySelector('a');
var link2 = document.querySelector('img');
link1 === null || link1 === void 0 ? void 0 : link1.href;
var video = document.querySelector("#videoPrincipal");
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
