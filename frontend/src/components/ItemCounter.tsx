import styled from "styled-components/macro";

export default function ItemCounter(){
    return(
        <Wrapper>
            <div className="itemCounter_show">
                <p>2</p>
            </div>
            <div className="itemCounter_change">
                <button>+</button>
                <button>-</button>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0;
  
  .itemCounter_show{
    height: min-content;
  }
`