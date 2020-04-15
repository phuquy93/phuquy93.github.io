import React, {Component} from 'react';
import '../App.css';
import Control from './Control';
import TaskForm from './TaskForm';
import dl from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  // 2 -- DÙNG componentDidMount ĐỂ TỰ ĐỘNG ĐƯA DATA VÀO STATE.TASKS SAU KHI F5
  componentDidMount() {
    // 2.1 -- KIỂM TRA CÓ LẤY DC localStorage VÀ localStorage TASKS HAY KHÔNG?
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({ tasks:tasks })
    }
  }

  onGenerateData = () => {
    var tasks = dl;
    this.setState({
      tasks: tasks
    });
    // 1 -- LƯU DỮ LIỆU VÀO LOCALSTORAGE
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  render() {
    return (
      <div className="App">
        <div className="container"> 
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <TaskForm />
                    {/* 3 -- TRUYỀN DATA QUA CHO CONTROL */}
                    <Control onGenerateData = { this.onGenerateData } data={ this.state.tasks } /> 
                </div>
            </div>
      </div>
    );
  }
}

export default App;
