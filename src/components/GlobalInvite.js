import React from "react";
import { motion } from "framer-motion";
import theme from "../theme";

function GlobalInvite() {
  return (
    <div
      style={{
        height: "100vh",
        background: theme.colors.terracotta,
        color: theme.colors.lightBeige,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Um Chamado Global
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px" }}>
          A OtherLife não é apenas uma moeda, mas um convite para que toda a
          humanidade decifre o desconhecido e molde nosso futuro. Junte-se a
          nós nessa jornada!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            border: "none",
            background: theme.colors.bronze,
            color: theme.colors.lightBeige,
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Junte-se ao Movimento
        </motion.button>
      </motion.div>
    </div>
  );
}

export default GlobalInvite;
