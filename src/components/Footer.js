import React from "react";
import theme from "../theme";

function Footer() {
  const handleClick = () => {
    const url = "https://x.com/TrueSolanaDEV";
    window.open(url, "_blank");
  };

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
        <p>© 2024 OtherLife</p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }} onClick={handleClick}>
        <a
          href="#"
          style={{ color: theme.colors.lightBeige, textDecoration: "none" }}
        >
          TWITTER
        </a>
      </div>
    </div>
  );
}

export default Footer;
