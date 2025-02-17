// math.mjs
export function soma(a, b) {
       return a + b;
   }
   
   export function subtracao(a, b) {
       return a - b;
   }
   
   export function multiplicacao(a, b) {
       return a * b;
   }
   
   export function divisao(a, b) {
       if (b === 0) {
           throw new Error("Divisão por zero não é permitida.");
       }
       return a / b;
   }
   
       export function exponenciacao(base, expoente) {
        return Math.pow(base, expoente);
}

   

// app.mjs
import { soma, subtracao, multiplicacao, divisao, exponenciacao } from './math.mjs';

console.log("Soma: ", soma(5, 3)); // 8
console.log("Subtração: ", subtracao(10, 4)); // 6
console.log("Multiplicação: ", multiplicacao(7, 2)); // 14
console.log("Divisão: ", divisao(20, 5)); // 4
console.log("Exponenciação: ", exponenciacao(2, 3)); // 8
