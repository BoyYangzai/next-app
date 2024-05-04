"use client";

import Image from "next/image";
import { Button, Form, Input, Radio } from "antd";
import Password from "antd/es/input/Password";
import Link from "next/link";
import { useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setCookie("session", "value");
    setLoading(true);
    setTimeout(() => {
      router.push("/onboarding");
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="w-80 flex justify-center items-center flex-wrap">
        <div className="w-full flex justify-center">
          <Image src="/gif/login.gif" alt="" width={100} height={100}></Image>
        </div>
        <Form layout={"vertical"} form={form} className="w-full">
          <Form.Item label="Member email" className="font-bold">
            <Input placeholder="username" className="h-10 font-medium" />
          </Form.Item>
          <Form.Item label="Email" className="font-bold">
            <Input placeholder="Email" className="h-10 font-medium" />
          </Form.Item>
          <Form.Item label="PassWord" className="font-bold">
            <Password placeholder="password" className="h-10 font-medium" />
          </Form.Item>
          <Form.Item className="flex justify-center items-center">
            <Button
              type="primary"
              style={{
                width: "20rem",
                height: "2.5rem",
                fontWeight: "bold",
              }}
              onClick={handleLogin}
              loading={loading}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Link className="w-full text-xs text-[#8b8b8b]" href="/login">
          I have read and agreed to the Terms of Use Already a member?{" "}
          <span className="text-primary">Sign in here</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
