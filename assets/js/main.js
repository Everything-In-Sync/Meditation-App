// How to select the inner HTML of an Element, in this case, an ID
// const test = document.querySelector ("#btn-five");
// console.log(test.innerHTML);

// document.querySelector('#btn-five').onclick = function (){

// };

// document.querySelector('#btn-five').style.backgroundColor === 'purple';

// function removeButton (btnId){
//     document.querySelector(btnId).onclick = function(){
//         console.log(btnId.innerHTML);
//     };
// }

// removeButton('#btn-five');

// Selects the button and console logs its inner HTML when clicked
// document.querySelector('#btn-five').onclick = function(){
//     console.log(document.querySelector('#btn-five').innerHTML)
// }
// This does not work, not sure why.
// function removeBtns (){
//     btnFive.onclick.remove();
//     btnFifteen.onclick.remove();
//     btnThirty.onclick.remove();
// }
// removeBtns()

// Selects the button and removes all buttons when clicked.
// document.querySelector('#btn-five').onclick = function(){
//     document.querySelector('#btn-five').remove();
//     document.querySelector('#btn-fifteen').remove();
//     document.querySelector('#btn-thirty').remove();
// }
// document.querySelector('#btn-fifteen').onclick = function(){
//     document.querySelector('#btn-five').remove();
//     document.querySelector('#btn-fifteen').remove();
//     document.querySelector('#btn-thirty').remove();
// }
// document.querySelector('#btn-thirty').onclick = function(){
//     document.querySelector('#btn-five').remove();
//     document.querySelector('#btn-fifteen').remove();
//     document.querySelector('#btn-thirty').remove();
// }
// Works but I don't like having it query select every time
// btnThirty.onclick = function (){
//     document.querySelector('#btn-five').remove();
//     document.querySelector('#btn-fifteen').remove();
//     document.querySelector('#btn-thirty').remove();
// }
// const returnButton = document.querySelector('#return-button');
// returnButton.onclick = function(){
//     document.querySelector('body').innerHTML = body;
// }



const container = document.querySelector('#container');

const body = document.querySelector('body');

//Saves the div with an id of video to a variable so I can append the video to it later
const videoDiv = document.querySelector('#video');
//Saves the div witht he id of return-button to a constant so I can append to it later
const returnButtonDiv = document.querySelector('#return-button')

const returnButtonContent = `
    <button id="return-button">Return</button>
`
//Saves the HTML for the embeded video to a constant
const fiveMinVideo = `
<iframe width="560" height="315" id="youtube-video" src="https://www.youtube-nocookie.com/embed/3RxXiFgkxGc" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
const fifteenMinVideo = `
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/itZMM5gCboo?start=3" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`
constThirtyMinVideo    = `
`
//Saves the button Id's to variables
let btnFive = document.querySelector('#btn-five');
let btnFifteen = document.querySelector('#btn-fifteen');
let btnThirty = document.querySelector('#btn-thirty');

btnFive.onclick = function () {
    //Makes the video and return button visible again for the 2nd clickthrough
    video.style.visibility = 'visible';
    returnButton.style.visibility = 'visible';
    //Uses the variables to remove the buttons when the user clicks on them.
    btnFive.style.visibility = 'hidden';
    btnFifteen.style.visibility = 'hidden';
    btnThirty.style.visibility = 'hidden';
    //Creates a div and saves it to a constant
    const videoElement = document.createElement('div');
    //Set's the ID of that div to five-min-video
    videoElement.setAttribute('class', 'video-style')
    videoElement.setAttribute('id', 'video')
    //Injects the embeded video HTML into the new div
    videoElement.innerHTML = fiveMinVideo;
    //Places the new div under the main-button id 
    videoDiv.append(videoElement);
    //When button is clicked, changes the background color to black
    body.style.backgroundColor = "black";
    //Creates a new div which will house the return button
    const returnButtonElement = document.createElement('div');
    //Creating a class on that div called return-button-style
    returnButtonElement.setAttribute('class', 'return-button-style');
    //Creating an ID on that div
    returnButtonElement.setAttribute('id', 'return-button');
    //Sets the inner HTML of that div to the content in the returnButtonContent variable
    returnButtonElement.innerHTML = returnButtonContent;
    //Appends the new element with content to the return button div in the DOM
    returnButtonDiv.append(returnButtonElement);
}
returnButton = document.querySelector('#return-button');
const video = document.querySelector('#video')
returnButton.onclick = function () {
    fiveMinVideo.pause();
    body.style.backgroundColor = 'rebeccapurple';
    video.style.visibility = 'hidden';
    returnButton.style.visibility = 'hidden';
    btnFive.style.visibility = 'visible';
    btnFifteen.style.visibility = 'visible';
    btnThirty.style.visibility = 'visible';
}

btnFifteen.onclick = function () {
    video.style.visibility = 'visible';
    returnButton.style.visibility = 'visible';
    btnFive.style.visibility = 'hidden';
    btnFifteen.style.visibility = 'hidden';
    btnThirty.style.visibility = 'hidden';
    const videoElement = document.createElement('div');
    videoElement.setAttribute('class', 'video-style')
    videoElement.setAttribute('id', 'video')
    videoElement.innerHTML = fifteenMinVideo;
    videoDiv.append(videoElement);
    body.style.backgroundColor = "#ebc99e";
    const returnButtonElement = document.createElement('div');
    returnButtonElement.setAttribute('class', 'return-button-style');
    returnButtonElement.setAttribute('id', 'return-button');
    returnButtonElement.innerHTML = returnButtonContent;
    returnButtonDiv.append(returnButtonElement);
}
btnThirty.onclick = function () {
    video.style.visibility = 'visible';
    returnButton.style.visibility = 'visible';
    btnFive.style.visibility = 'hidden';
    btnFifteen.style.visibility = 'hidden';
    btnThirty.style.visibility = 'hidden';
    const videoElement = document.createElement('div');
    videoElement.setAttribute('class', 'video-style')
    videoElement.setAttribute('id', 'video')
    videoElement.innerHTML = fiveMinVideo;
    videoDiv.append(videoElement);
    body.style.backgroundColor = "black";
    const returnButtonElement = document.createElement('div');
    returnButtonElement.setAttribute('class', 'return-button-style');
    returnButtonElement.setAttribute('id', 'return-button');
    returnButtonElement.innerHTML = returnButtonContent;
    returnButtonDiv.append(returnButtonElement);
}





