import style from '../feature-todolist.module.css';
import Button from './Button';
import Counter from './Counter';
import Heading from './Heading';
import Input from './Input';
import ListItem from './ListItem';

interface CardProps {
    className ?: string;
}
const Card = (cardProps: CardProps) => {
  return (
    <div className={style.card}>
      <Heading className={style.heading} headingText="Todo List" />
      <div className={style.inputSection}>
        <Input inputPlaceHolder="Title..." className={style.input} />
        <Counter className={style.counter} counterText='0'/>
        <Button buttonText="Add" className={style.button} />
      </div>
      <br/><br/>
      <div className={style.listSection}>
            <ListItem listText='Hello World'/>
      </div>
    </div>
  );
};

export default Card;
