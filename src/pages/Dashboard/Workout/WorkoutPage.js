import { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../../components/DefaultButton";
import useGetWorkout from "../../../hooks/api/useGetWorkout";
import AsyncSelect from "react-select/async";

export default function WorkoutPage() {
  const { getgetWorkOut } = useGetWorkout();
  const [workouts, setWorkouts] = useState();

  const fetchWorkout = async () => {
    const workouts = await getgetWorkOut();
    setWorkouts(workouts);
    console.log(workouts);
  };

  useEffect(() => {
    fetchWorkout();
  }, []);

  return (
    <Wrapper>
      <div className="header">
        <AsyncSelect loadOptions={fetchWorkout} />
      </div>
      <p>Você ainda não tem exercícios para este treino</p>
      <DefaultButton>Add Exercise</DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .header {
    font-size: 1rem;
  }
`;
