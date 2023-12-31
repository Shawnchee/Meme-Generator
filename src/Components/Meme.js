import React from 'react'
import pictureIcon from "./Icons/picture.svg"

export default function Meme(){
   
    return (
        <main>
            <form className='input-container'>
            <input className='input' type='text' placeholder='Top Text'></input>
            <input className='input' type='text' placeholder='Bottom Text'></input>
            <button className='button'>Get a new meme image
            <img src={pictureIcon}  alt='picture' className='button-icon'></img>
            </button>
            </form>
            
        </main>
    )
}