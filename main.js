
var products = [
    { "title":"Product 1" , "price": 0 },
    { "title":"Product 2" , "price": 0 },
    { "title":"Product 3" , "price": 0 }, 
    { "title":"Product 4" , "price": 0 }, 
    { "title":"Product 5" , "price": 0 }, 
    { "title":"Product 6" , "price": 0 },
    { "title":"Product 7" , "price": 0 }, 
    { "title":"Product 8" , "price": 0 }, 
    { "title":"Product 9" , "price": 0 }, 
    { "title":"Product 10", "price": 0 }, 
    { "title":"Product 11", "price": 0 }, 
    { "title":"Product 12", "price": 0 } 
    ];

    productsDetails(products);

function productsDetails(products){
    for(var i=0;i<products.length;i++){
        document.getElementById("title"+(i+1)).innerHTML=products[i].title;
        document.getElementById("price"+(i+1)).innerHTML=products[i].price;
        document.getElementById('attr'+(i+1)).setAttribute('title', products[i].title);
    }   
} 

var modal = document.getElementById('myModal');

$(document).on('click','#myBtn',function() {
    var title=document.getElementById("title").value
    var price=document.getElementById("price").value
    var id=+document.getElementById('hiddenVal').innerHTML;
 
    products[id-1].title=title;
    products[id-1].price=price;

    productsDetails(products);
    // modal.style.display = "none";
}); 

// var divs = document.getElementsById("title1"), i=divs.length;

// console.log(i);


// // // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     console.log("Hello world")
//     modal.style.display = "block";
// }
