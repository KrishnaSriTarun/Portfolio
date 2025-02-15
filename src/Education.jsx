// eslint-disable-next-line no-unused-vars
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

function Education() {
      return (
            <section id="education">
                  <section className="timeline mt-5">
                        <div className="title-wrapper about-head text-white font-bold text-3xl">
                              <div className="icon-box">
                                    <SchoolIcon />
                              </div>
                              <h3 className="h3 border-b-4 border-sky-400 rounded-sm">
                                    Education
                              </h3>
                        </div>
                  </section>
                  <ol className="timeline-list">
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">B-Tech</h1>
                              <h5 className="h5 timeline-item-title">
                                    <span>Artificial Intelligence and Machine Learning</span>
                              </h5>
                              <span>2021 — 2025</span>
                              <p className="text-base font-medium">
                                    Currently pursuing a degree in AI and ML, focusing on machine learning algorithms, data analysis,
                                    and artificial intelligence applications. Engaged in projects and coursework related to deep learning,
                                    computer vision, and natural language processing to develop practical skills in AI-driven solutions.
                              </p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">Intermediate</h1>
                              <h4 className="h5 timeline-item-title"><span>MPC</span></h4>
                              <span>2019 — 2021</span>
                              <p className="text-base font-medium">
                                    Completed high school with a focus on mathematics, physics, and chemistry, developing a strong foundation
                                    in analytical thinking, problem-solving, and scientific principles, which have been instrumental in pursuing
                                    further education in technology.
                              </p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">Schooling</h1>
                              <span>2007 — 2019</span>
                              <p className="text-base font-medium">
                                    Primary and secondary education completed with a broad exposure to various subjects, fostering a curiosity
                                    for science and technology and building fundamental skills in communication, teamwork, and critical thinking.
                              </p>
                        </li>
                  </ol>
                  <section className="timeline mt-5">
                        <div className="title-wrapper about-head text-white font-bold text-3xl">
                              <div className="icon-box">
                                    <ImportContactsIcon />
                              </div>
                              <h3 className="h3 border-b-4 border-sky-400 rounded-sm">
                                    Experience
                              </h3>
                        </div>
                  </section>
                  <ol className="timeline-list mb-4">
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">
                                    Frontend Developer{" "}
                                    <span className=" text-xl">(GROWTHMATE INFO TECH SOFTWARE SOLUTION PRIVATE LIMITED)</span>
                              </h1>
                              <span>11/2024 — 02/2025</span>
                              <p className="text-base font-medium">
                                    As a Frontend Developer in the Java Full-Stack team, I bring hands-on experience from my role as a Full Stack Development Intern at Growthmate Infotech. I specialize in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap. Currently, I am contributing to a Local Cable Network Project, combining backend logic with innovative frontend designs to deliver seamless web experiences.</p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">
                                    Teaching Assistant{" "}
                                    <span className="text-xl">(Apna College)</span>
                              </h1>
                              <span>09/2024 — 01/2025</span>
                              <p className="text-base font-medium">
                                    Provided guidance to MERN stack developers, answering technical questions and troubleshooting issues, resulting in improved project development workflows and enhanced collaboration. Contributed innovative ideas to improve project functionality by leveraging insights gained from assisting fellow developers, resulting in more efficient and scalable solutions.
                              </p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">
                                    Intern <span className="text-xl">(IIIT Hyderabad)</span>
                              </h1>
                              <span>05/2023 — 07/2024</span>
                              <p className="text-base font-medium">
                                    Developed a To-Do List application using Flask with efficient task management through CRUD operations and RESTful APIs. Enhanced the user interface with responsive design using HTML, CSS, and Bootstrap, ensuring a seamless experience across devices.
                              </p>
                        </li>
                  </ol>
            </section>
      );
}

export default Education;
