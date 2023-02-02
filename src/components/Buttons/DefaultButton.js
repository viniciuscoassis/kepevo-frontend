import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function DefaultButton({ children, textColor, type, disabled }) {
  return (
    <Wrapper disabled={disabled} type={type} textColor={textColor}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: #fabb73;
  border: none;
  color: ${(props) => props.textColor};
  font-family: "Lexend Deca", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 2rem;
  font-size: 0.9rem;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.25);

  width: 15%;
  height: 3rem;

  :hover {
    transform: scale(1.1);
    filter: brightness(1.05);
  }

  @media (max-width: 600px) {
    width: 60vw;
    height: 3rem;
  }
`;
