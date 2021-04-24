import { useState } from "react";
import { useDispatch } from "react-redux";

const SliderControls = () => {
const [r, setR] = useState(0);
const [g, setG] = useState(0);
const [b, setB] = useState(0);

const dispatch = useDispatch();

function Slider(){
    dispatch({type: 'color',  color : `rgb(${r}), (${g}) ,  (${b}) `})
}


    return ( 
        <div>
            <input type="range" max={360} min={0} onChange={({target}) => {setR(target.value); Slider()}}/>
            <input type="range"max={360} min={0} onChange={({target}) => {setG(target.value); Slider()}}/>
            <input type="range" max={360} min={0} onChange={({target}) => {setB(target.value); Slider()}}/>
            
        </div>
     );
}
 
export default SliderControls;