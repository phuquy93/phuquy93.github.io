import dl from '../components/data.json';

var data = dl;

const products = (state = data, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;
