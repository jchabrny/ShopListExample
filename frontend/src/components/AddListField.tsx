import styled from "styled-components/macro";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {saveNewList} from "../service/apiService";
import {NewListDto} from "../model/NewListDto";
import {AuthContext} from "../context/AuthContext";

export default function AddListField(){
    const [input,setInput] = useState<string>("")
    const {token} = useContext(AuthContext)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const newListDto: NewListDto = {
            listName:input
        }
        saveNewList(newListDto, token).catch(e => console.log(e.message))
        setInput("")
    }


    return(
        <Wrapper onSubmit={handleSubmit}>
            <div className="addList_input">
                <input type="text" onChange={handleChange} value={input}/>
            </div>
            <div className="addList_btn">
                <button>Add</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.form`

`