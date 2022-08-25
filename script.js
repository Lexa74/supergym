let tab = document.querySelectorAll('.tabs > div');
let tabContent = document.querySelectorAll('.contentTabs > div');


tab[0].addEventListener('click', function () {
  tab[0].classList.remove('active');
  tab[1].classList.remove('active');
  tabContent[0].classList.remove('active');
  tabContent[1].classList.remove('active');
  tab[0].classList.add('active');
  tabContent[0].classList.add('active');
 });

 tab[1].addEventListener('click', function () {
  tab[0].classList.remove('active');
  tab[1].classList.remove('active');
  tabContent[0].classList.remove('active');
  tabContent[1].classList.remove('active');
  tab[1].classList.add('active');
  tabContent[1].classList.add('active');
 });

 /*let tab = document.querySelectorAll('.tabChange');
 alert(tab[0]);
 tab[0].addEventListener('click', function () {
    alert(tab);
 });*/