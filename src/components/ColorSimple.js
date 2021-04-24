import { useDispatch } from "react-redux";

const ColorSimple = () => {
   
   const dispatch = useDispatch();
   function colors (target){
       dispatch({type : "color", color : target.value})
   }
   
   
    return ( 
        <div>
            <input type="color" onChange={ colors}/>
        </div>
     );
}
 
export default ColorSimple;