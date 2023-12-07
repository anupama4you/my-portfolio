import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/group_pic.gif",
    name: "Anupama Dilshan",
    designation: "Web Developer",
    text: (
      <>
        <p>
        Hello, I'm Anupama Dilshan, a recent Master's graduate in Computer Science from the University of Adelaide, specializing in software engineering with an emphasis on ERP systems, web, and mobile development. I achieved the 9th country rank in the GCE A/L exams and was the top performer in my school. With three years of professional experience, I have a passion for machine learning and creating innovative technological solutions.        </p>
        <p>
        I'm also actively involved in international organizations like AIESEC, where I was recognized as the best emerging young leader in 2019. My interests include traveling, surfing, cricket, and photography, which provide me with fresh perspectives and inspiration.        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" className="black-and-white"/>
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
