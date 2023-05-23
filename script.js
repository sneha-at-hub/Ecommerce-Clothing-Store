const bar=document.getElementById('bar');
const nav = document.getElementsById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active')
    })
}
