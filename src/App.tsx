import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {

  return (
    <main className="container">
      <h1>EstuDados</h1>

      <button className="startTimerButton">Começar</button>

    </main>
  );
}

export default App;
