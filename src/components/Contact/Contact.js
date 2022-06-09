import React from 'react';
import PostForm from '../Form/Form';
import Contact_image from "../../assets/img/contact-image.png";
 

const Contact = () => {
  return (
    <section id="contact" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <h3>Get in touch<br /><span>We are hiring!</span></h3>
          <PostForm />
          <br />
        </div>
        <div className="col-lg-7 col-md-12">
          <img
            src={Contact_image}
            alt="Contact"
            className="d-block w-100 contact-image"
          />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Contact;