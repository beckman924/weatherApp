import React from "react";
import { Link } from "react-router-dom";
import me from "./me.png";
import { IconContext } from "react-icons";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiGmail,
} from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

function AboutMe() {
  return (
    <div>
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <button className="rounded-md bg-cyan-300 p-2 hover:bg-cyan-200 font-semibold m-4">
          Take me back home
        </button>
      </Link>

      <section className=" text-white grid grid-cols-2 xl:grid-cols-[30%] grid-flow-col gap-2">
        <div className="">
          <img src={me} alt="me" className="mt-8" />
        </div>

        <div className="mt-[5rem]">
          <h1 className="text-5xl text-left xl:text-9xl ">Hello</h1>{" "}
          <h1 className="text-5xl text-left text-cyan-500  xl:text-9xl">
            World!
          </h1>
          <p className="text-white text-left text-base xl:mt-16 xl:text-4xl mt-3">
            My name is Braian, I´m a fullstack web developer, always looking for
            new challenges, and always learning. Here are some of the
            technologies that I work with:
          </p>
        </div>
      </section>

      <div className="grid grid-cols-9 pt-6 gap-2 xl:mt-10 xl:ml-20">
        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="https://html.com/html5/" className="inline-block">
            <SiHtml5 />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            className="inline-block"
          >
            <FaCss3Alt />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="http://expressjs.com/" className="inline-block">
            <SiExpress />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="https://nodejs.org/en/" className="inline-block">
            <FaNodeJs />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="https://reactjs.org/" className="inline-block">
            <FaReact />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="https://redux.js.org/" className="inline-block">
            <SiRedux />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="https://www.postgresql.org/" className="inline-block">
            <SiPostgresql />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="http://sequelize.org/" className="inline-block">
            <SiSequelize />
          </a>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "3em" }}>
          <a href="https://git-scm.com/" className="inline-block">
            <FaGitAlt />
          </a>
        </IconContext.Provider>
      </div>

      <section className="text-white pt-2">
        <h1 className="text-5xl p-5">Contact me:</h1>
        <div className="grid grid-cols-3 ring-cyan-400 ring-2 col-auto">
          <IconContext.Provider value={{ color: "white", size: "3em" }}>
            <a
              href="https://www.linkedin.com/in/braian-carabajal-dev/"
              className="ml-16 xl:ml-72 inline-block"
            >
              <FaLinkedin />
            </a>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "white", size: "3em" }}>
            <a
              href="mailto:braiancarabajal@gmail.com"
              className="ml-16 xl:ml-72 inline-block"
            >
              <SiGmail />
            </a>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "white", size: "3em" }}>
            <a
              href="https://api.whatsapp.com/send?phone=5492604847319"
              className="ml-16 xl:ml-72 inline-block"
            >
              <ImWhatsapp />
            </a>
          </IconContext.Provider>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
