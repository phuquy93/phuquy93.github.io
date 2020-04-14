import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue:''
        }
    }

    kiemtraTT = () => {
        if(this.props.hienthiForm) {
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.doiTT()}>Đóng lại</div>
            )
        }else {
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.props.doiTT()} >Thêm mới</div>  
            )
        }
    }

    laytext = (event) => {
        this.setState({
            textValue:event.target.value
        })
        this.props.textTimkiem(this.state.textValue);
    }

    render() {
        return (
            <div className="col-12 text-left">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa" onChange={ (event) => this.laytext(event) } />
                        <div className="btn btn-info" onClick={ (dl) => this.props.textTimkiem(this.state.textValue) } >Tìm</div>
                    </div>
                    <div className="mt-2">
                        {
                            this.kiemtraTT()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;