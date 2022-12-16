var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("website").style.display = "block";
  AOS.refresh();
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('header');
    if (window.scrollY > 0) {
        nav.classList.add('add-shadow');
    }
    else {
        nav.classList.remove('add-shadow');
    }
});