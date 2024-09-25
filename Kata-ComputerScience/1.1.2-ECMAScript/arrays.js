let findResult = [3,5,6,8].find((number) => number % 2 === 0);

console.log(findResult);

let findIndexResult = [3,5,6,8].findIndex((number) => number % 2 === 0);

console.log(findIndexResult);

let numberPlusTwo = [1,2,3,4].map((number) => number + 2);

console.log(numberPlusTwo);

let filteredNumbers = [1,3,6,8,10].filter((number) => number % 2 !== 0);
let filteredNames = ["Diego", "Ana", "Lalo"].filter((names) => names.includes("i"));
let positiveNumbers = [1,3,5,-2,-4,8].filter((number) => number > 0);
let totalSum = positiveNumbers.reduce((accumulator, current) => accumulator + current);


console.log(filteredNumbers);
console.log(filteredNames);
console.log(totalSum);

let numbers = [1,2,3,4,5];

//Ambos ciclos hacen lo mismo
console.log("ForOf");
for(let number of numbers){
    console.log(number);
}
console.log("For original");
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log("ForEach");
let forEachResult = numbers.forEach((number) => number * 2)
console.log("map");
let mapResult = numbers.map((number) => number * 2)

console.log("Resultados de map y forEach");
console.log(forEachResult, mapResult);

let person = {
    firstName: "Diego",
    lastName: "Lechuga",
    age: 20,
}

for(const property in person){
    console.log(`${property}: ${person[property]}`);
}

let divsNodeList = document.querySelectorAll(".image-container");

let divArray = [...divsNodeList];

divArray.map((div) => div.addEventListener("click", (e) => handleClick(e)));

const handleClick = (e) => {
    console.log(e.target.src);
}