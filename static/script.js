document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  console.log("Cordova is ready!");
  window.open = cordova.InAppBrowser.open;
}
