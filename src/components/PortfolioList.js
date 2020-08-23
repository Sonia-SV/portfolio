import React from 'react';
import ProjectItem from './PortfoliotItem';
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
          description={project.description}
          img={project.img === '' ? defaultImg : project.img}
        />
      );
    }
  });
  return <section className="projects">{singleProject}</section>;
};

export default PortfolioList;
