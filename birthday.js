alert("Hey PURVA, It's me VASU");
var k=0;
const col=["#a5bcef","#ff6464","rgb(128 221 130)","#f1ab42"]
function colorchange()
    {  var i=Math.floor(Math.random()*7)
        document.querySelector("h1").style.color=col[i];}
for(i=0;i<100;i++)
{setInterval(colorchange,500);}
alert("click on your photo");
document.getElementById('img').addEventListener("click",changephoto);

function changephoto(){
    if(k%2===0)
    {document.getElementById('img').src="purvl.jpeg";}
    else
    {document.getElementById('img').src="purva.jpeg";}
    k++;
    
} 
{function random(num) {
    return Math.floor(Math.random()*num)
  }
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5)+5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
    margin: 0px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `
  }
  
  function createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container")
    for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();           balloonContainer.append(balloon);
    }
  }
  
  window.onload = function() {
    createBalloons(10);
  }}