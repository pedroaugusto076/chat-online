# 💬 Chat-Online – Aplicação Web de Chat em Tempo Real

## 📌 Visão Geral

**Chat-Online** é uma aplicação web de chat em tempo real que permite múltiplos usuários se conectarem simultaneamente e trocarem mensagens instantaneamente.

O projeto foi desenvolvido com o objetivo de demonstrar conhecimentos em:

* Arquitetura cliente-servidor
* Comunicação em tempo real com WebSockets
* Node.js e Express
* Manipulação de eventos com Socket.io
* Interface moderna e responsiva

---

# 🚀 Funcionalidades

* ✅ Login simples via nickname
* ✅ Comunicação em tempo real com WebSockets
* ✅ Atualização dinâmica da lista de usuários online
* ✅ Envio e recebimento instantâneo de mensagens
* ✅ Interface moderna e responsiva
* 🔄 Estrutura preparada para futura integração com banco de dados

---

# 🛠️ Tecnologias Utilizadas

## 🔹 Back-End

* **Node.js** – Ambiente de execução JavaScript no servidor
* **Express.js** – Framework para criação do servidor HTTP
* **Socket.io** – Comunicação bidirecional em tempo real

## 🔹 Front-End

* **HTML5** – Estrutura da aplicação
* **CSS3** – Estilização e layout responsivo
* **JavaScript (ES6+)** – Manipulação de eventos e interação com Socket.io

---

# ⚙️ Como Funciona

## 🔌 Conexão em Tempo Real

Ao acessar a aplicação:

1. O cliente se conecta ao servidor via Socket.io
2. O usuário informa um nickname
3. O servidor registra o usuário conectado
4. Eventos são emitidos e recebidos em tempo real

Exemplo simplificado de evento no servidor:

```javascript
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});
```

A comunicação ocorre sem necessidade de recarregar a página.

---

# 📦 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/seuusuario/chat-online.git
```

## 2️⃣ Instalar dependências

```
npm install
```

## 3️⃣ Iniciar o servidor

```
node server.js
```

Ou, se usar nodemon:

```
npx nodemon server.js
```

## 4️⃣ Acessar no navegador

```
http://localhost:3000
```

---

# 🧠 Conceitos Demonstrados

* Arquitetura orientada a eventos
* WebSockets
* Comunicação bidirecional cliente-servidor
* Manipulação de estado em tempo real
* Gerenciamento de conexões simultâneas
* Organização de projeto Node.js

---

💡 Projeto desenvolvido com foco em portfólio e prática de aplicações em tempo real.
