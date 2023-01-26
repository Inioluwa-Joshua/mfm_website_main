const header = document.querySelector('.navbar');


document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    if (scroll_position > 150){
        header.style.backgroundColor = '#29044b';
    } else{
        header.style.backgroundColor = 'transparent';
    }
});