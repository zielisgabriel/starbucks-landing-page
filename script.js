window.addEventListener('scroll', function(){
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

function imgSlider(anything){
    document.querySelector('.starbucksCafe').src = anything
}

function corCirculo(cor){
    const circulo = document.querySelector('.banner-ball')
    circulo.style.background = cor
}


//mobile
var barMobile = document.querySelector('#barMobile')
barMobile.addEventListener('click', function(){
    var listMobile = document.querySelector('#listMobile')
    listMobile.classList.toggle('active')
})