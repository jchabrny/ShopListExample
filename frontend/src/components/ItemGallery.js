import ItemCard from "./ItemCard";
import styled from "styled-components/macro";

export default function ItemGallery(){
    return(
        <Wrapper>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
        display: grid;
        gap: 5px;
        height: 100%;
        width: 89%;
        overflow-y: scroll;
        margin: 0 5%;
`