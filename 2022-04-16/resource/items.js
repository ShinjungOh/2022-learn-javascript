import products from './products.js'
const items = products.map((el) => ({
    ...el,
    가격: parseInt(el.가격.split(',').join(''), 10),
}));
export default items;