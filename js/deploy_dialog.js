'use strict';

// 詳細ページ Deployダイアログ : detail.html 設定ボタン
const setDeploy = document.getElementById('setDeploy');
let isDialog = false;
let isClear = false;

setDeploy.addEventListener('click', toggleDeployDialog);

function toggleDeployDialog() {
  const deployBox = document.querySelector('.detail-deploy');
  const deployImage = document.querySelector('.deploy-image');

  deployBox.style.display = isDialog ? 'none' : 'block';
  deployImage.style.display = isClear ? 'block' : 'none';
  isDialog = !isDialog;
  isClear = !isClear;
}




















