// Création de variable stockant la balise form de notre fichier index.html

const form = document.querySelector("#exam-form")

// Événement qui va permettre de récupérer les informations lors de l'envoie du formulaire

form.addEventListener('submit', function(event){
    event.preventDefault();
    const formulaireCompte = document.querySelector("#compte")
    const formulaireSomme = document.querySelector("#somme")

    // Conditions qui vérifient que les champs du formulaire sont correctes

    if(formulaireCompte.value.length != 16){
        alert("Veuillez rentrer 16 chiffres");
        formulaireCompte.style.backgroundColor = "white";
    }

    // Change le couleur du fond du compte lorsqu'il y a bien 16 chiffres dedans
    else{
        formulaireCompte.style.backgroundColor = "#6eff33";
    }
    if(formulaireSomme.value < 0){
        alert("Veuillez rentrer une somme supérieur à 0");
    }
});
