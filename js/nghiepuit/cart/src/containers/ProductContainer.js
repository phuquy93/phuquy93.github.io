import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';

class ProductContainer extends Component {
    render() {
        var { product } = this.props;
        return (
           <Products> { this.elmProduct(product) } </Products> 
        );
    }

    elmProduct = (product) => {
        var result = null;
        if(product.length > 0) {
            result = product.map((product, index) => {
                return <ProductItem 
                key={ index } 
                product={product} 
                 />
            })
        }   
        return result; 
    }

}

const mapStateToProps = state => {
    return {
        product : state.products
    }
}

export default connect(mapStateToProps,null)(ProductContainer);