import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    onChange = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        if(name === 'status') {
            value = value === 'true' ? true : false
        }

        this.setState({
            [ name ] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }

    render() {
        var { isdisplayForm } = this.props;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                    <h3 className="panel-title">Thêm Công Việc <i className="fa fa-times" onClick={ isdisplayForm } ></i></h3>
                    </div>
                    <div className="panel-body">
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" name="name" value={this.state.name} onChange={ this.onChange } className="form-control" />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" name="status" onChange={ this.onChange } value={this.state.status} required="required">
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={ this.onClear }>Hủy Bỏ</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;