import React from "react";
import Header from "./Components/Header"
import Meme from "./Components/Meme"
import "./styles/memeGenerator.css"
export default function MemeApp(){
    return(
         <div>
            <Header/>
            <Meme/>
        </div>
    )
}