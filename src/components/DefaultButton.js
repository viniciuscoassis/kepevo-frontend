import styled from "styled-components"

export default function DefaultButton({ children }) {
    return (<Wrapper>
        {children}
    </Wrapper>)
}

const Wrapper = styled.button`
background-color: #FABB73;
border: none;
color: white;
width: 60vw;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
border-radius: 2rem;

    :hover{
        transform: scale(1.1);
        filter: brightness(1.05);
    }
`