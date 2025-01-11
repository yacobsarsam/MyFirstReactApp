import {useState} from "react";

interface Props {
    name: string;
}

const Game = ({name}: Props) => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });
    const handelClick = ({name}: Props) => {
        setGame({...game, player: {...game.player, name: name}})
    };

    return (
        <>
            <button onClick={() => handelClick({name})}> Click me to change name</button>
            <div>{game.player.name}</div>
        </>
    );
}
export default Game;