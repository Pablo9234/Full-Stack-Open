//Total muestra el número total de ejercicios.

export function Total({parts}){
    
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);

    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}
