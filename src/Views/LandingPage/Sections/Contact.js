import React from 'react';

const Contact = () => (
  <div className="section section-contacts" id="contact">
    <div className="row">
      <div className="col-md-8 ml-auto mr-auto">
        <h2 className="text-center title">Let's get in touch</h2>
        <form
          action="https://formspree.io/roman@muso.sk"
          method="POST"
          className="contact-form"
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="bmd-label-floating">Your Name</label>
                <input type="text" name="name" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="bmd-label-floating">Your Email</label>
                <input type="email" name="email" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="contactForm" className="bmd-label-floating">
              Your Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="contactForm"
              rows="4"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-4 ml-auto mr-auto text-center">
              <button type="submit" className="btn btn-primary btn-raised">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
