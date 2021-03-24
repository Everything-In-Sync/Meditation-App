
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
const mainButtons = document.querySelector('#main-buttons');
//Saves the HTML for the embeded video to a constant
const fiveMinVideo = `
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/3RxXiFgkxGc" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//Saves the button Id's to variables
let btnFive = document.querySelector('#btn-five');
let btnFifteen = document.querySelector('#btn-fifteen');
let btnThirty = document.querySelector('#btn-thirty');

btnFive.onclick = function(){
//Uses the variables to remove the buttons when the user clicks on them.
    btnFive.remove();
    btnFifteen.remove();
    btnThirty.remove();
//Creates a div and saves it to a constant
    const videoElement = document.createElement('div');
//Set's the ID of that div to five-min-video
    videoElement.setAttribute('id', 'five-min-video')
//Injects the embeded video HTML into the new div
    videoElement.innerHTML = fiveMinVideo;
//Places the new div under the main-button id 
    mainButtons.append(videoElement);

}
btnFifteen.onclick = function(){
    btnFive.remove();
    btnFifteen.remove();
    btnThirty.remove();
}
btnThirty.onclick = function (){
    btnFive.remove();
    btnFifteen.remove();
    btnThirty.remove();
}


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





