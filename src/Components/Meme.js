import React from "react";
import memesData from "./memesData";
export default function Meme() {
  
  // const [memeImage, setMemeImage] = React.useState("")
 


  //ye pure m hum ek value de rhe the ya fir array 

  //next vale m hum sirf object ka use krenge


  // function getMemeImage(){
  //   const memesArray = memesData.data.memes
  //   const randomNumber = Math.floor(Math.random()*memesArray.length)
  //   setMemeImage(memesArray[randomNumber].url)
  // }


  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imghflip.com/1bij.jpg"
  })

  const [allMemesImages, setAllMemeIMages] = React.useState(memesData)

  function getMemeImage(){
    const memesArray = allMemesImages.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    const url =memesArray[randomNumber].url
    setMeme(prevMeme => ({...prevMeme, randomImage:url
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  
  return (
    <main>
      <div className="form_meme">
        <input
          className="Input_box"
          type="text"
          alt="first-box"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="Input_box"
          type="text"
          alt="second-box"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
          name="bottomText"
        />
        <button className="form_button" onClick={getMemeImage}>Get a new Meme Image 🖼 </button>
        </div>
        <div className="meme">
        <img src={meme.randomImage} className ="meme_image" alt="Memes"/>
        <h2 className="meme_text top">{meme.topText}</h2>
        <h2 className="meme_text bottom ">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
