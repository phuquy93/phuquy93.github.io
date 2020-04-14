import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName:'',
      txtPass:'',
      txtDesc: '',
      sltGender: 0,
      rdLang: 'en',
      txtCheck: false
    }
  }
  
  onHandlechange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
      [name]:value
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username:</label>
                    <input 
                    type="text" 
                    name="txtName" 
                    className="form-control" 
                    onChange={ (e) => this.onHandlechange(e) } 
                    value={this.state.txtName}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password:</label>
                    <input 
                    type="text" 
                    name="txtPass" 
                    className="form-control" 
                    onChange={ (e) => this.onHandlechange(e) } 
                    value={this.state.txtPass}
                    />
                  </div>

                  <div className="form-group">
                    <label>Mô tả:</label>
                    <textarea 
                    name="txtDesc" 
                    rows="3"
                    className="form-control" 
                    onChange={ (e) => this.onHandlechange(e) } 
                    value={this.state.txtDesc}
                    />
                  </div>

                  <div className="form-group">
                    <label>Giới tính</label>
                    <select 
                    className="form-control" 
                    name="sltGender" 
                    onChange={ (e) => this.onHandlechange(e) }
                    value={this.state.sltGender}
                     >
                      <option value={0}>Nữ</option>
                      <option value={1}>Nam</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Ngôn ngữ</label><br/>
                    <label>
                      <input type="radio" name="rdLang" onChange={ (e) => this.onHandlechange(e) } value="en" checked={this.state.rdLang === 'en'} />
                      Tiếng anh
                    </label><br/>
                    <label>
                      <input type="radio" name="rdLang" onChange={ (e) => this.onHandlechange(e) } value="vi" checked={this.state.rdLang === 'vi'} />
                      Tiếng việt
                    </label>
                  </div>

                  <div className="form-group">
                    <label>Check box:</label><br/>
                    <input type="checkbox" name="txtCheck" onChange={ (e) => this.onHandlechange(e) } value={true} />Trạng thái
                  </div>
  
                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-default">Reset</button>
                </form>
  
              </div>
            </div>                   
          </div>
        </div>
      </div>
    ) 
  } 
}

export default App;
