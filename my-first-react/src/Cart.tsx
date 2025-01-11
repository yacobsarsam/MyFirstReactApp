import {useState} from "react";


const Cart = () => {
    const [cart, setCart] = useState({
        discount: .1,
        items: [
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 1}
        ]
    });
    const handelClick = () => {
        setCart({
            ...cart,
            items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)
        });
    };

    return (
        <>
            <button onClick={() => handelClick()}> Click me to incease Product1 by 1</button>
            <ul>{cart.discount}
                {cart.items.map((item, index) => (
                    <li key={index}>Product: {item.title}, Antal: {item.quantity}</li>
                ))}
            </ul>
        </>
    );
}
export default Cart;