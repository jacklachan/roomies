// chatbot.js - WEBSITE-AWARE VERSION
const API_KEY = 'AIzaSyD-WpjkK4WuwlupLZ5cM_NMgnkQmOlJsC0';

class GeminiChatbot {
    constructor() {
        this.apiKey = API_KEY;
        this.websiteContext = this.extractWebsiteContext();
        this.initWidget();
    }

    // Extract current website content for context
    extractWebsiteContext() {
        const context = {
            pageTitle: document.title,
            pageType: "Financial Transparency Dashboard",
            data: {}
        };

        // Extract dashboard data
        try {
            // Get main heading
            const mainHeading = document.querySelector('h1, .main-title, [class*="title"]');
            if (mainHeading) context.mainTopic = mainHeading.textContent;

            // Extract NGO data
            const ngoSection = document.querySelector('[class*="ngo"], [class*="NGO"]') || 
                             Array.from(document.querySelectorAll('*')).find(el => 
                                 el.textContent.includes('NGO') || el.textContent.includes('Organizations'));
            
            if (ngoSection) {
                context.data.ngos = this.extractSectionData(ngoSection, 'NGOs');
            }

            // Extract Government Projects data
            const govSection = Array.from(document.querySelectorAll('*')).find(el => 
                el.textContent.includes('Government Projects') || el.textContent.includes('Projects'));
            
            if (govSection) {
                context.data.governmentProjects = this.extractSectionData(govSection, 'Government Projects');
            }

            // Extract Educational Institutions data
            const eduSection = Array.from(document.querySelectorAll('*')).find(el => 
                el.textContent.includes('Educational Institutions') || el.textContent.includes('Education'));
            
            if (eduSection) {
                context.data.educationalInstitutions = this.extractSectionData(eduSection, 'Educational Institutions');
            }

            // Extract any budget/financial numbers
            const budgetElements = document.querySelectorAll('[class*="budget"], [class*="amount"], [class*="total"]');
            context.data.financials = [];
            budgetElements.forEach(el => {
                const text = el.textContent.trim();
                if (text.includes('₹') || text.includes('Cr') || text.includes('Budget')) {
                    context.data.financials.push(text);
                }
            });

        } catch (error) {
            console.log('Error extracting context:', error);
        }

        return context;
    }

    extractSectionData(section, sectionName) {
        const data = { name: sectionName, details: [] };
        
        // Look for numbers, budgets, counts
        const textContent = section.textContent;
        const numbers = textContent.match(/\d+(?:\.\d+)?\s*(?:Cr|Organizations|Projects|Institutions|Budget)/g);
        if (numbers) data.details = numbers;
        
        // Get description text
        const description = section.querySelector('p, [class*="description"], [class*="text"]');
        if (description) data.description = description.textContent;
        
        return data;
    }

