let elOpenMenu = document.getElementById('openMenu');
let elHeaderMenu = document.getElementById('headerMenu');
let elIcon = document.getElementById('icon');


let count = 0;

elOpenMenu.addEventListener('click', function () {
  elHeaderMenu.classList.toggle|('show');
  if(count == 0){
    elOpenMenu.style.color = '#fff';
    elIcon.className = ' bx bx-x';
    count++;
  } else {
    elOpenMenu.style.color = '#000';
    elIcon.className = ' bx bx-menu';

    count = 0 ;

  }

})
