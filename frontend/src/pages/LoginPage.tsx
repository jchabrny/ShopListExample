import PageLayoutMain from "../components/PageLayoutMain";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthProvider";


export default function LoginPage() {

    const [name, setName] = useState<string>()
    const [password, setPassword] = useState<string>()

    const navigate = useNavigate()

    const {setJwt} = useContext(AuthContext)

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post('/auth/login', {name, password})
            .then(response => response.data)
            .then((data ) => {
                setJwt(data)
                navigate('/')
            })
            .catch((errr) => console.error("Error"))
    }

    return (
        <PageLayoutMain>
            <Header />
            <h2>Login</h2>

            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" onChange={onUserNameChange} value={name}/>
                <input type="password" placeholder="password" onChange={onPasswordChange} value={password}/>
                <button type="submit">Login</button>
            </form>

            <BottomNav />
        </PageLayoutMain>
    )
}
