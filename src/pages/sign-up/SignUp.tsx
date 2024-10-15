import { Button, Input } from "@/shared/components";
import styles from "./styles.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password should be more than 6 symbols"),
      })
    ),
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className={styles.wrapper}>
      <h1>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Email"
          {...register("email")}
          error={errors.email}
        />
        <Input
          placeholder="Password"
          {...register("password")}
          error={errors.password}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
