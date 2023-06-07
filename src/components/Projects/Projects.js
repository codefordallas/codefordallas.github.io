import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="Projects">
      <h2 className="header">Projects</h2>
      <div className="slider">
        <div className="carousel">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/982740466/photo/brave-woman-posing-as-super-hero.jpg?b=1&s=170667a&w=0&k=20&c=iXQHXWd5cgi0V-jWio55woEGk_3RnWGXCPaDTQLw-98="
              alt="Project 1"
            />
            <div className="card-description">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
              <div className="card-buttons">
                <a href="project1.html" className="btn">
                  Learn More
                </a>
                <a href="project1.html" className="btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/982740466/photo/brave-woman-posing-as-super-hero.jpg?b=1&s=170667a&w=0&k=20&c=iXQHXWd5cgi0V-jWio55woEGk_3RnWGXCPaDTQLw-98="
              alt="Project 2"
            />
            <div className="card-description">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
              <div className="card-buttons">
                <a href="project2.html" className="btn">
                  Learn More
                </a>
                <a href="project2.html" className="btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/982740466/photo/brave-woman-posing-as-super-hero.jpg?b=1&s=170667a&w=0&k=20&c=iXQHXWd5cgi0V-jWio55woEGk_3RnWGXCPaDTQLw-98="
              alt="Project 3"
            />
            <div className="card-description">
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
              <div className="card-buttons">
                <a href="project3.html" className="btn">
                  Learn More
                </a>
                <a href="project3.html" className="btn">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
