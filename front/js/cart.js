//867 lignes -------  255
//=============================== modele html ====================================================//
fetch('http://localhost:3000/api/products')//je récupére les données
  .then(data => data.json())//je les appel data et les converties en jason
  .then(data => {//j'appel mon objet card et lui aplique la fonction qui suit

    const produitLocalStorage = JSON.parse(localStorage.getItem("panier"));

    let totalPx = [];
    let totalQant = [];
    //console.log(totalPx);
    //console.log(totalQant);

    for (const [key, value] of Object.entries(produitLocalStorage)) {

      fetch("http://localhost:3000/api/products/" + key)
        .then((response) => response.json())
        .then(product => {
          //console.log(product.imageUrl);//adresse image

          for (const [cle, valeur] of Object.entries(value)) {
            //console.log(`${cle}: ${valeur}`);
            //colors qt price
            //console.log(`${cle}`);//color blue ok
            //console.log(`${valeur}`);//quantité ok

            let cart__item = document.getElementById("cart__items");

            let productArticle = document.createElement("article");//1 declinaison
            productArticle.classList.add("cart__item");
            cart__item.appendChild(productArticle);

            //productArticle.setAttribute('id', data[0]["_id"]);
            //productArticle.setAttribute('data', 'color');
            cart__item.appendChild(productArticle);

            let div_image = document.createElement("div");//2
            div_image.classList.add("cart__item__img");
            productArticle.appendChild(div_image);

            let image = document.createElement("img");
            image.src = product.imageUrl;
            image.alt = product.altTxt;
            div_image.appendChild(image);

            let div_content = document.createElement("div");//3
            div_content.classList.add("cart__item__content");
            productArticle.appendChild(div_content);

            let div_description = document.createElement("div");//4
            div_description.classList.add("cart__item__content__description");
            div_content.appendChild(div_description);
            //<div class="cart__item__content__description">

            let descriptTitre = document.createElement("h2");//descriptTitre     let descript_h
            descriptTitre.innerHTML = product.name;
            div_description.appendChild(descriptTitre);

            //2
            let prix = product.price;
            let descriptCouleur = document.createElement("p");//let descriptCouleur             let descript_p
            descriptCouleur.innerHTML = `${cle}`;       //"Vert";
            div_description.appendChild(descriptCouleur);//renommage paragraphe container 

            let descriptTotalPrix = document.createElement("p");//let descriptTotalPrix       let descript_2p
            descriptTotalPrix.innerHTML = `${valeur}` * prix;//*`${valeur}`= qt
            div_description.appendChild(descriptTotalPrix);
            
            let div_settings = document.createElement("div");//
            div_settings.classList.add("cart__item__content__settings");
            div_content.appendChild(div_settings);

            let cart_quantiti = document.createElement("div");
            cart_quantiti.classList.add("cart__item__content__settings__quantity");
            div_settings.appendChild(cart_quantiti);

            let quanti_input = document.createElement("input");
            quanti_input.type = "number";//
            quanti_input.classList.add("itemQuantity");// class="itemQuantity" name="itemQuantity"
            quanti_input.name = "itemQuantity";// name="itemQuantity"
            quanti_input.min = 1;//min max 1 100
            quanti_input.max = 100;//min max 1 100
            quanti_input.value = `${valeur}`;
            /*====================================
            ========================================*/
            quanti_input.addEventListener("change",function(event){
            console.log(this.value);//ok 5
            console.log("change",this.value);//ok
            console.log("change",event,this.value);//faire la fonction ligne 86
            //console.log("");
            // 1 new value
            //descriptTotalPrix.innerHTML = `${valeur}` * prix;
            //let prix = product.price;
            //
            console.log(this.value);//ok 5
            console.log(prix);//ok 1849
            let changementValeurInput =this.value;
            let changementArticle = prix * changementValeurInput;//new
            console.log(changementArticle);//9245
            console.log(descriptTotalPrix.innerHTML);//7396
            descriptTotalPrix.innerHTML =changementArticle;//ok 9245



            //change 4 et 7396 
            //div_settings et cart_quantiti
            /*let totalQt = document.getElementById("totalQuantity");
            totalQt.innerHTML = SommeQuantite ;
            let totalPrix = document.getElementById("totalPrice");
            totalPrix.innerHTML = sommeToutLesArticle;*/
            
            
            let toto = "allo";
            let titi = "oui";
            
            console.log(SommeQuantite);4
            console.log(sommeToutLesArticle);//7396

            //SommeQuantite = this.value;//5
            //sommeToutLesArticle = changementArticle;
            totalQt.innerHTML = this.value;//5
            totalPrix.innerHTML = descriptTotalPrix.innerHTML;

              //modifier local storage
              console.log(produitLocalStorage);



            });
            /*https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/this*/



            /*====================================================
            =====================================================*/
            cart_quantiti.appendChild(quanti_input);
            let cart_supp = document.createElement("div");
            cart_supp.classList.add("cart__item__content__settings__delete");
            div_settings.appendChild(cart_supp);
            //bouton p class deleteItem
            let cart_delet = document.createElement("p");
            cart_delet.classList.add("deleteItem");
            cart_delet.dataset.id = product._id;
            cart_delet.dataset.color = `${cle}`;
            //console.log(product);
            cart_delet.innerHTML = "Supprimer";
            cart_delet.addEventListener("click", function(e){supprimerArticlePanier(e)});
            cart_supp.appendChild(cart_delet);
            //renomer fonction
          function supprimerArticlePanier(e) {
          let panier = JSON.parse(localStorage.getItem("panier"));
          /*{"id": "107fb5b75607497b96722bda5b504926","color": "Blue"*/
            console.log(panier);
            delete panier[e.target.dataset.id][e.target.dataset.color];
            console.log(panier);
            localStorage.setItem("panier", JSON.stringify(panier));
            //closest
            let article = e.target.closest("article");
            article.remove();
            }
          //refactoriser
            //renomer les variable
            //faire la fonction ligne 86
            //renommage paragraphe container
            //RENOMER LES VARIABLES 
            let prixTotalArticle = parseInt(descriptTotalPrix.innerHTML);//nbpx;//ok 10046€    prixTotalArticle
            //console.log("prixTotalArticle " + prixTotalArticle);
            totalPx.push(prixTotalArticle);
            let sommeToutLesArticle = 0;//sumpx    sommeToutLesArticle
            for (let i = 0; i < totalPx.length; i++) {
            sommeToutLesArticle += totalPx[i];
            }
            
            let sommeNombreTotalArticle = parseInt(quanti_input.value);//valeurInput nbqt    sommeNombreTotalArticle
            //console.log(sommeNombreTotalArticle);
            totalQant.push(sommeNombreTotalArticle);
            let SommeQuantite = 0;//ok 4
            for (let i = 0; i < totalQant.length; i++) {
            SommeQuantite += totalQant[i];
            }
            //console.log(SommePrix);//ok 10046€
            //console.log(SommeQuantite );//ok 4
            let totalQt = document.getElementById("totalQuantity");
            totalQt.innerHTML = SommeQuantite ;
            let totalPrix = document.getElementById("totalPrice");
            totalPrix.innerHTML = sommeToutLesArticle;
            

          }//2 for
        });//fetch
    }//1 for
  });//fetch

//regex



//^reparere envoi
// requete  POST/order
/*
Requête JSON contenant un
objet de contact et un
tableau de produitsRetourne l'objet contact, le tableau
produits et orderId (string)
*/



//============================================================
//envoi api
/*preparer un objet objet + un tableau post
fetch('http://localhost:3000/api/order',{on met la code methode + body})  //je récupére les données get
  .then(data => data.json())//je les appel data et les converties en jason
  .then(data => {//j'appel mon objet card et lui aplique la fonction qui suit
console.log(data);

//post
  });//fetch
  
  let order = {
  contact: {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    email: string
     },products:[]
    }*/
    
//====================================================================================
    
    
    
    
    
    
    
    
    
    
    
    
    
  /* products: [string] <-- array of product _id
  
  
  //probleme modif input
  //faire envoi
  //controler ligne 121 supprimer
//la suite formation




/*La page Confirmation

Une page “confirmation” :
Un message de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant l'identifiant de commande envoyé par l’API.

Sur cette page, l'utilisateur doit voir s’afficher son numéro de commande. Il faudra veiller à
ce que ce numéro ne soit stocké nulle part.


Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName,
lastName, address, city et email. Le tableau des produits envoyé au back-end doit être un
array de strings product-ID. Les types de ces champs et leur présence doivent être validés
avant l’envoi des données au serveur.

requete
Expects request to contain:
  contact: {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    email: string
  }
  products: [string] <-- array of product _id

*/