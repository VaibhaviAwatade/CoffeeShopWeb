let srarch=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
 srarch.classList.toggle('active');
 navbar.classList.remove('active');

}

let navbar=document.querySelector('.navbar');

document.querySelector('#search-icon').onclick=()=>{
 navbar.classList.toggle('active');
 srarch.classList.remove('active');

}

window.onscroll =()=>{
    navbar.classList.remove('active');
    srarch.classList.remove('active');
   
}

let header = document.querySelector('header');

window.addEventListener('scroll' ,() => {
    header.classList.toggle('shadow',window.scrolly >0);
});