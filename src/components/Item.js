import React from 'react'
import uniqid from 'uniqid'

const Entry = (props) => {
  const {task, index, handleDelete, handleEdit, handleEditChange} = props;
  if (task.isEdit) {
    return (
      <li key={index}>
        <form onSubmit={(event) => handleEdit(event, index)}>
          <div>
          <input
              type="text"
              id="editInput"
              className="form-control"
              name="editInput"
              placeholder='Edit Task'
              value={task.name}
              onChange={(event) => handleEditChange(event, index)}
            />
          </div>
        </form>
      </li>
    )
  } else {
    return (
      <li key={uniqid()}>
        <span>{index + 1}. {task.name}</span>
        <i
          key={uniqid()}
          className="fa fa-minus-circle"
          aria-hidden="true"
          onClick={() => handleDelete(index)}
        >
        </i>
      </li>
    )
  }
}

export default Entry