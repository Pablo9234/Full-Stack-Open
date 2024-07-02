import { useState } from "react"
import './styles.css';

export function Notes({ notes }) {

    const [note, setNote] = useState(notes)
    const [newNote, setNewNote] = useState(
        "... a new note"
    )
    const [showAll, setShowAll] = useState(true)

    const noteToShow = showAll
        ? note
        : note.filter(note => note.important === true)
    
    const addNote = (event) => {
        event.preventDefault()         //Evita que se recargue la pagina el evento prederminado de un form
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
            id: note.length + 1,
        }
        setNote(note.concat(noteObject))
        setNewNote(' ')
    }

    const handleNoteChange = (event) => {

        setNewNote(event.target.value) //Cambiamos el valor de input controlandolo con el estado
    }


    return (
        <>
            <div className="card">
                <h1>
                    Notes
                </h1>
                <ul>
                    {noteToShow.map(note => <li key={note.id}>
                        {note.content}
                    </li>)}
                </ul>
                <form onSubmit={addNote}>
                    <input value={newNote}
                        onChange={handleNoteChange} />
                    <button type="submit">Save</button>
                    <button onClick={() => setShowAll(!showAll)}>
                        Show {showAll ? 'important' : 'all'}
                    </button>
                </form>
            </div>
        </>
    )
}