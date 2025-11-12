import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Rojgar-Setu — All Rights Reserved.</p>
      <p>
        Designed by
        <a href="https://www.instagram.com/aditya_xtm"> Aditya Singh</a>
        <a href="https://www.instagram.com/vansh_jaiswal57/"> Vansh Jaiswal</a>
        <a href="https://www.instagram.com/amkr221/"> Amit Kumar</a>
        <a href="https://www.instagram.com/mr_kush__991/"> Ajay Kushwaha</a>
      </p>
      <div style={{ marginTop: 10 }}>
        <a href="mailto:adityaxtm25@gmai.com">Email Us</a>
        <a href="https://www.linkedin.com/in/adityasingh7345">LinkedIn</a>
      </div>
    </footer>
  );
}
