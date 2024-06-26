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
    const [note, setNote] = useState(0); //Cambia el estado segun la nota que este seleccionada
    const [votes,setVotes] = useState(initialVotes); //Lleva el control de cada voto en cada seccion del estado



    const handleLike = () => {
        const newVotes = votes.map((vote, index) => 
            index === note ? { ...vote, good: vote.good + 1 } : vote
        );
        setVotes(newVotes);
    };

    const randonNumber = () => {
        const aleatorio = Math.floor(Math.random() * anecdotes.length)  //Ayuda a generar un numero aleatorio para poder cambiar de nota
        setNote(aleatorio)
    }

    const allAVotes = () => {
        let maxVotes = 0;
        let mostVotedIndex = 0;

        votes.forEach((vote, index) => {
            const totalVotes = vote.good;
            if (totalVotes > maxVotes) {
                maxVotes = totalVotes;
                mostVotedIndex = index;
            }
        });

        return anecdotes[mostVotedIndex];
    };
    

    return <>
    <div className="card">
    <h1>Give feedback</h1>
    <p>
        {anecdotes[note]}
    </p>
    <div className="feedback">
    <button onClick={randonNumber}>Next Note</button> {/*Da paso a la siguiente nota */}
        <button onClick={handleLike}>Good</button>
            <h2>More voted</h2>
            <p>{allAVotes()}</p>
            Votes {votes[note].good}
            </div>
    </div>
     
    </>
}
