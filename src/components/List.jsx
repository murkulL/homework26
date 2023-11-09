import React, {useContext} from 'react'
import { TaskContext } from '../App'
import ThemeBackground from './ThemeBackground';
function List() {
  const data = useContext(TaskContext)
  return (
    <>
      <h3>List</h3>
      <ul>
        {data.map((task) => <li key={task}>{task}</li>)}
      </ul>
      <ThemeBackground />
    </>
  
  )
}

export default List