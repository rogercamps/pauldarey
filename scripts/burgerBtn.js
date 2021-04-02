const menuBtn = document.querySelector('.menu-btn');
let meuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!meuOpen) {
    menuBtn.classList.add('open');
    meuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    meuOpen = false;
  }
});
