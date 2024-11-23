import React from "react";
import { motion } from "framer-motion";
import theme from "../theme";

function Applications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      style={{
        height: "100vh",
        background: theme.colors.bioGreen,
        color: theme.colors.dark,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: theme.colors.lightBeige,
          }}
        >
          Aplicações e Projetos
        </motion.h2>
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            maxWidth: "800px",
          }}
        >
          A OtherLife está moldando o futuro com aplicações em saúde, IA e
          energia limpa. Sua participação ajuda a financiar projetos
          inovadores.
        </motion.p>
        <motion.div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <motion.div
            variants={itemVariants}
            style={{
              background: theme.colors.terracotta,
              padding: "1.5rem",
              borderRadius: "10px",
              color: theme.colors.lightBeige,
              maxWidth: "250px",
              textAlign: "center",
            }}
          >
            <h3>Saúde</h3>
            <p>Decifrando códigos para avanços médicos.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            style={{
              background: theme.colors.bronze,
              padding: "1.5rem",
              borderRadius: "10px",
              color: theme.colors.lightBeige,
              maxWidth: "250px",
              textAlign: "center",
            }}
          >
            <h3>IA</h3>
            <p>Otimização de inteligência artificial para resolver problemas globais.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            style={{
              background: theme.colors.sand,
              padding: "1.5rem",
              borderRadius: "10px",
              color: theme.colors.dark,
              maxWidth: "250px",
              textAlign: "center",
            }}
          >
            <h3>Energia Limpa</h3>
            <p>Desbloqueando soluções para energia sustentável.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Applications;
