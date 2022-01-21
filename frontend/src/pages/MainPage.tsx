import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import {getAllLists} from "../service/apiService";
import {useEffect, useState} from "react";
import AddListField from "../components/AddListField";
import PageLayoutMain from "../components/PageLayoutMain";
import ListGallery from "../components/ListGallery";

export default function MainPage(){
    const [lists,setLists] = useState()

    useEffect( () => {
        updateLists().catch(e => console.log(e.message))
    },[])

    const updateLists = () => getAllLists().then(setLists)

    if (!lists){
        return <h1>Loading...</h1>
    }

    return(
        <PageLayoutMain>
            <Header/>
            <AddListField/>
            <ListGallery lists={lists}/>
            <BottomNav/>
        </PageLayoutMain>
            )
}