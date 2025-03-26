"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import { User } from "@/types/user";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid, isSubmitted },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    axios
      .post("/api/auth/register", { user })
      .then(() => {
        router.push("/login");
      })
      .catch((err) => setError(err.response.data.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.headline}>Создать аккаунт</h2>
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
        <p className={styles.serverError}>{error}</p>
        <div className={styles.formBottom}>
          <Link href="/login">Уже есть аккаунт?</Link>
          <button
            type="submit"
            disabled={isSubmitted && !(isDirty && isValid)}
            className={styles.button}
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
