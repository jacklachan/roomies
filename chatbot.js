// chatbot.js
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Build chat widget
const widget = document.getElementById('chatbot-widget');
widget.innerHTML = `
  <div class="chat-header">
    <h3>AI Assistant</h3>
    <button id="closeBtn">×</button>
  </div>
  <div class="chat-messages" id="messages"></div>
  <div class="chat-input">
    <input type="text" id="userInput" placeholder="Type a message...">
    <button id="sendBtn">Send</button>
  </div>
`;

const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const closeBtn = document.getElementById('closeBtn');

// Toggle widget visibility
closeBtn.addEventListener('click', () => {
  widget.style.display = 'none';
});

// Append message
function appendMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.innerHTML = `<div class="message-content">${text}</div>`;
  messagesEl.appendChild(msg);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Show typing indicator
function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.id = 'typing';
  typing.textContent = 'AI is typing...';
  messagesEl.appendChild(typing);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// Remove typing indicator
function removeTyping() {
  const typing = document.getElementById('typing');
  if (typing) typing.remove();
}

// Handle send
async function sendMessage() {
  const text = inputEl.value.trim();
  if (!text) return;
  appendMessage(text, 'user');
  inputEl.value = '';
  showTyping();

  try {
    const res = await model.generateContent(text);
    const botReply = await res.response.text();
    removeTyping();
    appendMessage(botReply, 'bot');
  } catch (err) {
    removeTyping();
    appendMessage('Sorry, something went wrong.', 'bot');
  }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
inputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
