import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name:'',
            tel:'',
            Permission:''
        }
    }

    isChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]:value
        })
    }

    kiemtratt = () => {
        if(this.props.hienthiForm) {
            return (
                <div className="card border-primary mt-2">
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                        <input type="text" onChange={(event) => this.isChange(event)}  name="name" className="form-control" aria-describedby="helpId" placeholder="Ten user" />
                        </div>
                        <div className="form-group">
                        <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" aria-describedby="helpId" placeholder="Dien thoai" />
                        </div>
                        <div className="form-group">
                        <select className="custom-select" onChange={(event) => this.isChange(event)} name="Permission" required>
                            <option>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <div className="btn btn-block btn-primary" onClick={(nam,tel,Permission) => this.props.getNewUserData(this.state.name,this.state.tel,this.state.Permission)}>Thêm mới</div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                <div className="card text-left">
                    {
                        this.kiemtratt()
                    }
                </div>
            </div>
        );
    }
}

export default AddUser;