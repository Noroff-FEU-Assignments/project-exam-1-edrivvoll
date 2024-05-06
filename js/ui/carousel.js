let count =0;
let inc = 0;
let margin = 20;
let slider = document.getElementsByClassName("slider-width")[0];
let itemDisplay = 0;
console.log(document.body.scrollWidth)
if(document.body.scrollWidth > 1600){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-4");
}
if(document.body.scrollWidth > 1200 && document.body.scrollWidth < 1600){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-3");
}
if(document.body.scrollWidth > 700 && document.body.scrollWidth < 1200){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-2");
}
if(document.body.scrollWidth > 280 && document.body.scrollWidth < 700){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-1");
}

let item = document.getElementsByClassName("item");
let itemleft = item.length % itemDisplay;
let itemSlide = Math.floor(item.length / itemDisplay) - 1;


for(let i=0; i<item.length; i++){
    item[i].style.width = (document.body.scrollWidth / itemDisplay) - margin + "px";
    
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

}
