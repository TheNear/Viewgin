import { Rule, RuleObject } from "antd/lib/form";

const VALID_CONST = {
  MIN_PASS_LENGTH: 3,
  MAX_PASS_LENGTH: 60,
  MIN_USER_LENGTH: 3,
  MAX_USER_LENGTH: 20,
};

export const requireWithMessage = (message: string): RuleObject => ({
  required: true,
  message,
});

export const minLength = (min: number, message: string): RuleObject => ({ min, message });
export const maxLength = (max: number, message: string): RuleObject => ({ max, message });

export const passRules: Rule[] = [
  requireWithMessage("Введите пароль."),
  minLength(VALID_CONST.MIN_PASS_LENGTH, `Минимальная длинна пароля ${VALID_CONST.MIN_PASS_LENGTH}`),
  maxLength(VALID_CONST.MAX_PASS_LENGTH, `Максимальная длинна пароля ${VALID_CONST.MAX_PASS_LENGTH}`),
];

export const usernameRules: Rule[] = [
  requireWithMessage("Введите логин."),
  minLength(VALID_CONST.MIN_USER_LENGTH, `Минимальная длинна логина ${VALID_CONST.MIN_USER_LENGTH}`),
  maxLength(VALID_CONST.MAX_USER_LENGTH, `Максимальная длинна логина ${VALID_CONST.MAX_USER_LENGTH}`),
  {
    pattern: /^[a-z0-9A-Z]{3,20}$/g,
    message: "Только цифры и латинские буквы.",
  },
];
