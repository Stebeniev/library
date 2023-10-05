/*burger-menu*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open")
    })
})
document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithMenu) return;
    document.querySelector(".header").classList.remove("open")
});


/*-----------------------------------------------------------------------------------------------------------*/