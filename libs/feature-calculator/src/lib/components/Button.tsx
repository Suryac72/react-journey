import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  buttonText: string;
  buttonClass?: string;
  symbol?: string;
  onClick ?: (buttonString : string)=>void;
}

const Button = (buttonProps: ButtonProps) => {
  return (
    <>
      {buttonProps.symbol ? (
        <button onClick={()=>buttonProps.onClick?.(buttonProps.buttonText)} className={`${buttonProps.buttonClass}`}>
          <FontAwesomeIcon icon={faWindowMaximize} />
        </button>
      ) : (
        <button onClick={()=>buttonProps.onClick?.(buttonProps.buttonText)} className={`${buttonProps.buttonClass}`}>
          {buttonProps.buttonText}
        </button>
      )}
    </>
  );
};

export default Button;
