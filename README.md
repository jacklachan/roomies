# [ABBA-README.md](https://github.com/user-attachments/files/22314526/ABBA-README.md)
<p align="center">
  <a href="https://github.com/jacklachan/roomies" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="ABBA Logo"></a>
</p>
<h1 align="center">ABBA - Accountable Budget & Blockchain Accountability</h1>

<div align="center">

  [![Hackathon](https://img.shields.io/badge/hackathon-financial_transparency-orange.svg)]() 
  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 
  [![GitHub Issues](https://img.shields.io/github/issues/jacklachan/roomies.svg)](https://github.com/jacklachan/roomies/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/jacklachan/roomies.svg)](https://github.com/jacklachan/roomies/pulls)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center">A comprehensive financial transparency dashboard providing real-time insights into NGO, government project, and educational institution finances with AI-powered fraud detection and role-based access control.
    <br> 
</p>

## 📝 Table of Contents
- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [API Configuration](#api_config)
- [Features](#features)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

### IDEAL: 
Organizations handling public funds (NGOs, government projects, educational institutions) should operate with complete financial transparency, enabling stakeholders to track fund allocation, detect anomalies, and assess impact metrics in real-time. Citizens and donors deserve accessible, comprehensive financial information presented in an intuitive format that promotes accountability and trust.

### REALITY: 
Currently, financial information from public organizations is often:
- Scattered across multiple systems and formats
- Difficult for non-experts to interpret
- Updated infrequently or inconsistently  
- Lacking interactive visualization tools
- Missing fraud detection capabilities
- Inaccessible to different stakeholder groups with varying access needs

### CONSEQUENCES: 
Without proper financial transparency tools, organizations face:
- **Reduced Public Trust**: Stakeholders cannot verify how funds are being utilized
- **Missed Fraud Detection**: Financial irregularities go unnoticed without automated monitoring
- **Poor Decision Making**: Leaders lack real-time insights for strategic planning
- **Compliance Issues**: Difficulty meeting regulatory reporting requirements
- **Funding Challenges**: Donors and government agencies hesitate to provide funding without transparency
- **Operational Inefficiency**: Manual reporting processes waste valuable resources

## 💡 Idea / Solution <a name = "idea"></a>

ABBA (Accountable Budget & Blockchain Accountability) is a comprehensive web-based financial transparency dashboard that transforms complex financial data into accessible, interactive visualizations. Our solution provides:

### Core Features:
- **Multi-Organization Support**: Covers NGOs, government projects, and educational institutions
- **Role-Based Access Control**: Different views for public users vs. administrators
- **Real-Time Financial Dashboards**: Interactive charts showing income, expenses, and trends
- **Fraud Detection System**: Automated alerts for suspicious financial patterns
- **Impact Metrics Tracking**: Quantifiable outcomes and infrastructure details
- **AI-Powered Chatbot**: Intelligent assistant for financial queries using Google Gemini API
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Search & Discovery**: Cross-platform search functionality for finding organizations

### Key Innovations:
1. **Dual-View Architecture**: Public transparency with administrative depth
2. **Automated Fraud Alerts**: Proactive detection of expense anomalies and duplicate payments
3. **Interactive Data Visualization**: Chart.js powered dynamic charts and graphs
4. **Comprehensive Coverage**: Single platform for multiple organization types
5. **AI Integration**: Natural language queries about financial data

## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

### Technical Dependencies:
- **Chart.js Library**: Required for interactive data visualizations
- **Google Gemini API**: Needed for AI chatbot functionality (requires API key configuration)
- **Modern Web Browser**: ES6+ support required for full functionality
- **JSON Data Format**: Current implementation relies on static JSON data files

### Current Limitations:
1. **Static Data Source**: Currently uses generated sample data; integration with live financial systems required for production deployment
2. **API Key Management**: Google Gemini API key must be manually configured in chatbot.js
3. **Data Update Frequency**: Manual data updates required without real-time database integration
4. **Authentication System**: Basic role selection without secure user authentication
5. **Data Validation**: Limited server-side validation of financial data integrity
6. **Scalability**: Client-side processing may impact performance with large datasets

### Security Considerations:
- Sensitive financial information requires enhanced security measures for production
- Role-based access control needs integration with proper authentication systems
- API keys should be managed through secure environment variables

## 🚀 Future Scope <a name = "future_scope"></a>

### Phase 1 Enhancements:
- **Real-Time Database Integration**: Connect to live ERP and accounting systems
- **Enhanced Authentication**: Multi-factor authentication and secure user management
- **Advanced Analytics**: Predictive financial modeling and trend analysis
- **Export Capabilities**: PDF reports and CSV data exports

### Phase 2 Developments:
- **Blockchain Integration**: Immutable transaction logging for enhanced accountability
- **API Development**: RESTful API for third-party integrations
- **Mobile Applications**: Native iOS and Android apps
- **Multi-Language Support**: Internationalization for global deployment

### Phase 3 Vision:
- **Machine Learning Models**: Advanced fraud detection using historical patterns
- **Regulatory Compliance**: Automated compliance checking for various jurisdictions
- **Stakeholder Portals**: Dedicated interfaces for donors, auditors, and regulators
- **Integration Marketplace**: Plugin system for connecting various financial systems

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)
- Google Gemini API key (for chatbot functionality)

### Installing

1. **Clone the Repository**
```bash
git clone https://github.com/jacklachan/roomies.git
cd roomies
```

2. **Set Up API Key**
```bash
# Edit chatbot.js and replace the placeholder API key
# Open chatbot.js in your preferred editor
# Replace: const API_KEY = 'AIzaSyD-WpjkK4WuwlupLZ5cM_NMgnkQmOlJsC0';
# With your actual Google Gemini API key
```

3. **Start Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Access the Application**
```
Open your browser and navigate to:
http://localhost:8000
```

### Alternative Setup (Direct File Access)
```bash
# Simply open index.html in your browser
# Note: Some features may be limited without a local server
open index.html
```

## 🎈 Usage <a name="usage"></a>

### Navigation Flow:
1. **Landing Page**: Choose from NGOs, Government Projects, or Educational Institutions
2. **Organization Selection**: Browse and search through available organizations
3. **Role Selection**: Choose between Public/Supporter view or Administrator access
4. **Dashboard Access**: Explore financial data through multiple tabs:
   - **Overview**: High-level financial summary with trend charts
   - **Financials**: Detailed income and expense breakdowns
   - **Salaries**: Staff compensation data (admin only)
   - **Fraud Detection**: Security alerts and risk assessment
   - **Impact**: Performance metrics and infrastructure details

### Key Features:
- **Search Functionality**: Use the search bar to find specific organizations
- **Interactive Charts**: Hover and click for detailed data insights
- **Theme Toggle**: Switch between light and dark modes
- **AI Assistant**: Ask questions about financial data using the chatbot
- **Responsive Design**: Seamless experience across all devices

### Sample Organizations Included:
- **NGOs**: Akshaya Patra Foundation, Smile Foundation, CRY, Goonj, Teach for India
- **Government Projects**: Swachh Bharat Mission, PM Jan Dhan Yojana, Digital India, Skill India, Ayushman Bharat
- **Educational Institutions**: IIT Bangalore, Delhi University, IISc, JNU, RVCE

## ⛏️ Built With <a name = "tech_stack"></a>

### Frontend Technologies:
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with custom properties and responsive design
- **JavaScript (ES6+)**: Interactive functionality and API integration
- **Chart.js 3.x**: Advanced data visualization and interactive charts

### APIs & Libraries:
- **Google Gemini API**: AI-powered natural language processing for chatbot
- **Chart.js**: Interactive and responsive chart generation
- **Font Awesome**: Icon library for enhanced UI

### Data & Storage:
- **JSON**: Structured data format for financial information
- **Local Storage**: Browser-based settings persistence

### Development Tools:
- **Python 3**: Data generation scripts for sample financial data
- **Git**: Version control and collaboration

## 🔑 API Configuration <a name = "api_config"></a>

### Setting Up Google Gemini API:

1. **Obtain API Key**:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key for Gemini Pro

2. **Configure Chatbot**:
   ```javascript
   // In chatbot.js, replace the placeholder:
   const API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
   ```

3. **Test Integration**:
   - Load the application
   - Try the AI assistant in the bottom-left corner
   - Verify responses are generated correctly

### API Security Note:
For production deployment, implement proper API key management through environment variables and server-side proxy to protect credentials.

## ✨ Features <a name = "features"></a>

### 🔍 Financial Transparency
- Real-time financial dashboards with income/expense tracking
- Monthly trend analysis with interactive line charts
- Detailed breakdown of revenue sources and expenditure categories
- Efficiency ratio calculations and industry benchmarking

### 🛡️ Fraud Detection
- Automated anomaly detection for unusual spending patterns
- Duplicate payment identification system
- Risk assessment with color-coded alerts
- Detailed fraud alert descriptions and status tracking

### 👥 Role-Based Access
- **Public View**: General financial overview and transparency reports
- **Administrator View**: Complete access including salary details and sensitive information
- Seamless role switching without authentication barriers (demo mode)

### 📊 Advanced Analytics
- Interactive Chart.js visualizations (bar, line, doughnut charts)
- Responsive data presentation across devices
- Drill-down capabilities for detailed analysis
- Export-ready data formats

### 🤖 AI Integration
- Google Gemini-powered chatbot for natural language queries
- Financial data interpretation and explanations
- Context-aware responses about organizational performance
- 24/7 availability for stakeholder inquiries

### 🎨 User Experience
- Modern, intuitive interface design
- Dark/light theme toggle
- Mobile-responsive layout
- Fast search and filtering capabilities
- Accessibility-focused design patterns

## 🤝 Contributing <a name = "contributing"></a>

We welcome contributions from the community! Here's how you can help improve ABBA:

### Getting Started:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Areas for Contribution:
- **Data Integration**: Connect to real financial systems and APIs
- **Security Enhancements**: Implement proper authentication and authorization
- **UI/UX Improvements**: Enhance accessibility and user experience
- **Performance Optimization**: Improve loading times and responsiveness
- **Testing**: Add comprehensive test coverage
- **Documentation**: Expand technical and user documentation

### Code Style Guidelines:
- Use ES6+ JavaScript features
- Follow semantic HTML5 practices
- Maintain CSS custom property naming conventions
- Comment complex logic and API integrations
- Ensure mobile responsiveness for all new features

## ✍️ Authors <a name = "authors"></a>

- **[@jacklachan](https://github.com/jacklachan)** - Project Lead & Frontend Development
- **[@Auenchanters](https://github.com/Auenchanters)** - Backend Development & Data Generation

See also the list of [contributors](https://github.com/jacklachan/roomies/contributors) who participated in this project.

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

- **Chart.js Community** - Excellent documentation and visualization library
- **Google AI Team** - Gemini API for natural language processing capabilities
- **Open Source Contributors** - Various libraries and tools that made this project possible
- **Financial Transparency Advocates** - Inspiration for creating accountable systems
- **Hackathon Organizers** - Platform for rapid innovation and development
- **Beta Testers** - Early feedback and usability insights

### Special Recognition:
- Thanks to all organizations working toward financial transparency
- Appreciation for the open-source community enabling rapid development
- Recognition of the importance of public accountability in fund management

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🚀 Deployment

The application is designed for easy deployment on various platforms:
- **GitHub Pages**: Static hosting for demo purposes
- **Netlify/Vercel**: Enhanced hosting with form handling
- **AWS S3/CloudFront**: Scalable cloud deployment
- **Traditional Web Servers**: Apache/Nginx compatible

## 📞 Support

For support, feedback, or questions:
- Create an [Issue](https://github.com/jacklachan/roomies/issues)
- Join our discussions in the repository
- Reach out to the development team

---

<p align="center">
Made with ❤️ for Financial Transparency
</p>
