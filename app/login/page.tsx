"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import { User } from "@/types/user";
import Link from "next/link";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
  const router = useRouter();

  const { error, mutate } = useMutation<
    AxiosResponse,
    AxiosError<{ message: string }>,
    User
  >({
    mutationFn: (user) => {
      return axios.post("/api/auth/login", { user });
    },

    onSuccess: (res) => {
      localStorage.setItem("token", res.data);
      router.push("/");
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid, isSubmitted },
  } = useForm<User>();

  return (
    <div>
      <form
        onSubmit={handleSubmit((user) => mutate(user))}
        className={styles.form}
      >
        <h2 className={styles.headline}>Войти в аккаунт</h2>
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
        <p className={styles.serverError}>{error?.response?.data.message}</p>
        <div className={styles.formBottom}>
          <Link href="/register">Нету аккаунта?</Link>
          <button
            type="submit"
            disabled={isSubmitted && !(isDirty && isValid)}
            className={styles.button}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
