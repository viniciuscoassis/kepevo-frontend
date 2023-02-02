import useAsync from "../useAsync";
import * as authApi from "../../services/authApi";

export default function useSignUp() {
  const {
    act: signUp,
    loading: signUpLoading,
    error: signUpError,
  } = useAsync(authApi.signUp, false);

  return {
    signUp,
    signUpLoading,
    signUpError,
  };
}
