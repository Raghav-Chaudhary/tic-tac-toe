import "./square.css";

export default function Square(props) {
  
  return (
    <button className="button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
