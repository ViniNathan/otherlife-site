import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import alien from "../../assets/ALIEN.png";
import "./LiveBlockchain.css";

function LiveBlockchain() {
  const [scrollY, setScrollY] = useState(0);

  // Função que detecta o scroll da página
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
    "To ensure that this treasure was not monopolized by corporations or governments, a group of visionaries created OtherLife, a cryptocurrency that acts as a bridge between our civilization and the mysteries of alien codes. The main objective of OtherLife is to decentralize access to extraterrestrial knowledge.";
  const Text2 =
    "Each OtherLife token represents a fragment of the alien code, allowing holders to help unlock its meaning.";

  return (
    <div className="live-blockchain-container">
      {/* Imagem do alien deslizando de baixo para cima */}
      <motion.div
        style={{
          backgroundImage: `url(${alien})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "absolute",
          bottom: 0,
          left: "90%",
          width: "200px",
          height: "200px",
          zIndex: 0,
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="alien-image"
      />

      {/* Conteúdo principal da seção */}
      <motion.div className="live-blockchain-content">
        {/* Título movendo-se da esquerda para a direita */}
        <motion.h2 className="live-blockchain-title">ALIEN token</motion.h2>
        <p className="decode-race-text beige">{Text1}</p>
        <p className="decode-race-text beige">{Text2}</p>
      </motion.div>
    </div>
  );
}

export default LiveBlockchain;
