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

// achat object
let tarray = {
  idlocal: idProduct, 
  //imagelocal:product.imageUrl, 
  //namelocal: product.name, 
  //descriptionlocal: product.description, 
  colorlocal: color, 
  qtlocal: qtcom
};

// init localStorage
let produitLocalStorage = JSON.parse(localStorage.getItem("panier"));
//console.log(produitLocalStorage);//null





/* if (produitLocalStorage != null ) {
produitLocalStorage.push(tarray);
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
} else {
produitLocalStorage = [];
produitLocalStorage.push(tarray);
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
} */


function controleObjetLocal() {
//var tarray = ["a", "b", "c"];
for(x in tarray)
{
  console.log(tarray[x]);
}
}

// new if
if (produitLocalStorage != null) {
console.log('si local storage est différent de null');
//controle si present

//fonction controle objet local
controleObjetLocal();


//produitLocalStorage.push(tarray);
//localStorage.setItem("panier", JSON.stringify(produitLocalStorage));

} else if (produitLocalStorage == null) {
//le tableau est creer alors on,contole panier
// si commande est dja la ,arret
console.log('si local storage est  null');
produitLocalStorage = [];
produitLocalStorage.push(tarray);
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));

} else {
console.log('dernier else')
//ajout panieer
}















// envoie vers page index si user veux faire autre achat
//function tournerPage() {
        location.href = "index.html";
    //}
//tournerPage();

});//clic


}); //  fetch       
}  //fetch