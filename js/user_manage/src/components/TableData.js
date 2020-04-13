import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mapDataUser = () => this.props.data.map((value,index) => (
        <TableDataRow key={index} data={value} />
    ))    

    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-inverse">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                        { this.mapDataUser() }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;