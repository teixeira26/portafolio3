"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import LanguagesBar from "@/components/LanguagesBar";
import loader from "../public/loading.gif";
import Head from "next/head";
const localUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import { useEffect, useState, useMemo } from "react";
import useT from "@/components/t";

export default function Home() {
  const [skills, setSkills]: any = useState();
  const [skillsSelected, setSkillsSelected]: any = useState();

  const [projects, setProjects]: any = useState();
  const [projectsSelected, setProjectsSelected]: any = useState();

  const [experiences, setExperiences]: any = useState();
  const [experiencesSelected, setExperiencesSelected]: any = useState();

  const [abouts, setAbouts]: any = useState();
  const [loading, setLoading]: any = useState(true);

  const [initials, setInitials]: any = useState();
  const [initialsSelected, setInitialsSelected]: any = useState();

  const {locale, setT} = useT();
  useEffect(() => {
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

        fetch(`${localUrl}/api/initials?populate=deep`)
        .then((e) => e.json())
        .then((e) => setInitials(e))
        .then(() => setLoading(false));
        
  }, []);

  useMemo(()=>{
    if(initials){
      setInitialsSelected(initials.data[0].attributes.initialLanguages.find((language:any)=> language.locale === locale))      
    }
    if(experiences) setExperiencesSelected({data: experiences.data.map((experience:any, index:number)=> {
      const language = experience.attributes.experienceLanguages.find((el:any)=>el.locale === locale);
      return{...experience, attributes:{...experience.attributes,  Title:language.Title, summaryPoints: language.summaryPoints}}
    })})

    if(skills) setSkillsSelected({data: skills.data.map((skill:any, index:number)=> {
      const language = skill.attributes.skillLanguages.find((el:any)=>el.locale === locale);
      return{...skill, attributes:{...skill.attributes,  subtitle:language.subtitle, title: language.title}}
    })})

    if(projects) setProjectsSelected({data: projects.data.map((project:any, index:number)=> {
      const language = project.attributes.projectLanguages.find((el:any)=>el.locale === locale);
      return{...project, attributes:{...project.attributes,  description:language.description, title: language.title}}
    })})
  }, [locale, initials, experiences, skills, projects])

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen w-full overflow-x-hidden overflow-y-scroll text-white z-0 px-5 snap-mandatory snap-y scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {loading &&  (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img className=" w-50" src={loader.src}></img>
          <h2 className=" text-gray-500 mb-10 top-16 md:top-24 tracking-[20px] uppercase text-[12px] md:text-2xl">Loading</h2>
        </div>
      )}

      {!loading && initialsSelected && (
        <>
          {" "}
          <Head>
            <title>Mathzila</title>
          </Head>
          <Header
            emailText={initialsSelected.header.emailText}
            socialIcons={initialsSelected.header.socialIconsUrls}
            email={initialsSelected.header.email}
          />
          <section className="snap-start" id="hero">
            <Hero
              sectionNames={initialsSelected.hero.sectionNames}
              title={initialsSelected.hero.tittle}
              wordsTypeWriter={
                initialsSelected.hero.wordsTypeWriter
              }
            />
          </section>
          <section className="snap-center" id="about">
            <About
              locale={locale}
              icons={abouts?.data}
              text={initialsSelected.About.text}
              languages={abouts?.data.map((el:any)=>el.attributes.about)}
              title={initialsSelected.About.title}
            />
          </section>
          <section className="snap-center" id="experience">
            <WorkExperience
              sectionTitle={
                initialsSelected.hero.sectionNames[1]
              }
              experiences={experiencesSelected?.data}
              locale={locale}
            />
          </section>
         {skillsSelected && skillsSelected.data[0] && <section className="snap-start" id="skills">
            <Skills
              title={skillsSelected.data[0].attributes.title}
              subtitle={skillsSelected.data[0].attributes.subtitle}
              images={skillsSelected.data[0].attributes.skill_images}
            />
          </section>}
       <section className="snap-start" id="projects">
            <Projects
              sectionTitle={
                initialsSelected.hero.sectionNames[3]
              }
              projects={projectsSelected?.data}
            />
          </section>
          <section className="snap-start" id="contact">
            <Contact
              callToAction={
                initialsSelected.contact.callToAction
              }
              subTitle={initialsSelected.contact.subTitle}
              placeholders={
                initialsSelected.contact.placeholders
              }
              adress={initialsSelected.contact.adress}
              mail={initialsSelected.contact.mail}
              phone={initialsSelected.contact.phone}
              title={initialsSelected.contact.title}
            />
          </section>

            <LanguagesBar setT={setT} />
          
          
        </>
      )}
    </div>
  );
}
function e(prevState: undefined): undefined {
  throw new Error("Function not implemented.");
}
