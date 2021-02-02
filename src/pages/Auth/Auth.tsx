import { LoginForm } from "@components/LoginForm/LoginForm";
import { ROUTES } from "@type/routes";
import React from "react";
import { useHistory } from "react-router-dom";

// Вынес на отдельную страницу, для расширения
// например добавления формы регистрации

const Auth: React.FC = () => {
  const history = useHistory();

  if (localStorage.getItem("token")) {
    history.push(ROUTES.home);
  }

  return (
    <>
      <LoginForm />
    </>
  );
};

export { Auth };
