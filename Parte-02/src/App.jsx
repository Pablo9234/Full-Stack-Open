import './styles.css';
import { Phonebook } from './PhoneBook';

const people = [
  { name: "John", number: 5634563210 },
  { name: "Jane", number: 5634567101},
  { name: "Alice", number: 87901234 },
  { name: "Bob" , number: 67890965 },
  { name: "Charlie", number: 89017845 }
];


export function App() {
  return (
    <>
     <Phonebook
     people = {people}/>
    </>
  )
}




