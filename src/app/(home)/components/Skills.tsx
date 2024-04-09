"use client";
import React from "react";  
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiJavascript, SiMysql, SiNextdotjs, SiPhp, SiReact, SiTailwindcss } from "react-icons/si";

export default function Skills(){
    const skills =[
        {
            text:"React",
            Icon: SiReact,
        },        {
            text:"Next.js",
            Icon: SiNextdotjs,
        },        {
            text:"Tailwind",
            Icon: SiTailwindcss,
        },        {
            text:"JavaScript",
            Icon: SiJavascript,
        },        {
            text:"Php",
            Icon: SiPhp,
        },        {
            text:"MySql",
            Icon: SiMysql,
        }
    ]



    return(
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Skills 📭" className="flex flex-col items-center justify-center -rotate-6"/>
            <HoverEffect items={skills}/>
        </div>
    )
}