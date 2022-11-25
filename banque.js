// Création de variable stockant la balise form de notre fichier index.html

const form = document.querySelector("#exam-form")

// Événement qui va permettre de récupérer les informations lors de l'envoie du formulaire

form.addEventListener('submit', function(event){
    event.preventDefault();
    const formulaireCompte = document.querySelector("#compte")
    const formulaireSomme = document.querySelector("#somme")
});
