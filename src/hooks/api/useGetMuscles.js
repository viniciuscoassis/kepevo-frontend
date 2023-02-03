import useAsync from "../useAsync";
import * as muscleGroupsApi from "../../services/muscleGroupsApi";
import useToken from "../useToken";

export default function useGetMuscles() {
  const token = useToken();

  const {
    data: getMuscles,
    loading: getMusclesLoading,
    error: getMusclesError,
    act: getgetMuscles,
  } = useAsync(() => muscleGroupsApi.getAll(token));

  return {
    getMuscles,
    getMusclesLoading,
    getMusclesError,
    getgetMuscles,
  };
}
