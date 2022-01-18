import ItemCounter from "./ItemCounter";
import "./ItemCard.css"

export default function ItemCard(props){
    return(
        <div className="itemCard">
            <h3>Itemname</h3>
            <ItemCounter/>
            <button className="itemCard_btn">done</button>
        </div>
    )
}