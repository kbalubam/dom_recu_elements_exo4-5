let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll

// - Tu dois ciblé la div et plus précicément son id "liste-competences"
let idComp = Array.from(document.querySelectorAll("#liste-competences>h2"));
console.log(idComp);


// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet

// for(prop in competences){
//     console.log(prop);
// }

for (let property in competences) {
    console.log(competences[property]);
    for(let i = 0; i < idComp.length; i++){
        if(idComp[i].textContent==property){
            idComp[i].textContent=`${property} : ${competences[property]}`
            if(parseInt(competences[property]) < 50){
                idComp[i].setAttribute("style", "background : red;")
                console.log("mama");
            }else if (parseInt(competences[property]) > 50 && parseInt(competences[property]) < 100 ){
                idComp[i].setAttribute("style", "background : green; color : white")
                console.log("papa");
            }else if (parseInt(competences[property]) == 100){
                idComp[i].setAttribute("style", "background : gold; color : black" );
                console.log("mm");
            }
        }
    }

}
// demander pour ordre important!!!

// ### 3. Change le style des h2 selons certaines conditions :

// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge

// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche

// - Si //     //  égale à 50 alors il n'y a pas de background

// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir



