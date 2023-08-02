import Button from "./Button";
import "./style.css";
import { buttonTexts } from "../data/data";
import Screen from "./Screen";
import TopBar from "./TopBar";
import { useState } from "react";
interface ContainerProps {
  containerClass?: string;
}
const Container = (container: ContainerProps) => {

  const [input,setInput] = useState("");
  const handleButtonClick = (value : string) => {
    switch(value){
      case 'C' : 
         setInput("");
         break;
      
      case '=' :
        if(input === ''){
          break;
        }
        try {
          const evaluatedResult = eval(input);
          setInput(String(evaluatedResult));
        } catch (error) {
          setInput('Error')
        }
         break;
      case 'DEL' :
        setInput((prevInput) => prevInput.slice(0, prevInput.length - 1));
        break;
      default : 
        if(input === '' && (value === '.' || value === 'CE' || value === '+' || value === '-' || value === '*' || value === '/')){
           break;
        }
        setInput((prevInput) => prevInput + value);
    }
  }

  
  return (
    <div className="container">
      <div>
        <TopBar topbarClass="button" symbolClass="symbol" />
        <Screen screenText = {input}/>
      </div>
      <div className="button-container">
        {buttonTexts.map((button) => (
          <Button onClick={(button)=>handleButtonClick(button)}buttonText={button} buttonClass="button " />
        ))}
        <Button onClick={(button)=>handleButtonClick(button)} buttonText="=" buttonClass="button equal" />
      </div>
    </div>
  );
};

export default Container;
