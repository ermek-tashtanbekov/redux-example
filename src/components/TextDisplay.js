import { useSelector } from "react-redux";


const TextDisplay = () => {
    const selector = useSelector(state => state.textt.texxt)
    return ( 
        <h1>{selector}</h1>
     );
}
 
export default TextDisplay;