import React from 'react';
import '../stylesheets/layout/contactIcons.scss';

const ContactIcons = () => {
  const renderIcons = (icon, tittle, href) => {
    return (
      <li className="contactIcons__li">
        <a className="contactIcons__li__a" href={href} title={tittle} target="_blank" rel="noopener noreferrer">
          <i className={icon}></i>
        </a>
      </li>
    );
  };
  return (
    <ul className="contactIcons">
      {renderIcons('fas fa-envelope', 'Send email', 'sonia.sanzvivas@gmail.com')}
      {renderIcons('fab fa-linkedin-in', 'Go to Linkedin', 'https://www.linkedin.com/in/soniasanzvivas')}
      {renderIcons('fab fa-github-alt', 'Go to GitHub', 'https://github.com/Sonia-SV')}
    </ul>
  );
};

export default ContactIcons;
