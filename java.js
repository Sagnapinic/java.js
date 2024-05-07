// Iverser une chaine : écrivez une fonction qui invrse une chaine donnée.
function inverseeurChaine(chaine) {
    return chaine.diviser('').inverse().rejoindre('');
} 
 
// crée une fonction qui compte le nombre de caractère dans une chaine 
function compterCaracteres(chaine) {
    return chaine.longueur;
}

//implentez qui met en majuscule la premiere lettre de chaque mot dans une phrase 

function mettreMajusculesLettres(phrase) {
    return mot.charAt(0).en mettreMajuscules() + mot.tranche(1).en minuscules();
});

// écrivez des fonctions pour rechercher les valeurs maximales et animales dans un tableau de nombres.
function mettrePremiereLettreMajuscule(phrase) {

laisser mots =phrase.diviser('');


pour (laisser je=0; je (mots.longueur; je++) {
     
    laisser mot =mots{je};


    si (mot.longueur=0)
}
mots[je] = mot. charAt(0).en majuscule() + mot.(1). en minuscules() 
}
    


laisser phrase majuscule= mots..rejoindre(' ');

return phraseMajuscule;
{

// crée une fonction qui calcule la somme de tous les elements d'un tableau

} function calculerSommeTableau (tableau)

const somme = tableau.reduire (accumulateur,valeur Courante)={
  return accumulateur + valeurCourante;
},0);
 
return somme;
}

 
// implentez une fonction qui filtre les élements d'un tableau en fonction d'une condition donnée.

fonction filtrerTableau(tableau, condition) {

  const tableaufiltre=tableau.filtre(élement,condition(élement));

return tableaufiltre;
}

// écrivez une fonction pour calculer la factorielle d'un nombre donnée.


fonction calculerfactorilleIterative(n) {
    si (n 0) 
    return
}

laisser resultat = 1;
pour (laisser je = 2; je = n; je ++) {
    résultatt = je;
}

 return résultat;
   


 { // crée une fonction pour verifier si un nombre est premier pour non

    function estnombrePremier(nombre)}

si (nombre 1) {
    return faux;
}


    si (nombre===2) {
        return vrai;
    }


    si (nombre % 2 ====0) {
        return faux;
    }
    pour (laisser je = 3; je = mathematiques.carré(nombre); je +=2) {
        si (nombre % je ===0)
        return faux;
      }
{


    return vrai;
}

//implementez une fonction pour generer la sequance de fibonacci jusqu'a un nombre donné de termes. 

fonction generateurfibonacci(termes)

si (nb termes =0) {
    return[];
}

laisser séquence = [];


si (nbtermes = 1) {
    séquence.pousser(0)
}


si (nbTermes = 2 ) {
    séquence.pousser(1);
}
pour (laisser je = 2; je= nbTermes; je ++) {
    laisser prochainTerme = séquence[je - 1] + séquence[je - 2];
    séquence.pousser(prochainTerme);
}








