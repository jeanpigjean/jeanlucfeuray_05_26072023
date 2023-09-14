// requete pour recupérer les data
fetch('http://localhost:3000/api/products')//je récupére les données
    .then(data => data.json())//je les appel data et les converties en jason
    .then(data => {//j'appel mon objet card et lui aplique la fonction qui suit

        //console.log(data);


        // creation d'une boucle for (let card of card){let article = new article(json.article);}//création de la card
        for (let i = 0; i < data.length; i++) {
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);

            // creation attribut href (de la balise a)
            productLink.href = `product.html?id=${data[i]._id}`;

            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = data[i].imageUrl;
            productImg.alt = data[i].altTxt;

            // Insertion du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = data[i].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = data[i].description;
        }
    });