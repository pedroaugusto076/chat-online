const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public"))); // serve front-end

const users = new Map(); // guarda os usuários

function getOnlineUsers() {
  return [...users.values()].map(u => u.nick);
}

io.on("connection", (socket) => {
  console.log("Novo usuário conectado:", socket.id);

  socket.on("join", (nick) => {
    const safeNick = (nick || "Convidado").slice(0, 20);
    users.set(socket.id, { nick: safeNick });
    socket.join("global");

    io.to("global").emit("users:update", getOnlineUsers());
    io.to("global").emit("system:message", `${safeNick} entrou no chat`);
  });

  socket.on("chat:message", (text) => {
    const user = users.get(socket.id);
    if (!user) return;

    io.to("global").emit("chat:message", {
      nick: user.nick,
      text,
      ts: Date.now()
    });
  });

  socket.on("disconnect", () => {
    const user = users.get(socket.id);
    if (user) {
      users.delete(socket.id);
      io.to("global").emit("users:update", getOnlineUsers());
      io.to("global").emit("system:message", `${user.nick} saiu do chat`);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
