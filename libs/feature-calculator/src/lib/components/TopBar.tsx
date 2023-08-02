import { topbarText } from "../data/data";
import Button from "./Button";
interface TopbarProps {
    topbarClass ?: string;
    symbolClass ?:string;
}
const TopBar = (topbarProps : TopbarProps) => {
  return (
    <div className="topbar">
        {
            topbarText.map((text) => (
                text === '&#x1F5D6;' ? <Button symbol={text} buttonText={text} buttonClass={`${topbarProps.symbolClass}`} /> : <Button buttonText={text} buttonClass={`${topbarProps.topbarClass}`}/>
            ))
        }
    </div>
  )
}

export default TopBar