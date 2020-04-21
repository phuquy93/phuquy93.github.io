import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem("cart"));
var initialStore = [
    {
        product : {
            id: 1,
            name: 'Iphone 7 Plus',
            image: 'https://www.apple.com/v/iphone/home/ag/images/overview/compare/compare_iphone_11_pro__fvqwhr4dkhiu_large.jpg',
            description: 'Sản phẩm do apple sản phẩm',
            price: 200,
            inventory: 10
        },
        quantity : 5
    }
];

const cart = (state = initialStore, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default: return [...state];
    }
}

export default cart;
