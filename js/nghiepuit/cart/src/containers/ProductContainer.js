import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import ProductItem from './../components/ProductItem';

class ProductContainer extends Component {
    render() {
        var { products } = this.props;
        return (
           <Products> { this.elmProduct(products) } </Products> 
        );
    }

    elmProduct = (products) => {
        var result = null;
        if(products.length > 0) {
            result = products.map((products, index) => {
                return <ProductItem key={ index } products={products} />
            })
        }   
        return result; 
    }

}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps,null)(ProductContainer);