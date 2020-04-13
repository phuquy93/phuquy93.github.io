import React, { Component } from 'react';

class NewRelated extends Component {
    to_slug = (str) => {
        str = str.toLowerCase();     
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        str = str.replace(/(\s+)/g, '-');
    
        str = str.replace(/^-+/g, '');
    
        str = str.replace(/-+$/g, '');
    
        return str;
    };

    render() {
        return (
            <div className="card">
                <a href={"/tin-tuc-chi-tiet/" + this.to_slug(this.props.tieude) + "." + this.props.id + ".html"}><img className="card-img-top" src={this.props.anh} alt="" /></a>
                <div className="card-body">
        <h4 className="card-title">{this.props.tieude}</h4>
        <p className="card-text">{this.props.noidung}</p>
                </div>
            </div>           
        );
    }
}

export default NewRelated;