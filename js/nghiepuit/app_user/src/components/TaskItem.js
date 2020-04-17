import React, { Component } from 'react';

class TaskItem extends Component {

    onDelete = () => {
        this.props.onDelete(this.props.value.id);
    }
    
    render() {
        var { value,index } = this.props;
        return (
            <tr>
                <td>{ index + 1 }</td>
                <td>{ value.name }</td>
                <td className="text-center">
        <span className={ value.status === true ? 'label label-danger' : 'label label-success' }>{ value.status === true ? 'Kích hoạt' : 'Ẩn'}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={ this.onDelete }>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;