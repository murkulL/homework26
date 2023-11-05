import React, { useContext } from 'react';
import { ThemeContext } from '../App';


function Theme() {
  const {mode, setMode} = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = mode === 'light' ? 'dark' : 'light';
    setMode(newTheme);

  }
  return (
    <>
      <h3>Theme</h3>
      <button onClick={handleToggleTheme}>Toggle theme</button>
    </>
    

  )
}

export default Theme