import React from "react";

const img=require("../assests/Meme_image.png")

export default function Header() {
  return (
    <header className="header">
      <img className ="header_image" src={img} alt="MemeSkull" />
      <h2 className="header_title">Meme Generator</h2>
    </header>
  );
}
