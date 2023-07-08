import { Check, Trash } from 'phosphor-react'

import styles from './Task.module.css';

export function Task({ id, content, onDeleteTask, isCompleted }) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCheckedTask() {
    isCompleted(id);
  }
  
  return (
    <div className={styles.task}>
      <label className={styles.checkMark}>
        <input type="checkbox"  onClick={handleCheckedTask} />

        <span className={styles.checkMask}>
          <Check />
        </span>
        
        <p className={styles.content}> 
          {content}
        </p>
      </label>

      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  )
}