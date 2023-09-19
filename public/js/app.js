// const form = document.querySelector("form");
// const responseEl = document.getElementById("response");
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


const chatContainer = document.getElementById('chat-container');
const chatButton = document.getElementById('chat-button');
const webContainer = document.getElementById('web-container');

chatButton.addEventListener('click', () => {
    if (chatContainer.style.display === 'none') {
        chatContainer.style.display = 'block';
        chatButton.innerHTML = '<i class="fas fa-times"></i>';
        webContainer.classList.add('blur');

    } else {
        chatContainer.style.display = 'none';
        chatButton.innerHTML = '<i class="fas fa-comment"></i>';
        webContainer.classList.remove('blur');
        
    }
});


sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  console.log(userInput.value);

  sendButton.disabled = true;
  sendButton.innerHTML = "Enviando...";

  const userMessage = userInput.value;
  if (userMessage.trim() !== '') {
      addUserMessage(userMessage);

      userInput.value = '';
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
  } catch (error) {
    addBotMessage(error.message);
  } finally {
    sendButton.disabled = false;
    sendButton.innerHTML = "Enviar";
    userInput.value = "";
  }
});


