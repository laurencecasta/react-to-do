import React from 'react'

import Item from './Item'

const Overview = (props) => {
  
  const { tasks, handleDelete, handleEdit, handleEditChange} = props;
  let renderedTasks = tasks.map((task, index) => {
    return(
      <div>
        <div className="Row" key={task.id}>
        <Item
          task = {task}
          index = {index}
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
          handleEditChange = {handleEditChange}
        />
        <button className={task.isEdit ? "btn btn-primary" : "btn btn-secondary"} onClick={(event) => handleEdit(event, task.id)}>{task.isEdit ? 'SUBMIT' : 'EDIT'}</button>
        {/*use div instead of button element when not wanting form submission on click*/}
        </div>
        <hr/>
      </div>
    )
  });

  return (
    <ul>
      { renderedTasks }
    </ul>
  )
}

export default Overview