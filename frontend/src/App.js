import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Kena's Website</h1>
        <nav>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </nav>
      </header>
      <main>
        <p>This is the homepage of my website.</p>
        {/* Add additional content here */}
      </main>
    </div>
  );
}

export default App;
