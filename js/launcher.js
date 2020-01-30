var version = "12.1.5";
var date = "30.01.2020";

var changes = 
[
"Implemented chains and ropes",
"Re-invented world generator (kind of)",
"Optimize wire rendering",
"Fix torch lighting",
"Fix glowing slime rendering issue"
];

document.getElementById("uname").innerHTML = "TerrariaCraft v" + version;
document.getElementById("udate").innerHTML = date;
var nb = document.getElementById("news");
nb.innerHTML += "<h4><font color=\"#FFAAAA\">Since Launcher v20.1.7.6 you can enable crash sharing -- crashes will automagically get sent to DragonForge dev team.</font></h4>";
for(var i in changes) nb.innerHTML += "<h2><li>" + changes[i] + "</li></h2>";
nb.innerHTML += "<h4>Want newer and better build? Consider joining <a target='_blank' href='https://patreon.com/zeitheron'>patreon at $5/month</a> to unlock & play newest builds!</h4>";
