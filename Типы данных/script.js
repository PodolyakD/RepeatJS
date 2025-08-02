//string

const greeting = "Привет";
const name = "Даша";
const goodbye = "Пока";

const massage = `${greeting}, ${name}!`;

console.log(massage);

const a = 5;
const b = 10;
const sum = `Сумма a и b равна ${a + b}`;

console.log(sum);

//number

const posX = 50;
const posY = -100;
const posZ = 1.55;

const point = ((posX + posY + posZ) * 2) / posX;

console.log(point);

console.log("Слово" / 100); //NaN - not number

console.log(100 / 0); //Infinity

console.log(-100 / 0); //-Infinity

//BigInt

console.log(99000000000000091n + 2n); //добавляем букву n. Не смешиваем числа, нельзя просто +2, будет ошибка!

//Boolean true false

const shouldLearnJS = true;
const isAlreadylate = false;

const age = 11;
const isChild = age < 18;

console.log(isChild);

//null ничто, пустое, не известное значение

let data = null;

console.log(data);

//Undefined значение не было присвоено

let surname;
console.log(surname);
