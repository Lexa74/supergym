let tabs = document.querySelectorAll('.tabs > div');
let tabsContent = document.querySelectorAll('.contentTabs > div');
let lengthTabs = document.getElementById('forLength').children.length;

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

 function clickHandler(elem,elems,clickCallback = null) {
  elem.addEventListener('click', function(event) {
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

function changeTabContent(tabContent, tabsContent) {
  resetElementes(tabsContent);
  tabContent.classList.add('active');
}

 let buttons = document.querySelectorAll('.rank > button');
 buttons.forEach(function(button) {
  clickHandler(button,buttons);
 }) 

 tabs.forEach(function(tab,index) {
  let changeTab = function(){changeTabContent(tabsContent[index], tabsContent)};
  clickHandler(tab,tabs, changeTab);
 }) 

