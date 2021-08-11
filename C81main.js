 canvas = document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200)
ctx.stroke();

color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();


color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(240,230,40,0,2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.arc(340,230,40,0,2*Math.PI);
ctx.stroke();