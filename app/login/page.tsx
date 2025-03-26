"use client";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

type User = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid, isSubmitted },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    axios.post("/api/auth/login", { user }).then((res) => {
      localStorage.setItem("token", res.data);
      router.push("/");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
        <button
          type="submit"
          disabled={isSubmitted && !(isDirty && isValid)}
          className={styles.button}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
