import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PWithNav({ children, label, path }) {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(path)}>
      {children} <span>{label}</span>
    </Wrapper>
  );
}

const Wrapper = styled.p`
  color: rgba(0, 0, 0, 0.49);
  font-size: 0.9rem;
  text-align: center;
  span {
    color: #fabb73;
    font-weight: 600;
  }
`;
