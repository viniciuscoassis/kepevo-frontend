import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetMuscles from "../../../hooks/api/useGetMuscles";
import OnclickButton from "../../Buttons/OnClickButton";

export default function AddExercise({
  muscleGroups,
  setIsAdding,
  isAdding,
  workoutSelected,
}) {
  const emptyBody = {
    muscle: muscleGroups[0].name,
    name: "",
  };
  const [form, setForm] = useState(emptyBody);

  const handleSelect = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <Wrapper>
        <div className="high">
          <h1>new exercise</h1>
          <h2>{workoutSelected}</h2>
        </div>
        <div className="divider"></div>
        <div className="middle">
          <div className="field first">
            <h3>* MUSCLE</h3>
            <select name="muscle" onChange={handleSelect}>
              {muscleGroups.map((value, index) => (
                <option key={index}>{value.name}</option>
              ))}
            </select>
          </div>
          <div className="field second ">
            <h3>* Exercise</h3>
            <input name="name" onChange={handleSelect}></input>
          </div>
        </div>
        <div className="low">
          <OnclickButton submit={submit} textColor={"white"}>
            add new exercise
          </OnclickButton>
        </div>
      </Wrapper>
      <X className="x" onClick={() => setIsAdding(!isAdding)}>
        X
      </X>
    </>
  );
}

const X = styled.div`
  width: 10vw;
  height: 5vh;
  color: white;

  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fabb73;
  text-align: center;
`;

const Wrapper = styled.div`
  min-height: 35vh;
  width: 86vw;
  border-radius: 15px;
  margin: 0 auto;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  padding: 1rem;

  .high {
    display: flex;
    justify-content: space-between;
    h1 {
      font-weight: 600;
    }
    h2 {
    }
  }
  .middle {
    color: #b8bcc4;
    margin-bottom: 1rem;
    .field {
      input {
        width: 100%;
        height: 2rem;
        text-transform: uppercase;
        padding: 0 7px;
        border-radius: 10px;
        border: 2px solid #b8bcc4;
        font-family: "Lexend Deca", sans-serif;
        color: #b8bcc4;
        :-webkit-autofill,
        :-webkit-autofill:hover,
        :-webkit-autofill:focus,
        :-webkit-autofill:active {
          box-shadow: 0 0 0 30px white inset !important;
          :focus {
            color: #b8bcc4;
          }
        }
      }
      select {
        width: 100%;
        height: 2rem;
        padding-left: 5px;
        text-transform: uppercase;
        border-radius: 10px;
        background-color: white;
        font-family: "Lexend Deca", sans-serif;
        color: #b8bcc4;
        border: 2px solid #b8bcc4;

        option {
          text-transform: uppercase;
        }
      }
      h3 {
        text-transform: uppercase;
        margin: 0.6rem 0;
        font-size: 0.7rem;
      }
    }
  }
  .low {
  }
  .divider {
    height: 2px;
    background-color: grey;
    margin: 1rem 0;
  }
`;
