function colorChanger() {
  //document.body.style.background = 'lightpink';
  /*var color = document.body.style.background;
  if(color.style.background == 'lightblue'){
    color.style.background = 'lightpink';
  } else {
    color.style.background = 'lightblue';
  }*/

  var element = document.body;
  console.log(element);

  element.classList.toggle("lp-background");
}
