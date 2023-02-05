import { useState } from "react";
import { IoBarbell } from "react-icons/io5";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Exercise({ value }) {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Wrapper onClick={() => setIsClicked(!isClicked)}>
        <div className="body">
          <div className="left">{value.MuscleGroups.name.toUpperCase()} </div>
          <div>|</div>
          <div className="middle"> {value.name}</div>
          <button
            className="right"
            onClick={() => navigate(`/dashboard/weightHistory?id=${value.id}`)}
          >
            <IoBarbell size={20} color="black" />
          </button>
        </div>
      </Wrapper>
      {/* <Edit isClicked={isClicked}>
        <div className="icon">
          {" "}
          <AiFillEdit size={14} color="black" />
        </div>
        <div className="icon" onClick={() => toast("its working")}>
          {" "}
          <BiHide size={14} color="black" />
        </div>
        <div className="icon" onClick={() => toast("its working")}>
          <AiFillDelete size={14} color="black" />
        </div>
      </Edit> */}
    </>
  );
}
const Edit = styled.div`
  background-color: #b8bcc4;
  display: ${(props) => (props.isClicked ? "flex" : "none")};
  justify-content: space-between;
  border-radius: 15px;
  transform: translateY(-2rem);
  height: 5rem;
  align-items: center;
  padding-top: 20px;
  z-index: -10;

  .icon {
    background-color: red;
    width: 2rem;
    height: 2rem;
  }
`;

const Wrapper = styled.div`
  z-index: 1000;
  margin-bottom: 30px;
  padding: 10px;
  width: 98%;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  .body {
    display: flex;
  }

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
