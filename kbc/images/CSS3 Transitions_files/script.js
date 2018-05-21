var adDiv;

function initEB() {
  if (!EB.isInitialized()) {
      EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
  } else {
    	startAd();
  }
}

function startAd() {
  adDiv = document.getElementById("ad");
  addEventListeners();
  _customAd();
}

function addEventListeners() {
  document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
}

// Sizmek Clickthrough
function bgExitHandler() {
  EB.clickthrough();
}

// window.addEventListener("load", initEB);

if (window.addEventListener){
  window.addEventListener('load', initEB, false);
} else if (window.attachEvent){
  window.attachEvent('onload', initEB);
}
