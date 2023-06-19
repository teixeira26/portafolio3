"use client";
import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

interface Props {
  socialIcons?: Array<string>;
  email?: string;
  emailText:string,
}

function Header({ socialIcons, email, emailText }: Props) {

  return (
    <header className="w-full sticky top-0 max-w-7xl m-auto flex items-start justify-between z-20 overflow-x-hidden">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {socialIcons?.map((url, index) => {
          return <SocialIcon url={url} bgColor="transparent" fgColor="gray" key={index} />;
        })}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url={`mailto:${email}`}
          className="cursor-pointer"
          bgColor="transparent"
          fgColor="gray"
        ></SocialIcon>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {emailText}
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
