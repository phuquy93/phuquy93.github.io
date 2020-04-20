import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    elmTaskItem = () => this.props.data.map((value,index) => {
        return <TaskItem key={value.id} index={index} value={ value } data={this.props.data} onDelete={ this.props.onDelete } />
    })
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover mt-15">
                    <thead>
                        <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <select className="form-control">
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                            <td />
                        </tr>
                        {
                            this.elmTaskItem()
                        }
                    </tbody>
                </table>
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data:state.tasks
    }
}

export default connect(mapStateToProps,null)(TaskList);