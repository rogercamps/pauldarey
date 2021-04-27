const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector(".menu-items");
// let meuOpen = false;
const menuItem = document.querySelectorAll('.menu-item');

menuBtn.addEventListener('click', () => {
  toggle();
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    if(menuBtn.classList.contains('open')) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle('open');
  menuItems.classList.toggle('open');
}