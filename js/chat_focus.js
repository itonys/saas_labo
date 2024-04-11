'use strict';

// デモ　チャットのfocus : demo.html textarea
const chatTextarea = document.querySelector('.chat-textarea');
const btnSend = document.querySelector('.btn-send');

chatTextarea.addEventListener('input', function () {
  if (chatTextarea.value === '') {
    btnSend.classList.remove('clicked');
  } else {
    btnSend.classList.add('clicked');
  }
});



















