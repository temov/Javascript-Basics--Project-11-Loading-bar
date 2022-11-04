
function myMove() {
    var elem1 = document.getElementById("div1");
    var elem2 = document.getElementById("div2");
    var width = 0;
    var span = 0;
  window.onload = function(x) { 
    setInterval(function () {
        width = width >= 100 ? 0 : width + 5; 
        span = width;
        document.getElementById('div2').style.width = width + "%"; 
        document.getElementById('span').innerHTML = span + "%";}, 500);            
  }
}
myMove();


