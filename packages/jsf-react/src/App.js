import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-container">
            <div className="App-header-wrapper">
              <div className="App-header-title">
                JuggleSF
              </div>
              <nav className="App-header-nav">
                <a href='/about' className="App-header-nav-link">
                  About
                </a>
                <a href='/events' className="App-header-nav-link">
                  Events
                </a>
                <a href='/patterns' className="App-header-nav-link">
                  Patterns
                </a>
                <a href='/contact' className="App-header-nav-link">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="App-body">
          <section className="App-body-section">
            <div className="App-body-section-container">
              <div className="App-body-section-content">
              <h3>test</h3>
              <div>
                <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                </p>
                <p>
                Declarative views make your code more predictable and easier to debug.
                </p>
              </div>
              </div>
              <div className="App-body-section-content">
              <h3>test</h3>
              <div>
                <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                </p>
                <p>
                Declarative views make your code more predictable and easier to debug.
                </p>
              </div>
              </div>
              <div className="App-body-section-content">
              <h3>test</h3>
              <div>
                <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                </p>
                <p>
                Declarative views make your code more predictable and easier to debug.
                </p>
              </div>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    );
  }
}

export default App;
