"use client";
import React, { useState } from "react";
import Image from 'next/image'
import { FormState } from "react-hook-form";
import { Form, FormAction } from "../Form/Reducer/FormReducer";
interface MyCaptchaPropType{
  verified:Form
  setVerified:React.Dispatch<FormAction>
}

export default function MyCaptcha({verified,setVerified}:MyCaptchaPropType) {
  const handleCheckboxChange = () => {
    setVerified({type:"SEND_PERMISION",payload:{verified:!verified.verified,error:false}})
  };

  return (
    <div
      className="flex items-center border border-[#D6D6D6] lg:min-w-[302px] w-full
       p-2 rounded-md lg:w-max max-w-md  bg-[#FAFAFA] shadow-sm"
      dir="rtl"
    >
      <div className="flex w-full justify-between items-center ">
        <div className="flex w-fit items-center">
          <input
            type="checkbox"
            checked={verified.verified}
            onChange={handleCheckboxChange}
            className="w-5 h-5 border-[#C1C1C1] rounded cursor-pointer"
          />
          <label className="text-right w-max text-gray-700 font-medium mr-2">
            من ربات نیستم
          </label>
        </div>
        <div className="Img w-auto flex justify-start items-center">
          <Image width={48} height={48} alt='' src="/images/captcha.png" />
        </div>



      </div>
    </div>
  );
}