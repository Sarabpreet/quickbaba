var cursorX;
var cursorY;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log(cursorY);
    console.log(cursorX);
 }


document.addEventListener('click',function(){

var x=document.createElement('div');
x.className='second';


});