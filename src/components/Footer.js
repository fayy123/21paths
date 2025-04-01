import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <footer style={{ textAlign: "center", padding: "10px", background: "#333333" }}>
        <p>© {year} Astrólogo y Vidente en Estados Unidos. Todos los derechos reservados.</p>
        <p>© {year} Astrologer and Seer in the United States. All rights reserved.</p>
    </footer>
    );
};

export default Footer;