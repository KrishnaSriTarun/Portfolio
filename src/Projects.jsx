import Cards from "./Cards";

function Projects() {
      return (
            <>
                  <section id="projects">
                        <div className="projects">
                              <div className="container mb-3">
                                    <div className="row m-1">
                                          <h2 className="about-head text-white font-bold text-4xl pl-5 mb-5">
                                                <span className="border-b-4 border-amber-400 rounded-sm">Mern Projects</span>
                                          </h2>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://journeygem.onrender.com/listings" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Full Stack Travelling Website" imgSrc="image.png"
                                                            description="Developed a full-stack travel website using the MERN stack with RESTful APIs, user authentication, interactive maps, and review features to enhance user experience." />
                                                </a>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://weatherappna.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Weather Forecast" imgSrc="Screenshot 2024-10-27 114452.png"
                                                            description="Created a responsive weather forecast website with React.js, integrating a Web API for real-time weather data and a search feature, with a modern UI designed using React MUI." />
                                                </a>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://school-management-api-isox.onrender.com/listSchools" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="School Management System" imgSrc="Screenshot 2024-10-27 114351.png"
                                                            description="Built a location-based school search feature with options to find nearby schools or search specific areas, and added functionality to continuously update the school database." />
                                                </a>
                                          </div>
                                    </div>
                                    <div className="row m-1">
                                          <h2 className="about-head text-white font-bold text-3xl pl-5 mb-5">
                                                <span className="border-b-4 border-amber-400 rounded-sm">Minor Projects</span>
                                          </h2>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://krishnasritarun.github.io/Simon-Says-Game/" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Simon Says Game" imgSrc="Screenshot 2024-10-27 114312.png"
                                                            description='The "Simon Says Game" is an interactive memory game where players repeat an increasingly complex color sequence to test and improve memory skills.' />
                                                </a>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://krishnasritarun.github.io/photographic-page/" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Photographic Page" imgSrc="Screenshot 2024-10-27 114415.png"
                                                            description='The "Photographic Page" is a clean, gallery-style website showcasing photography collections, with sections for exhibits, events, and contact options. ' />
                                                </a>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://krishnasritarun.github.io/web/Netflix/index.html" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Photographic Page" imgSrc="Screenshot 2024-10-28 125541.png"
                                                            description="The Netflix Clone is a basic webpage that replicates Netflix's layout, including sections for features like unlimited streaming, device compatibility, and offline downloads, along with a subscription prompt and FAQ." />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section></>
      );
}

export default Projects;
