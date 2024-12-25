function imgSlide(imgSrc) {
    document.querySelector('.pilus').src = imgSrc;
}

function changeColor(color) {
    const button = document.querySelector('.order-here');
    const header = document.querySelector('span');

    button.style.backgroundColor = color;
    header.style.color = color;
}