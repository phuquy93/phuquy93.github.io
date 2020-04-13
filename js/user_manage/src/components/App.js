import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import Data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienthiForm: false,
      dataUser : Data
    }
  }

  doiTT = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />  
          <div className="searchForm">
            <div className="container">
                <div className="row">
                  <Search doiTT={() => this.doiTT()} hienthiForm={this.state.hienthiForm} />
                  <TableData data={this.state.dataUser} hienthiForm={this.state.hienthiForm}/>
                  <AddUser hienthiForm={this.state.hienthiForm} />
                </div>
            </div>     
        </div>
      </div>
    );
  }
}

export default App;
