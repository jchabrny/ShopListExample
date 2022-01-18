import Header from "../components/Header";
import AddItemField from "../components/AddItemField";
import ItemGallery from "../components/ItemGallery";
import BottomNav from "../components/BottomNav";
import {useEffect, useState} from "react";
import PageWithHeader from "../components/PageLayoutMain";
import {useParams} from "react-router-dom";
import {getListByName} from "../service/apiService";

export default function ListPage(){
    let params = useParams()

    const [list, setList] = useState()
    const [item,setItem] = useState("")
    const [amount ,setAmount] = useState(0)


    useEffect( () => {
        loadItems().then(()=>console.log(list)).catch(e => console.log(e.message))
    })

    const loadItems = () => getListByName(params.whichList).then(setList)

    if (!list){
        return <h1>Loading...</h1>
    }

    return(
        <PageWithHeader>
            <Header/>
            <ItemGallery/>
            <AddItemField item={item} setItem={setItem} amount={amount} setAmount={setAmount} />
            <BottomNav/>
        </PageWithHeader>
    )
}
