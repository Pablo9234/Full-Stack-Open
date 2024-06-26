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
    const [note, setNote] = useState(0); //Cambia el estado segun la nota que este seleccionada
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)); //Lleva el control de cada voto en cada seccion del estado

    const handleLike = () => {
        const newVotes = [...votes]
        newVotes[note] = newVotes[note] + 1
        setVotes(newVotes)
    }
    const mostVoted = () => {
        let maxVotes = -1;
        let maxIndex = -1;

        votes.forEach((vote, index) => {
            if (vote > maxVotes) {
                maxVotes = vote;
                maxIndex = index;
            }
        });

        return maxIndex;
    }

    const randonNumber = () => {
        const aleatorio = Math.floor(Math.random() * anecdotes.length)  //Ayuda a generar un numero aleatorio para poder cambiar de nota
        setNote(aleatorio)
    }

    return (
        <div className="card">
            <h1>Give feedback</h1>
            <p>{anecdotes[note]} <b>Votes: {votes[note]}</b></p>
            <div className="feedback">
                <button onClick={randonNumber}>Next Note</button> {/* Da paso a la siguiente nota */}
                <button onClick={handleLike}>Good</button>
                <h2>Most voted</h2> {/* Corrección ortográfica */}
                <div>
                    <p>{anecdotes[mostVoted()]}</p>
                </div>
            </div>
        </div>
    )
}
