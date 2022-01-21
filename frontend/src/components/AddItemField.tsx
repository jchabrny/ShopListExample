import styled from "styled-components/macro";
import {ChangeEvent, Dispatch, SetStateAction} from "react";

interface AddItemFieldProps {
    amount: number
    setAmount: Dispatch<SetStateAction<number>>
    item: string
    setItem: Dispatch<SetStateAction<string>>
}

export default function AddItemField({amount,setAmount,item,setItem} : AddItemFieldProps){

    const onItemChange: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
        setItem(event.target.value);
    }

    const onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void = (event) => {
        setAmount(parseInt(event.target.value));
    }

    return(
        <Wrapper>
            <div className="addField_input">
                <input type="text" onChange={onItemChange} value={item}/>

            </div>
            <div className="addField_input">
                <input type="text" onChange={onAmountChange} value={amount}/>
            </div>
            <div className="addField_btn">
                <button>Add</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.form`
  display: grid;
  grid-template-rows: min-content min-content min-content;
  margin:0  0.5rem;

  .addField_input{
    display: grid;
    gap: 5px;
    margin: 0 0 5px 0;
  }

  .addField_btn{
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }
`