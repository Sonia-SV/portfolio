import React from 'react';
import '../stylesheets/layout/portfolioItem.scss';

const ProjectItem = (props) => {
  const { id, name, type, languajes, grupal, repoUrl, webUrl, description, img } = props;
  return (
    <div className="projects__item">
      {/* <h4>{name}</h4> */}
      <img src={img} alt={name} />
    </div>
  );
};

export default ProjectItem;
