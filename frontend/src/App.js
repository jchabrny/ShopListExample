import './App.css';
import ListPage from "./pages/ListPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/:whichList" element={<ListPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};


