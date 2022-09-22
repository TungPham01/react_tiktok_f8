import ContentText from "./ContentText";
import { useState, createContext, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

function App() {
  const context = useContext(ThemeContext);

  return (
      <div style={{ padding: 32 }}>
        <button onClick={context.toggleTheme}> Toggle theme</button>
        <ContentText />
      </div>
  );
}

export default App;
