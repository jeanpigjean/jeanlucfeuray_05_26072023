//Récupération de l'id via les paramètres de l'url
const idProduct = new URL(window.location.href).searchParams.get("id");

getArticle();

//Récupération de l'article grace a l'id + affichage des données de ce dernier
function getArticle() {
     fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())    
    .then(product => {

//Récupération des sélecteurs pour les futurs modifications
let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let descriptionProduct = document.getElementById("description");
let colorsProduct = document.getElementById("colors");
let imgProduct = document.querySelector(".item__img");
let img = document.createElement("img");
imgProduct.appendChild(img);

// injection de la card
img.setAttribute("src", product.imageUrl);
img.setAttribute("alt", product.altTxt);    
titleProduct.innerHTML = product.name;
priceProduct.innerHTML = product.price;
descriptionProduct.innerHTML = product.description;
document.title = product.name;

// boucle pour injection de la card color choix option value
for (let i = 0; i < product.colors.length; i++) {
let color = document.createElement("option");
color.setAttribute("value", product.colors[i]);
color.innerHTML = product.colors[i];
colorsProduct.appendChild(color);
}









// clic
let addToCartBtn = document.getElementById("addToCart");//séléctionner le bouton
addToCartBtn.addEventListener("click", function() {//au clic jouer la fonction addToCart

const colorChoice = document.querySelector("#colors");
let color = colorChoice.value;

let qtEnCour =document.querySelector("#quantity");
let qtcom = qtEnCour.value;

// controle selecteur
if (color == ''){
  // color
  alert('Vous devez choisir une couleur !');
  return;

} else if (qtcom == 0) {
  alert('Vous devez choisir un nombre d\'article !');
  return;
} 

else if (qtcom > 100) {
  alert('Vous ne pouvez pas commander plus de 100 articles !');
  return;
} 

else {
  
  alert('Votre commande est ajouter au panier.');
}

// achat object contruire 
let tarray = {
  idlocal: idProduct, 
  //imagelocal:product.imageUrl, 
  //namelocal: product.name, 
  //descriptionlocal: product.description, 
  colorlocal: color, 
  qtlocal: qtcom
};

/*if (localStorage.length < 1) {

  console.log("vide");
  
  } else {
  
  console.log("pas vide");
  
  }*/

// lecture    let cat = localStorage.getItem("monChat");
// écriture   let dog = localStorage.setItem("monChat", "Tom");


// init localStorage
//let produitLocalStorage = JSON.parse(localStorage.getItem("panier"));
//console.log(produitLocalStorage);//null

//console.log(produitLocalStorage);

let produitLocalStorage = JSON.parse(localStorage.getItem("panier"));


 if (produitLocalStorage != null ) {
//console.log("pas vide")
//produitLocalStorage.push(tarray);
//localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
//console.log("pas vide")

for (let i = 0; i < produitLocalStorage.length; i++) {


//variable commande et stock
let mon_panier_id = produitLocalStorage[i].idlocal;
let mon_panier_color = produitLocalStorage[i].cololocal;
let mon_panier_qt = produitLocalStorage[i].qtlocal;

let ma_commande_id = tarray.idlocal;
let ma_commande_color = tarray.colorlocal;
let ma_commande_qt = tarray.qtlocal;





if (mon_panier_id === ma_commande_id) {

if (mon_panier_color === ma_commande_color)) {
//article panier +1
let add = ma_commande_qt++;

//produitLocalStorage.push(tarray);//tableau ou clé valeur    [id produit push sous tableau des declinaison]
//localStorage.setItem("panier", JSON.stringify(produitLocalStorage));

} else {
//new article meme id new color 1
//produitLocalStorage = [];
produitLocalStorage.push(tarray);//tableau ou clé valeur    [id produit push sous tableau des declinaison]
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
}  



} else {
//new article
//produitLocalStorage = [];
produitLocalStorage.push(tarray);//tableau ou clé valeur    [id produit push sous tableau des declinaison]
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
}









}











} else {
produitLocalStorage = [];
produitLocalStorage.push(tarray);//tableau ou clé valeur    [id produit push sous tableau des declinaison]
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
//console.log("vide")
} 





});//clic


}); //  fetch       
}  //fetch