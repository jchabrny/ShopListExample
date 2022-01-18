import styled from "styled-components/macro";

export default function ListCard(props){
    return(
        <Wrapper>
            <h3>{props.listName}</h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content min-content min-content;
  margin:0  0.5rem;
  text-align: center;
`
