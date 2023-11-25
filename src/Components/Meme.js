import React from 'react'
import pictureIcon from "./Icons/picture.svg"

export default function Meme(){
    return (
        <div>
            <div className='input-container'>
            <input className='input-1'></input>
            <input className='input-2'></input>
            </div>
            <div className='button-container'>
            <button className='button'>Get a new meme image
            <img src={pictureIcon} alt='picture' className='button-icon'></img>
            </button>
            </div>


        </div>
    )
}