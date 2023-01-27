import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { HiOutlineBellAlert } from "react-icons/hi2"

export default function Header() {
    const a = "<";
    return (
        <Wrapper>
            <div className="left"> {a} </div>
            <div className="middle">
                <img src={logo} alt="logotipo" /> </div>
            <div className="right">
                <HiOutlineBellAlert size={25} /> </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0 10px;
align-items: center;
margin-bottom: 2rem;
.middle{
    width: 60vw;
 
    img{
        max-height: 35px;
        object-fit: cover;
        width: 100%;
    }
}
`