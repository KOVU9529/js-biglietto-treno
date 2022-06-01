/*Quanti km da percorrere*/
const userNumber=parseInt(prompt('Quanti km da percorrere?'));

/*Prezzo al km del biglietto*/
const unityPrice=(0.21);

/*Prezzo senza sconto*/

const price=userNumber * unityPrice;

/*Età del passeggero*/

const userAge= parseInt(prompt('Quanti anni hai?'));

/*Sconto relativo all'età*/

const small=price * (0.2);
const verySmall= price * (0.4);

if(userAge < 18) {
    small;
}
else if (userAge > 65){
    verySmall;
}

/*Prezzo meno sconto*/

const finalSmallPrice=price - small;
const finalVerySmallPrice= price - verySmall;

/*Approssimazione*/

let contact=finalSmallPrice.toFixed(2);
document.getElementById('Small').innerHTML=contact;
let contactwo=finalVerySmallPrice.toFixed(2);
document.getElementById('VerySmall').innerHTML=contactwo;
