let modalMain = document.querySelector(".modal#modal_main");
let modalSuccess = document.querySelector(".modal#modal_success");
let closeButtons = document.querySelectorAll('.modal__close.modal__close_times');
let toggleButtons = document.querySelectorAll('.btn');


(function popUP() {
    modalMain.classList.add("modal_active")
})()

closeButtons.forEach(element => {
    element.addEventListener('click', function() {
        element.closest('.modal_active').classList.remove('modal_active')
    })
});

toggleButtons.forEach(element => {
    element.addEventListener('click', function() {
        toggleButtons.forEach(element => {
            element.closest('.modal').classList.toggle('modal_active');
        })
    })
});