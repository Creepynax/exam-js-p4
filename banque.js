// Création de variable stockant la balise form de notre fichier index.html

const form = document.querySelector("#exam-form")

// Événement qui va permettre de récupérer les informations lors de l'envoie du formulaire

form.addEventListener('submit', function(event){
    event.preventDefault();
    const formulaireCompte = document.querySelector("#compte")
    const formulaireSomme = document.querySelector("#somme")

    // Condition qui lorsque tous les champs sont correctes, renvoie une alert précisant la somme déposée 
    if(formulaireCompte.value.length == 16 && formulaireSomme.value > 0){
        alert("La somme de " + formulaireSomme.value + " a bien été déposée")
    }
    // Conditions qui vérifient que les champs du formulaire sont correctes
    else{
        if(formulaireCompte.value.length != 16){
            // Affiche un message d'alerte pour avertir l'utilisateur qu'il a un problème sur son champ Compte
            alert("Erreur sur le champs Compte");
            formulaireCompte.style.backgroundColor = "white";
        }
        // Change le couleur du fond du compte lorsqu'il y a bien 16 chiffres dedans
        else{
            formulaireCompte.style.backgroundColor = "#6eff33";
        }
    
        if(formulaireSomme.value < 0){
            // Affiche un message d'alerte pour avertir l'utilisateur qu'il a un problème sur son champ Somme
            alert("Erreur sur le champs Somme");
        }
    }

    const HTTP = new XMLHttpRequest();
    const url = 'http://exjs.apigame.co/data.php'
    Http.open("POST", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
    }
});
