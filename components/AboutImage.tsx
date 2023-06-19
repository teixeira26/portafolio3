"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import coffe from "../public/coffee.webp";
import darwin from "../public/darwin.jpeg";
import gym from "../public/gym.webp";
import onePiece from "../public/onePiece.jpeg";
import charlesDarwin from "../public/charlesDarwin.jpeg";
import books from "../public/books.jpeg";
import food from "../public/food.jpeg";
import cleaning from "../public/cleaning.webp";
import DivParallax from "./DivParallax";
type Props = {}

export default function AboutImage({}: Props) {
  return (
    <div className="hidden w-[50%] h-[100vh] lg:flex items-start justify-end mt-[7rem]">
        <div className=" ml-[3rem]">
        <div className="bg-fixed w-[50%] p-0 relative h-full flex items-center justify-center">
          <div className="relative scale-150 mt-10">
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[44px] w-[91px] h-[80px]"
            >
              <img
                src={coffe.src}
                alt="hexagonImg"
                className="hexagonImg absolute right-[10px] top-[-28px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[83px] top-[53px] w-[183px] h-[160px]"
            >
              <img
                src={darwin.src}
                alt=""
                className="hexagonImg absolute right-[10px] top-[-28px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 3.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-0 top-[75px] w-[91px] h-[80px]"
            >
              <img
                src={gym.src}
                alt=""
                className="hexagonImg absolute right-[10px] top-[-28px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[257px] top-[116px] w-[91px] h-[80px]"
            >
              <img
                src={onePiece.src}
                alt=""
                className="cover hexagonImg absolute right-[-2px] top-[-7px] object-center w-[120px] h-[90px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[167px] top-[195px] w-[183px] h-[160px]"
            >
              <img
                src={charlesDarwin.src}
                alt=""
                className="hexagonImg absolute right-[1px] top-[-28px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[85px] top-[216px] w-[91px] h-[80px]"
            >
              <img
                src={cleaning.src}
                className="cover hexagonImg absolute right-[-2px] top-[-7px] object-center w-[120px] h-[90px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[45px] top-[292px] w-[91px] h-[80px]"
            >
              <img
                src={books.src}
                className="cover hexagonImg absolute right-[-2px] top-[-7px] object-center w-[120px] h-[90px]"
              />
            </motion.div>

            <motion.div
              initial={{
                x: -200,
                opacity: 0,
                scale: 0.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="hexagon absolute right-[168px] top-[355px] w-[91px] h-[80px]"
            >
              <img
                src={food.src}
                className="cover hexagonImg absolute right-[-2px] top-[-7px] object-center w-[120px] h-[90px]"
              />
            </motion.div>
          </div>
        </div>
    </div>
    </div>
    
  )
}