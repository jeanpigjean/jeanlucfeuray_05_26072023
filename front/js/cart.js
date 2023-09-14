//566 lignes depart = 357 = 330
//=============================== modele html ====================================================//
fetch('http://localhost:3000/api/products')//je récupére les données
  .then(data => data.json())//je les appel data et les converties en jason
  .then(data => {//j'appel mon objet card et lui aplique la fonction qui suit
    //les données du fetch
    /*
    console.log(data);//tout
    console.log(data.length);//8      
    console.log(data[0]);        
    console.log(data[0]["_id"]);//ok
    console.log(data[0]["colors"][0]);//
    console.log(data[0]["colors"][1]);//
    console.log(data[0]["colors"][2]);//
  
    console.log(data[0]["altTxt"]);//
    console.log(data[0]["description"]);//
    console.log(data[0]["name"]);//
    console.log(data[0]["price"]);//
    console.log(data[0]["imageUrl"]);*/

    //les donnees du local storage
    let produitLocalStorage = JSON.parse(localStorage.getItem("panier"));//récupère la valeur par clé.
    console.log(produitLocalStorage);//tout

    const cherche = Object.entries(produitLocalStorage);
    const reCherche = Object.entries(cherche[0][1]);

    let localId = cherche[0][0];
    let localColor = reCherche[0][0];
    let localQt = reCherche[0][1];

    console.log(cherche);//array
    console.log(cherche[0]);//array

    console.log(cherche[0][0]);//id de array 0
    console.log(reCherche[0][0]);//qt de array 0
    console.log(reCherche[0][1]);//1 qt de array 0

    console.log(localId);//id de array 0
    console.log(localColor);//qt de array 0
    console.log(localQt);//1 qt de array 0


    /* ok ca marche id
    for (let i = 0; i < cherche.length; i++) { 
    console.log(cherche[i][0]);
    }
  */



    //article + class cart__item + + data
    let monPanier = document.getElementById("cart__items");
    let productArticle = document.createElement("article");
    productArticle.classList.add("cart__item");
    //productArticle.setAttribute('id', data[0]["_id"]);
    //productArticle.setAttribute('data', 'color');
    monPanier.appendChild(productArticle);

    //
    let div_image = document.createElement("div");
    div_image.classList.add("cart__item__img");
    productArticle.appendChild(div_image);

    let image = document.createElement("img");
    image.src = "http://localhost:3000/images/kanap01.jpeg";//data[i].imageUrl;
    image.alt = "qsd";//data[0]["altTxt"];"Photographie d'un canapé";//data[i].altTxt;
    div_image.appendChild(image);

    //
    let div_content = document.createElement("div");
    div_content.classList.add("cart__item__content");
    productArticle.appendChild(div_content);


    //
    let div_description = document.createElement("div");
    div_description.classList.add("cart__item__content__description");
    div_content.appendChild(div_description);

    //
    let descript_h = document.createElement("h2");
    descript_h.innerHTML = "kanapé Sinopé";
    div_description.appendChild(descript_h);

    //
    let descript_p = document.createElement("p");
    descript_p.innerHTML = "Vert";
    div_description.appendChild(descript_p);
    let descript_2p = document.createElement("p");
    descript_2p.innerHTML = "42,00 €";
    div_description.appendChild(descript_2p);

    //
    let div_settings = document.createElement("div");
    div_settings.classList.add("cart__item__content__settings");
    div_content.appendChild(div_settings);

    //
    let cart_quantiti = document.createElement("div");
    cart_quantiti.classList.add("cart__item__content__settings__quantity");
    div_settings.appendChild(cart_quantiti);

    //
    let quanti_p = document.createElement("p");
    quanti_p.innerHTML = "Qté : "
    cart_quantiti.appendChild(quanti_p);

    //
    let quanti_input = document.createElement("input");
    cart_quantiti.appendChild(quanti_input);
    quanti_input.type = "number";//
    quanti_input.classList.add("itemQuantity");// class="itemQuantity" name="itemQuantity"
    quanti_input.name = "itemQuantity";// name="itemQuantity"
    quanti_input.min = 1;//min max 1 100
    quanti_input.max = 100;//min max 1 100
    quanti_input.value = "42";//value 42
    //quanti_input.Value = "42";

    //
    let cart_supp = document.createElement("div");
    cart_supp.classList.add("cart__item__content__settings__delete");
    div_settings.appendChild(cart_supp);

    //bouton p class deleteItem
    let cart_delet = document.createElement("p");
    cart_delet.classList.add("deleteItem");
    cart_delet.innerHTML = "Supprimer";
    cart_supp.appendChild(cart_delet);



    /*
    <div class="cart__item__content__settings__quantity">
    <p>Qté : </p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
    </div>
    
    <div class="cart__item__content__settings__delete">
    <p class="deleteItem">Supprimer</p>
    </div>
    
    */
    /*
    //console.log(produitLocalStorage.keys);//
      /*console.log(data[0]["_id"]);//ok id
    
    
      console.log(produitLocalStorage["107fb5b75607497b96722bda5b504926"]);//Blue 1
      console.log(produitLocalStorage["107fb5b75607497b96722bda5b504926"]["Blue"]);//qt1
      
      console.log(produitLocalStorage["107fb5b75607497b96722bda5b504926"].Blue);//1
    
    for (const prop in produitLocalStorage) {
    console.log(prop, produitLocalStorage[prop]);
    }
    
    const arrta = Object.entries(produitLocalStorage);
    console.log(arrta);
    
    console.log(arrta[0][0]);//0k id
    console.log(arrta[0][1]);//objet Blue 1
    
    console.log((arrta[0][1]).keys);//objet Blue 1
    
    
    console.log(arrta[0][1]["Blue"]);//qt 1*/


    /*
    const arrtata = Object.entries(arrta);
    console.log(arrtata);
    console.log(arrtata[0][1][0]);*/


  });
