import React from 'react';
import ProjectItem from './PortfoliotItem';
import Filters from './Filters';
import '../stylesheets/layout/portfolioList.scss';
const defaultImg = 'https://via.placeholder.com/170/FFC400/4E4E4E';

const PortfolioList = (props) => {
  const singleProject = props.projects.map((project) => {
    if (project.visible) {
      return (
        <ProjectItem
          key={project.id}
          name={project.name}
          type={project.type}
          languajes={project.languajes}
          grupal={project.grupal}
          repoUrl={project.repoUrl}
          webUrl={project.webUrl}
          description={props.languajeSpanish ? project.descriptionEs : project.descriptionEn}
          img={project.img === '' ? defaultImg : project.img}
        />
      );
    }
  });
  return (
    <section className="projects__container">
      <Filters
        filterProjectTech={props.filterProjectTech}
        handleSetFilterProjects={props.handleSetFilterProjects}
        languajeSpanish={props.languajeSpanish}
      />
      <div className="projects">{singleProject}</div>
    </section>
  );
};

export default PortfolioList;
