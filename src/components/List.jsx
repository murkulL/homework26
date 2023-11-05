import React, {useContext} from 'react'
import { Context } from '../App'
import Theme from './Theme';
function List() {
  const data = useContext(Context)
  console.log(data)
  return (
    <>
      <h3>List</h3>
      <ul>
        {data.map((task) => <li key={task}>{task}</li>)}
      </ul>
      <Theme />
    </>
  
  )
}

export default List