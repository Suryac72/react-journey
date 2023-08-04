import style from '../feature-todolist.module.css';
import { listItem } from './Card';

interface ButtonProps {
  buttonText?: string;
  className?: string;
  isDelete?: boolean;
  isEdit?: boolean;
  onClick : (listItem : any) => void;
  listItems : string;
  index ?: number;
  disabled ?: boolean;
}
const Button = (buttonProps: ButtonProps) => {
  return !buttonProps.isDelete ? (
    <button onClick={()=>buttonProps.onClick(buttonProps.listItems)}className={style.button}>{buttonProps.buttonText}</button>
  ) : (
    <svg onClick={()=>buttonProps.onClick(buttonProps.onClick(buttonProps.index))}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M22.1312 9.63126L20.3687 7.86876L15 13.2375L9.63124 7.86876L7.86874 9.63126L13.2375 15L7.86874 20.3688L9.63124 22.1313L15 16.7625L20.3687 22.1313L22.1312 20.3688L16.7625 15L22.1312 9.63126Z"
        fill="#FFD700"
      />
    </svg>
  );
};

export default Button;
