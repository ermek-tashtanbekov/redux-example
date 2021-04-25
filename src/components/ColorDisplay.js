import { useSelector } from "react-redux";

const ColorDisplay = () => {
  const colorr = useSelector(state => state.color.color);
  const style = {
    border: `10px solid ${colorr}`,
  };
  return (
     
    <div style={style}>{colorr}</div>
  );
}
export default ColorDisplay;