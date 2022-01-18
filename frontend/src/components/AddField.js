import styled from "styled-components/macro";

export default function AddField({amount,setAmount,item,setItem}){
    return(
        <Wrapper>
            <div className="addField_input">
                <input type="text" onChange={setItem()} value={item}/>

            </div>
            <div className="addField_input">
                <input type="text" onChange={setAmount} value={amount}/>
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