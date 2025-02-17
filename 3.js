// math.js
function soma(a, b) {
       return a + b;
   }
   
   function subtracao(a, b) {
       return a - b;
   }
   
   function multiplicacao(a, b) {
       return a * b;
   }
   
   function divisao(a, b) {
       if (b === 0) {
           throw new Error("Divisão por zero não é permitida.");
       }
       return a / b;
   }
   
   function exponenciacao(base, expoente) {
       return Math.pow(base, expoente);
   }
   
   // Exportando as funções
   module.exports = {
       soma,
       subtracao,
       multiplicacao,
       divisao,
       exponenciacao
   };
   

// app.js
const math = require('./math');

console.log("Soma: ", math.soma(5, 3)); // 8
console.log("Subtração: ", math.subtracao(10, 4)); // 6
console.log("Multiplicação: ", math.multiplicacao(7, 2)); // 14
console.log("Divisão: ", math.divisao(20, 5)); // 4
console.log("Exponenciação: ", math.exponenciacao(2, 3)); // 8
