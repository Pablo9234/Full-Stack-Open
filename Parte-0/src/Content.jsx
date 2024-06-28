//Content muestra las partes y su número de ejercicios 

export function Content ({parts}){
   return(
    <>
        {parts.map((part,index) =>(
          <p key={index}>
          {part.name} {part.exercises}
        </p>
        ))}
    </>
   )
}