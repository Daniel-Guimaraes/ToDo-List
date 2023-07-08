import styles from './EmptyListMessage.module.css';

import { ClipboardText } from 'phosphor-react'


export function EmptyListMessage() {
  return (
    <div className={styles.message}>
      <ClipboardText size={50} />
      
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}