import { useState, useEffect } from "react";

export function Buttons(){

   const [buttonLike,setButtonLike] = useState({like:0, dontLike:0, idkLike: 0})
   const [allClicks,SettAllClicks] = useState(0)
   const [win,setWinner] = useState(null)
   const [avarege,setAverage] = useState(0)

   const handleLike = () => {
    setButtonLike(prevLikes => ({...prevLikes, like: prevLikes.like + 1}))
    SettAllClicks(prevTotal => prevTotal + 1)
   }

   const handleDontLike = () =>{
    setButtonLike(prevLikes => ({...prevLikes, dontLike: prevLikes.dontLike +1}))
    SettAllClicks(prevTotal => prevTotal + 1)
   }

   const handleIdkLike = () =>{
    setButtonLike(prevLikes => ({...prevLikes, idkLike: prevLikes.idkLike + 1}))
    SettAllClicks(prevTotal => prevTotal + 1)
   }
   
   const winNotes = () => {
    const { like, dontLike, idkLike } = buttonLike;
        

    if (like > dontLike && like > idkLike) {
        setWinner('Me gusta');
    } else if (dontLike > like && dontLike > idkLike) {
        setWinner('No me gusta');
    } else if (idkLike > like && idkLike > dontLike) {
        setWinner('Enmedio');
    } else {
        setWinner('Empate'); 
    }
   }




    return(
        <>
        <h1>
            Give feedback
        </h1>
        <button onClick={handleLike}>
            Good
        </button>
        <button onClick={handleIdkLike}>
            Neutral
        </button>
        <button onClick={handleDontLike}>
            Bad
        </button>
        <h2>
            Statistics:
        </h2>
        <p>Good: {buttonLike.like}</p>
        <p>Neutral: {buttonLike.idkLike}</p>
        <p>Bad: {buttonLike.dontLike}</p>
        <p>All: {allClicks}</p>
        </>
    )

}