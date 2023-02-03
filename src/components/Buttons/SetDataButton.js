import { toast } from "react-toastify";
import styled from "styled-components";
import DefaultButton from "./DefaultButton";

export default function SetDataButton({
  children,
  textColor,
  set,
  data,
  disabled = false,
}) {
  return (
    <Wrapper
      onClick={
        disabled
          ? () => toast("Please select the workout first")
          : () => set(data)
      }
    >
      <DefaultButton textColor={textColor}>{children}</DefaultButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  z-index: 1;
`;
