import { Hello } from "./Hello"

export function App(){

  const props = {
    name: "Pablo Eduardo",
    date: 22
  }

  return(
    <>
    <Hello {...props}/>
    </>
  )
}