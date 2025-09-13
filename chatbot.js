// chatbot.js - FIXED VERSION WITH CORRECT API
const API_KEY = 'AIzaSyD-WpjkK4WuwlupLZ5cM_NMgnkQmOlJsC0'; // Put your real API key here

class GeminiChatbot {
    constructor() {
        this.apiKey = API_KEY;
        // CORRECT API ENDPOINT
        this.apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`;
        this.initWidget();
    }

    initWidget() {
        const widget = document.getElementById('chatbot-widget');
        widget.innerHTML = `
            <div class="chat-header">
                <h3>🤖 AI Assistant</h3>
                <button id="toggleBtn">−</button>
            </div>
            <div class="chat-messages" id="messages">
                <div class="message bot">
                    <div class="message-content">
                        Hi! I'm your AI assistant. How can I help you today?
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" id="userInput" placeholder="Type a message...">
                <button id="sendBtn">Send</button>
            </div>
        `;

        document.getElementById('sendBtn').addEventListener('click', () => this.sendMessage());
        document.getElementById('userInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        document.getElementById('toggleBtn').addEventListener('click', () => this.toggleWidget());
    }

    async sendMessage() {
        const input = document.getElementById('userInput');
        const message = input.value.trim();
        
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';
        this.showTyping();

        // Check if API key is set
        if (this.apiKey === 'AIzaSyD-WpjkK4WuwlupLZ5cM_NMgnkQmOlJsC0' || !this.apiKey) {
            this.removeTyping();
            this.addMessage('⚠️ Please set your Gemini API key in the chatbot.js file!', 'bot');
            return;
        }

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: message
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error:', response.status, errorText);
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            this.removeTyping();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const botReply = data.candidates[0].content.parts[0].text;
                this.addMessage(botReply, 'bot');
            } else {
                this.addMessage('🤔 I received an unexpected response. Please try again.', 'bot');
            }

        } catch (error) {
            console.error('Error:', error);
            this.removeTyping();
            
            if (error.message.includes('403')) {
                this.addMessage('🔐 Invalid API key. Please check your Gemini API key.', 'bot');
            } else if (error.message.includes('404')) {
                this.addMessage('🔍 API endpoint not found. Please check the API configuration.', 'bot');
            } else if (error.message.includes('429')) {
                this.addMessage('⏳ Rate limit reached. Please wait and try again.', 'bot');
            } else {
                this.addMessage(`❌ Connection error: ${error.message}`, 'bot');
            }
        }
    }

    addMessage(text, sender) {
        const messagesEl = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
        messagesEl.appendChild(messageDiv);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    showTyping() {
        const messagesEl = document.getElementById('messages');
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typing';
        typing.innerHTML = '<div class="message-content">🤔 AI is thinking...</div>';
        messagesEl.appendChild(typing);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    removeTyping() {
        const typing = document.getElementById('typing');
        if (typing) typing.remove();
    }

    toggleWidget() {
        const messages = document.getElementById('messages');
        const input = document.querySelector('.chat-input');
        const toggleBtn = document.getElementById('toggleBtn');
        
        if (messages.style.display === 'none') {
            messages.style.display = 'block';
            input.style.display = 'flex';
            toggleBtn.textContent = '−';
        } else {
            messages.style.display = 'none';
            input.style.display = 'none';
            toggleBtn.textContent = '+';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GeminiChatbot();
});
