var enlaces = ["http://www.reddit.com", "http://www.youtube.com", "http://www.w3schools.com"];

var nombres = ["Reddit", "YouTube", "W3Schools"];

for(var i = 0; i <= enlaces.length - 1; i++){
    document.write("<a href=" + enlaces[i] + ">" + nombres[i] + "</a><br>");
}

