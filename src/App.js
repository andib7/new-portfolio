import React, { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [activePanel, setActivePanel] = useState(null);
  const [showSkills, setShowSkills] = useState(false);

  const handleButtonClick = (panel) => {
    if (activePanel === panel) {
      // If the clicked panel is already active, close it
      setActivePanel(null);
      setShowSkills(false);
    } else {
      // Open the clicked panel
      if (panel === 'projects') {
        setShowSkills(true);
      } else {
        setShowSkills(false);
      }
      setActivePanel(panel);
    }
  };

  return (
    <div className="App">
      <div className={`main-content ${activePanel ? `shrinked-${activePanel}` : ''}`}>
        <Home onButtonClick={handleButtonClick} />
        <div className={`slide-in left ${activePanel === 'projects' ? 'visible' : ''}`}>
          <button className={`close-button ${activePanel === 'projects' ? 'visible' : ''}`} onClick={() => handleButtonClick('projects')}>
            Home
          </button>
          <Projects />
        </div>
        <div className={`slide-in left ${showSkills && activePanel === 'projects' ? 'visible skills' : ''}`}>
          <Skills />
        </div>
        <div className={`slide-in right ${activePanel === 'contact' ? 'visible' : ''}`}>
          <Contact onButtonClick={() => handleButtonClick('contact')} />
        </div>
      </div>
    </div>
  );
}

export default App;
