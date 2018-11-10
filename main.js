
var products = [
    { "title":"Product title" , "price": 0 },
    { "title":"Product title" , "price": 0 },
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 },
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 }, 
    { "title":"Product title" , "price": 0 } 
    ];

for(var i=0;i<products.length;i++){
    document.getElementById("title"+(i+1)).innerHTML=products[i].title;
    document.getElementById("price"+(i+1)).innerHTML=products[i].price;
    document.getElementById('attr'+(i+1)).setAttribute('title', products[i].title);
}    

// var divs = document.getElementsById("title1"), i=divs.length;

// console.log(i);

var modal = document.getElementById('myModal');

// // Get the button that opens the modal
var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     console.log("Hello world")
//     modal.style.display = "block";
// }
$(document).on('click','#myBtn',function() {
    console.log("Updated");
}); 