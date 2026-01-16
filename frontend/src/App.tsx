import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'login':
        return <p>Login Page Content</p>;
      case 'contact':
        return <p>Contact</p>;
      case 'contact':
        return <p>Basic View Page Content</p>;
      default:
        return <p>Welcome! Please select an option from the menu.</p>;
    }
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => setActivePage('login')}>
              Login
            </a>
            <a className="navbar-item" onClick={() => setActivePage('start')}>
              Let's Start
            </a>
            <a className="navbar-item" onClick={() => setActivePage('contact')}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <section className="section">
        <div className="container">
          {renderContent()}
        </div>
      </section>
    </div>
  );
}

export default App;