import React from "react";
import { motion } from "framer-motion";
import FloatingObject from "../FloatingObject/FloatingObject";
import "./DecodeRace.css"; // Importando o arquivo CSS

function DecodeRace() {

    const Text1 =
    "In a vast and unexplored universe, where billions of stars shine alone, humanity has always wondered:";
    const Text2 = "\"Are we alone?\"";
    const Text3 = "The answer came not from radio signals, telescopes or satellites, but from a revolutionary discovery made by independent scientists working with asteroid mining data. During a mission funded by a coalition of space enthusiasts and technologists, a small asteroid brought more than precious metals to Earth - it brought alien biological codes, stored in the form of data."
    const Text4 =
    "These codes, in an unknown language that seemed to mix biology and algorithms, contained patterns of life from another world and were encrypted on a blockchain. They were not just proof of extraterrestrial life, but fragments of the culture, science and existence of a civilization far beyond our own. Humanity realized that this knowledge could be the key to incredible advances, but also a risk if it fell into the wrong hands."

  return (
    <div className="decode-race-container">
      <div className = "decode-text-container">
        <h2 className="decode-race-title">Decode It</h2>
        <p className="decode-race-text">
          {Text1}
        </p>
        <p className="decode-race-text">
          {Text2}
        </p>
        <p className="decode-race-text">
          {Text3}
        </p>
        <p className="decode-race-text">
          {Text4}
        </p>
        <FloatingObject />
      </div>
    </div>
  );
}

export default DecodeRace;
