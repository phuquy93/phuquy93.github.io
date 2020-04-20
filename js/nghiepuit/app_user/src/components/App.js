import React, {Component} from 'react';
import '../App.css';
import Control from './Control';
import TaskForm from './TaskForm';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
    }
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
    var { taskEditing } = this.state;
    var isDisplayForm = this.props.isDisplayForm === false ? <TaskForm /> : '';
    return (
      <div className="App">
        <div className="container"> 
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    {
                      isDisplayForm
                    }
                    <Control classColumn={ this.state.displayForm } onDelete={ (id) => this.onDelete(id) } /> 
                </div>
            </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  }
}

export default connect(mapStateToProps)(App);
