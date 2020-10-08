// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world';

// let myicream = 'chocolat';
// if(myicream === 'chocolat'){
//     alert('yay, i love chocolaat! ');

// }
// else{
//     alert("Awwww, but i don't like it !");
// }

// this is how we define a function in java script

// function multiplication(num1, num2){
//     let result = num1*num2;
//     return result;
// }

// multiplication(3, 5); // call the function


// event handler , onclick

// document.querySelector('html').onclick=function(){
//     alert(' Ouch ! Stop poking me !');
// }

// version deux

// let myHTML = document.querySelector('html');
// myHTML.onclick = function(){};

// play with image when we click on them
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// function setUserName(){
//     let myName = prompt('please enter your name. :');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozila is cool, ' +myName;
// }
// if(!localStorage.getItem('name')){
//     setUserName();

// }else{
//     let stordName = localStorage.getItem('name');
// myHeading.textContent = 'Mozila is dcool,  ' + myName;
// }
// myButton.onclick = function(){
//     setUserName();
// }

function setUserName(){
    let myName = prompt('Please enter your name. ');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozila is cool, ' + myName;
    }
}


let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg'){
        myImage.setAttribute('src', 'images/image2.jpg');

    }
    else{
        myImage.setAttribute('src', 'images/image.jpg');
    }
}