import { useState } from 'react';
import style from '../feature-todolist.module.css';
import Button from './Button';
import Counter from './Counter';
import Heading from './Heading';
import Input from './Input';
import ListItem from './ListItem';

interface CardProps {
  className?: string;
}

export interface listItem {
  id: number;
  listItemName: string;
}
const Card = (cardProps: CardProps) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [listItem, setListItem] = useState<string>('');
  const [input, setInput] = useState('');
  const itemsPerPage = 10;
  const totalPages = Math.ceil(todoList.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = todoList.slice(startIndex, endIndex);

  const handleSubmit = (e: any) => {
    setListItem(e.target.value);
  };

  const addToList = (listItem: string) => {
    if (listItem !== '') {
      setTodoList([...todoList, listItem]);
      setListItem("");
    }
  };

  return (
    <div className={style.card}>
      <Heading className={style.heading} headingText="Todo List" />
      <div className={style.inputSection}>
        <Input
          value={listItem}
          onChange={handleSubmit}
          inputPlaceHolder="Title..."
          className={style.input}
          inputText={input}
        />
        <Counter className={style.counter} counterText={todoList.length} />
        <Button
          listItems={listItem}
          onClick={addToList}
          buttonText="Add"
          className={style.button}
        />
      </div>
      <br />
      <br />
      <div className={style.listSection}>
        {todoList.map((listItem, index) => (
          <ListItem
            key={index}
            todoList={todoList}
            setTodoList={setTodoList}
            itemIndex={index + 1}
            listText={listItem}
          />
        ))}
      </div>
      {/* {
        todoList.length>=9 ? 
        <div className={style.pagination}>
        <Button listItems="" buttonText="Previous" onClick={handlePrevPage} disabled={currentPage === 1} />
        <span className={style.pageNumber}>{currentPage}</span>
        <Button listItems="" buttonText="Next" onClick={handleNextPage} disabled={currentPage === totalPages} />
      </div> : null
      } */}
      
    </div>
  );
};

export default Card;
