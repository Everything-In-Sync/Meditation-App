
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

// Selects the button and removes all buttons when clicked.
document.querySelector('#btn-five').onclick = function(){
    document.querySelector('#btn-five').remove();
    document.querySelector('#btn-fifteen').remove();
    document.querySelector('#btn-thirty').remove();
}


