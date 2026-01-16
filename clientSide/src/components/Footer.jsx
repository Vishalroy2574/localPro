import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} LocalPro — All Rights Reserved.</p>
      {/* <p>
        Designed by
        <a href="https://www.instagram.com/aditya_xtm"> Aditya Singh</a>
        <a href="https://www.instagram.com/vansh_jaiswal57/"> Vansh Jaiswal</a>
        <a href="https://www.instagram.com/amkr221/"> Amit Kumar</a>
        <a href="https://www.instagram.com/mr_kush__991/"> Ajay Kushwaha</a>
      </p> */}

      <div style={{ marginTop: 10 }}>
  <a href="mailto:vishalroy2574@gmail.com" style={{ marginRight: 15 }}>
    Email Us
  </a>
  <a href="https://www.linkedin.com/in/vishalroy2574" target="_blank" rel="noreferrer">
    LinkedIn
  </a>
</div>

     
    </footer>
  );
}
