import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import {getAllLists} from "../service/apiService";
import {useEffect, useState} from "react";
import AddListField from "../components/AddListField";

export default function MainPage(){
    const [lists,setLists] = useState()


    useEffect( () => {
        updateLists().catch(e => console.log(e.message))
    },[])


    const updateLists = () => getAllLists().then(setLists)

    return(
        <div className="listsPage">
            <Header/>
            <AddListField/>

            <BottomNav/>
        </div>
    )
}