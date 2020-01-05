var version = "12.1.1";
var date = "31.12.2019";

var changes = 
[
"Brand new world generation;",
"New inventory system;",
"Colored lighting support;",
"New entities: Bunny, Firefly;",
"Revamped wire mechanic;",
"Lots of building blocks and materials",
"Have fun!"
];

document.getElementById("uname").innerHTML = "TerrariaCraft v" + version;
document.getElementById("udate").innerHTML = date;
var nb = document.getElementById("news");
for(var i in changes) nb.innerHTML += "<h2><li>" + changes[i] + "</li></h2>";
nb.innerHTML += "<h4>Want newer and better build? Consider joining <a target='_blank' href='https://patreon.com/zeitheron'>patreon at $5/month</a> to unlock & play newest builds!</h4>";