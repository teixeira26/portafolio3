"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import image from "../public/image.png";
import Image from "next/image";

type Props = {
  wordsTypeWriter:Array<string>,
  title:string,
  sectionNames:Array<string>
};

export default function Hero({wordsTypeWriter, title, sectionNames}: Props) {
  const [text, count] = useTypewriter({
    words: wordsTypeWriter,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src={image.src}
        style={{marginTop:'-10px'}}
        className="relative object-cover rounded-full w-48 h-48"
        alt="profilePicture"
      ></img>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {title}
        </h2>
        <h3 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h3>
        <div className="pt-3">
          <a href={'#about'}>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-eidest text-gray-500 transition-all hover:text-[#f7ab0a]/40 hover:border-[#f7ab0a]">
              {sectionNames ? sectionNames[0] : ''}
            </button>
          </a>
          <a href={'#experience'}>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-eidest text-gray-500 transition-all hover:text-[#f7ab0a]/40 hover:border-[#f7ab0a]">
              {sectionNames ? sectionNames[1] : ''}
            </button>
          </a>
          <a href={'#skills'}>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-eidest text-gray-500 transition-all hover:text-[#f7ab0a]/40 hover:border-[#f7ab0a]">
              {sectionNames ? sectionNames[2] : ''}
            </button>
          </a>
          <a href={'#projects'}>
            <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-eidest text-gray-500 transition-all hover:text-[#f7ab0a]/40 hover:border-[#f7ab0a]">
              {sectionNames ? sectionNames[3] : ''}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
