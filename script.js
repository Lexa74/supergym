let tabs = document.querySelectorAll('.tabs > div');
let tabsContent = document.querySelectorAll('.contentTabs > div');
let popUp = document.getElementById('popUp');
let closePopUp = document.querySelectorAll('.changePopUp');


/*tab[0].addEventListener('click', function () {
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
 });*/

 /*let tab = document.querySelectorAll('.tabChange');
 alert(tab[0]);
 tab[0].addEventListener('click', function () {
    alert(tab);
 });*/

//  let numberTab = 0;

//  function tabChange(numberTab) {
//   let i = 0;
//   while (i < lengthTabs) {
//     tabs[i].classList.remove('active');
//     tabsContent[i].classList.remove('active');
//     i++;
//   }
//   tabs[numberTab].classList.add('active');
//   tabsContent[numberTab].classList.add('active');
//  }

 function clickHandler(elem,elems,clickCallback = null) {  // если нет табов, то функция работает как просто добавлению this класса active
  elem.addEventListener('click', function(event) { // event это замена this
    event.preventDefault();
    resetElementes(elems);
    elem.classList.add('active');
    if (clickCallback != null) {
      clickCallback();
    } 
  })
 };

function resetElementes(elems) {
  elems.forEach(function(elem) {elem.classList.remove('active')});
} 

function changeTabContent(tabContent, tabsContent) { // Выбор содержимого таба, но мы не знаем индекс нажатого таба, поэтому есть changeTab
  resetElementes(tabsContent);
  tabContent.classList.add('active');
}

 let buttons = document.querySelectorAll('.rank > button');
 buttons.forEach(function(button) {
  clickHandler(button,buttons); // функция возвращает buttons, но это используется 
 }) 

 tabs.forEach(function(tab,index) {
  let changeTab = function(){changeTabContent(tabsContent[index], tabsContent)}; // функция возвращает индекс нужного таба
  clickHandler(tab,tabs, changeTab);
 }) 

closePopUp.forEach(function(elemClose) {
  elemClose.addEventListener('click', function() {
    popUp.classList.toggle('active');
  })
 });

