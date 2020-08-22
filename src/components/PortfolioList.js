import React from 'react';
import ProjectItem from './PortfoliotItem';
import '../stylesheets/layout/portfolioList.scss';
const defaultImg = 'https://via.placeholder.com/170/FFC400/4E4E4E';

const PortfolioList = (props) => {
  const singleProject = props.projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        id={project.id}
        name={project.name}
        type={project.type}
        languajes={project.languajes}
        grupal={project.grupal}
        repoUrl={project.repoUrl}
        webUrl={project.webUrl}
        description={props.description}
        img={defaultImg}
      />
    );
  });
  return <section className="projects">{singleProject}</section>;
};

export default PortfolioList;
