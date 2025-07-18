import React from "react";
import img from "../assets/Img/img.jpeg";

export const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container " data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="row justify-content-between gy-4">
                <div className="col-lg-5">
                  <img src={img} className="img-fluid" alt="Profile" />
                </div>
                <div className="col-lg-7 about-info">
                  <p>
                    <strong>Name: </strong> <span>Mayur Gaikwad</span>
                  </p>
                  <p>
                    <strong>Profile: </strong> <span>Software developer</span>
                  </p>
                  <p>
                    <strong>Email: </strong>{" "}
                    <span>mayurgaikwad1442@gmail.com</span>
                  </p>
                  <p>
                    <strong>Phone: </strong> <span>+91 7447849409</span>
                  </p>
                </div>
              </div>
              <div className="skills-content skills-animation">
                <h5>Skills</h5>
                <div className="progress">
                  <span className="skill">
                    <span>HTML</span> <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>CSS</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>JavaScript</span> <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>React js</span> <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Python-Django</span> <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-me">
                <h4>About me</h4>
                <p>
                  I’m Mayur Gaikwad, a Software Developer from Nashik, India,
                  passionate about crafting innovative web solutions. With a BCS
                  degree from K. V. N. Naik College (77.83%, 2018–2021), I HSC
                  at D. D. Bytco Junior College (55.23%, 2016–2018), and SSC at
                  Modern Education Society (76.20%, 2015–2016).
                </p>
                <p>
                  My career began with a 6-month internship at Heuristic
                  Technopark (Jul 2023–Jan 2024), where I mastered Python and
                  Django, developing text recognition and X-ray detection
                  modules. This was followed by a 4-month internship at CuFront
                  (Feb 2024–May 2024), focusing on healthcare APIs. Since August
                  2024, I’ve been a Software Developer at Heuristic Technopark,
                  advancing from Trainee to Developer.
                </p>
                <p>
                  I am specialize in Python, Django, React.js, and TanStack
                  Query, delivering impactful applications across diverse
                  sectors.I enjoy traveling and bike riding, which inspire my
                  creative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="zoom">
          <h2>Resume</h2>
          <p>
            Necessitatibus facilisis ex ea, aliquid fuga in sint consectetur
            velit
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 col-lg-12"
              data-theme="fade-up"
              data-aos-delay="100"
            >
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Mayur Gaikwad</h4> {/* Replace with your actual name */}
                <p>
                  <em>
                    Passionate and detail-oriented React Developer with 1 year
                    of experience at Heuristic Technopark. Skilled in building
                    responsive web applications and backend systems using Python
                    and Django. Eager to contribute to software development
                    projects that solve real-world problems.
                  </em>
                </p>
                <ul>
                  <li>Heuristic Technopark, Nashik, India</li>{" "}
                  <li>+91 7447849409</li> <li>mayurgaikwad1442@gmail.com</li>{" "}
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <h5>2018 - 2021</h5>
                <p>
                  <em>
                    K.V.N. Naik College, Nashik — Affiliated to Pune University
                  </em>
                </p>
                <p>
                  Completed B.Sc. in Computer Science with a 73% aggregate.
                  Gained solid foundations in software development, programming,
                  and database management.
                </p>
              </div>

              <div className="resume-item">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <h5>2016 - 2018</h5>
                <p>
                  <em>
                    D.D. Bytco College, Nashik — Affiliated to Pune University
                  </em>
                </p>
                <p>
                  Completed HSC with 56% in the science stream, focusing on
                  mathematics and computer science.
                </p>
              </div>

              <div className="resume-item">
                <h4>Secondary School Certificate (SSC)</h4>
                <h5>2015 - 2016</h5>
                <p>
                  <em>
                    Modern High School, Nashik — Affiliated to Pune University
                  </em>
                </p>
                <p>
                  Completed SSC with 76%, developing strong academic discipline
                  and interest in computer fundamentals.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-12"
              data-theme="fade-up"
              data-aos-delay="200"
            >
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>React & Django Developer</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Heuristic Technopark, Nashik</em>
                </p>
                <ul>
                  <li>
                    Working as a full-stack developer focused on React.js for
                    frontend and Django for backend development.
                  </li>
                  <li>
                    Contributed to building ERP solutions and multiple custom
                    web applications for clients across various domains.
                  </li>
                  <li>
                    Developed REST APIs, integrated frontend with backend
                    systems, and implemented responsive UI using React.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver projects
                    on time and with high quality.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Python Django Developer</h4>
                <h5>2022 - 2023</h5>
                <p>
                  <em>Cufront Healthcare Pvt. Ltd., Nashik</em>
                </p>
                <ul>
                  <li>
                    Built and maintained web applications for healthcare
                    solutions using Django.
                  </li>
                  <li>
                    Created secure backend logic, user authentication systems,
                    and dynamic dashboards for internal users.
                  </li>
                  <li>
                    Optimized database models and queries to improve performance
                    and scalability.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Python Django Intern</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>Heuristic Tech, Nashik</em>
                </p>
                <ul>
                  <li>
                    Completed 6-month internship focused on backend development
                    using Django.
                  </li>
                  <li>
                    Assisted in building basic modules like user registration,
                    login, and CRUD operations.
                  </li>
                  <li>
                    Learned practical development workflows, Git usage, and
                    project deployment practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
