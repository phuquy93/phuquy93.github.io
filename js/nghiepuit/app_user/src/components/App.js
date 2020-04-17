import React, {Component} from 'react';
import '../App.css';
import Control from './Control';
import TaskForm from './TaskForm';
import dl from './data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      displayForm: false,
      taskEditing: null,
    }
  }

  componentDidMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({ tasks:tasks })
    }
  }

  undisplayForm = () => {
    if (!this.state.displayForm) {
      return (
        this.setState({
          displayForm: !this.state.displayForm
        })
      )
    }
  }

  isdisplayForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
  }

  onSubmit = (data) => {
    data.id = uuidv4();
    var { tasks } = this.state;
    tasks.push(data);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  onDelete = (id) => {
    var { tasks } = this.state;
    var kqFilter  = tasks.filter(task => task.id !== id );
    this.setState({
      tasks: kqFilter
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  render() {
    var { tasks,displayForm,taskEditing } = this.state;
    var isDisplayForm = displayForm ? <TaskForm isdisplayForm={ this.isdisplayForm } onSubmit={ this.onSubmit } /> : '';
    return (
      <div className="App">
        <div className="container"> 
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    { isDisplayForm }
                    <Control data={ tasks } classColumn={ this.state.displayForm } undisplayForm={ this.undisplayForm } onDelete={ (id) => this.onDelete(id) } /> 
                </div>
            </div>
      </div>
    );
  }
}

export default App;
