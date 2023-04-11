function changebgcolor() {
  var navbar = document.querySelector('.navbar')
  var scrollValue = window.scrollY
if(scrollValue < 50){
navbar.classList.remove('navbg')
} 
else{
  navbar.classList.add('navbg')
}};

window.addEventListener('scroll' , changebgcolor);
