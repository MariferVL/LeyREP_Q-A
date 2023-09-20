/* Verdia Messages Flow */

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addUserMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'user-message');
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
}

function addBotMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'bot-message');
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
}

function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  console.log(userInput.value);

  sendButton.disabled = true;
  sendButton.innerHTML = "Enviando...";

  const userMessage = userInput.value;
  if (userMessage.trim() !== '') {
    addUserMessage(userMessage);
    scrollToBottom();

  }

  try {
    const res = await fetch("/api/flowise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput.value }),
    });

    const data = await res.json();

    addBotMessage(data.message);
    scrollToBottom();
  } catch (error) {
    addBotMessage(error.message);
    scrollToBottom();
  } finally {
    sendButton.disabled = false;
    sendButton.innerHTML = "Enviar";
    userInput.value = "";
  }
});


/* Open/Close Verdia */

const chatContainer = document.getElementById('chat-container');
const chatButton = document.getElementById('chat-button');
const webContainer = document.getElementById('web-container');

chatButton.addEventListener('click', () => {
  if (chatContainer.style.display === 'none') {
    chatContainer.style.display = 'block';
    chatButton.innerHTML = '<i class="fas fa-times"></i>';
    webContainer.classList.add('blur');
    addBotMessage("Hola, buen día🌻Soy Verdia. ¿En qué te puedo ayudar?");

  } else {
    chatContainer.style.display = 'none';
    chatButton.innerHTML = '<i class="fas fa-comment"></i>';
    webContainer.classList.remove('blur');

  }
});

