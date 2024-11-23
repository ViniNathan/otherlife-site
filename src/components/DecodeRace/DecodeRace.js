import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import object from "../../assets/object.png";
import code from "../../assets/code.png";
import "./DecodeRace.css"; // Importando o arquivo CSS

function DecodeRace() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  // Adiciona e limpa o evento de scroll ao carregar e descarregar o componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Text1 =
    "Em um universo vasto e inexplorado, onde bilhões de estrelas brilham solitárias, a humanidade sempre se perguntou: \"Estamos sozinhos?\". A resposta veio não de sinais de rádio, telescópios ou satélites, mas de uma descoberta revolucionária feita por cientistas independentes trabalhando com dados de mineração de asteroides. Durante uma missão financiada por uma coalizão de entusiastas espaciais e tecnólogos, um pequeno asteroide trouxe à Terra mais do que metais preciosos – trouxe códigos biológicos alienígenas, armazenados em forma de dados.";
    const Text2 =
    "Esses códigos, uma linguagem desconhecida que parecia misturar biologia e algoritmos, continham padrões de vida de outro mundo. Eles não eram apenas uma prova de vida extraterrestre, mas sim fragmentos da cultura, ciência e existência de uma civilização muito além da nossa. A humanidade percebeu que esse conhecimento poderia ser a chave para avanços incríveis, mas também um risco se caísse nas mãos erradas."

  return (
    <div className="decode-race-container">
      <motion.div>
        <h2 className="decode-race-title">A Corrida para Decifrar</h2>
        <p className="decode-race-text">
          {Text1}
        </p>
        <p className="decode-race-text">
          {Text2}
        </p>
        <motion.img
          initial={{ opacity: 1, y: 1000 }}
          animate={{
            y: -1.4*scrollY, // O texto se move para cima conforme o scroll
          }}
          src={object}
          className="object-image"
        />
      </motion.div>
    </div>
  );
}

export default DecodeRace;
