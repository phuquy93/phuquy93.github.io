import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';

class Control extends Component {
    render() {
        var { classColumn,undisplayForm } = this.props;
        return (
            <div className={ classColumn ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col' } >

                <button type="button" className="btn btn-primary" onClick={ undisplayForm }>
                    <span className="fa fa-plus mr-5"/>Thêm Công Việc
                </button>
                <div className="row mt-15">
                    <Search />
                    <Sort />
                </div>
                <div className="row mt-15">
                    <TaskList data={this.props.data} onDelete={ this.props.onDelete }/>
                </div>
            </div>
        );
    }
}

export default Control;