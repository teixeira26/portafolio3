"use client"
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {useForm, SubmitHandler} from 'react-hook-form';
type Inputs = {
  name:string,
  email:string,
  subject:string,
  message:string,
};

interface Props{
  mail:string,
  subTitle:string
  adress:string,
  phone:string,
  title:string,
  placeholders:Array<string>,
  callToAction:string
}
export default function Contact({mail, adress, phone, title, placeholders, subTitle, callToAction}:Props) {
  const { register, handleSubmit } = useForm();
  const onSubmit:any = (formData:any) => window.location.href = `mailto:matheus.teixeira.dev@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message} ${formData.email}`;
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute text-gray-500 mb-10 top-16 md:top-24 tracking-[20px] uppercase text-[12px] md:text-2xl ">
        {title}
      </h3>
      <div className="flex flex-col space-y-3 md:space-y-5 lg:space-y-10 mt-16 md:mt-24  w-full">
        <h4 className="xl:text-4xl sm:text-lg text-base font-semibold text-center">
          {subTitle}
          <span className="decoration-[#F7AB0A]/50 underline">{callToAction}</span>
        </h4>

        <div className="flex items-center space-x-5 justify-center text-sm md:text-md">
          <PhoneIcon className="text-[#F7AB0A] h-w w-7 animate-pulse" />
          <p className="text-md md:text-2xl">{phone}</p>
        </div>

        <div className="flex items-center space-x-5 justify-center text-sm md:text-md">
          <EnvelopeIcon className="text-[#F7AB0A] h-w w-7 animate-pulse" />
          <p className="text-md md:text-2xl w-[80%] smp:w-auto text-ellipsis overflow-hidden">{mail}</p>
        </div>

        <div className="flex items-center space-x-5 justify-center text-sm md:text-md">
          <MapPinIcon className="text-[#F7AB0A] h-w w-7 animate-pulse" />
          <p className="text-md md:text-2xl">{adress}</p>
        </div>


      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-full mx-auto" action="">
        <div className="flex flex-wrap flex-grow space-y-2 space-x-0 md:space-y-0 md:space-x-2">
          <input {...register('name')} placeholder={placeholders? placeholders[0]: ""} className='contactInput max-w-full grow' type="text" />
          <input {...register('email')} placeholder={placeholders? placeholders[1]: ""} className='contactInput max-w-full grow' type="text" />
        </div>
        <input {...register('subject')} placeholder={placeholders? placeholders[2]: ""} className='contactInput' type="text" />
        <textarea {...register('message')} placeholder={placeholders? placeholders[3]: ""} className='contactInput'></textarea>
        <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
      </form>
      </div>
    </div>
  );
}
