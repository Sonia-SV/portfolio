import React from 'react';
import Curriculum from '../docs/Curriculum_SoniaSanzVivas.pdf';

const About = (props) => {
  return (
    <section className="main__section">
      <p className="main__section__p">
        Desarrolladora web y diseñadora de iluminación de espectáculos. Llegué a la programación buscando un nuevo camino laboral pero en el que
        también se uniesen la creatividad y la técnica. Me encanta ver cómo los proyectos crecen hasta convertirse en algo real.
      </p>
      <p className="main__section__p">
        De mi profesión anterior me traigo la iniciativa y la perseverancia de haber sacado adelante un proyecto empresarial propio, experiencia
        coordinando equipos multidisciplinares y la posibilidad de haber podido trabajar por gran parte de Europa.
      </p>
      <a className="main__section_a" href={Curriculum} target="_blank" rel="noopener noreferrer">
        <span>Curriculum PDF</span>
        <i className="fas fa-file"></i>
      </a>
    </section>
  );
};

export default About;
