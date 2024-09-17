// Задача №1
let myName = "Olga";
let myAge = 34;
let myCity = "Saint Petersburg";
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof myCity);

// Задача №2
let myFirstName = "Bukhina";
console.log(myName +" "+ myFirstName);

// Задача №3
let str = "123";
console.log(Number(str));
console.log(Number.isInteger(str));

// Задача №4
let strJs = "JavaScript is fun!";
let partJs = strJs.slice(14, 17);
console.log(partJs);
console.log(partJs.toUpperCase());

// Задача №5
let myProduct = "яблоки";
let myPrice = 100;
let productPrice= `Цена на ${myProduct} составляет ${myPrice} рублей.`
console.log(productPrice);

// Задача №6
let numberTask = 1.25;
let IntNumber = Math.round(numberTask);
console.log(IntNumber);

// Задача №7
let taskNum1 = 5;
let taskNum2 = 500;
let rezTask = (taskNum1 < taskNum2);
console.log(rezTask);

// Задача №8
let aboutMe = {
    name: "Olga",
    age: 34,
    color: "white"
};
console.log(aboutMe);

// Задача №9
let manyNumbers = 5.3679952533654456;
console.log(manyNumbers.toFixed(2));

// Задача №10
let fruits = "apple, orange, banana";
console.log(fruits.split(","));

// Задача №11
let numNan = "Привет" / 5;
console.log(numNan);
console.log(Number.isNaN(numNan));

// Задача №12
let myText = `Hello, world!
I love
you!`;
console.log(myText);

// Задача №13
let strB = true;
console.log(typeof strB.toString());

// Задача №14
let sym = Symbol("id");
let sym2 = "text";
let obj = {
    [sym]: "value",
    [sym]: "value2"
};
console.log(obj);

// Задача №15
let arr = [1, 15 , 584, 999, 99856];
arr = arr.length;
console.log(arr);

// Надеюсь, я правильно поняла поставленные задачи :-)
