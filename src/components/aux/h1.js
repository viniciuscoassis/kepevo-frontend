import styled from "styled-components";

export default function H1Title({ children, marginbottom }) {
  return <Wrapper marginbottom={marginbottom}>{children}</Wrapper>;
}

const Wrapper = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: ${(props) => props.marginbottom};
`;
