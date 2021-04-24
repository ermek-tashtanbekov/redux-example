import { useSelector } from "react-redux";

const CounterDisplay = () => {
    const num = useSelector(state => state.number)
    return ( 
       <h1>{num}</h1>
     );
}
 
export default CounterDisplay;