import Button from './components/Button';
import Card from './components/Card';
import styles from './feature-todolist.module.css';

/* eslint-disable-next-line */

export function FeatureTodolist() {
  return (
    <div className={styles.App}>
       <Card/>
    </div>
  );
}

export default FeatureTodolist;
