/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    var lengthOfString=texte.length;
    return lengthOfString;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    var texte3 = texte1+texte2;
    return texte3;
}
var afficherCar5 = function (texte) {
    var texteChar5 = texte.substr(4,1);
    return texteChar5;
}
var afficher9Car = function (texte) {
    var texteChar1to9 = texte.substr(0,9);
    return texteChar1to9;
}
var majusculeString = function (texte) {
    var texteUpCase = texte.toUpperCase();
    return texteUpCase;
}
var minusculeString = function (texte) {
    var texteLoCase = texte.toLowerCase();
    return texteLoCase;
}
var SupprEspaceString = function (texte) {
    var shrinkedTxt = texte.trim();
    return shrinkedTxt;
}
var IsString = function (texte) {
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
    var extFile = texte.split('.').pop();
    return extFile;
}
var NombreEspaceString = function (texte) {
    var countSpace=0;
    for (i=0;i<texte.length;i++){
      if (texte.substr(i,1)==' '){
        countSpace++;
      }
    }
    return countSpace;
}
var InverseString = function (texte) {
    var reversedTxt = texte.split("").reverse().join("");
    return reversedTxt;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    var powered = Math.pow(x, y);
    return powered;
}
var valeurAbsolue = function (nombre) {
    var absoluted = Math.abs(nombre);
    return absoluted;
}
var valeurAbsolueArray = function (array) {
    for (i=0;i<array.length;i++){
      array[i]=Math.abs(array[i]);
    }
    return array;
}
var sufaceCercle = function (rayon) {
    var surfAs = Math.round(Math.PI*Math.pow(rayon,2));
    return surfAs;
}
var hypothenuse = function (ab, ac) {
    var hypothenuse= Math.hypot(ab,ac);
    return hypothenuse;
}
var calculIMC = function (poids, taille) {
    var imc = parseFloat(poids/Math.pow(taille,2)).toFixed(2);
    imc = parseFloat(imc);
    return imc;
}
