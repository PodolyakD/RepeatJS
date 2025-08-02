const num = 111; //число
const str = "222"; // строка
const result = num + str;

console.log(result); // результат 111222
console.log(typeof result); //string

console.log(Boolean(-1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(2)); //true

//Преобразуются в false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

//Все остальные значения в true
