//Disable inspect element
document.oncontextmenu = document.body.oncontextmenu = function () { return false; }
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}
/////////////////////
var image = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png',
  'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png'],
  imgcpy = ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png',
    'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png'];
let images = shuffle(image.concat(imgcpy))

function buildImages() {
  for (var i = 0; i < images.length; i++) {
    let card = document.createElement('img')
    card.className += "imgwid";
    card.setAttribute('src', images[i])
    imgs.appendChild(card)
    let cardBlack = document.createElement('img')
    cardBlack.setAttribute('src', 'images/Back.png')
    cardBlack.className += "imgwidBlack";
    imgblack.appendChild(cardBlack)
    cardBlack.addEventListener("click", function () { flipimg(card, cardBlack); });
  }
}

function flipimg(card, cardBlack) {
  cardBlack.classList.add('flip')
  card.classList.add('chosen');
  let selected = document.getElementsByClassName('chosen')
  let selectedbackcard = document.getElementsByClassName('flip')
  if (selected.length === 1) {
    stophint();
  }
  if (selected.length === 2) {
    stopclick();
    matchimg(selected[0], selected[1], selectedbackcard[0], selectedbackcard[1]);
  }
  else
    console.log("lenght not = 0", selected.length)
}
function matchimg(imgOne, imgTwo, cardBlack1, cardBlack2) {
  if (imgOne.src === imgTwo.src) {
    setTimeout(() => {
      cardBlack1.classList.remove('flip')
      cardBlack2.classList.remove('flip')
      imgOne.classList.remove('chosen')
      imgTwo.classList.remove('chosen')
      imgOne.classList.add('shakeimg', 'success');
      imgTwo.classList.add('shakeimg', 'success');
      cardBlack1.classList.add('success')
      cardBlack2.classList.add('success')
      btn.classList.remove('stopbtn')
    }, 500);
  }
  else
    setTimeout(() => {
      cardBlack1.classList.remove('flip')
      cardBlack2.classList.remove('flip')
      imgOne.classList.remove('chosen')
      imgTwo.classList.remove('chosen')
      btn.classList.remove('stopbtn')
    }, 1000);
  }
function stopclick() {
  container.classList.add('stop')
  setTimeout(() => {
    container.classList.remove('stop')
  }, 1000);
};

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
var i = 5;
function hint() {
  i = i - 1;
  if (i >= 0) {
    var btn = document.getElementById("btn");
    btn.innerHTML = "Hint" + ": " + i
    stopclick()
    var flipall = document.getElementById('imgblack')
    flipall.classList.add('flip')
    setTimeout(() => {
      flipall.classList.remove('flip')
    }, 500);
  }
  else {
    console.log("no hints")
  }
}
function stophint() {
  btn.classList.add('stopbtn')
}

buildImages()