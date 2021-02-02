import { useHistory } from "react-router-dom";
import { Api } from "api/service";
import { ROUTES } from "@type/routes";

export const useAuth = () => {
  const history = useHistory();

  const login = async (login: string, password: string) => {
    await Api.login({ login, password });
    history.push(ROUTES.home);
  };

  const getAuthStatus = () => {
    return localStorage.getItem("token");
  };

  return {
    login,
    getAuthStatus,
  };
};
