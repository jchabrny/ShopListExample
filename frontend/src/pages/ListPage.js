import Header from "../components/Header";
import AddItemField from "../components/AddItemField";
import ItemGallery from "../components/ItemGallery";
import BottomNav from "../components/BottomNav";
import {useState} from "react";
import PageWithHeader from "../components/PageLayoutMain";

export default function ListPage(){
    const [item,setItem] = useState("")
    const [amount ,setAmount] = useState(0)


    return(
        <PageWithHeader>
            <Header/>
            <ItemGallery/>
            <AddItemField item={item} setItem={setItem} amount={amount} setAmount={setAmount} />
            <BottomNav/>
        </PageWithHeader>
    )
}
