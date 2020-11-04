import React from 'react';
import uniqid from 'uniqid'

import Overview from './components/Overview'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        {
          name: 'task1', // use id property
          isEdit: false,
          editInput: '',
          id: uniqid(),
        },
        {
          name: 'task2',
          isEdit: false,
          editInput: '',
          id: uniqid(),
        },
        {
          name: 'task3',
          isEdit: false,
          editInput: '',
          id: uniqid(),
        },
      ],
      taskInput: '',
    };
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleEditChange = (event, id) => { // use id and map to update the state
    const { name, value } = event.target;
    this.setState(prevState => {
      return (
        {
          tasks: [
            ...prevState.tasks.slice(0, id),
            {name: value, isEdit: prevState.tasks[id].isEdit, [name]: value},
            ...prevState.tasks.slice(id + 1),
          ]
        }
      )
    })
  }

  handelSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return(
        {
          tasks: prevState.tasks.concat(
            [
              {
                name: prevState.taskInput,
                isEdit: false,
                editInput: '',
                id: uniqid(),
              }
            ]
            ),
          taskInput: '',
        }
      )
    })
  }

  handleDelete = (id) => {
    this.setState(prevState => {
      return (
        {
          tasks: prevState.tasks.filter(task => task.id !== id)
        }
      )
    })
  }

  handleEdit = (event, id) => {
    event.preventDefault();
    this.setState(prevState => {
      return (
        {
          tasks: [
            ...prevState.tasks.slice(0, id),
            {name: prevState.tasks[id].name, isEdit: !prevState.tasks[id].isEdit, editInput: ''},
            ...prevState.tasks.slice(id + 1),
          ]
        }
      )
    })
    console.log(this.state.tasks[id].isEdit);
  }
  
  render() {
    return (
      <div className="col-6 mx-auto mt-5">
        <form onSubmit={ this.handelSubmit }>
          <div className="form-group">
            <label htmlFor="taskInput">Enter task</label>
            <input
              type="text"
              id="taskInput"
              className="form-control"
              name="taskInput"
              placeholder='New Task'
              value={ this.state.taskInput }
              onChange={ this.handleChange }
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              ADD
            </button>
          </div>
        </form>
        <Overview
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleEditChange = {this.handleEditChange}
        />
      </div>
    );
  }
}

export default App;
