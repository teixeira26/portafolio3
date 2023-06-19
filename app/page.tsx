"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
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
    Promise.all([
      fetch(`${localUrl}/api/initial-pages`)
        .then((e) => e.json())
        .then((e) => setInitialPage(e)),
      fetch(`${localUrl}/api/skills?populate=deep`)
        .then((e) => e.json())
        .then((e) => setSkills(e)),
      fetch(`${localUrl}/api/projects?populate=deep`)
        .then((e) => e.json())
        .then((e) => setProjects(e)),
      fetch(`${localUrl}/api/experiences?populate=deep`)
        .then((e) => e.json())
        .then((e) => setExperiences(e)),
      fetch(`${localUrl}/api/abouts?populate=deep`)
        .then((e) => e.json())
        .then((e) => setAbouts(e)),
    ]).then(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black h-screen w-full overflow-x-hidden overflow-y-scroll text-white z-0 px-5 snap-mandatory snap-y scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <img
            className=" w-20"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wpfaster.org%2Fwp-content%2Fuploads%2F2013%2F06%2Floading-gif.gif&f=1&nofb=1&ipt=33fc65b9bf3302ff24650a2877d4c616be74de457bddb680032c6d31af0ab382&ipo=images"
          ></img>
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
          <footer className="sticky right-24 bottom-24 w-full cursor-pointer">
            <a href="#hero">
              <div className="flex justify-end  h-0 overflow-y-visible ">
                <img
                  draggable={false}
                  src="https://leanfiadone.vercel.app/_next/image?url=%2Farrow.png&w=32&q=75"
                  alt="img"
                  className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 mr-12 "
                ></img>
              </div>
            </a>
          </footer>
        </>
      )}
    </div>
  );
}
function e(prevState: undefined): undefined {
  throw new Error("Function not implemented.");
}
