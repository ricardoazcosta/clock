function clock(){
   // 1 preciso saber as horas
   // 2 dividir cada parte da hora
   // 3 preciso passar isso para html 

   var h = new Date().getHours();
   var m = new Date().getMinutes();
   var s = new Date().getSeconds();

   var hours = document.getElementById("hour").innerHTML = h;
   var minutes = document.getElementById("minutes").innerHTML = m;
   var seconds = document.getElementById("seconds").innerHTML = s;
}

var interval = setInterval(clock, 1000);