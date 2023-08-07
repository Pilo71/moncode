let myForm = document.getElementById("myform");

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let myError = document.getElementById("error-message");
let myComment = document.getElementById("comment-list");

// 1. Vérifier que tous les champs ne sont pas vides
// si l’un est vide : afficher le message d’erreur déjà présent dans le HTML (caché par défaut).

function checkIfEmpty() {
  
 if (firstName.value.trim() == "" || lastName.value.trim() == "" || message.value.trim() == "") {
    myError.style.display = "block";
  }
  else {
    myError.style.display = "none";
  }

}

// 2.  Ajouter le contenu de ce formulaire dans un nouveau commentaire 
// au sein de la liste déjà présente(en reprenant les balises HTML d’un des commentaires).

function addNewComment() {
  // Récupérer les valeurs de chaque champ
 console.log(firstName.value);
 console.log(lastName.value);
 console.log(message.value);

 // Je vérifie si j'ai bien ma liste de commentaires
 console.log(myComment);
 // si tous les valeurs de chaque champs est supérieur à ""
 if (firstName.value.trim() > "" && lastName.value.trim() >  "" && message.value.trim() > ""){
 // Créer l'élément 
 let premiereDiv = document.createElement("div");
 let deuxiemeDiv = document.createElement("div");
 let myTitre = document.createElement("h3");
 let troisiemeDiv = document.createElement("div");
 //let myPara =document.createElement("p");
 
 // Ajoute les classes
 premiereDiv.classList.add("flex","space-x-4","text-sm","text-gray-500", "border-gray-200");
 console.log(premiereDiv);
 deuxiemeDiv.classList.add("flex-1", "py-10", "border-t", "border-gray-200");
 console.log(deuxiemeDiv);
  myTitre.classList.add("font-medium","text-gray-900");
 console.log(myTitre);
 troisiemeDiv.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500");
 console.log(troisiemeDiv);

 //  contenu
  premiereDiv.textContent = "";
  deuxiemeDiv.textContent = "" ;
  myTitre.textContent = firstName.value +" "+lastName.value+ "" ;
  troisiemeDiv.textContent = message.value;
   
 //  lier avec un autre élément
 myComment.append(premiereDiv);
  premiereDiv.append(deuxiemeDiv);
 deuxiemeDiv.append(myTitre);
  myTitre.append(troisiemeDiv);}

 

}

// 3. Supprimer le contenu des champs du formulaire une fois le nouveau commentaire affiché dans la liste.
// si toutes les valeurs de chaque champs sont supérieur à "".
function clearForm() {
  if (firstName.value.trim() > "" && lastName.value.trim() >  "" && message.value.trim() > ""){
  firstName.value = "";
  lastName.value = "";
  message.value = "";}
}


// Evenement
myForm.addEventListener("submit", e => {
  e.preventDefault();
  
  //  fonctionnalité "voir si c'est vide"
  checkIfEmpty();

  //  Ajouter le contenu dans nouveau commentaire
  addNewComment();

  //  Supprimer le contenu des champs une fois soumis
  clearForm();
    
})
      

