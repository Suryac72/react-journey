
interface InputProps {
    inputPlaceHolder : string;
    className : string;
}

const Input = (inputProps:InputProps) => {
  return (
    <input className={inputProps.className} placeholder={inputProps.inputPlaceHolder}/>
  )
}

export default Input