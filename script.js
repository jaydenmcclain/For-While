var wrap=document.body.querySelector(".wrapper");
var match=Number(prompt("How many hits would you like to attempt on the dragon?"));
var userDamage=Math.floor(Math.random()*match)+1;
var drgDamage=Math.floor(Math.random()*2);
var dragon=10;
var user=5;
while(dragon>0||user>0){
  match=Number(prompt("How many hits would you like to attempt on the dragon?"));
  userDamage=Math.floor(Math.random()*match)+1;
  drgDamage=Math.floor(Math.random()*2);
  var userHealth=user-drgDamage
  var drgHealth=dragon-userDamage
}
  document.body.querySelector(".wrapper").innerHTML="Dragon Health: "+drgHealth+"User Health: "+userHealth;