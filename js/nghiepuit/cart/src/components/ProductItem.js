import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { products } = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={ products.image }
                            className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
        <a>{ products.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                            <li>
                                <i className="fa fa-star"></i>
                            </li>
                        </ul>
                        <p className="card-text">
                        { products.description }
                                      </p>
                        <div className="card-footer">
        <span className="left">{ products.price }$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;