//=============================== modele html ====================================================//

/*     IMPORTANT
let tutu = data[2]["colors"]["1"]; POUR ATTRAPPER TABLEAU DANS TABLEAU
console.log(tutu);
*/

/*let monPanier = JSON.parse(localStorage.getItem("panier"));
let titi = monPanier[0][""]
console.log(monPanier);*/



//data fetch
//panier
//id: "107fb5b75607497b96722bda5b504926", name: "Kanap Sinopé", price: 1849, … }
//id name price
//[{"idlocal":"107fb5b75607497b96722bda5b504926","colorlocal":"Blue","qtlocal":"1"}]


/*acces tout dans localstorage IMPORTANT
console.log(data);
console.log(data.length);
console.log(data[1]);
let tata = data[0]["colors"][1];
console.log(tata);


//récuperer mon panier
let monPanier = JSON.parse(localStorage.getItem("panier"));



console.log(monPanier); // affichera le array

let combien_article = monPanier.length;//combien de kanap 2
console.log(combien_article + " " + "article dans le panier");//combien de kanap 2

console.log("id de mon panier" + " " + monPanier[0]["idlocal"]);


console.log("couleur" + " " + monPanier[0]["colorlocal"]);




let myColor = monPanier[0]["colorlocal"];
console.log("ma couleur" + " " + myColor);
console.log("quantité" + " " + monPanier[0]["qtlocal"]);

/*for (let i = 0; i < monPanier.length; i++) {
console.log(i);
console.log(monPanier[i]["idlocal"]);
}

//si plusieurs produits


if (combien_article > 1) {
  console.log("il y a des plusieur produits");
} else {
  console.log("il n'y a 1 produit");
  //afficher produit
}

console.log(data);
console.log(data[0]);
console.log(data[0]["_id"]);







let mon_id_article = monPanier[0]["idlocal"];
console.log(mon_id_article);

//creer les étapes


//tableau des achats id color qt boucle + coucle
//combien d'articles ...
let mon_id_article = monPanier[0]["idlocal"];
console.log(mon_id_article);

let number_articles = monPanier[0]["idlocal"];
console.log(number_articles);




//tri


//<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">



//fonction supprimer
//supprimer local storage storage.removeItem(nomCle); cle panier
//onclick vanilla




//const myButton = document.getElementsByClassName("deleteItem");
//ca marche




function viderPanier() {
  //myButton.innerText = "button clicked";
  localStorage.removeItem("panier");
}

cart_delet.onclick = viderPanier;
*/
/*
<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
*/
//==================================================================================================// 
/*
Une page “panier”. Celle-ci contient plusieurs parties :

○ Un résumé des produits dans le panier, le prix total et la possibilité de
modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.

○ Un formulaire permettant de passer une commande. Les données du
formulaire doivent être correctes et bien formatées avant d'être renvoyées au
back-end. Par exemple, pas de chiffre dans un champ prénom

Sur cette page, l’utilisateur va pouvoir modifier la quantité d’un produit de son panier ; à ce
moment, le total du panier devra bien se mettre à jour.

L’utilisateur aura aussi la possibilité de supprimer un produit de son panier, le produit devra
donc disparaître de la page.

Les inputs des utilisateurs doivent être analysés et validés pour vérifier le format et le type
de données avant l’envoi à l’API. Il ne serait par exemple pas recevable d’accepter un
prénom contenant des chiffres, ou une adresse e-mail ne contenant pas de symbole “@”. En
cas de problème de saisie, un message d’erreur devra être affiché en dessous du champ
correspondant.
Attention à ne pas stocker le prix des articles en local. Les données stockées en local ne
sont pas sécurisées et l’utilisateur pourrait alors modifier le prix lui-même


Fonctionnement du panier
Dans le panier, les produits doivent toujours apparaître de manière regroupée par modèle et
par couleur.
Si un produit est ajouté dans le panier à plusieurs reprises, avec la même couleur, celui-ci
ne doit apparaître qu’une seule fois, mais avec le nombre d’exemplaires ajusté.
Si un produit est ajouté dans le panier à plusieurs reprises, mais avec des couleur
différentes, il doit apparaître en deux lignes distinctes avec la couleur et la quantité
correspondantes indiquées à chaque fois
*/