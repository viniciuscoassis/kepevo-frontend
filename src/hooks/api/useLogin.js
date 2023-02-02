import useAsync from "../useAsync";
import * as authApi from "../../services/authApi";

export default function useLogin() {
  const {
    loading: loginLoading,
    error: loginError,
    act: postLogin,
  } = useAsync(authApi.login, false);

  return {
    loginLoading,
    loginError,
    postLogin,
  };
}
