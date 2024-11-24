import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import asteroid from "../../assets/landing_page_image2.png";
import pumpfun from "../../assets/pumpfun-logo.png";
import "./LandingPage.css";

function LandingPage() {
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

  const handleClick = () => {
    const url = "https://pump.fun/coin/DrJjgppcVjBidej2uDDTfaMV32LykMQBAqnDccJVpump";
    window.open(url, "_blank");
  };

  return (
    <div className="landing-page">
      {/* Background do asteroide com animação de translação de baixo para cima */}
      <motion.div
        style={{
          backgroundImage: `url(${asteroid})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: scrollY > 100 ? 1 : 0,
          y: scrollY > 100 ? 0 : 100, // A imagem se move de baixo para cima conforme o scroll
        }}
        transition={{ duration: 1 }}
        className="asteroid-background"
      />

      {/* Container de texto com animação de desaparecimento conforme o scroll */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: 1 - scrollY / 500, // O texto vai desaparecer conforme o scroll
          y: -scrollY / 3, // O texto se move para cima conforme o scroll
        }}
        transition={{ duration: 1 }}
        className="text-container"
      >
        <h1>OtherLife</h1>
        <p>ALIEN AI TOKEN</p>
        <img src={pumpfun} className="pumpfun-logo" onClick={handleClick}/>
      </motion.div>
    </div>
  );
}

export default LandingPage;
