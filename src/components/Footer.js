import React from "react";
import theme from "../theme";

function Footer() {
  return (
    <div
      style={{
        height: "15vh",
        background: theme.colors.dark,
        color: theme.colors.lightBeige,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <div>
        <p>© 2024 OtherLife. Todos os direitos reservados.</p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="#"
          style={{ color: theme.colors.lightBeige, textDecoration: "none" }}
        >
          Twitter
        </a>
        <a
          href="#"
          style={{ color: theme.colors.lightBeige, textDecoration: "none" }}
        >
          Discord
        </a>
        <a
          href="#"
          style={{ color: theme.colors.lightBeige, textDecoration: "none" }}
        >
          Contato
        </a>
      </div>
    </div>
  );
}

export default Footer;
