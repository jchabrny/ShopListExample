import ItemCounter from "./ItemCounter";
import styled from "styled-components/macro";

export default function ItemCard(){
    return(
        <Wrapper>
            <h3>Itemname</h3>
            <ItemCounter/>
            <button className="itemCard_btn">done</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    border: solid 2px black;
    border-radius: 5px;
    background-color: grey;
    height: 5rem;

  .itemCard_btn{
    background-color: hotpink;
    margin: 5px;
    border-radius: 5px;
  }
`