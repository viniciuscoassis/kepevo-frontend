import { IoBarbell } from "react-icons/io5";
import styled from "styled-components";

export default function Exercise({ value }) {
  return (
    <Wrapper>
      <div className="left">{value.MuscleGroups.name.toUpperCase()} </div>
      <div>|</div>
      <div className="middle"> {value.name}</div>
      <button className="right">
        <IoBarbell size={20} color="black" />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px;
  width: 98%;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    max-width: 40%;
  }
  .middle {
    width: 60%;
  }
  .right {
    height: 30px;
    background-color: #fabb73;
    border-radius: 20px;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  div {
    font-size: 600;
    color: #b8bcc4;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.5rem;
  }
  :first-child {
    margin-top: 20px;
  }
`;
