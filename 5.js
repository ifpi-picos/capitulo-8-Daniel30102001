// usersDB.js

// Lista privada de usuários (não exportada)
const users = [];

// Função para adicionar um usuário
export function addUser(nome, email, senha) {
    const user = { id: users.length + 1, nome, email, senha };
    users.push(user);
    return user;
}

// Função para remover um usuário pelo ID
export function removeUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0]; // Remove e retorna o usuário removido
    }
    return null;
}

// Função para atualizar informações do usuário pelo ID
export function updateUser(id, newData) {
    const user = users.find(user => user.id === id);
    if (user) {
        Object.assign(user, newData); // Atualiza os campos fornecidos
        return user;
    }
    return null;
}

// Função para listar todos os usuários (apenas nome e email, sem senha)
export function listUsers() {
    return users.map(({ id, nome, email }) => ({ id, nome, email }));
}


// app.js
import { addUser, removeUser, updateUser, listUsers } from './usersDB.js';

// Adicionando usuários
const user1 = addUser("Alice", "alice@example.com", "senha123");
const user2 = addUser("Bob", "bob@example.com", "segredo456");

console.log("Usuários cadastrados:", listUsers());

// Atualizando um usuário
updateUser(1, { nome: "Alice Silva", email: "alice.silva@example.com" });
console.log("Após atualização:", listUsers());

// Removendo um usuário
removeUser(2);
console.log("Após remoção:", listUsers());
