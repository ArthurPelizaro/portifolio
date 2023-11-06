import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            <a className="socialicons" target="_blank" rel="noopener noreferrer" href="https://github.com/ArthurPelizaro">
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="socialicons" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/arthur_pelizaro/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="socialicons" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/arthur.antonio.988/"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="socialicons" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arthur-pelizaro-2b5b49235/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Leia mais sobre mim"
          >
            Mais sobre mim
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;