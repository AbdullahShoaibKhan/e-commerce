"use client";
import { useState } from "react";
import { Checkbox } from "@mui/material";

const Form = () => {
  const [loading, setLoading] = useState<boolean>(false);


  const onSubmit = async (data: any) => {
    console.log("data", data);
    try {
      setLoading((loading) => !loading);
    } catch (error) {
    } finally {
      setLoading((loading) => !loading);
    }
  };

  return (
    <form onSubmit={(onSubmit)} className="flex min-h-full flex-1 mx-auto flex-col justify-center px-6 py-15 my-5 lg:px-8 sm:max-w-sm border rounded-lg bg-[#F3F4F4]">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-extrabold text-[#17283B]">
        Login
      </h2>
    </div>

    <div className="my-5 sm:mx-auto sm:w-full ">
      <form className="space-y-4" action="#" method="POST">
      <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username<span className="text-[#FF4747]"> *</span>
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username or Email address <span className="text-[#FF4747]"> *</span>
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password<span className="text-[#FF4747]"> *</span>
            </label>
            <div className="text-sm"></div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 items-center">
            <p className="text-sm font-normal">Remember me</p>
            <Checkbox />
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-[#FF4747]"
          >
            Lost your password?
          </a>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-full bg-[#FF4747] px-3 py-1.5 text-sm font-semibold text-white shadow-sm"
          >
            Login
          </button>
        </div>
        <p className="text-sm text-center font-medium">Or</p>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-full bg-[#3e9edf] px-3 py-1.5 text-sm font-semibold text-white shadow-sm gap-x-2 items-center"
          >
            <img src="/fb.png" style={{width:"8px",height:"10px",color:"white"}} />
            Facebook
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-full bg-white  px-3 py-1.5 text-sm font-semibold text-black shadow-sm gap-x-2 items-center"
          >
            <img src="/googleIcon.jpg" style={{width:"13px",height:"13px",color:"white"}} />
            Google
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm font-medium text-gray-500">
        Already Register ?{" "}
        <a
          href="/Auth/login"
          className="text-sm font-semibold text-[#FF4747]"
        >
          Login
        </a>
      </p>
    </div>
  </form>
  );
};

export default Form;
