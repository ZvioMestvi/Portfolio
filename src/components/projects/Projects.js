import classes from './Projects.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fragment } from 'react';

const Projects = props => {
  const renderProjects = props.data.map(project => {
    return (
      <div key={project.title} className={classes.projectContainer}>
        <SwiperSlide key={project.title} id="main">
          <div className={classes.projectInfo}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div
            className={classes.thumbnail}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0 0), url(${project.thumbnail})`,
            }}
          >
            <button
              onClick={() => {
                window.open(`${project.link}`, '_blank');
              }}
              type="button"
            >
              Visit Page
            </button>
            {project.sourceLink && (
              <button
                onClick={() => {
                  window.open(`${project.sourceLink}`, '_blank');
                }}
                type="button"
              >
                Source Code
              </button>
            )}
          </div>
        </SwiperSlide>
      </div>
    );
  });

  return (
    <Fragment>
      <div className={classes.projectsContainer}>
        <Swiper tag="div" id="main">
          {renderProjects}
        </Swiper>

        <div className={classes.projectsSidenote}>
          <p>Swipe left to view more projects...</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
