import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS } from "../data.js"

/* Method 1 .. Generay way of  doing it 
function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
*/

/* Method 2 Optimsed way of coding */
/*  Object Destructuring way of doing it when property name is same with passing object */


/*function CoreConcept({image,title, description }){
  return(
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
} */

export default function CoreConcepts(){
    return(
    <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/*Dynamically outputting List */}
          {CORE_CONCEPTS.map((conceptItem)=>(<CoreConcept  key={conceptItem.title} {...conceptItem}/>))}
         
         {/* 
          <CoreConcept 
          title= {CORE_CONCEPTS[0].title}
          description={ CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>
          */}

          {/* Optimised code*/} 
          {/* 
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> 
          */} 
        </ul>
        </section>
    );
}