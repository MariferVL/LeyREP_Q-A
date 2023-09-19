
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

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        addUserMessage(userMessage);
        // Aquí puedes agregar lógica para responder como un bot
        // Por ejemplo: addBotMessage("Respuesta del bot...");
        userInput.value = '';
    }
});

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