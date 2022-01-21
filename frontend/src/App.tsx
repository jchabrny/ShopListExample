import './App.css';
import ListPage from "./pages/ListPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:whichList" element={<ListPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  );
};


