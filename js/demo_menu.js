'use strict';

// デモ モデルメニュー pulldown : demo.html .menu-select
const toggleModel = document.getElementById('toggleModel');
const hiddenModel = document.getElementById('hiddenModel');
let isModelOpen = false;

toggleModel.addEventListener('click', function (event) {
  event.stopPropagation();
  if (isModelOpen) {
    closeDemo();
  } else {
    openDemo();
  }
});

function openDemo() {
  hiddenModel.style.display = 'block';
  isModelOpen = true;
  document.addEventListener('click', outsideDemoMenu);
}

function closeDemo() {
  hiddenModel.style.display = 'none';
  isModelOpen = false;
  document.removeEventListener('click', outsideDemoMenu);
}

function outsideDemoMenu(event) {
  if (!hiddenModel.contains(event.target)) {
    closeDemo();
  }
}



















