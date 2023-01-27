import { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../../components/DefaultButton";
import useGetWorkout from "../../../hooks/api/useGetWorkout";
import Select from "react-select";
import Exercise from "../../../components/Dashboard/Workout/ExerciseDisplay";

export default function WorkoutPage() {
  const { getgetWorkOut } = useGetWorkout();
  const [workouts, setWorkouts] = useState();
  const [exercises, setExercises] = useState([]);

  const fetchWorkout = async () => {
    const workouts = await getgetWorkOut();
    setWorkouts(workouts);
    console.log(workouts);
  };

  const options = [
    { value: "treinoA", label: "Treino A" },
    { value: "treinoB", label: "Treino B" },
  ];

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
      <div className="header">
        {workouts ? (
          <Select options={options} onChange={handleSelection} />
        ) : (
          <p>Você ainda não tem exercícios para esteg treino</p>
        )}
      </div>
      <div>
        {exercises.map((value, index) => (
          <Exercise key={index} name={value.name} />
        ))}
      </div>
      <DefaultButton>Add Exercise</DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .header {
    font-size: 1rem;
  }
`;
