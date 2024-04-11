'use strict';

// プロフィール pulldown : header .acount
const myProfile = document.querySelector('.profile');
const myAcount = document.querySelector('.acount');
let isPulldown = false;

myProfile.addEventListener('click', togglePulldown);

function togglePulldown(event) {
  event.stopPropagation();
  if (isPulldown) {
    closePulldown();
  } else {
    openPulldown();
  }
}

function openPulldown() {
  myAcount.style.display = 'block';
  isPulldown = true;
  document.addEventListener('click', outsideProfile);
}

function closePulldown() {
  myAcount.style.display = 'none';
  isPulldown = false;
  document.removeEventListener('click', outsideProfile);
}

function outsideProfile(event) {
  if (!myAcount.contains(event.target)) {
    closePulldown();
  }
}




















