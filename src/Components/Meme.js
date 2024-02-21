import React from 'react'
import pictureIcon from "./Icons/picture.svg"
import memesData from "../memesData.js"

export default function Meme(){

    let url

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
    }
   
    return (
        <main>
            <form className='input-container'>
            <input className='input' type='text' placeholder='Top Text'></input>
            <input className='input' type='text' placeholder='Bottom Text'></input>
            <button className='button'
            onClick={getMemeImage}
            >Get a new meme image
            <img src={pictureIcon}  alt='picture' className='button-icon'></img>
            </button>
            </form>
            
        </main>
    )
}