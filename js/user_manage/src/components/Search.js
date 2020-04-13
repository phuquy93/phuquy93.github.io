import React, { Component } from 'react';

class Search extends Component {
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
    render() {
        return (
            <div className="col-12 text-left">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập từ khóa" />
                        <div className="btn btn-info">Tìm</div>
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