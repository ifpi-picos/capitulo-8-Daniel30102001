// Importando a biblioteca convert
import convert from 'convert';

// Função para converter dias em minutos
function diasParaMinutos(dias) {
    return convert(dias, 'days').to('minutes');
}

// Função para converter gigabytes em bytes
function gigabytesParaBytes(gb) {
    return convert(gb, 'GB').to('B');
}

// Testando as funções
const dias = 2;
const gb = 5;

console.log(`${dias} dias equivalem a ${diasParaMinutos(dias)} minutos.`);
console.log(`${gb} GB equivalem a ${gigabytesParaBytes(gb)} bytes.`);
