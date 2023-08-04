import style from '../feature-todolist.module.css';
import Button from './Button';
import Counter from './Counter';
interface ListProps {
  className?: string;
  listText: string;
  itemIndex : number;
  todoList : string[];
  setTodoList : React.Dispatch<React.SetStateAction<string[]>>;
}


const ListItem = (listProps: ListProps) => {

  const deleteItem = (listItem : string) => {
    const updatedArray = listProps.todoList.filter((item) => item !== listItem);
    listProps.setTodoList(updatedArray);
  } 
  return (
    <div className={style.list}>
      <div className={style.listContent}>
        <div className={style.listText}>
          <Counter className={style.listButton} counterText={listProps.itemIndex} />
          <span className={style.text}>{listProps.listText}</span>
          <Button key={listProps.itemIndex} index={listProps.itemIndex} listItems={""} onClick={()=>deleteItem(listProps.listText)} isDelete={true} />
        </div>
        <hr className={style.line} />
      </div>
    </div>
  );
};

export default ListItem;
