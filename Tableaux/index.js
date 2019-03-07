var tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var tab1 = [];
var tab2 = [];
var tab3 = [];

var random, somme = 0, moyenne, j = 0, maxi = tab[0], mini = tab[0];

for ( var i = 0; i != 100; i++ ) {
     random = Math.random() * (100 - 10) + 10;
     tab.push(random);
}
console.log("tab",tab)

for (let i=0; i< tab.length-1; i++) {

    if( tab[i] > maxi ) {
        maxi = tab[i];
    }
}

console.log("Nb max" ,maxi)

for (let i=0; i< tab.length-1; i++) {

    if( tab[i] < mini ) {
        mini = tab[i];
    }
}
console.log("Nb min", mini);

for (var i = 0; i != tab.length; i++){
    somme += tab[i];
    if (tab [i] <= 10){
        tab1.push(tab[i]);
    }else tab2.push(tab[i]);
}

tab1.sort(tri);
tab2.sort(tri);

console.log("la somme",somme);

moyenne = somme / tab.length;
console.log("La moyenne", moyenne);

console.log("tab1", tab1);
console.log("tab2",tab2);

tab3 = tab1.concat(tab2);
console.log ("tab3",tab3);

for(var i = 0; i != 115; i++){
    tab.splice(0,1);
}
console.log("tab vide",tab);

while(j < 10) {
    j++;
    tab1.splice(0,1);
}
console.log("tab 1 vide",tab1);

j = 0
do {
    tab2.splice(0,1);
    j++;
}while(j < 105)

console.log("tab 2 vide",tab2);

function tri(x,y){
    return x - y;
}