import './App.css';
import ListPage from "./pages/ListPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {useEffect, useState} from "react";
import {getAllLists} from "./service/apiService";

export default function App() {
    const [lists,setLists] = useState()

    /*
    useEffect( () => {
        updateLists().catch(e => console.log(e.message))
    },[])


    const updateLists = () => getAllLists().then(setLists)
*/
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<MainPage/>}/>
            <Route path="/lists" element={<ListPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};


