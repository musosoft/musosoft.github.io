import React from 'react';
import muso from '../../../assets/img/muso.jpg'

const AboutMe = () => (
  <div className="row">
    <div className="col-md-6 ml-auto mr-auto">
      <div className="profile">
        <div className="avatar">
          <img
            src={muso}
            alt="muso.sk"
            className="img-raised rounded-circle img-fluid"
          />
        </div>
        <div className="name">
          <h3 className="title">Hi, I’m Roman. Nice to meet you.</h3>
          <h6>
            Since beginning my journey as a freelance years ago, I've done
            remote work for agencies, consulted for startups, and collaborated
            with both business and consumer use.
          </h6>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
