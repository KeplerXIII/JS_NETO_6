const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(item => {
  const subMenu = item.querySelector('.menu_sub');
  const subLink = item.querySelector('.menu__link');

  if (subMenu) {
    item.addEventListener('mouseenter', () => {
      subLink.setAttribute('onclick', 'return false');
      subMenu.classList.add('menu_active');
    });

    item.addEventListener('mouseleave', () => {
      subMenu.classList.remove('menu_active');
    });
  }
});
