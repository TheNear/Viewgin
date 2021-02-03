import { useHistory } from "react-router-dom";
import { Api } from "api/service";
import { ROUTES } from "@type/routes";

export const useAuth = () => {
  const history = useHistory();

  const login = async (login: string, password: string) => {
    await Api.login({ login, password });
    history.push(ROUTES.home);
  };

  const logout = () => {
    localStorage.removeItem("token");
    history.push(ROUTES.login);
  };

  return {
    login,
    logout,
  };
};
