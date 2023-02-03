import styled from "styled-components";
import DefaultButton from "./DefaultButton";

export default function SetDataButton({ children, textColor, set, data }) {
  return (
    <Wrapper onClick={() => set(data)}>
      <DefaultButton textColor={textColor}>{children}</DefaultButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  z-index: 1;
`;
