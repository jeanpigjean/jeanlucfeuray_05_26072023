//=============================== modele html ====================================================//

// <section id="cart__items"> on injecte dedans

            // article
            let productLink = document.createElement("article");
            document.querySelector("#cart__items").appendChild(productLink);
            productLink.classList.add("cart__item");
            //productLink.innerHTML = "et alors";

            //div image
            let productDivImg = document.createElement("div");
            document.querySelector(".cart__item").appendChild(productDivImg);
            productDivImg.classList.add("cart__item__img");
            //productImg.innerHTML = "et alors oiufhgoei";

            //img
            let productImg = document.createElement("img");
            document.querySelector(".cart__item__img").appendChild(productImg);
            productImg.src = '#';//card[i].imageUrl;
            productImg.alt = '#';//card[i].altTxt;

            //div class="cart__item__content">
            let productDivImg = document.createElement("div");
            document.querySelector(".cart__item").appendChild(productDivImg);
            productDivImg.classList.add("cart__item__img");
            //productImg.innerHTML = "et alors oiufhgoei";



            //productImg.innerHTML = "et alors oiufhgoei";



            //let productImg = document.createElement("div");
            //document.querySelector("productLink").appendChild(productImg);


/*
<section id=""> on injecte dedans
  <article>
  
    <div>
    <img src="" alt="">
    </div>
                
    <div>
      <div>
        <h2>Nom du produit</h2>
        <p>42,00 €</p>
      </div>

      <div>
        <div>
            <p>Qté : </p>
            <input type="number">
        </div>
        <div>
            <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>
</div>*/


//===================//

/* <!--  
<section id=""> on injecte dedans
  <article class="cart__item" data-id="{product-ID}">
  
    <div class="cart__item__img">
    <img src="../images/product01.jpg" alt="Photographie d'un canapé">
    </div>
                
    <div class="cart__item__content">
      <div class="cart__item__content__titlePrice">
        <h2>Nom du produit</h2>
        <p>42,00 €</p>
      </div>

      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>
</div>*/
//============================//
























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
//====================== ordre de travail==========================================================//
// 1)
// 2)
// 3)
// 4)
// 5)
// 6)
//=================================================================================================//