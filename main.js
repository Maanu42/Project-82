var mouseEvent="empty";
canvas= document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
color="black";
width=10;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_x,current_y,radius,0,360);
        ctx.stroke;
    }
}