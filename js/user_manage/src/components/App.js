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
      dataUser : Data,
      searchText: ''
    }
  }

  doiTT = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm
    })
  }

  textTimkiem = (dl) => {
    this.setState({
      searchText:dl
    })
  }

  getNewUserData = (name,tel,Permission) => {
    var item = {}
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser: items
    });
    console.log(items);
  }

  render() {
    var ketqua = [];
    this.state.dataUser.forEach( item => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });
    return (
      <div className="App">
        <Header />  
          <div className="searchForm">
            <div className="container">
                <div className="row">
                  <Search doiTT={() => this.doiTT()} hienthiForm={this.state.hienthiForm} textTimkiem={ (dl) => this.textTimkiem(dl) } />
                  <TableData data={ketqua} hienthiForm={this.state.hienthiForm}/>
                  <AddUser getNewUserData={ (name,tel,Permission) => this.getNewUserData(name,tel,Permission) } hienthiForm={this.state.hienthiForm} />
                </div>
            </div>     
        </div>
      </div>
    );
  }
}

export default App;
