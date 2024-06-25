export function Hello(props){

    const guesYear = () =>{
        const yearNOw = new Date().getFullYear()
        return yearNOw - props.date
    }   
    return(
         <div>
            <p>Hello {props.name}</p>
            {guesYear()}
        </div> 
    )
}