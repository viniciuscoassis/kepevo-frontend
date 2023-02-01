import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function Header({ auth, marginbottom }) {
  const navigate = useNavigate();
  const a = "<";
  const path = auth ? "/" : "dashboard";
  return (
    <Wrapper auth={auth} marginbottom={marginbottom}>
      <div className="left" onClick={() => navigate(path)}>
        {" "}
        {a}{" "}
      </div>
      <div className="middle">
        <img src={logo} alt="logotipo" />{" "}
      </div>
      <div className="right">
        <HiOutlineBellAlert size={25} visibility={auth ? "hidden" : ""} />{" "}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  align-items: center;
  margin-bottom: ${(props) => props.marginbottom};
  .middle {
    width: 10vw;
    img {
      max-height: 35px;
      object-fit: cover;
      width: 100%;
    }
    @media (max-width: 600px) {
      width: 60vw;
    }
  }
`;
