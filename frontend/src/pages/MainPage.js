import Header from "../components/Header";
import AddField from "../components/AddField";
import ItemGallery from "../components/ItemGallery";
import BottomNav from "../components/BottomNav";
import "./MainPage.css"
import {useState} from "react";

export default function MainPage(){
    const [item,setItem] = useState("")
    const [amount ,setAmount] = useState(0)


    return(
        <div className="mainPage">
            <Header/>
            <ItemGallery/>
            <AddField item={item} setItem={setItem} amount={amount} setAmount={setAmount} />
            <BottomNav/>
        </div>
    )
}