let numberKm = prompt(`inserire numero dei chilometri che si intende percorrere`)
let age = prompt(`inserire numero di anni`)

console.log(numberKm)
console.log(age)


const cost = 0.21

console.log(cost)

if (age < 18){

    prezzoInt = cost * numberKm
    scontoMin =  ((numberKm * cost)* 20) /100
    prezzoDef = prezzoInt - scontoMin
    prezzoDef = prezzoDef.toFixed(2)

    console.log(prezzoDef)

}else if (age > 65){

    prezzoInt = cost * numberKm
    scontoMin =  ((numberKm * cost)* 40) /100
    prezzoDef = prezzoInt - scontoMin
    prezzoDef = prezzoDef.toFixed(2)

    console.log(prezzoDef)       

}else {

    prezzoInt = cost * numberKm
    prezzoDef = prezzoInt
    prezzoDef = prezzoDef.toFixed(2)

    console.log(prezzoDef) 
}



document.getElementById(`rispostaCosto`).innerHTML=`Il costo del biglietto è : ${prezzoDef}`




/*function esegui(){

    let valueKm = document.getElementById(`inputKm`).value;
    let valueAge = document.getElementById(`inputAge`).value;
}

    

 const price = 0.21


 if (valueAge < 18){

    prezzoInt = price * valueKm
    scontoMin =  ((numberKm * price)* 20) /100
    prezzoDef = prezzoInt - scontoMin
    prezzoDef = prezzoDef.toFixed(2)

    console.log(prezzoDef)

}else if (valueAge > 65){

    prezzoInt = price * valueKm
    scontoMax =  ((numberKm * price)* 40) /100
    prezzoDef = prezzoInt - scontoMax
    prezzoDef = prezzoDef.toFixed(2)

    console.log(prezzoDef)       

}else {

    prezzoInt = cost * valueKm
    prezzoDef = prezzoInt
    prezzoDef = prezzoDef.toFixed(2)

    console.log(prezzoDef) 
}


document.getElementById(`rispostaCosto`).innerHTML=`il costo del tuo biglietto è : ${prezzoDef}`*/