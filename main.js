var mouse_event="";
var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthOfLine=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
 color=document.getElementById("color").value;
 widthOfLine=document.getElementById("width_of_the_line").value;
 mouse_event="mousedown";   
}

canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
current_position_of_mouse_Y=e.clientY-canvas.offsetTop;
if (mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=widthOfLine;
console.log("last position of x and y coordinates=");
console.log("x="+last_position_of_x+",y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("current position of x and y coordinates=");
console.log("x="+current_position_of_mouse_X+",y="+current_position_of_mouse_Y);
ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
ctx.stroke();
}
last_position_of_x=current_position_of_mouse_X;
last_position_of_y=current_position_of_mouse_Y;
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
mouse_event="mouseUp";    
}
canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(e){
mouse_event="mouseLeave";    
}
function clear_area(){
 ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);   
}

function change_circle(){
 ctx.beginPath();
 ctx.strokeStyle = "blue";
 ctx.lineWidth = "5";
 ctx.arc(250, 210, 40, 0, 2 * Math.PI);
 ctx.stroke();
 console.log("change_circle"); 
}