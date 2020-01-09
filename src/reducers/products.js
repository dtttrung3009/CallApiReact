let initialState = [
    {
        id:1,
        name:'Iphone 6 plus',
        price:400,
        status:true
    },
    {
        id:2,
        name:'Samsung galaxy S8',
        price:7000,
        status:true
    },
    {
        id:3,
        name:'Xiaomi redmi note 8',
        price:900,
        status:false
    },
    {
        id:4,
        name:'Iphone XS plus',
        price:1200,
        status:true
    },
];
const products = (state = initialState, action) => {
    switch(action.type) {
        default:
            return [...state];
    }
};
export default products;
