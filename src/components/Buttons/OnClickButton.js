import { toast } from "react-toastify";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";

export default function OnclickButton({ children, textColor, submit }) {
  return (
    <Wrapper onClick={submit}>
      <DefaultButton textColor={textColor}>{children}</DefaultButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  z-index: 1;
`;
