import React from 'react';
import Curriculum from '../docs/Curriculum_SoniaSanzVivas.pdf';

const About = (props) => {
  const aboutSpanish = (
    <section className="main__section">
      <p className="main__section__p">
        Aunque mi vida profesional anterior había ido por otros caminos, siempre me había gustado mucho el mundo de la programación. Para llegar a ser
        desarrolladora <em>rookie</em>, me formé en el bootcamp de <em>Adalab</em>. Ahora sigo aprendiendo gracias a Free Code Camp, a Udemy y al
        todo-poderoso Stack Overflow.
      </p>

      <p className="main__section__p">
        Antes de todo esto estudié Comunicación Audiovisual en la UCM, y Luminotecnia en el Centro de Tecnología del Espectáculo. He realizado diseños
        de iluminación para múltiples compañías y he girado con numerosos espectáculos, tanto a nivel nacional como internacional.
      </p>
      <p className="main__section__p">Pero ahora toca programar.</p>
      <a className="main__section__a" href={Curriculum} target="_blank" rel="noopener noreferrer">
        <span>Curriculum PDF</span>
        <i className="fas fa-file"></i>
      </a>
    </section>
  );
  const aboutEnglish = (
    <section className="main__section">
      <p className="main__section__p">
        Although my previous professional path took me other places I’ve always been very keen on the world of computer programming. To become a{' '}
        <em>rookie</em> developer I enrolled myself on <em>Adalab</em>. Today I keep expanding my knowledge thanks to Free Code Camp, Udemy and the
        all-mighty Stack Overflow.
      </p>

      <p className="main__section__p">
        Before getting here, I completed my degree on Audiovisual Communication through the UCM and I also became a Stage Lighting Technician at the
        Centro de Tecnología del Espectáculo in Madrid. Thanks to this I have been able to create lighting designs for plenty theatre companies and
        toured with them and other through Spain & abroad.
      </p>
      <p className="main__section__p">But now is time to code.</p>
      <a className="main__section__a" href={Curriculum} target="_blank" rel="noopener noreferrer">
        <span>Curriculum PDF</span>
        <i className="fas fa-file"></i>
      </a>
    </section>
  );
  return props.languajeSpanish ? aboutSpanish : aboutEnglish;
};

export default About;
