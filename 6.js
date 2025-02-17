// Importando a biblioteca mathjs
import { log } from 'mathjs';
import readline from 'readline';

// Criando interface para entrada de dados do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitando um número ao usuário
rl.question("Digite um número para calcular o logaritmo natural (ln): ", (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, insira um número válido maior que zero.");
    } else {
        console.log(`Logaritmo natural de ${numero}: ${log(numero)}`);
    }

    rl.close();
});
