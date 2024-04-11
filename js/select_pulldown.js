'use strict';

// モデル 選択 pulldown : model_step1.html .select-btn
const selectModel = document.getElementById('toggleButton');
const selectOpen = document.getElementById('hiddenDiv');
let isOpen = false;

selectModel.addEventListener('click', function (event) {
  event.stopPropagation();
  if (isOpen) {
    closeDiv();
  } else {
    openDiv();
  }
});

function openDiv() {
  selectOpen.style.display = 'block';
  isOpen = true;
  document.addEventListener('click', outsideSelect);
}

function closeDiv() {
  selectOpen.style.display = 'none';
  isOpen = false;
  document.removeEventListener('click', outsideSelect);
}

function outsideSelect(event) {
  if (!selectOpen.contains(event.target)) {
    closeDiv();
  }
}



















