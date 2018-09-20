export const addProduct = (item) => {
    return {
        type: "addProduct",
        productData: {
            productName: item.productName, 
            productPrice: item.productPrice
        }};
}