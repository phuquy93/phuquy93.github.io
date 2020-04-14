import React, { Component } from 'react';

class TableDataRow extends Component {

    checkPermission = () => {
        if(this.props.data.Permission == 1) {
            return "Admin";
        }else if (this.props.data.Permission == 2) {
            return "Quản lý";
        }
        return "Nhân viên";
    }

    render() {
        return (
            <tr>
                <td></td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.tel}</td>
                <td>{this.checkPermission()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</div>
                    <div className="btn btn-danger xoa"><i className="fa fa-delete" />Xóa</div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;