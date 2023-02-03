import { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../../components/Buttons/RouteButton";
import useGetWorkout from "../../../hooks/api/useGetWorkout";
import Select from "react-select";
import Exercise from "../../../components/Dashboard/Workout/ExerciseDisplay";
import * as data from "../../../assets/data/usefulData";
import OnclickButton from "../../../components/Buttons/SetDataButton";
import AddExercise from "../../../components/Dashboard/Workout/AddExercise";

export default function WorkoutPage() {
  const { getgetWorkOut } = useGetWorkout();
  const [workouts, setWorkouts] = useState();
  const [exercises, setExercises] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const fetchWorkout = async () => {
    const workouts = await getgetWorkOut();
    setWorkouts(workouts);
  };

  const handleSelection = (e) => {
    workouts.map((value) =>
      value.title === e.value ? setExercises(value.WorkoutExercise) : ""
    );
  };

  useEffect(() => {
    fetchWorkout();
  }, []);

  return (
    <Wrapper>
      <div className="select">
        {workouts ? (
          <Select options={data.options} onChange={handleSelection} />
        ) : (
          <p>Você ainda não tem treinos</p>
        )}
      </div>
      {isAdding ? (
        <AddExercise setIsAdding={setIsAdding} isAdding={isAdding} />
      ) : (
        ""
      )}

      {exercises.length === 0 ? (
        " "
      ) : (
        <div className="exerciseContainer">
          {exercises?.map((value, index) => (
            <Exercise key={index} value={value} />
          ))}
        </div>
      )}

      {exercises.length === 0 ? (
        isAdding ? (
          ""
        ) : (
          <>
            <p className="warning">
              Você ainda não tem exercícios para este treino, adicione!
            </p>
            <OnclickButton set={setIsAdding} data={!isAdding}>
              Add Exercise
            </OnclickButton>
          </>
        )
      ) : (
        ""
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-height: 75vh;
  max-height: 75vh;
  overflow-y: scroll;
  .select {
    margin-bottom: 1rem;
  }
  .warning {
    font-size: 1rem;
    margin: 25vh 0;
    text-align: center;
  }
  .exerciseContainer {
    min-height: 65vh;
    display: flex;
    flex-direction: column;
  }
`;
