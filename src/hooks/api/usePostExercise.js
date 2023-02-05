import useAsync from "../useAsync";
import * as exerciseApi from "../../services/exerciseApi";
import useToken from "../useToken";

export default function usePostExercise() {
  const token = useToken();

  const {
    loading: postExerciseLoading,
    error: postExerciseError,
    act: postExercise,
  } = useAsync((body) => exerciseApi.post(body, token), false);

  return {
    postExerciseLoading,
    postExerciseError,
    postExercise,
  };
}
