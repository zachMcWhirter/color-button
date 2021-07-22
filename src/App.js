import React, { useState } from 'react';
import './App.css';


function App() {

  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [disabled, setDisabled] = useState(false);
  // const isChecked = disabled === false ? true : false;

  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >Change to {newButtonColor}
      </button>
      <input
        // style={{}} 
        type="checkbox"
        defaultChecked={disabled}
        // Allows the checkbox to default to whatever the default value is
        // In this case the default is false
        aria-checked={disabled}
        // <aria-checked> allows screen readers to see the state of the checkbox
        onChange={(e) => setDisabled(e.target.checked)}
        // <checked> is a built-in that sets 
        // or retrieves the boolean state of the check box
      />
    </div>
  );
}

export default App;
