import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

const Heart = ({onClick}: Props) => {
    const [status, setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status);
        onClick();
    }
    if (status) return <AiFillHeart color="red" size={20} onClick={toggle}/>;
    return <AiOutlineHeart size={20} onClick={toggle}/>
}
export default Heart;