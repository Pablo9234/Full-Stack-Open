import { useState } from "react";

export function Notes() {

    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const initialVotes = anecdotes.map(() => ({ good: 0, neutral: 0, bad: 0})); //Creo un arreglo de objetos para poder tener los votos de cada nota de manera individual
    const [note, setNote] = useState(0);
    const [votes,setVotes] = useState(initialVotes)


    const handleLike=()=>{
        const newVotes = {...votes} // Hago una copia del arreglo de para poder manejar el estado de manera individual
        newVotes[note].good += 1;
        setVotes(newVotes)
    }

    const handleBad = () =>{
        const newVotes = {...votes}
        newVotes[note].bad += 1
        setVotes(newVotes)
    }

    const handleNeutral = () =>{
        const newVotes = {...votes}
        newVotes[note].neutral += 1
        setVotes(newVotes)
    }


    const randonNumber = () => {
        const aleatorio = Math.floor(Math.random() * anecdotes.length)  //Ayuda a generar un numero aleatorio para poder cambiar de nota
        setNote(aleatorio)
    };

    return <>
    <h1>Give feedback</h1>
    <p>
        {anecdotes[note]}
    </p>

        <button onClick={randonNumber}>Siguiente Nota</button> {/*Da paso a la siguiente nota */}

        <h2>Votar</h2>
        <button onClick={handleLike}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>

            <h2>Statistics:</h2>

            <p>Good: {votes[note].good}</p>
            <p>Neutral: {votes[note].neutral}</p>
            <p>Bad: {votes[note].bad}</p>
    </>
}
