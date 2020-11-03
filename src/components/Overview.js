import React from 'react'

import Item from './Item'

const Overview = (props) => {
  
  const { tasks, handleDelete, handleEdit, handleEditChange} = props;
  let renderedTasks = tasks.map((task, index) => {
    return(
      <div>
        <div className="Row" key={index}>
        <Item
          task = {task}
          index = {index}
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
          handleEditChange = {handleEditChange}
        />
        <button className={task.isEdit ? "btn btn-primary" : "btn btn-secondary"} onClick={(event) => handleEdit(event, index)}>{task.isEdit ? 'SUBMIT' : 'EDIT'}</button>
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