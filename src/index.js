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
            <div className="main-container">
                  <div className="business-card">
                        <div className="info-section">
                        <Info />
                        </div>
                        <div className='about-section'>
                              <About />
                        </div>
                        <div className='interest-section'>
                              <Interest />
                        </div>
                        <div className="footer-section">
                              <div className="footer-icons"> 
                                    <i className="bi-twitter bi-lg"></i>
                                    <i className="bi-facebook"></i>
                                    <i className="bi-instagram"></i>
                                    <i className="bi-github"></i>
                              </div>
                        </div>
                  </div>
            </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
