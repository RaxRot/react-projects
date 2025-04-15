import {data} from "../assets/data.js";
import './ResultCart.css'

export default function ResultCart(props){
    return  <div className="result-container">
        <h2>Your score is {props.score} out of {props.length}</h2>
        <button className="reset-btn" onClick={props.reset}>Reset</button>
    </div>
}