import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
        <Cart>{ this.elmCart(cart) }</Cart>
        );
    }
    elmCart = (cart) => {

    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps,null)(CartContainer);