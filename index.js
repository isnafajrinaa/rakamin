// var day = "monday";
// let month = "January";
// const year = "2025";

// let firstName = "";
// let fullName = "Isna Bella";
// let lastName = "Anwar";
// let middleName = '${fullName}$';

// // Declaration
// let vehicle;
// // Assignment
// vehicle = "Mobil";
// // Reassignment
// vehicle = "car";

// const phi = 3.14;

// //boolean
// const isMale = true;

// //null
// const jet = null;

// //undefined
// let shirts = undefined;

// // const isRich
// const isString = typeof ("nama")
// console.log(isString);

// //KAPITAL
// console.log("adityo".toUpperCase());

// //FUNCTION
// function printName() {
//     console.log(fullName);
// }

// function getName() {
//     return fullName;
// }

// let namaKu = getName();
// console.log(namaKu);


// //Nan atau Not a Number = Mengecek apakah sebuah function itu merupakan angka atau bukan, 
// // Mencoba melakukan sesuatu operasi yang bukan matematika

// console.log("Hello World");
// console.log(fullName, middleName, lastName);

// let beratBadan = 60;
// let tinggiBadan = 170;
// let bmi = beratBadan / ((tinggiBadan / 100) ** 2);

// function getBMI(beratBadan, tinggiBadan) {
//     return bmi;
// }

// console.log(getBMI(60, 170));

// let z = 0;
// let x = 1;
// const y = 2;
// console.log(x--);
// console.log(--x);


// let hariIni = "hujan"

// if (hariIni === "hujan") {
//     console.log("bawa payung")
// } else {
//     console.log("naik gojek")
// }

// // const naikMotor = hariIni === "hujan ?" console.log("bawa payung") : console.log("naik gojek");

// // ini adalah fungsi if else namun lebih baik menghindari else yaitu dengan cara if bertingkat
// function ngajarKah() {
//     if (hariIni !== "hujan") {
//         return "Ngajar"
//     } else if (hariIni !== "panas") {
//         return "main game"
//     } else {
//         return "minum es"
//     }
// }
// console.log(ngajarKah());

// switch (hariIni) {
//     case "hujan":
//         return "Ngajar"
//         break;
//     case "panas":
//         return "Minum Es";
//         break;
//     default:
//         "Main Game"
// }

// //Looping
// for (let i = 0; i < 5; i++) {
//     console.log("*")
// }

// function oddNumber() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }

// oddNumber();

// function nama(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// nama(100);

// function deret(i) {
//     if (i % 15 === 0) {
//         return "FizzBuzz";
//     } else if (i % 5 === 0) {
//         return "Buzz";
//     }
//     else if (i % 3 === 0) {
//         return "Fizz"
//     }
//     return (i);
// }

// let angka = 200
// for (let i = 1; i <= angka; i++) {
//     console.log(deret(i))
// }

// const DAYS = ['monday', 'tuesday', 'sunday']
// const DAYSV2 = ['wednesday', 3, true]
// console.log(DAYSV2.length)
// DAYS.pop("wednesday")
// console.log(DAYS)

// //Cara mengubah value
// DAYS[0] = "senin";

// for (let i = 0; i < DAYS.length; i++) {
//     console.log(DAYS[i]);
// }

// const random = Array.from({length: 10}, ()) 
// let total = 0;
// let avg = 0;
// let min 
// for (let i = 0; i < random.length; i++) {
//     total += random[i];
//     if (max <= random[i])
// }

// console.log(total)
// console.log(total / random.length);
// console.log(total, avg, min, max);
// console.log()
// // random.min();
// // random.max();

// const NUM = [16, 4, 7, 11, -1, 109]
// let sum = 0;
// let max = NUM[0];
// let min = NUM[0];
// let avg = 0;

// for (let i = 0; i < NUM.length; i++) {
//     sum += NUM[i];
//     if (NUM[i] > max) {
//         max = NUM[i]
//     }
//     if (NUM[i] <= min) {
//         min = NUM[i]
//     }
// }
// avg = sum / NUM.length

// console.log(Total: ${ sum })
// console.log(Avg: ${ avg })
// console.log(Min: ${ min })
// console.log(Max: ${ max })

import Animal from "./Animal.js";
import Mammal from "./Animal.js";

const elephant = new Animal("Gajah", "Herbivore", 100, true);
const tiger = new Animal("Tiger", "Carnivore", 50, true);
const orangutan = new Mammal("Orangutan", "Omnivore", 200, true);

console.log(orangutan);