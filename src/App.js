import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import DecodeRace from "./components/DecodeRace/DecodeRace";
import LiveBlockchain from "./components/LiveBlockchain/LiveBlockchain";
import Applications from "./components/Applications";
import GlobalInvite from "./components/GlobalInvite";
import Footer from "./components/Footer";

function App() {
      // Cria o elemento do cursor
      const cursor = document.createElement("div");
      cursor.classList.add("cursor");
      document.body.appendChild(cursor);
    
      // Atualiza a posição do cursor com base no movimento do mouse
      document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`; // Ajusta para centralizar
      });
    
      
  return (
    <div className="App">
      <LandingPage />
      <DecodeRace />
      <LiveBlockchain />
      <Applications />
      <GlobalInvite />
      <Footer />
    </div>
  );
}

export default App;
