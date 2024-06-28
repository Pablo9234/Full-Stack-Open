import { Header } from "./Header";
import { Content } from "./Content";
import { Suma } from "./Suma";

export function Course({course}){
   return(
    <>
    <Header name={course.name}/>
    <Content parts = {course.parts}/>
    <Suma parts = {course.parts}/>
    </>
   )    
   
}