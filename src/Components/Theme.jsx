import React, { useState, useEffect } from 'react';

function Theme() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to set dark mode based on user preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);
  //useEffectMode(()=> )

  // Effect to update dark mode preference
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      {/* Your other components */}
      <li className="hidedesktop darkmodeswitch">
        <div className="switch-wrapper">
          <label className="switch" htmlFor="niwax">
            <input type="checkbox" id="niwax" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </li>
    </div>
  );
}

export default Theme;
