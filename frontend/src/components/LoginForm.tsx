import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {

    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const {setJwt} = useContext(AuthContext)

    const onUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const login = (credentials: { name: string, password: string }) => {
        return axios
            .post('/auth/login', credentials)
            .then(response => response.data)
            .then(data => {
                setJwt(data)
                navigate(`/`);
            })
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        login({ name, password})
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder={"username"} onChange={onUserNameChange} value={name}/>
            <input type="text" placeholder={"password"} onChange={onPasswordChange} value={password}/>
            <button type="submit" >Login</button>
        </form>
    )
}