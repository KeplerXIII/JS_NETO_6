let modalMain = document.querySelector(".modal#modal_main");
let modalSuccess = document.querySelector(".modal#modal_success");
let closeButton = document.querySelectorAll('.modal__close.modal__close_times');
let toggleButton = document.querySelector('.btn')
let redButton = document.querySelector('.btn.btn_danger');
let greenButton = document.querySelector('.btn.btn_sucess');

(function popUP() {
    modalMain.classList.add("modal_active")
})()

closeButton[0].addEventListener('click', function() {
  });

closeButton[1].addEventListener('click', function() {
    modalSuccess.classList.remove('modal_active');
});


toggleButton.addEventListener('click', function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
});