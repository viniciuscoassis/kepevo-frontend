import useAsync from "../useAsync";
import * as authApi from "../../services/authApi";

export default function useSignUp(body) {
  const token = useToken();

  const {
    data: signUp,
    loading: signUpLoading,
    error: signUpError,
    act: postSignUp,
  } = useAsync(() => authApi.signUp(body, token));

  return {
    signUp,
    signUpLoading,
    signUpError,
    postSignUp,
  };
}
