import style from '../feature-todolist.module.css';
import Button from './Button';
import Counter from './Counter';
interface ListProps {
  className?: string;
  listText: string;
}
const ListItem = (listProps: ListProps) => {
  return (
    <div className={style.list}>
      <div className={style.listContent}>
        <div className={style.listText}>
          <Counter className={style.listButton} counterText="1" />
          <span className={style.text}>{listProps.listText}</span>
          <Button isDelete={true} />
        </div>
        <hr className={style.line} />
      </div>
    </div>
  );
};

export default ListItem;
