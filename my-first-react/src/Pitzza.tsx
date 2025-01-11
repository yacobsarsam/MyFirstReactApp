import {useState} from "react";

interface Props {
    name: string;
}

const Pitzza = ({name}: Props) => {
    const [pizza, setPizza] = useState({
        name: "Pizza nr 1",
        toppings: ['Mashrom', 'banana']
    });
    const handelClick = (newIngredient: string) => {
        setPizza({...pizza, items: [...pizza.toppings, newIngredient]});
    };

    return (
        <>
            <button onClick={() => handelClick(name)}> Click me to add ingredient</button>
            <ul>{pizza.name}
                {pizza.toppings.map((topping, index) => (
                    <li key={index}>{topping}</li>
                ))}
            </ul>
        </>
    );
}
export default Pitzza;