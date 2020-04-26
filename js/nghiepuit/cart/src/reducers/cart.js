import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem("cart"));
var initialStore = [
    {
        product : {
            "id": 1,
            "name": "Iphone 7 ",
            "image": "https://www.apple.com/v/iphone/home/ag/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg",
            "description": "Sản phẩm do apple sản phẩm",
            "price": 400,
            "inventory": 15
        },
        quantity: 5
    },
    {
        product : {
            "id": 2,
            "name": "Iphone 8 ",
            "image": "https://www.apple.com/v/iphone/home/ag/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg",
            "description": "Sản phẩm do apple sản phẩm",
            "price": 100,
            "inventory": 15
        },
        quantity: 5
    }
];

const cart = (state = initialStore, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return [...state];
        default: return [...state];
    }
}

export default cart;
