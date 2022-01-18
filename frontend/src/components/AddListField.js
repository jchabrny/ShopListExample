import styled from "styled-components/macro";
import {useState} from "react";
import {saveNewList} from "../service/apiService";

export default function AddListField(){
    const [input,setInput] = useState("")

    const handleChange = event => {
        event.preventDefault()
        setInput(event.target.value)
        console.log(input)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const name = {
            listName:input
        }
        saveNewList(name).catch(e => console.log(e.message))
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