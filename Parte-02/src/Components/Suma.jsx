export function Suma({parts}){
    const total = parts.reduce((sum, part) => sum + part.exercises, 0); 
    return(
        <p>Total {total}</p>
    )
}