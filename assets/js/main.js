const body = document.querySelector('body');
const videoDiv = document.querySelector('#video');
const returnButtonDiv = document.querySelector('#return-button')

const returnButtonContent = `
    <button id="return-button">Return</button>
`
document.querySelector('#return-button').style.visibility = 'hidden';
const fiveMinMedVideo = `
<video class="video-style" id="fiveMinMed" controls autoplay preload="auto" 
width="500px">
<source src="/assets/video/fiveMinMed.mp4" type="video/mp4"></video>`
const fifteenMinMedVideo = `
<video class="video-style" id="fifteenMinMed" controls autoplay preload="auto" 
width="500px">
<source src="/assets/video/fifteenMinMed.mp4" type="video/mp4"></video>`
const thirtyMinMedVideo = `
<video class="video-style" id="thirtyMinMed" controls autoplay preload="auto" 
width="500px">
<source src="/assets/video/thirtyMinMed.mp4" type="video/mp4"></video>
`

let btnFive = document.querySelector('#btn-five');
let btnFifteen = document.querySelector('#btn-fifteen');
let btnThirty = document.querySelector('#btn-thirty');

btnFive.onclick = function () {
    videoDiv.innerHTML = fiveMinMedVideo;
    video.style.visibility = 'visible';
    returnButton.style.visibility = 'visible';
    btnFive.style.visibility = 'hidden';
    btnFifteen.style.visibility = 'hidden';
    btnThirty.style.visibility = 'hidden';
    body.style.backgroundColor = "black";

    returnButton.onclick = function () {
        const video = document.querySelector('#fiveMinMed');
        video.pause();
        body.style.backgroundColor = 'rebeccapurple';
        video.style.visibility = 'hidden';
        returnButton.style.visibility = 'hidden';
        btnFive.style.visibility = 'visible';
        btnFifteen.style.visibility = 'visible';
        btnThirty.style.visibility = 'visible';
    }
}
returnButton = document.querySelector('#return-button');
const video = document.querySelector('#video')

btnFifteen.onclick = function () {
    videoDiv.innerHTML = fifteenMinMedVideo;
    video.style.visibility = 'visible';
    returnButton.style.visibility = 'visible';
    btnFive.style.visibility = 'hidden';
    btnFifteen.style.visibility = 'hidden';
    btnThirty.style.visibility = 'hidden';
    body.style.backgroundColor = "#ebc99e";

    returnButton.onclick = function () {
        const video = document.querySelector('#fifteenMinMed');
        video.pause();
        videoDiv.style.visibility = 'hidden';
        body.style.backgroundColor = 'rebeccapurple';
        video.style.visibility = 'hidden';
        returnButton.style.visibility = 'hidden';
        btnFive.style.visibility = 'visible';
        btnFifteen.style.visibility = 'visible';
        btnThirty.style.visibility = 'visible';
    }
}
btnThirty.onclick = function () {
    videoDiv.innerHTML = thirtyMinMedVideo;
    video.style.visibility = 'visible';
    returnButton.style.visibility = 'visible';
    btnFive.style.visibility = 'hidden';
    btnFifteen.style.visibility = 'hidden';
    btnThirty.style.visibility = 'hidden';
    body.style.backgroundColor = "black";

    returnButton.onclick = function () {
        const video = document.querySelector('#thirtyMinMed');
        video.pause();
        body.style.backgroundColor = 'rebeccapurple';
        video.style.visibility = 'hidden';
        returnButton.style.visibility = 'hidden';
        btnFive.style.visibility = 'visible';
        btnFifteen.style.visibility = 'visible';
        btnThirty.style.visibility = 'visible';
    }
}