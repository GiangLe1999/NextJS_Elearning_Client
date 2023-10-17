"use client";

import { useLoginMutation } from "@/store/auth/auth-api";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner } from "react-icons/im";
import * as Yup from "yup";
import FormInput from "../form-input";
import BtnWithLoading from "../btn-with-loading";

interface Props {}

const schema = Yup.object({
  email: Yup.string()
    .email("Your email is invalid")
    .required("Please enter your email"),
  problem: Yup.string().required("Please enter your problem"),
  content: Yup.string().required("Please explain about your problem"),
});

interface FormValues {
  email: string;
  problem: string;
  content: string;
}

const FooterForm: FC<Props> = (props): JSX.Element => {
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();

  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      problem: "",
      content: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {};

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login successfully!");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  return (
    <form
      className="w-full bg-white dark:bg-slate-800 custom-shadow py-3 pb-5 px-5 rounded-sm space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        id="email"
        label="Email"
        register={register("email")}
        errorMsg={errors.email?.message}
        placeholder="Eg: example@gmail.com"
      />

      <FormInput
        id="problem"
        label="Problem"
        register={register("problem")}
        errorMsg={errors.problem?.message}
        placeholder="Eg: Exchange, Refund, ..."
      />

      <FormInput
        textarea
        rows={1}
        id="content"
        label="Explain your problem"
        register={register("content")}
        errorMsg={errors.content?.message}
      />

      <BtnWithLoading
        content="SUBMIT"
        isLoading={isLoading}
        customClasses="mt-6 w-full"
        type="submit"
      />
    </form>
  );
};

export default FooterForm;
