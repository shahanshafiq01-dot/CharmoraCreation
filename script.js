/* =========================
   CHARMORA CREATION JS
========================= */


let selectedProduct = "";



// OPEN POPUP

function openPopup(productName){

    selectedProduct = productName;


    document.getElementById("product-name").innerHTML =
    "Selected Product: " + productName;


    document.getElementById("popup").style.display = "flex";

}





// CLOSE POPUP

function closePopup(){

    document.getElementById("popup").style.display = "none";

}







// WHATSAPP CONTACT


function contactWhatsApp(){


    let phone = "923125269288";


    let message = `Hello Charmora Creation ✨

I am interested in:

Product:
${selectedProduct}


My Details:

Name:

Address:

Quantity:


I will send the product screenshot.

Thank you ❤️`;



    let url =

    "https://wa.me/" +

    phone +

    "?text=" +

    encodeURIComponent(message);



    window.open(url, "_blank");


}








// INSTAGRAM CONTACT


function contactInstagram(){


    window.open(

    "https://www.instagram.com/charmora.creations/",

    "_blank"

    );


}








// CLOSE POPUP WHEN CLICKING OUTSIDE


window.onclick = function(event){


    let popup = document.getElementById("popup");


    if(event.target === popup){

        popup.style.display = "none";

    }


}