import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import {getAllLists} from "../service/apiService";
import {useContext, useEffect, useState} from "react";
import AddListField from "../components/AddListField";
import PageLayoutMain from "../components/PageLayoutMain";
import ListGallery from "../components/ListGallery";
import {AuthContext} from "../context/AuthContext";

export default function MainPage(){
    const [lists,setLists] = useState()

    const {token, jwtDecoded} = useContext(AuthContext)

    useEffect( () => {
        updateLists().catch(e => console.log(e.message))
    },[])

    const updateLists = () => getAllLists(token).then(setLists)

    if (!lists){
        return <h1>Loading...</h1>
    }

    return(
        <PageLayoutMain>
            <Header title={"Home"}/>
            <h2>Hallo {jwtDecoded?.sub}</h2>
            <AddListField/>
            <ListGallery lists={lists}/>
            <BottomNav/>
        </PageLayoutMain>
            )
}