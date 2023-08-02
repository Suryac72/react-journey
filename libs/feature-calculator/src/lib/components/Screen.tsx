import './style.css';
interface ScreenProps {
  screenText : string;
}
const Screen = (screen : ScreenProps) => {
  return (
    <input className='input' value={screen.screenText}/>
  )
}

export default Screen