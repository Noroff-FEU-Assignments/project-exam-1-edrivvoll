var count =0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
console.log(document.body.scrollWidth)
if(document.body.scrollWidth > 990){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
    margin = itemDisplay * 5;
}
if(document.body.scrollWidth > 700 && document.body.scrollWidth < 990){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
    margin = itemDisplay * 6.8;
}
if(document.body.scrollWidth > 280 && document.body.scrollWidth < 700){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
    margin = itemDisplay * 20;
}
console.log("cards displayed " + itemDisplay)

var item = document.getElementsByClassName("item");
var itemleft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) - 1;
console.log("item slide = " + itemSlide)
console.log(item[0])

for(let i=0; i<item.length; i++){
    item[i].style.width = (document.body.scrollWidth / itemDisplay) - margin + "px";
    console.log([i])
}


function next(){
    if(inc !== itemSlide + itemleft){
        if(inc === itemSlide){
            inc = inc + itemleft;
            count = count - (document.body.scrollWidth / itemDisplay) * itemleft;
        }
        else{
            inc++;
            count = count - document.body.scrollWidth;
        }
    }
    slider.style.left =  count + "px";
    console.log(count);
} 
function prev(){
    if(inc !== 0){
        if(inc === itemleft){
            inc = inc - itemleft;
            count = count + (document.body.scrollWidth / itemDisplay) * itemleft;
        }
        else{
            inc--;
            count = count + document.body.scrollWidth;
        }
    }
    slider.style.left =  count + "px";
    console.log(count);
}
