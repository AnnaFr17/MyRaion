document.forms.publish.onsubmit = function() {
  let userNameMessage = this.userNameMessage.value;
  let message = this.messages.value;
  //let coord = this.coord.value;
  //console.log("Объект = " + coord)
  console.log("Имя - " + userNameMessage + " : " + message);
  
  document.getElementById("userNameMessage").value = "";
  document.getElementById("message").value = "";
  document.getElementById("userNameMessage").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("hiddenElement").style.display = "";
  document.getElementById("submit").style.display = "none";
  return false;
  };