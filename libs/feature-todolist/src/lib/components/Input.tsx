
interface InputProps {
    inputPlaceHolder : string;
    className : string;
    onChange : (e: any) => void;
    inputText ?: string;
    value : string;
}

const clearInput = () =>{
  document.getElementsByTagName('input')[0].innerHTML = "";
}
const Input = (inputProps:InputProps) => {
  return (
    <input onChange={(e)=>{inputProps.onChange(e);clearInput()}} className={inputProps.className} placeholder={inputProps.inputPlaceHolder} value={inputProps.value}/>
  )
}

export default Input