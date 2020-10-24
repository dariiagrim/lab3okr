function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  
scrollWidth = getScrollbarWidth()
console.log(scrollWidth)
const containers = document.querySelector('.containers')
containers.style.marginLeft = `calc(5vw - ${scrollWidth}px)`

// set margins for containers considering scroll-bar width

const nav = document.querySelector('nav')
window.addEventListener('scroll', onScroll)
prevY = pageYOffset
function onScroll() {
    console.log(pageYOffset)
    if (pageYOffset > prevY && pageYOffset > 100) {
        nav.style.top = '-150px'
        prevY = pageYOffset
        
    } else {
        nav.style.top = '0'
        prevY = pageYOffset
    }
}   // navigation-bar


const cars = ['1.jpg', '2.jpeg', '3.jpeg']
const paragraphs = ['Digital World Premiere Mercedes-Benz', 'Mercedes-Benz Design: Sensual Purity and Modern Luxury', 'Mercedes-Benz: Innovation']
let image_index = 0
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const imagesDisplay = document.querySelector('.images-display')
const paragraph = document.querySelector('.images-display p')
rightArrow.addEventListener('click', changePicturesRight)
leftArrow.addEventListener('click', changePicturesLeft)

function changePicturesRight() {
    if (image_index === cars.length - 1) {
        image_index = 0
    } else {
        image_index += 1
    }
    imagesDisplay.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/${cars[image_index]})`
    paragraph.innerHTML = `${paragraphs[image_index]}`
}

function changePicturesLeft() {
    if (image_index === 0) {
        image_index = cars.length - 1
    } else {
        image_index -= 1
    }
    imagesDisplay.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/${cars[image_index]})`
    paragraph.innerHTML = `${paragraphs[image_index]}`
}  // change pictures on page 1

