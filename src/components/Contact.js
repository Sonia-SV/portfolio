import React from 'react';
import '../stylesheets/layout/contactIcons.scss';

const Contact = (props) => {
  const renderContact = (icon, tittle, href) => {
    return (
      <li className="contact__li">
        <a className="contact__li__a" href={href} title={tittle} target="_blank" rel="noopener noreferrer">
          <i className={icon}></i>
        </a>
      </li>
    );
  };
  return (
    <section className="main__section">
      <p className="main__section__p__contact">{props.languajeSpanish ? 'Contacta conmigo:' : 'Reach out to me:'}</p>
      <ul className="contact">
        {renderContact('fas fa-envelope', 'Send email', 'mailto:sonia.sanzvivas@gmail.com')}
        {renderContact('fab fa-linkedin-in', 'Go to Linkedin', 'https://www.linkedin.com/in/soniasanzvivas')}
        {renderContact('fab fa-github-alt', 'Go to GitHub', 'https://github.com/Sonia-SV')}
      </ul>
    </section>
  );
};

export default Contact;
