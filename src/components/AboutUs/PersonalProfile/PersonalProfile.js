import React from "react";
import "./PersonalProfile.scss";

const PersonalProfile = ({ aboutUsPhoto, name, title, text }) => {
  return (
    <section className="personal-profile">
      {aboutUsPhoto}
      <h3 className="title">{name}</h3>
      <h4 className="title">{title}</h4>
      <p>{text}</p>
    </section>
  );
};

export default PersonalProfile;
