import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from './../constants/Message';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
        <Cart>
            { this.elmCart(cart) } 
            { this.elmToTal(cart) }
        </Cart>
        );
    }
    elmCart = (cart) => {
        var result = message.MSG_CART_EMPTY;
        if(cart.length > 0) {
            result = cart.map((item,index) => {
                return (
                    <CartItem key={index} item={item} />
                )
            })
        }
        return result;
    }

    elmToTal = (cart) =>  {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps,null)(CartContainer);