    initWidget() {
        try {
            const widget = document.getElementById('chatbot-widget');
            if (!widget) return;

            widget.innerHTML = `
                <div class="chat-header">
                    <h3>🤖 ABBA Assistant</h3>
                    <button id="toggleBtn">−</button>
                </div>
                <div class="chat-messages" id="messages">
                    <div class="message bot">
                        <div class="message-content">
                            Hi! I'm your ABBA Financial Dashboard assistant. I can help you understand the NGO data, government projects, and educational institutions shown on this page. What would you like to know?
                        </div>
                    </div>
                </div>
                <div class="chat-input">
                    <input type="text" id="userInput" placeholder="Ask about the financial data...">
                    <button id="sendBtn">Send</button>
                </div>
            `;

            const sendBtn = document.getElementById('sendBtn');
            const userInput = document.getElementById('userInput');
            const toggleBtn = document.getElementById('toggleBtn');

            if (sendBtn) sendBtn.addEventListener('click', () => this.sendMessage());
            if (userInput) userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });
            if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleWidget());

        } catch (error) {
            console.error('Error initializing chatbot:', error);
        }
    }

    async sendMessage() {
        try {
            const input = document.getElementById('userInput');
            const message = input.value.trim();
            
            if (!message) return;

            this.addMessage(message, 'user');
            input.value = '';
            this.showTyping();

            // Check API key
            if (this.apiKey === 'YOUR_API_KEY_HERE' || !this.apiKey) {
                this.removeTyping();
                this.addMessage('⚠️ Please add your Gemini API key!', 'bot');
                return;
            }

            // Create context-aware prompt
            const contextPrompt = this.createContextPrompt(message);

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: contextPrompt
                        }]
                    }]
                })
            });

            const data = await response.json();
            this.removeTyping();

            if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                this.addMessage(data.candidates[0].content.parts[0].text, 'bot');
            } else {
                this.addMessage('❌ Sorry, I encountered an error. Please try again.', 'bot');
            }

        } catch (error) {
            this.removeTyping();
            this.addMessage('🌐 Connection error. Please check your internet connection.', 'bot');
        }
    }

    createContextPrompt(userMessage) {
        const context = this.websiteContext;
        
        let prompt = `You are an AI assistant for the ABBA (Accountable Budget & Blockchain Accountability) Financial Transparency Dashboard. 

CURRENT PAGE CONTEXT:
- Page: ${context.pageTitle || 'Financial Transparency Dashboard'}
- Main Topic: ${context.mainTopic || 'Financial data across organizations'}

AVAILABLE DATA ON THIS PAGE:
`;

        // Add NGO data
        if (context.data.ngos) {
            prompt += `\nNGOs: ${JSON.stringify(context.data.ngos)}`;
        }

        // Add Government Projects data  
        if (context.data.governmentProjects) {
            prompt += `\nGovernment Projects: ${JSON.stringify(context.data.governmentProjects)}`;
        }

        // Add Educational Institutions data
        if (context.data.educationalInstitutions) {
            prompt += `\nEducational Institutions: ${JSON.stringify(context.data.educationalInstitutions)}`;
        }

        // Add financial data
        if (context.data.financials && context.data.financials.length > 0) {
            prompt += `\nFinancial Data: ${context.data.financials.join(', ')}`;
        }

        prompt += `

INSTRUCTIONS:
- Answer questions specifically about the financial data, organizations, projects, and institutions shown on this dashboard
- If asked about data not visible on the current page, let the user know what data IS available
- Focus on transparency, accountability, and budget information
- Be helpful and informative about the ABBA system and financial transparency

USER QUESTION: ${userMessage}

Please provide a helpful response based on the dashboard data above:`;

        return prompt;
    }

    // ... (keep all the other methods: addMessage, showTyping, removeTyping, toggleWidget)
    addMessage(text, sender) {
        try {
            const messagesEl = document.getElementById('messages');
            if (!messagesEl) return;

            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}`;
            messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
            messagesEl.appendChild(messageDiv);
            messagesEl.scrollTop = messagesEl.scrollHeight;
        } catch (error) {
            console.error('Add message error:', error);
        }
    }

    showTyping() {
        try {
            const messagesEl = document.getElementById('messages');
            if (!messagesEl) return;

            const typing = document.createElement('div');
            typing.className = 'typing-indicator';
            typing.id = 'typing';
            typing.innerHTML = '<div class="message-content">🤔 Analyzing dashboard data...</div>';
            messagesEl.appendChild(typing);
            messagesEl.scrollTop = messagesEl.scrollHeight;
        } catch (error) {
            console.error('Show typing error:', error);
        }
    }

    removeTyping() {
        try {
            const typing = document.getElementById('typing');
            if (typing) typing.remove();
        } catch (error) {
            console.error('Remove typing error:', error);
        }
    }

    toggleWidget() {
        try {
            const messages = document.getElementById('messages');
            const input = document.querySelector('.chat-input');
            const toggleBtn = document.getElementById('toggleBtn');
            
            if (messages && input && toggleBtn) {
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
        } catch (error) {
            console.error('Toggle widget error:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new GeminiChatbot();
    } catch (error) {
        console.error('Failed to initialize chatbot:', error);
    }
});
