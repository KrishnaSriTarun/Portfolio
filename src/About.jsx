
import DownloadIcon from '@mui/icons-material/Download';
const About = () => {
    return (
        <section id="about">
            <div>
                <h2 className="about-head text-white font-bold text-3xl pl-5">
                    <span className="border-b-4 border-sky-400 rounded-sm">
                        About Me
                    </span>
                </h2>
                <p className="about-des text-gray-300 p-5">
                Hello! I’m Krishna Sri Tarun, hailing from the beautiful village of Rajamahendravaram, Andhra Pradesh. I am currently pursuing my Bachelor of Technology at the Kakinada Institute of Engineering and Technology. Growing up in a close-knit community, I developed a passion for problem-solving and technology, which led me to explore the world of web development and machine learning. Along with my technical skills, I take pride in my strong work ethic and commitment to continuous learning. When I’m not coding, you can find me exploring new technologies, mentoring junior developers, or contributing to community projects. I enjoy collaborating with others to bring creative ideas to life and create meaningful impact through technology.
                </p>
            </div>

            <h2 className="about-head text-white font-semibold text-2xl text-center pl-5 mb-3">
                <span className="border-b-2 border-sky-400">Volunteer Experience</span>
            </h2>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card d-flex font-medium align-items-center p-4 m-3">
                            <h1 className="text-white text-2xl pl-5">Student Mentor</h1>
                            <p className="text-gray-300">
                                Guided juniors in machine learning topics and mentored them
                                on implementing machine learning algorithms for hackathon projects.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card d-flex font-medium align-items-center p-4 m-3">
                            <h1 className="text-white text-2xl pl-5">Teaching Assistant</h1>
                            <p className="text-gray-300">
                            Guided MERN stack developers with technical support and innovative solutions, enhancing project workflows and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="download mb-5">
                <a
                    href="Krishna Sri Tarun Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                >
                    Resume <DownloadIcon />
                </a>
            </div>
        </section>
    );
};

export default About;
