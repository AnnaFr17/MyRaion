let count = 0,count1 = 0,count2 = 0,count3 = 0,count4 = 0,count5 = 0,count6 = 0
document.getElementById('onebut').onclick = function() {
    console.log("button was clicked");
    if (count == 0) {
      document.getElementById("one").style.display = "";
      count = 1
    } else if (count == 1){
      document.getElementById("one").style.display = "none";
      count = 0
    };
};
document.getElementById('twobut').onclick = function() {
    console.log("button was clicked");
    if (count1 == 0) {
      document.getElementById("two").style.display = "";
      count1 = 1
    } else if (count1 == 1){
      document.getElementById("two").style.display = "none";
      count1 = 0
    };
    
};
document.getElementById('threebut').onclick = function() {
  console.log("button was clicked");
  if (count2 == 0) {
    document.getElementById("three").style.display = "";
    count2 = 1
  } else if (count2 == 1){
    document.getElementById("three").style.display = "none";
    count2 = 0
  };
  
};
document.getElementById('fourbut').onclick = function() {
  console.log("button was clicked");
  if (count3 == 0) {
    document.getElementById("four").style.display = "";
    count3 = 1
  } else if (count3 == 1){
    document.getElementById("four").style.display = "none";
    count3 = 0
  };
  
};
document.getElementById('fivebut').onclick = function() {
  console.log("button was clicked");
  if (count4 == 0) {
    document.getElementById("five").style.display = "";
    count4 = 1
  } else if (count4 == 1){
    document.getElementById("five").style.display = "none";
    count4 = 0
  };
  
};
document.getElementById('sixbut').onclick = function() {
  console.log("button was clicked");
  if (count5 == 0) {
    document.getElementById("six").style.display = "";
    count5 = 1
  } else if (count5 == 1){
    document.getElementById("six").style.display = "none";
    count5 = 0
  };
  
};
document.getElementById('sevenbut').onclick = function() {
  console.log("button was clicked");
  if (count6 == 0) {
    document.getElementById("seven").style.display = "";
    count6 = 1
  } else if (count6 == 1){
    document.getElementById("seven").style.display = "none";
    count6 = 0
  };
  
};





