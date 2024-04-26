import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle toggling dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Determine class name based on dark mode state
  const appClassName = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClassName}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
