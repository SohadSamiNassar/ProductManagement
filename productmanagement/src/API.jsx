
export const getProducts() {
    return (
        fetch("https://dummyjson.com/carts/1").then((res)=>res.json());
    );
}