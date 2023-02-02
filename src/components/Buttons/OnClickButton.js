import styled from "styled-components";
import DefaultButton from "./DefaultButton";

export default function OnclickButton({
  children,
  textColor,
  setIsAdding,
  isAdding,
}) {
  return (
    <Wrapper onClick={() => setIsAdding(!isAdding)}>
      <DefaultButton textColor={textColor}>{children}</DefaultButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  z-index: 1;
`;
