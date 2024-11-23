import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aliens from "../../assets/aliens2.png";
import './LiveBlockchain.css';

function LiveBlockchain() {
  const { scrollYProgress } = useScroll();

  // Translação horizontal baseada no progresso do scroll
  const xTitle = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "100%"]);
  const xParagraph = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div className="live-blockchain-container">
      <motion.div className="live-blockchain-content">
        {/* Título movendo-se da esquerda para a direita */}
        <motion.h2
          style={{ x: xTitle }}
          className="live-blockchain-title"
        >
          ALIEN BLOCKCHAIN
        </motion.h2>

        {/* Parágrafo movendo-se da direita para a esquerda */}
        <motion.img
          className="live-blockchain-img"
          src={aliens}
        />
      </motion.div>
    </div>
  );
}

export default LiveBlockchain;
