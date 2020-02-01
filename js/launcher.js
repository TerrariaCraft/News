var version = "12.1.5";
var date = "30.01.2020";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
	xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var fileDate = "";
var fileName = "";
var greatestFile = 0;
var cfFiles = JSON.parse(httpGet("https://cors-anywhere.herokuapp.com/https://addons-ecs.forgesvc.net/api/v2/addon/248147/files/"));
for(var i = 0; i < cfFiles.length; ++i)
{
	var cff = cfFiles[i];
	if(cff.id > greatestFile)
	{
		greatestFile = cff.id;
		fileDate = cff.fileDate;
		fileName = cff.fileName.split("-");
		for(var j in fileName) if(fileName[j].indexOf(".jar") > 0)
		{
			fileName = fileName[j];
			fileName = fileName.substr(0, fileName.indexOf(".jar"));
			break;
		}
	}
}
var changelog = httpGet("https://cors-anywhere.herokuapp.com/https://addons-ecs.forgesvc.net/api/v2/addon/248147/file/" + greatestFile + "/changelog");
changelog = changelog.substr(changelog.indexOf("<h1>Changes:</h1>"));
version = fileName;
date = new Date(fileDate).toDateString();

/*
var changes = 
[
"Implemented chains and ropes",
"Re-invented world generator (kind of)",
"Optimize wire rendering",
"Fix torch lighting",
"Fix glowing slime rendering issue"
];
*/

document.getElementById("uname").innerHTML = "TerrariaCraft v" + version;
document.getElementById("udate").innerHTML = date;
var nb = document.getElementById("news");
nb.innerHTML += "<h4><font color=\"#FFAAAA\">Since Launcher v20.1.7.6 you can enable crash sharing -- crashes will automagically get sent to DragonForge dev team.</font></h4>";

changelog = changelog.split("\n");
for(var i in changelog) nb.innerHTML += "<h2>" + changelog[i] + "</h2>";

//for(var i in changes) nb.innerHTML += "<h2><li>" + changes[i] + "</li></h2>";
nb.innerHTML += "<h4>Want newer and better build? Consider joining <a target='_blank' href='https://patreon.com/zeitheron'>patreon at $5/month</a> to unlock & play newest builds!</h4>";
