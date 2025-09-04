const socket = io();

const el = {
  nick: document.getElementById("nick"),
  joinBtn: document.getElementById("joinBtn"),
  users: document.getElementById("users"),
  messages: document.getElementById("messages"),
  form: document.getElementById("form"),
  input: document.getElementById("input"),
  submitBtn: document.querySelector("button[type='submit']")
};

let joined = false;

el.joinBtn.addEventListener("click", () => {
  const nick = el.nick.value.trim() || "Convidado";
  socket.emit("join", nick);
  joined = true;

  el.input.disabled = false;
  el.submitBtn.disabled = false;
  el.nick.disabled = true;
  el.joinBtn.disabled = true;
});

el.form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!joined) return;

  const text = el.input.value.trim();
  if (!text) return;

  socket.emit("chat:message", text);
  el.input.value = "";
});

// Recebe mensagens
socket.on("chat:message", ({ nick, text }) => {
  const li = document.createElement("li");
  li.textContent = `${nick}: ${text}`;
  el.messages.appendChild(li);
});

// Recebe mensagens do sistema
socket.on("system:message", (msg) => {
  const li = document.createElement("li");
  li.style.color = "gray";
  li.textContent = msg;
  el.messages.appendChild(li);
});

// Atualiza lista de usuários
socket.on("users:update", (list) => {
  el.users.innerHTML = "";
  list.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    el.users.appendChild(li);
  });
});
