import { useDispatch } from "react-redux";

const TextSimpleControls = () => {
    const dispatch = useDispatch();

    function textDispatch({target}){
        dispatch({type: "set_text", texxt: target.value})
    }
    return ( 
        <div>
            
            <input type="text" onChange={ textDispatch}/>
        </div>
     );
}
 
export default TextSimpleControls;