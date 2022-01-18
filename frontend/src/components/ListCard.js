import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";

export default function ListCard({listName}){
    let navigate = useNavigate();
    const showList = () => {
        navigate(`/${listName}`)
    }
    return(
        <Wrapper>
            <h3 onClick={showList}>{listName}</h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: dimgrey;
  display: grid;
  grid-template-rows: min-content min-content min-content;
  margin:0  0.5rem;
  text-align: center;
  border: solid black 3px;
  border-radius: 5px;
`
