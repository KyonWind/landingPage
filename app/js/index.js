window.onload = function(e) {
    console.log('Hello from js')
const btnHamburger = document.querySelector('#hamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const hasfade = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

header.addEventListener('click', function() {
    console.log("open hamburger");
    if(header.classList.contains('open'))
    {
        console.log("close hamburger");
        body.classList.remove('noscroll')
        header.classList.remove('open');
        hasfade.forEach(function(element){
            element.classList.add('fade-out')
        element.classList.remove('fade-in')
        })
        
        
    } else {
        hasfade.forEach(function(element){
            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        });
        body.classList.add('noscroll')
        header.classList.add('open');
        
    }
    
});
} 
