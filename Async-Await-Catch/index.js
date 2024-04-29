//Act 1
function divisibleDos(num) {
    return new Promise(function (resolve, reject) {
        if (num % 2 == 0) {
            resolve(`El ${num} es divisible por dos`);
        } else {
            reject(`El ${num} no es divisible por dos`);
        }
    });
}
divisibleDos(4)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//Act2
let menosMas = new Promise((resolve, reject) => {
    let num = 8;
    if (num >= 0 && num <= 10) {
        resolve(`El valor ${num} esta dentro del rango especificado`);
    } else {
        reject(`El valor ${num} no esta dentro del rango especificado`);
    }
});
menosMas
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

//Act3
function esVocal(letra) {
    let arr = ["a", "e", "i", "o", "u"];
    return new Promise((resolve, reject) => {
        if (arr.includes(letra)) {
            resolve(`La letra "${letra}" esta dentro del array`);
        } else {
            reject(`La letra "${letra}" no esta dentro del array`);
        }
    });
}
esVocal("a")
    .then((result) => console.log(result))
    .catch((error) => console.log(error) );

//Act4
function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b == 0) {
            reject(`La division ${a}/${b} no es posible, no se puede dividir por 0`);
        } else {
            resolve(`El resultado de la división de ${a}/${b} es: ${a / b}`);
        }
    });
}
dividir(125, 5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
