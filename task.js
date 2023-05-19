const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
  const subMenu = item.querySelector('.menu_sub');
  const subLink = item.querySelector('.menu__link');

  if (subMenu) {
    subLink.setAttribute('onclick', 'return false');
    item.addEventListener('click', () => {
      subMenu.classList.toggle('menu_active');
    });
  }
});


