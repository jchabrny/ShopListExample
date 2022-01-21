import styled from "styled-components/macro";
import ListCard from "./ListCard";
import {List} from "../model/List";

interface ListGalleryProps {
    lists: List[]
}

export default function ListGallery({lists}: ListGalleryProps){
    return(
        <Wrapper>
            {lists.map(list => (
                <ListCard key={list.listName} listName={list.listName}/>
            ))}
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