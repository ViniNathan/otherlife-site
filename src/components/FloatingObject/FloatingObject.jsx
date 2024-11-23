import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import object from "../../assets/object.png";

const FloatingObject = () => {
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

    return (
      <motion.img
      initial={{ opacity: 1, y: 1000 }}
      animate={{
        y: -1.4*scrollY, // O texto se move para cima conforme o scroll
      }}
      src={object}
      className="object-image"
    />
    )
}

export default FloatingObject