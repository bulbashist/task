import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./style.module.css";
import { User } from "@/types/user";
import { AxiosError } from "axios";

type Props = {
  register: UseFormRegister<User>;
  errors: FieldErrors<User>;
  serverError: AxiosError<{ message: string }> | null;
};

const FormBodyComponent = ({ register, errors, serverError }: Props) => {
  return (
    <>
      <div className={styles.block}>
        <label htmlFor="login">Логин</label>
        <input
          {...register("login", {
            minLength: {
              value: 8,
              message: "Длина должна быть не менее 8 символов",
            },
            required: "Поле не должно быть пустым",
          })}
          id="login"
          className={styles.input}
        />
        <p className={styles.error}>{errors.login?.message}</p>
      </div>
      <div className={styles.block}>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Длина должна быть не менее 8 символов",
            },
            required: "Поле не должно быть пустым",
          })}
          id="password"
          className={styles.input}
        />
        <p className={styles.error}>{errors.password?.message}</p>
      </div>
      <p className={styles.serverError}>
        {serverError?.response?.data.message}
      </p>
    </>
  );
};

export default FormBodyComponent;
