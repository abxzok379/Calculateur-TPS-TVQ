function calculateurTaxes(){
 var montant = Number(document.querySelector("#montantUtilisateur").value);
 var TPS = 0.05;
 var TVQ = 0.0975;
 var montantAfterTPS = (montant*TPS)+montant;
 var montantAfterTVQ = (montantAfterTPS*TVQ)+montantAfterTPS;
 document.querySelector("#valeur01").innerHTML = montant + "$";
 document.querySelector("#valeur02").innerHTML = Math.round(montantAfterTVQ) +"$";
}
