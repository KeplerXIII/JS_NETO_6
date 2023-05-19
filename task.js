const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
  const subMenu = item.querySelector('.menu_sub');
  const subLink = item.querySelector('.menu__link');

  if (subMenu) {
    subLink.setAttribute('onclick', 'return false');
    subLink.addEventListener('click', () => {

        // Закрывает открытое подменю по другой ссылке
        const activeMenu = document.querySelector('.menu_active')
        if (activeMenu){
            if (activeMenu.className !== subMenu.className) {
                activeMenu.classList.remove('menu_active')
            }
        }

        // переключаем видимость подменю
        subMenu.classList.toggle('menu_active')

        // закрываем подменю по нажатии на ссылку подменю
        const subMenuLinks = subMenu.querySelectorAll('.menu__link')
        subMenuLinks.forEach(element => {
            element.addEventListener('click', () => {
                subMenu.classList.toggle('menu_active')
            })
        });
    });
  }
});


