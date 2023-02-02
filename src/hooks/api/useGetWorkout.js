import useAsync from "../useAsync";
import * as workoutApi from "../../services/workoutApi";
import useToken from "../useToken";

export default function useGetWorkout() {
  const token = useToken();

  const {
    data: getWorkOut,
    loading: getWorkOutLoading,
    error: getWorkOutError,
    act: getgetWorkOut,
  } = useAsync(() => workoutApi.getAll(token));

  return {
    getWorkOut,
    getWorkOutLoading,
    getWorkOutError,
    getgetWorkOut,
  };
}
