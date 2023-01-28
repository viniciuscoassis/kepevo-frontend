import styled from "styled-components";

export default function DefaultButton({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  background-color: #fabb73;
  border: none;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 2rem;
  position: absolute;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.25);

  width: 15%;
  height: 3rem;
  bottom: 10rem;
  right: 50rem;

  :hover {
    transform: scale(1.1);
    filter: brightness(1.05);
  }

  @media (max-width: 600px) {
    width: 60vw;
    height: 3rem;
    bottom: 5.8rem;
    right: 4.8rem;
  }
`;
