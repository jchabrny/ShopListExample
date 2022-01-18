import Header from "../components/Header";
import AddItemField from "../components/AddItemField";
import ItemGallery from "../components/ItemGallery";
import BottomNav from "../components/BottomNav";
import styled from "styled-components/macro";
import {useState} from "react";

export default function ListPage(){
    const [item,setItem] = useState("")
    const [amount ,setAmount] = useState(0)


    return(
        <Wrapper>
            <Header/>
            <ItemGallery/>
            <AddItemField item={item} setItem={setItem} amount={amount} setAmount={setAmount} />
            <BottomNav/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content min-content;
  gap: 5px;
  margin: 0;
`