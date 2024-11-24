import React from "react";
import { motion } from "framer-motion";
import aliens from "../../assets/aliens3.png";
import './LiveBlockchain.css';

function LiveBlockchain() {
  const Text1 = "To ensure that this treasure was not monopolized by corporations or governments, a group of visionaries created OtherLife, a cryptocurrency that acts as a bridge between our civilization and the mysteries of alien codes. The main objective of OtherLife is to decentralize access to extraterrestrial knowledge."
  const Text2 = "Each OtherLife token represents a fragment of the alien code, allowing holders to help unlock its meaning."

  return (
    <div className="live-blockchain-container">
      <motion.div className="live-blockchain-content">
        {/* Título movendo-se da esquerda para a direita */}
        <motion.h2
          className="live-blockchain-title"
        >
          ALIEN token
        </motion.h2>
        <p className="decode-race-text beige">
          {Text1}
        </p>
        <p className="decode-race-text beige">
          {Text2}
        </p>
      </motion.div>
    </div>
  );
}

export default LiveBlockchain;
