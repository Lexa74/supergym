let tab = 0;
/*document.addEventListener('click', function () {
    alert('Вы кликнули по странице!')
  });*/
document.getElementsByClassName('.tab1').onClick = function () {
    alert('URA');
    this.classList.add('active');
}

