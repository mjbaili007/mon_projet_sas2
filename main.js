 function modification(condidat) {
    trouver = false
   let cin_recherchet = p("donner moi le CIN de condidat qui tu veut ")
   let i
    for (i = 0; i <condidat.length; i++) {
         if (cin_recherchet == condidat[i].cin) {
               trouver = true 
         }
    }
        if (trouver == true) {
        let age_modiefie = Number (p("donner moi le neuveux age "))
        condidat[i].age = age_modiefie
        let parti_politique = p("donner moi le neuveux parti plitique")
    }else{
        console.log(" cet condidat ne trouve pas ");
        
    }
   
 }