import styled from "styled-components";

export default function Exercise({ value }) {
  return (
    <Wrapper>
      <div className="left">CHEST</div>
      <div className="middle"> {value.name}</div>
      <div className="right"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 30px;
  margin-bottom: 10px;
  padding: 10px 5px;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  :first-child {
    margin-top: 20px;
  }
  .right {
    border-radius: 50%;
    background-color: #fabb73;
    height: 20px;
    width: 30px;
  }
`;
