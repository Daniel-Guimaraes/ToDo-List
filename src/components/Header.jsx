import styles from './Header.module.css';

import toDoLogo from '../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="logo da aplicação To-do List" />
      <strong>
        To<span>do</span>
      </strong>
    </header>
  )
}