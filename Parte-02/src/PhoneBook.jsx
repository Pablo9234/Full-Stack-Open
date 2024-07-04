import { useState } from "react"
import './styles.css';

export function Phonebook({people}){

    const [persons ,setPersons] = useState(people)
    
    const[newName, setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')

    const handleName = (event) => {
        setNewName(event.target.value)    //Maneja el estado del input del name
    }

    const handleNumber = (event) =>{
        setNewNumber(event.target.value)  //Maneja el estado del input del number
    }

    const checkPerson = (name) => { 
        return persons.some(person => person.name === name); //Verifico si el nombre esta en la lista
      };
    
   
    const addPerson = (event) => {
        event.preventDefault()
        if (checkPerson(newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
          }
        const personNew = {
            name : newName,  
            number: newNumber
        }

        setPersons(persons.concat(personNew))
        setNewName('')
        setNewNumber('')
    }

    return (
        <>
           <div>
            <h1>PhoneBook</h1>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input onChange={handleName} value={newName} />
                    </div>
                    <div>
                    Number: <input onChange={handleNumber}  value={newNumber}/>
                </div>
                <div className="button">
                    <button type="submit">Save info</button>
                </div>
            </form>
            <h2>
                Contacts
            </h2>
            <div className="contacts" >
                    {persons.map((person, index) => (
                       <ul key={index}> 
                        <li>  {person.name} {person.number}</li>
                        </ul>
                    ))} 
                </div>
           </div>
        </>
    )
} 
