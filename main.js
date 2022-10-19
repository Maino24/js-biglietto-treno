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

    console.log(prezzoDef)

}else if (age > 65){

    prezzoInt = cost * numberKm
    scontoMin =  ((numberKm * cost)* 40) /100
    prezzoDef = prezzoInt - scontoMin

    console.log(prezzoDef)       

}else {

    prezzoInt = cost * numberKm
    prezzoDef = prezzoInt

    console.log(prezzoDef) 
}



document.getElementById(`rispostaCosto`).innerHTML=`Il costo del biglietto è: ${prezzoDef}`