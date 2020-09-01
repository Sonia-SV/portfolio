import React from 'react';
import '../stylesheets/layout/portfolioItem.scss';

const ProjectItem = (props) => {
  const { name, repoUrl, webUrl, description, img, languajes } = props;
  return (
    <article className="projects__item">
      <div className="project__item__visible">
        <div>
          <img className="projects__item__visible__img" src={img} alt={name} />
        </div>
      </div>
      <div className="projects__item__hidden">
        <h4>{name}</h4>
        <p>{description}</p>
        <div>
          <a href={repoUrl} title={name} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={webUrl} title={name} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-desktop"></i>
          </a>
        </div>
        <small>{languajes.join(' · ')}</small>
      </div>
    </article>
  );
};

export default ProjectItem;
