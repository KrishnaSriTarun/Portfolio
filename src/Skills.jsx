// eslint-disable-next-line no-unused-vars
import React from "react";
import {
      FaJava,
      FaNodeJs,
      FaBrain,
      FaPython,
      FaJsSquare,
      FaHtml5,
      FaCss3,
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
      SiReact,
      SiExpress,
      SiFlask,
      SiBootstrap,
      SiTailwindcss,
      SiMongodb,
      SiMysql,
      SiGit,
      SiGithub,
      SiRedux,
      SiSpringboot,
} from "react-icons/si";

function Skills() {
      return (
            <section id="skills" className="mx-5">
                  <h2 className="about-head text-white font-bold text-4xl pl-5 mb-5">
                        <span className="border-b-4 border-sky-400 rounded-sm">Skills</span>
                  </h2>

                  {/* Certifications */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5">
                        <span className="border-b-2 border-sky-400">Certifications</span>
                  </h2>
                  <div className="container mb-3">
                        <div className="row">
                              <div className="col-md-6 mb-3">
                                    <a
                                          href="https://drive.google.com/file/d/1wPI4U3ZDwMNDaXg8qKgYh9KsDmSSJShA/view?usp=drive_link"
                                          target="_blank"
                                          rel="noreferrer noopener"
                                    >
                                          <div className="card d-flex font-medium align-items-center text-white p-3">
                                                <h2 className="text-lg mb-2">Machine learning</h2>
                                                <p className="text-gray-300 align-items-center">IIIT Hyderabad</p>
                                          </div>
                                    </a>
                              </div>
                              <div className="col-md-6 mb-3">
                                    <a
                                          href="https://drive.google.com/file/d/1gtkhKe0MN2mjl6wv5eZqKxGK8FExZ8GM/view?usp=drive_link"
                                          target="_blank"
                                          rel="noreferrer noopener"
                                    >
                                          <div className="card d-flex font-medium align-items-center text-white p-3">
                                                <h2 className="text-lg mb-2">Web Development</h2>
                                                <p className="text-gray-300 align-items-center">Apna College</p>
                                          </div>
                                    </a>
                              </div>
                              <div className="col-md-6 mb-3">
                                    <div className="card d-flex font-medium align-items-center text-white p-3">
                                          <h2 className="text-lg mb-2">MongoDB</h2>
                                          <p className="text-gray-300 align-items-center">Greeks for Greeks</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Languages */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5">
                        <span className="border-b-2 border-sky-400">Languages</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        <SkillCard icon={<FaJava size={40} color="#007396" />} label="Java" />
                        <SkillCard icon={<FaPython size={40} color="#3776AB" />} label="Python" />
                        <SkillCard icon={<FaJsSquare size={40} color="#F7DF1E" />} label="JavaScript" />
                        <SkillCard icon={<TbSql size={40} color="rgb(40, 225, 241)" />} label="SQL" />
                        <SkillCard icon={<FaHtml5 size={40} color="#E34F26" />} label="HTML5" />
                        <SkillCard icon={<FaCss3 size={40} color="#1572B6" />} label="CSS" />
                  </div>

                  {/* Frameworks */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-sky-400">Frameworks</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        <SkillCard icon={<SiReact size={40} color="#61DBFB" />} label="React.js" />
                        <SkillCard icon={<FaNodeJs size={40} color="#68A063" />} label="Node.js" />
                        <SkillCard icon={<SiExpress size={40} color="white" />} label="Express.js" />
                        <SkillCard icon={<SiFlask size={40} color="white" />} label="Flask" />
                        <SkillCard icon={<SiBootstrap size={40} color="#563D7C" />} label="Bootstrap" />
                        <SkillCard icon={<SiTailwindcss size={40} color="#38B2AC" />} label="Tailwind" />
                        <SkillCard icon={<SiSpringboot size={40} color="#6DB33F" />} label="Spring Boot" />
                  </div>

                  {/* Tools */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-sky-400">Tools</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        <SkillCard icon={<SiMongodb size={40} color="#47A248" />} label="MongoDB" />
                        <SkillCard icon={<SiMysql size={40} color="#4479A1" />} label="MySQL" />
                        <SkillCard icon={<SiGit size={40} color="#F1502F" />} label="Git" />
                        <SkillCard icon={<SiGithub size={40} color="white" />} label="GitHub" />
                        <SkillCard icon={<VscVscode size={40} color="#0066F1" />} label="VS" />
                        <SkillCard icon={<SiRedux size={40} color="#764ABC" />} label="Redux" />
                  </div>

                  {/* Technologies */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-sky-400">Technologies</span>
                  </h2>
                  <div className="flex items-center ml-5">
                        <SkillCard icon={<FaBrain size={40} color="#4B8BBE" />} label="Machine Learning" />
                  </div>
            </section>
      );
}

function SkillCard({ icon, label }) {
      return (
            <div className="icons flex flex-col items-center text-center shadow-[0px_0px_8px_0px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.7)] rounded-xl px-5 py-2 transition-transform transform hover:scale-105">
                  {icon}
                  <h3 className="text-lg md:text-xl text-white mt-2">{label}</h3>
            </div>
      );
}

export default Skills;
