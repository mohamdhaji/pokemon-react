import React from "react";

export default function Footer(props) {
  return (
    <footer style={{backgroundColor:props.footerColor}} className="footer">
      <div className="footer-left">
        Make with ❤️ for the PokéSpartans team Platzi Master
      </div>
      <div className="footer-right">Ours Team</div>
    </footer>
  );
}
