"use client";
import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  email?: string;
  password?: string;
};

const AuthForm = () => {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values.email === "correct@gmail.com") {
      message.success("Welcome to PH Dashboard!");
      // send users to dashboard
      router.push("/dashboard");
    } else if (values.email === "wrong@gmail.com") {
      message.error("Error loggin in. Please try again later.");
    } else {
      message.error("Please enter the correct email!");
    }
  };

  return (
    <Card>
      <h4 className="mb-5 text-center font-semibold text-2xl">Login</h4>
      <div className="max-w-sm mb-5">
        <p className="text-balance text-center">
          To sign in use <span className="font-bold">correct@gmail.com</span>.
          To simulate a not successfull login use{" "}
          <span className="font-bold">wrong@gmail.com</span>. Don&apos;t worry
          about the password.{" "}
        </p>
      </div>

      <Form name="login" onFinish={onFinish} autoComplete="off">
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item className="flex justify-center items-center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AuthForm;
