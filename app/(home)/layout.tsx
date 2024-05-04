"use client";

import { UnorderedListOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const NAV_LIST = ["Chat", "Programs", "Tools", "Memory"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [userBarVisible, setUserBarVisible] = useState(false);
  const router = useRouter();
  const handleNav = (nav: string) => {
    router.push(nav.toLocaleLowerCase());
  };
  const handleCLickDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };
  const handleCLickAvatar = () => {
    setUserBarVisible(!userBarVisible);
  };

  const ProfileList = [
    {
      title: "yang",
      msg: "yang@gmail.com",
    },
    {
      title: "Sign Out",
      fn() {
        router.push("/login");
      },
    },
  ];

  return (
    <main className="w-full h-screen">
      <nav className="h-20 flex justify-center items-center  bg-white border-b border-gray-100 shadow-sm dark:bg-gray-900">
        <div className="w-full flex justify-between items-center">
          <Image
            src={"/img/logo.jpg"}
            alt=""
            width={100}
            height={44}
            className="ml-8"
          ></Image>
          <div className="w-96 md:flex justify-between hidden">
            {NAV_LIST.map((i) => (
              <span
                key={i}
                className="hover:text-[#2e6a50] hover:cursor-pointer font-bold"
                onClick={() => handleNav(i)}
              >
                {i}
              </span>
            ))}
          </div>
          <div className="flex justify-center items-center relative">
            <Image
              src={"/img/user_avatar.jpg"}
              alt=""
              width={40}
              height={40}
              onClick={handleCLickAvatar}
              className="mr-8"
            ></Image>
            <div
              className="flex md:hidden mr-8 hover:cursor-pointer"
              onClick={handleCLickDrawer}
            >
              <UnorderedListOutlined
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </div>
          </div>
        </div>
      </nav>
      {userBarVisible && (
        <div className="absolute right-0 w-42 text-base list-none bg-white divide-y rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 block">
          {ProfileList.map((i) => (
            <div
              key={i.title}
              className="w-full h-10 px-2 flex justify-center items-center flex-wrap hover:cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 m-4"
              onClick={i?.fn}
            >
              <div className="font-bold w-full">{i.title}</div>
              {i.msg && <div className="w-full">{i.msg}</div>}
            </div>
          ))}
        </div>
      )}
      {drawerVisible && (
        <div className="md:hidden">
          {NAV_LIST.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-12 flex justify-center items-center className bg-gray-50 border-b border-gray-100 shadow-sm dark:bg-gray-900"
            >
              <span
                className="hover:text-[#2e6a50] hover:cursor-pointer font-bold"
                onClick={() => handleNav(i)}
              >
                {i}
              </span>
            </motion.div>
          ))}
        </div>
      )}
      {children}
    </main>
  );
}
