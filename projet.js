p = require("prompt-sync")()
let choix 
let choix2




let condidat = [
   {
	cin : "AB123456",
	nom : "Boushaba",
	prenom : "Soufiane",
	partiPolitique : "Indépendant",
	age: 40,
	electeurs: []
}];



// ajouter=============================================================================== 
// function d'ajouter un seul condidat
function ajouter_seulC (condidat) {
    let cin = p("CIN : ")
    let nom = p("Nom : ")
    let prenom = p("Prenom : ")
    let partiPolitique = p("PartiPolitique  : ")
    let age = Number (p (" age : "))

    let condidat1 = {
        cin:cin,
        nom: nom,
        prenom: prenom,
        partiPolitique: partiPolitique,
        age :age ,
        electeurs : electeurs=[]
    }
    condidat.push(condidat1)
}
// function d'ajouter plesieurs
function ajouter_plus (condidat) {
    let fois_ajouter = Number(p(" combien de condidat tu veut ajouter !"))
      for (let i = 1; i <= fois_ajouter ; i++) {
              console.log(" donner moi les information de la",i," condidat")
              ajouter_seulC(condidat)  
      }
}
// le muni dajout 
function ajouter(condidat) {
    
    do {
        console.log("Tu veux ajouter 1 seul condidat ou plesieurs condidat")
        console.log("1. un seul condidat")
        console.log("2. pelusieurs")
        console.log("0. retour a meni principal")
    choix2 =Number(p("entrer votre choix "))
    switch (choix2) {
        case 1:
            console.clear()
            ajouter_seulC (condidat)
            console.clear()
            break;
        case 2:
            console.clear()
            ajouter_plus (condidat)
            console.clear()
            break;
        default:
            break;
    }

    } while (choix2!=0);
}
// afficher=================================================================
function afficher(condidat) {
 console.log("+++++++++++ les condidat +++++++++++")
  for (let i = 0; i < condidat.length; i++) {
       console.log("* condidat",i,"*")
       console.log('CIN : ',condidat[i].cin);
       console.log('Nom : ',condidat[i].nom);
       console.log('Prenom : ',condidat[i].prenom);
       console.log('PartiPolitique  :',condidat[i].partiPolitique);
       console.log('Age :',condidat[i].age);
       console.log('Electeurs : ',condidat[i].electeurs);
       console.log('_____________________________________')
       
    
  }
}
// Voter pour un candidat ===================================================== 
 function voter(condidat) {
    console.log(" salut ")
    let nomv = p("doner moi votre nom ")
    let cin1 = p("donner moi votre cin ")
    trouver = true
    for (let i = 0; i <condidat.length; i++) {
         for (let j = 0; j <condidat[i].electeurs.length; j++) {
             if (cin1 ==condidat[i].electeurs[j]) {
                 trouver = true
             } 
         }  
    }
    if (trouver) {
     let cin2 = p(" donner moi le cin de condidat pour lequel vous allez voter ")
     for (let i = 0; i < condidat.length; i++) {
         if (cin2 == condidat[i].cin ) {
             condidat[i].electeurs.push(cin1)
         }  
     }
     }else{
        console.log(nomv,"Désolé, vous ne pouvez pas voter deux fois")
     }
 }
// la modification=========================================================

// Rechercher============================================================== 
function Rechercher(condidat) {
   let nom_recherchet = p("donner moi le nom de condidat qui tu veut recherche ")
    for (let i = 0; i < condidat.length; i++) {
         if (nom_recherchet == condidat[i].nom ) {
               console.log(condidat[i]);    
         }else{
            console.log("cet nom ne trouve pas !")
         }
        
    }
}
 
// =======================================================
do{
   console.log("==============MUNI===============")
   console.log("1- ajouter les condidat  ");
   console.log("2- afficher list des condidats ");
   console.log("3- voter pour un condidat");
   console.log("4-   ");
   console.log("5- " );
   console.log("6- " );
   console.log("7- recherche par nom " );
   console.log("0- quitter" );
   
  choix =Number(p("donner moi votre choix "))

 switch (choix) {
    case 1:
        console.clear()
        ajouter(condidat)
        
        break;
    case 2:
        console.clear()
        afficher(condidat)
        
        break;
    case 3:
        console.clear()
        voter(condidat)
        break;
    case 4:
       
        break;
    case 5:
       
        break;
    case 6:
       
        break;
    case 7:
       console.clear()
       Rechercher(condidat)
        break;
 
    default:
        console.clear()
        console.log("cet choix introvable")
        
        break;
 }
}while(choix!= 0 )
    console.clear()
    console.log(" thnaks ")

