//Récupération de l'id via les paramètres de l'url

  const idProduct = new URL(window.location.href).searchParams.get("id");
  //console.log(idProduct);//id article ok

  getArticle();

  //Récupération de l'article grace a l'id + affichage des données de ce dernier
  function getArticle() {
       fetch("http://localhost:3000/api/products/" + idProduct)
      .then((response) => response.json())    
      .then(product => {


  //console.log(product); ok produit
  //pour mémoire à garder
  //let stor = JSON.parse(localStorage.getItem("panier"));//récupère la valeur par clé.
  //let information = stor[0]["colorlocal"]["1"];//red
  //console.log(information);

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

  let valeur = qtEnCour.value;//parseInt(addition);
  //console.log(valeur);//1
  //console.log(typeof valeur);//string

  let change = parseInt(valeur);
  //console.log(typeof change);//number
  //console.log(change);//1

  let qtcom = change;//
  //console.log(qtcom);//1
  //console.log(typeof qtcom);//


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

let produitLocalStorage = JSON.parse(localStorage.getItem("panier"));//récupère la valeur par clé.
let maCommande = {id: idProduct, colors: color, qt: qtcom};
let tableauCommandes = [];

/*onsole.log(maCommande["idProduct"]);
console.log(maCommande["colors"]);
console.log(maCommande["qt"]);*/
//var tableauCommandes = [];

if (produitLocalStorage === undefined || produitLocalStorage === null) {

tableauCommandes.push(maCommande);
localStorage.setItem("panier", JSON.stringify(tableauCommandes));//
} else {
//on sort


console.log(produitLocalStorage);//ok
let i = 0;//- cas 1 il n'y a pas cette id dans le stock
  while (i < produitLocalStorage.length){
  if (produitLocalStorage[i]["id"] === maCommande["id"] && produitLocalStorage[i]["colors"] === maCommande["colors"]) {
console.log("vrai");


produitLocalStorage[i]["qt"] = produitLocalStorage[i]["qt"] + maCommande["qt"];

//console.log(produitLocalStorage);//7
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));


} else {console.log("rien");}
  i++;
  }



console.log("on est la");
let a = 0;//- cas 1 il n'y a pas cette id dans le stock
  while (a < produitLocalStorage.length){
  if (produitLocalStorage[a]["id"] === maCommande["id"] && produitLocalStorage[a]["colors"] !== maCommande["colors"])  {
//console.log("meme id pas meme color");

produitLocalStorage.push(maCommande);
//produitLocalStorage[i]["qt"] = produitLocalStorage[i]["qt"] + maCommande["qt"];

console.log(produitLocalStorage);//7
localStorage.setItem("panier", JSON.stringify(produitLocalStorage));


} else {console.log("et alors");}
  a++;
  }

  
  
  
  console.log("on est la la la");
  let b = 0;//- cas 1 il n'y a pas cette id dans le stock
    while (b < produitLocalStorage.length){
    if (produitLocalStorage[b]["id"] !== maCommande["id"]) {
  console.log("meme id pas meme color");
  
  produitLocalStorage.push(maCommande);
  //produitLocalStorage[i]["qt"] = produitLocalStorage[i]["qt"] + maCommande["qt"];
  
  console.log(produitLocalStorage);//7
  localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
  
  
  } else {console.log("et alors");}
    b++;
    }












/*
  console.log("on est la la la");
  let b = 0;//- cas 1 il n'y a pas cette id dans le stock
    while (b < produitLocalStorage.length){
    if (produitLocalStorage[b]["id"] === maCommande["id"] && produitLocalStorage[b]["colors"] !== maCommande["colors"]) {
  console.log("meme id et pas meme color");
  
  produitLocalStorage.push(maCommande);
  //produitLocalStorage[i]["qt"] = produitLocalStorage[i]["qt"] + maCommande["qt"];
  
  console.log(produitLocalStorage);//7
  localStorage.setItem("panier", JSON.stringify(produitLocalStorage));
  
  
  } else {console.log("et alors");}
    b++;
    }*/


}//if else
//console.log(maCommande);//vide ok

/*

let i = 0;//- cas 1 il n'y a pas cette id dans le stock
  while (i < tableauDesCommandes.length){
  if (tableauDesCommandes[i]["id"] === maCommande["id"] && tableauDesCommandes[i]["colors"] === maCommande["colors"]) {
console.log("vrai");
/*
console.log(tableauDesCommandes);
console.log(maCommande);
tableauDesCommandes[i]["qt"] = tableauDesCommandes[i]["qt"] + maCommande["qt"];
console.log(tableauDesCommandes);
localStorage.setItem("panier", JSON.stringify(tableauDesCommandes));


} else {console.log("faux");}
  i++;
  }
console.log("sorti condition deux");//ok
console.log(maCommande["id"]);//ok
console.log(tableauDesCommandes[0]["id"]);// 22





/*
  
    if (produitLocalStorage === undefined || produitLocalStorage === null) {//pas vide
            console.log("vide");//vide ok
            //creer panier
            tableauDesCommandes.push(maCommande);
            localStorage.setItem("panier", JSON.stringify(tableauDesCommandes));//
          } else {
            console.log("pas vide");//vide ok
          
          

            
          let i = 0;//- cas 2 meme id pas meme color add commande + stock
          while (i < tableauDesCommandes.length)
          {
          if (tableauDesCommandes[i]["id"] !== maCommande["id"]) {
          console.log(tableauDesCommandes[i]["id"]);
          tableauDesCommandes.push(maCommande);
          break;
          } else {
          
          console.log("id identique");
          console.log("id identique 2 cs meme color ou ps");
          var i = 0;
          while (i < tableauDesCommandes.length)
          {
          if (tableauDesCommandes[i]["id"] === maCommande["id"] && tableauDesCommandes[i]["colors"] === maCommande["colors"]) {
          let total = tableauDesCommandes[i]["qt"] + maCommande["qt"];
          tableauDesCommandes[i]["qt"] = total;
          localStorage.setItem("panier", JSON.stringify(tableauDesCommandes));//
          break;


*/
        


});//clic
}); //  fetch       
}  //fetch