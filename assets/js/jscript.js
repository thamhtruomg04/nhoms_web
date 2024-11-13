// Slide chuyen dong slide

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector(".aspect-ratio-169")
const dotItem = document.querySelectorAll(".dot")
let imgNumber = imgPosition.length
let index = 0

imgPosition.forEach(function(image, index){
    image.style.left = index*100 + "%";
    dotItem[index].addEventListener("click", function(){
        slide (index)
    })
})

function imgSlide() {
    index++;
    if (index >= imgNumber) {
        index = 0
    }
    slide (index)

}
function slide (index) {
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove('active')
    dotItem[index].classList.add('active')
}

// setInterval(imgSlide, 5000)
var troiToi = true
function doiCheDo() {
    if (troiToi == true) {
        document.getElementsByClassName('change-mode')[0].innerHTML = 'Tối';
        document.getElementsByClassName('header')[0].style = 'background-color: black';
        document.getElementsByClassName('container__container')[0].style = 'background-color: black';
        document.getElementsByClassName('footer')[0].style = 'background-color: black';
        troiToi = false;
    }
    else {
        document.getElementsByClassName('change-mode')[0].innerHTML = 'Sáng';
        document.getElementsByClassName('header')[0].style = 'background-color: grey';
        document.getElementsByClassName('container__container')[0].style = 'background-color: grey';
        document.getElementsByClassName('footer')[0].style = 'background-color: grey';
        troiToi = true;
    }
}
