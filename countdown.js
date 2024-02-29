 // Information skapad med hjälp av v3school

var countDownDate = new Date("May 12, 2024 20:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "PREMIÄR";
  }
}, 1000);// JavaScript Document