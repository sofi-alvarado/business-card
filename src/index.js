import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/styles.css';
import reportWebVitals from './reportWebVitals';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interests';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
         <div className="business-card">
            <div className="info-section">
                <Info />
                <About />
                <Interest />
            </div>
        </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
