import './global.css';
import styles from './App.module.css'

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { EmptyListMessage } from './components/EmptyListMessage'
import { Header } from './components/Header';
import { Task } from './components/Task';

import { PlusCircle } from 'phosphor-react'

export function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTaskList(e) {
    e.preventDefault();
    
    setTaskList([
      ...taskList, 
      {
        id: uuidv4(),
        content: newTask,
        isChecked: false
      }
    ]);

    setNewTask('');
  }

  function DeleteTask(taskToDelete) {
    const taskWhitDeleteOne = taskList.filter(taskFiltered => {
      return taskFiltered.content !== taskToDelete
    })

    setTaskList(taskWhitDeleteOne);
  }

  function changeTaskIsChecked(taskChecked) {
    const taskListChecked = taskList.map(task => {
      if (task.id === taskChecked) {
        task.isChecked = !task.isChecked;
        return task;
      }
      return task;
    })

    setTaskList(taskListChecked)
  }

  function handleNewTask(e) {
    e.target.setCustomValidity('');
    setNewTask(e.target.value);
  }

  function handleTaskInvalid(e) {
    e.target.setCustomValidity('Adicione uma nova tarefa')
  }

  const countTasks = taskList.length;
  const countTaskChecked =  taskList.filter(task => task.isChecked === true).length

  return (
    <main>
      <Header />

      <div className={styles.content}>
       <form onSubmit={handleCreateNewTaskList} className={styles.search}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa'
            onChange={handleNewTask}
            required
            value={newTask}
            onInvalid={handleTaskInvalid}
          />
      
           <button  type="submit" >
            Criar 
            <PlusCircle size={20}/>
          </button>
        </form>

        <section className={styles.tasks}>
          <header>
            <div className={styles.totalTasksCreated}>
              <strong>Tarefas criadas</strong>
              <span>{countTasks}</span>
            </div>

            <div className={styles.totalCompletedTasks}>
              <strong>Concluídas</strong>
              <span>{`${countTaskChecked} de ${countTasks}`}</span>
            </div>
          </header>

          {taskList.length === 0 && <EmptyListMessage />}

          {
            taskList.map(tasks => {
              return (
                <Task 
                  key={String(tasks.id)}
                  id={tasks.id}
                  content={tasks.content}
                  onDeleteTask={DeleteTask}
                  isCompleted={changeTaskIsChecked}
                />
              )
            })                    
          }
        </section>
      </div>
    </main>
  )
}

