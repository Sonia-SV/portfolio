import React from 'react';
import '../stylesheets/layout/portfolioItem.scss';

const ProjectItem = (props) => {
  const { id, name, type, languajes, grupal, repoUrl, webUrl, description, img } = props;
  return (
    <div className="projects__item">
      <a href={repoUrl} title={name} target="_blank" rel="noopener noreferrer">
        <img className="projects__item__img" src={img} alt={name} />
      </a>
    </div>
  );
};

export default ProjectItem;
