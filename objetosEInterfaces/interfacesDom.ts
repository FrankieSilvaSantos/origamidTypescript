document.querySelector('video') //HTMLVideoElement
document.querySelector('img') //HTMLImageElement

const link1 = document.querySelector('a')
const link2 = document.querySelector('img')


link1?.href


const video = document.querySelector("#videoPrincipal")

if (video instanceof HTMLVideoElement) {
    console.log(video.volume)
}