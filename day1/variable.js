const prompt = require("prompt-sync")();
var pseudo = "ShadowX" ;
var Niveau = 12 ;
var age = 21 ;
var score = 4580 ; 
const Pays = "Maroc" ; 
console.log(pseudo)
console.log(Niveau)
console.log(age)
console.log(score)
//challenge 2 
var budget1=prompt("entrer votre budget");
var budget2=budget1/11;
console.log("budget en MAD:",budget1)
console.log("budget en EUR:",budget2)
//challenge3
var stock=prompt("enter votre stockage en GB");
var reslt=stock*1024;
console.log("stockage:",stock)
console.log("Résultat:",reslt)
//challenge4
let distance=prompt("entrer votre distance parcourue en Km");
let quantité=prompt("enter votre quantité de carburant consommée en litres");
console.log((quantité/distance)*100)
//challenge 5
var durée=prompt("enter la durée du film");
if (durée<60){
    console.log("court métrage")
}
else if (durée>60 && durée<120){
    console.log("Film standard")
}
else{
    console.log("Film long")
}
//challenge 6
var scorepartie1 = +prompt("entrer partie 1");
var scorepartie2 = +prompt("entrie partie 2");
var scorepartie3 = +prompt("entrer score partie 3");
var scorepartie4 = +prompt("entrer score partie 4");
var Total = scorepartie1 + scorepartie2 + scorepartie3 + scorepartie4 ;
var Moyenne= (Total/4) 
console.log(Total)
console.log(Moyenne)
//challenge 7 

var notecc = +prompt("entrer note de CC");
var noteProjet = +prompt("entrer note de projet");
var noteExamen = +prompt("entrer note examen" ) ;
var notefinale = ((notecc*2) + (noteProjet*3) + (noteExamen*5 ))/10 ;
console.log(notefinale)
//challenge 8 
var u = +prompt("entrer la tension en volts");
var I = +prompt("entrer l'intensité en ampères");
var t = +prompt("entrer le temps");
var énergie = u*I*t;
console.log("énergie")
