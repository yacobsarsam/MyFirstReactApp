import ListGroup from "./ListGroup.tsx";
import Alert from "./Alert.tsx";
import Button from "./Button.tsx";
import {useState} from "react";
import Button1 from "./Button1.tsx";
import Heart from "./Heart.tsx";
import Game from "./Game.tsx";
import Pitzza from "./Pitzza.tsx";
import Cart from "./Cart.tsx";

function App() {
    let items = ['Baghdad', 'Basrah', 'Mosul', 'Erbil', 'Hilla']
    const handelSelectItem = (item: string) => {
        console.log(item);
    }
    const [alertVisible, setalertVisible] = useState(false);

    return <div>
        {alertVisible && <Alert onClose={() => setalertVisible(false)}> Alert <span>Hello World</span> </Alert>}
        <ListGroup items={items} heading="Cities" onSelectItem={handelSelectItem}/>
        <Button color="secondary" onClick={() => setalertVisible(true)}>My button</Button>
        <Button1 color="primary" onClick={() => setalertVisible(true)}>Module button</Button1>
        <Heart onClick={() => console.log("Clicked")}/>
        <Game name="newname"></Game>
        <Pitzza name="Cheese"></Pitzza>
        <Cart></Cart>
    </div>;
}

export default App;