import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }

    let tabContent = <p>Please select a Topic!</p> ;
    if(selectedTopic){
      tabContent = (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>

      </div>);

    }

    return(
        
        /* 
          if we are passing built in html tag then we need to pass in lower case with double qote
          ex: buttonContainer = "menu"
          if we are passing custom React component as argumument then we need to use first latter uppercase and wrap in{}
          ex:  buttonContainer = {Section}
         */
        <Section title="Examples" id="examples">
        <Tabs 
        
        /*3rd approach in Tabs.jsx
          ButtonContainer = "menu"  */


          
        buttons={
          <>
            <TabButton isSelected={selectedTopic === "components"} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={()=>handleSelect('state')}>State</TabButton>
          
          </>
        }>
          {tabContent}
        </Tabs>
          {/* <menu> */}
           {/*passing function as a value so it will not get executed here, but will get executed at
           in TabButton component onClick 
            <TabButton onSelect={handleSelect}>Components</TabButton> */} 
            {/* 
            if we want to identify button by clcik and then we need to pass some string to identify it
            but if we direclty pass argument to function it will get executed here itself , to avoid this w
            we can pass annonymious arrow function function as a value, so here we can call handleSelect as
            a normal function and pass any arguments

            */}
            
          {/* </menu> */}
         {/* {!selectedTopic ? (<p>Please select a Topic!</p>) : (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div>
          )} */}

          {/*Another way to achive same condition  */}
         {/*  {!selectedTopic && <p>Please select a Topic!</p> }
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>

          </div> } */}

          {/*Best Way of doing it  */}
         
     
        </Section>
    );
}