import Header from "../components/Header";
import AddItemField from "../components/AddItemField";
import ItemGallery from "../components/ItemGallery";
import BottomNav from "../components/BottomNav";
import {useContext, useEffect, useState} from "react";
import PageWithHeader from "../components/PageLayoutMain";
import {useParams} from "react-router-dom";
import {getListByName} from "../service/apiService";
import {AuthContext} from "../context/AuthContext";

export default function ListPage(){
    let params = useParams()

    const [list, setList] = useState<string[]>()
    const [item,setItem] = useState<string>("")
    const [amount ,setAmount] = useState<number>(0)
    const {token} = useContext(AuthContext)


    useEffect( () => {
        loadItems().then(()=>console.log(list)).catch(e => console.log(e.message))
    }, [])

    const loadItems = () => getListByName(params.whichList, token).then(setList)

    if (!list){
        return <h1>Loading...</h1>
    }

    return(
        <PageWithHeader>
            <Header title={"Einkaufsliste"}/>
            <ItemGallery/>
            <AddItemField item={item} setItem={setItem} amount={amount} setAmount={setAmount} />
            <BottomNav/>
        </PageWithHeader>
    )
}
