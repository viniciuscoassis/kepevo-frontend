import styled from "styled-components";

export default function NavigationButton({
  children,
  active,
  setActive,
  type,
}) {
  return (
    <Button onClick={() => setActive(type)} active={active} type={type}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 70px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  ${(props) =>
    props.active === props.type
      ? "box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25); border-radius: 50%; transform: scale(1.1)"
      : ""}
`;
