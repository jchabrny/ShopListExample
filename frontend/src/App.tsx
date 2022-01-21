import './App.css';
import ListPage from "./pages/ListPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./routing/RequireAuth";
import AuthProvider from "./context/AuthProvider";

export default function App() {


    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/lists/:whichList" element={
                        <RequireAuth>
                            <ListPage/>
                        </RequireAuth>
                    }/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
