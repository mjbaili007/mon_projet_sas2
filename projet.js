p = require("prompt-sync")();
let choix;
let choix2;
let choix3;
let choix4;
let choix5;

let condidat = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["AA111111", "AA222222"],
  },
  {
    cin: "CD789012",
    nom: "Alaoui",
    prenom: "Yassine",
    partiPolitique: "Parti A",
    age: 35,
    electeurs: ["BB111111", "BB222222", "BB333333", "BB444444", "BB555555"],
  },
  {
    cin: "EF345678",
    nom: "Amrani",
    prenom: "Sara",
    partiPolitique: "Parti B",
    age: 29,
    electeurs: ["CC111111"],
  },
  {
    cin: "GH901234",
    nom: "Benali",
    prenom: "Omar",
    partiPolitique: "Parti A",
    age: 45,
    electeurs: ["DD111111", "DD222222", "DD333333"],
  },
  {
    cin: "IJ567890",
    nom: "Fassi",
    prenom: "Nadia",
    partiPolitique: "Indépendant",
    age: 38,
    electeurs: [],
  },
  {
    cin: "KL234567",
    nom: "El Idrissi",
    prenom: "Hajar",
    partiPolitique: "Parti C",
    age: 31,
    electeurs: ["EE111111", "EE222222", "EE333333", "EE444444"],
  },
];
// ajouter===============================================================================
// function d'ajouter un seul condidat
function ajouter_seulC(condidat) {
  let trouver = false;
  let cin = p("CIN : ");
  let c = cin.toUpperCase();
  for (let i = 0; i < condidat.length; i++) {
    if (c == condidat[i].cin.toUpperCase()) {
      trouver = true;
    }
  }
  if (trouver == true) {
    console.log(" cet cin est deja utiliser ");
  } else {
    let nom = p("Nom : ");
    let prenom = p("Prenom : ");
    let partiPolitique = p("PartiPolitique  : ");
    let age = Number(p(" age : "));
    let objet = {
      cin: cin,
      nom: nom,
      prenom: prenom,
      partiPolitique: partiPolitique,
      age: age,
      electeurs: (electeurs = []), 
    };
    condidat.push(objet);
  }
}
// function d'ajouter plesieurs
function ajouter_plus(condidat) {
  let fois_ajouter = Number(p(" combien de condidat tu veut ajouter !"));
  for (let i = 1; i <= fois_ajouter; i++) {
    console.log(" donner moi les information de la", i, " condidat");
    ajouter_seulC(condidat);
  }
}
// le muni dajout
function ajouter(condidat) {
  do {
    console.log("~~~~~~~~~~~~~~~~~~~~MUNI D'AJOUT~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("~Tu veux ajouter 1 seul condidat ou plesieurs condidat~");
    console.log("~1. un seul condidat                                  ~");
    console.log("~2. pelusieurs                                        ~");
    console.log("~0. retour a meni principal                           ~");
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    choix2 = Number(p("entrer votre choix "));
    switch (choix2) {
      case 1:
        ajouter_seulC(condidat);
        break;
      case 2:
        ajouter_plus(condidat);
        break;
      default:
        break;
    }
  } while (choix2 != 0);
}
// affichage selon filtre
function afficher_filtre(condidat) {
  let parti_plitique = p(" donner moi la parti poltique qui tu veux afficher ");
  let parti = parti_plitique.toUpperCase();
  for (let i = 0; i < condidat.length; i++) {
    if (parti == condidat[i].partiPolitique.toUpperCase()) {
      console.log("--------------------condidat---------------------");
      console.log("* condidat", i, "*");
      console.log("CIN : ", condidat[i].cin);
      console.log("Nom : ", condidat[i].nom);
      console.log("Prenom : ", condidat[i].prenom);
      console.log("PartiPolitique  :", condidat[i].partiPolitique);
      console.log("Age :", condidat[i].age);
      console.log("les nombres de vote : ", condidat[i].electeurs.length);
      console.log("__________________________________________________");
    }
  }
}
// affichage selon trier------------------------
function afficher_Trier(condidat) {
  for (let i = 0; i < condidat.length - 1; i++) {
    for (let j = i + 1; j < condidat.length; j++) {
      let temp;
      if (condidat[i].electeurs.length < condidat[j].electeurs.length) {
        temp = condidat[i];
        condidat[i] = condidat[j];
        condidat[j] = temp;
      }
    }
  }
  console.log("--------------------condidat---------------------");
  for (let i = 0; i < condidat.length; i++) {
    console.log("* condidat", i, "*");
    console.log("CIN : ", condidat[i].cin);
    console.log("Nom : ", condidat[i].nom);
    console.log("Prenom : ", condidat[i].prenom);
    console.log("PartiPolitique  :", condidat[i].partiPolitique);
    console.log("Age :", condidat[i].age);
    console.log("les nombres de vote : ", condidat[i].electeurs.length);
    console.log("_____________________________________");
  }
}
// affichage simple
function afficher_simple(condidat) {
  console.log("+++++++++++ les condidat +++++++++++");
  for (let i = 0; i < condidat.length; i++) {
    console.log("* condidat", i, "*");
    console.log("CIN : ", condidat[i].cin);
    console.log("Nom : ", condidat[i].nom);
    console.log("Prenom : ", condidat[i].prenom);
    console.log("PartiPolitique  :", condidat[i].partiPolitique);
    console.log("Age :", condidat[i].age);
    console.log("les nombres de vote : ", condidat[i].electeurs.length);
    console.log("_____________________________________");
  }
}
// afficher=================================================================
function afficher(condidat) {
  do {
    console.log("``````````````````````````````````````````````````````````````````````````````");
    console.log("``````                            AFICHAGE                              ``````");
    console.log("``````````````````````````````````````````````````````````````````````````````");
    console.log("`1- affichage simple                                                         `");
    console.log("`2- affichage selon Trier les candidats par nombre de votes                  `");
    console.log("`3- affichage selon uniquement les candidats d'un parti politique spécifique.`");
    console.log("`0-quiter                                                                    `");
    console.log("``````````````````````````````````````````````````````````````````````````````");
    
    choix4 = Number(p("entrer votre choix"));
    switch (choix4) {
      case 1:
        afficher_simple(condidat);
        break;
      case 2:
        afficher_Trier(condidat);
        break;
      case 3:
        afficher_filtre(condidat);
        break;

      default:
        break;
    }
  } while (choix4 != 0);
}
// Voter pour un candidat =====================================================
function voter(condidat) {
  console.log(" salut ");
  let nomv = p("doner moi votre nom ");
  let cin1 = p("donner moi votre cin ");
  let c = cin1.toUpperCase();
  let trouver = false;
  let i = Recherche_cin()
  for (let i = 0; i < condidat.length; i++) {
    for (let j = 0; j < condidat[i].electeurs.length; j++) {
      if (cin1 == condidat[i].electeurs[j].toUpperCase()) {
        trouver = true;
        break;
      }
    }
  }
  if (trouver == true) {
    console.log(nomv, "Désolé, vous ne pouvez pas voter deux fois");
  } else {
         if (i!=-1) {
                 condidat[i].electeurs.push(cin1);
                 console.log("votre vote est fais avec succee ")
         }else{
                console.log("cet cin n'excite pas ")
         }
  }
}
// recherche par cin=====================================================
function Recherche_cin() {
  let i = -1;
  let cin_recherchet = p("donner moi le CIN de condidat qui tu veut ");
  for (j = 0; j < condidat.length; j++) {
    if (cin_recherchet == condidat[j].cin) {
        i = j ;
      break;
    } 
  }
  
  return i;
}
// modufication de parti politique========================================
function modifier_partie() {
  let i = Recherche_cin(condidat);
  if (i !== -1 ) {
    let parti_modiefie = p("donner moi la nouvelle parti plitique ");
          condidat[i].partiPolitique = parti_modiefie;
  } else {
    console.log(" cet condidat ne trouve pas ");
  }
}
//modification de l'age ==================================================
function modifier_age(condidat) {
  let i = Recherche_cin(condidat);
  if (i !== -1) {
    let age_modiefie = Number(p("donner moi le neuveux age "));
    condidat[i].age = age_modiefie;
  } else {
    console.log(" cet condidat ne trouve pas ");
  }
}
// la modification=========================================================
function modification(condidat) {
  do {
    console.log("***************************************************")
    console.log("*                 MODIFICATION                    *")
    console.log("***************************************************")
    console.log("* 1.Modifier le parti politique d'un candidat     *");
    console.log("* 2.Modifier l'âge d'un candidat                  *");
    console.log("* 0.Quitter                                       *");
    console.log("***************************************************")
    choix3 = Number(p("entrer votre choix "));
    switch (choix3) {
      case 1:
        modifier_partie(condidat);
        break;
      case 2:
        modifier_age(condidat);
        break;
      default:
        console.log("cet choix ne trouve pas")
        break;
    }
  } while (choix3 != 0);
}
// supprimer================================================================
function supprimer(condidat) {
  let i = Recherche_cin(condidat);
  if (i != -1) {
    condidat.splice(i, 1);
  } else {
    console.log(" cet condidat ne trouve pas ");
  }
}
// Rechercher==============================================================
function Rechercher(condidat) {
  let trouver = false 
  let i = 0 ;
  let nom_recherchet = p(
    "donner moi le nom de condidat qui tu veut recherche ",
  );
  for (i = 0; i < condidat.length; i++) {
    if (nom_recherchet == condidat[i].nom) {
       trouver = true
       break 
    }
  }
  if (trouver) {
      console.log("trouver avec succe .......")
      console.log("ces information ")
      console.log("nom : ",condidat[i].nom)
      console.log("prenom :",condidat[i].prenom)
      console.log("age :",condidat[i].age)
      console.log("la parti plitique :",condidat[i].partiPolitique)
      console.log("nombre de vote :",condidat[i].electeurs.length)
  }else{
     console.log("cet nom ne se trouve pas dans la list des condidats")
  }
}
// afficher les 3 top ================
function trois_top(condidat) {
  for (let i = 0; i < condidat.length - 1; i++) {
    for (let j = i + 1; j < condidat.length; j++) {
      let temp;
      if (condidat[i].electeurs.length < condidat[j].electeurs.length) {
        temp = condidat[i];
        condidat[i] = condidat[j];
        condidat[j] = temp;
      }
    }
  }
  console.log("--------------------condidat---------------------");
  for (let i = 0; i < 3; i++) {
    console.log( condidat[i].nom,condidat[i].prenom,"les votes : ", condidat[i].electeurs.length);
    console.log("_______________________________________________-");
  }
}
//nombre total =========
function nombre_toltal_vote(condidat) {
  let nbr_vote = 0;
  for (let i = 0; i < condidat.length; i++) {
    nbr_vote += condidat[i].electeurs.length;
  }
  console.log("le nombre total des votes est ", nbr_vote);
}
//nombre de condidat selon la parti poltique
function nombre_condidat_parti(condidat) {
let  objet ={}
for (let i = 0; i < condidat.length; i++) {
    if(objet[condidat[i].partiPolitique]){
       objet[condidat[i].partiPolitique]++
    }else{
       objet[condidat[i].partiPolitique]=1 
    }
    }
    for (let i in objet ) {
        console.log("la parti poltique ",i," contient ",objet[i]," de condidat")
    }
  }
// les statistiques=======================================================
function statistiques(condidat) {
  do {
    console.log(
      "......................................................................",
    );
        console.log(
      ".                            STATISTIQUE                             .",
    );
        console.log(
      "......................................................................",
    );
    console.log(
      ". 1- Afficher le Top 3 des candidats ayant le plus de votes          .",
    );
    console.log(
      ". 2-Afficher le nombre total de candidats.                           .",
    );
    console.log(
      ". 3-Afficher le nombre total de votes exprimés dans toute l'élection .",
    );
    console.log(
      ". 4- Afficher le nombre de candidats par parti politique.            .",
    );
    console.log(
      ". 0- Quitter                                                         .",
    );
    console.log(
      "......................................................................",
    );
    choix5 = Number(p("entrer votre choix "));
    switch (choix5) {
      case 1:
        trois_top(condidat);
        break;
      case 2:
        console.log("le nombre total de condidat est ", condidat.length);
        break;
      case 3:
        nombre_toltal_vote(condidat);
        break;
      case 4:
        nombre_condidat_parti(condidat);
        break;
      default:
        break;
    }
  } while (choix5 != 0);
}

// =======================================================
do {
  console.log("===================================");
  console.log("=        MUNI PRINCIPALE          =");
  console.log("===================================");
  console.log("= 1- ajouter les condidat         =");
  console.log("= 2- afficher list des condidats  =");
  console.log("= 3- voter pour un condidat       =");
  console.log("= 4- Modification                 =");
  console.log("= 5- supprimer                    =");
  console.log("= 6- recherche par nom            =");
  console.log("= 7- statistique                  =");
  console.log("= 0- quitter                      =");
  console.log("===================================");
  choix = Number(p("donner moi votre choix "));

  switch (choix) {
    case 1:
      console.clear();
      ajouter(condidat);

      break;
    case 2:
      console.clear();
      afficher(condidat);

      break;
    case 3:
      console.clear();
      voter(condidat);
      break;
    case 4:
      console.clear();
      modification(condidat);
      break;
    case 5:
      supprimer(condidat);
      break;
    case 6:
      console.clear();
      Rechercher(condidat);
      break;
    case 7:
      console.clear();
      statistiques(condidat);
      break;

    default:
      console.clear();
      console.log("cet choix introvable");

      break;
  }
} while (choix != 0);
console.clear();
console.log(" Merci ");
