import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import TaskList from './TaskList';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class Control extends Component {
    openForm = () => {
        if(this.props.isDisplayForm) {
            this.props.openForm()
        } 
    }
    render() {
        var { classColumn } = this.props;
        return (
            <div className={ classColumn ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col' } >

                <button type="button" className="btn btn-primary" onClick={ this.openForm }>
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

const mapStateToProps = state => {
    return {
      isDisplayForm: state.isDisplayForm
    }
  }

const mapDispatchToProps = (dispatch,props) => {
    return {
        openForm : () => {
        dispatch(action.openForm())
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Control);