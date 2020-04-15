import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';

class Control extends Component {
    render() {
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5" />Thêm Công Việc
                </button>
                <button type="button" className="btn btn-danger ml-5" onClick={ this.props.onGenerateData } >
                    <span className="fa fa-plus mr-5" />Generate Data
                </button>
                <div className="row mt-15">
                    <Search />
                    <Sort />
                </div>
                <div className="row mt-15">
                    {/* 3 -- TRUYỀN DATA QUA CHO TASKLIST */}
                    <TaskList data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default Control;