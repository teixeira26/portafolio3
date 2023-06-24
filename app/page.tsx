"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import loader from "../public/loading.gif";
import Head from "next/head";
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import { useEffect, useState } from "react";

export default function Home() {
  const [initialPage, setInitialPage]: any = useState();
  const [skills, setSkills]: any = useState();
  const [projects, setProjects]: any = useState();
  const [experiences, setExperiences]: any = useState();
  const [abouts, setAbouts]: any = useState();
  const [loading, setLoading]: any = useState(true);

  useEffect(() => {
       fetch(`${localUrl}/api/initial-pages`)
        .then((e) => e.json())
        .then((e) => setInitialPage(e))
        .then(() => setLoading(false));

        fetch(`${localUrl}/api/skills?populate=deep`)
        .then((e) => e.json())
        .then((e) => setSkills(e))

      fetch(`${localUrl}/api/projects?populate=deep`)
        .then((e) => e.json())
        .then((e) => setProjects(e))

      fetch(`${localUrl}/api/experiences?populate=deep`)
        .then((e) => e.json())
        .then((e) => setExperiences(e))
        
      fetch(`${localUrl}/api/abouts?populate=deep`)
        .then((e) => e.json())
        .then((e) => setAbouts(e))
        
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen w-full overflow-x-hidden overflow-y-scroll text-white z-0 px-5 snap-mandatory snap-y scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {loading && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img className=" w-50" src={loader.src}></img>
          <h2 className=" text-gray-500 mb-10 top-16 md:top-24 tracking-[20px] uppercase text-[12px] md:text-2xl">Loading</h2>
        </div>
      )}

      {!loading && (
        <>
          {" "}
          <Head>
            <title>Mathzila</title>
          </Head>
          <Header
            emailText={initialPage?.data[0].attributes.header.emailText}
            socialIcons={initialPage?.data[0].attributes.header.socialIconsUrls}
            email={initialPage?.data[0].attributes.header.email}
          />
          <section className="snap-start" id="hero">
            <Hero
              sectionNames={initialPage?.data[0].attributes.hero.sectionNames}
              title={initialPage?.data[0].attributes.hero.tittle}
              wordsTypeWriter={
                initialPage?.data[0].attributes.hero.wordsTypeWriter
              }
            />
          </section>
          <section className="snap-center" id="about">
            <About
              icons={abouts?.data}
              text={initialPage?.data[0].attributes.About.text}
              title={initialPage?.data[0].attributes.About.title}
            />
          </section>
          <section className="snap-center" id="experience">
            <WorkExperience
              sectionTitle={
                initialPage?.data[0].attributes.hero.sectionNames[1]
              }
              experiences={experiences?.data}
            />
          </section>
          <section className="snap-start" id="skills">
            <Skills
              title={skills?.data[0].attributes.title}
              subtitle={skills?.data[0].attributes.subtitle}
              images={skills?.data[0].attributes.skill_images}
            />
          </section>
       <section className="snap-start" id="projects">
            <Projects
              sectionTitle={
                initialPage?.data[0].attributes.hero.sectionNames[3]
              }
              projects={projects?.data}
            />
          </section>
          <section className="snap-start" id="contact">
            <Contact
              callToAction={
                initialPage?.data[0].attributes.Contact.callToAction
              }
              subTitle={initialPage?.data[0].attributes.Contact.subTitle}
              placeholders={
                initialPage?.data[0].attributes.Contact.placeholders
              }
              adress={initialPage?.data[0].attributes.Contact.adress}
              mail={initialPage?.data[0].attributes.Contact.mail}
              phone={initialPage?.data[0].attributes.Contact.phone}
              title={initialPage?.data[0].attributes.Contact.title}
            />
          </section>
          
        </>
      )}
    </div>
  );
}
function e(prevState: undefined): undefined {
  throw new Error("Function not implemented.");
}
