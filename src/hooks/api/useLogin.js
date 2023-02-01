import useAsync from "../useAsync";
import * as authApi from "../../services/authApi";

export default function useLogin(body) {
  const token = useToken();

  const {
    data: login,
    loading: loginLoading,
    error: loginError,
    act: postLogin,
  } = useAsync(() => authApi.login(body, token));

  return {
    login,
    loginLoading,
    loginError,
    postLogin,
  };
}
