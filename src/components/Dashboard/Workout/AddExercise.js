import styled from "styled-components";
import DefaultButton from "../../Buttons/DefaultButton";

export default function AddExercise({ setIsAdding, isAdding }) {
  return (
    <>
      <Wrapper>
        <div className="high">
          <h1>new exercise</h1>
          <h2>treino A</h2>
        </div>
        <div className="divider"></div>
        <div className="middle">
          <div className="input first">
            <h3>* MUSCLE</h3>
            <select>
              <option>chest</option>
            </select>
          </div>
          <div className="input second ">
            <h3>* Exercise</h3>
            <select>
              <option>chest</option>
            </select>
          </div>
        </div>
        <div className="low">
          <DefaultButton></DefaultButton>
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
    .input {
      h3 {
        font-size: 10px;
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
