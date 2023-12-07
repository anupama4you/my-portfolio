import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2022 - 2024",
          institute: "University of Adelaide",
          degree: "Master Degree",
        },
        {
          id: 2,
          year: "2019 - 2020",
          institute: "Curtin University",
          degree: "Bachelor Degree",
        },
        {
          id: 3,
          year: "2016 - 2018",
          institute: "Sri Lanka Institute of Information Technology(SLIIT)",
          degree: "Associate Degree",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2022",
          institute: "Savvy finance, Adelaide",
          degree: "Software Engineer",
        },
        {
          id: 2,
          year: "2020 - 2022",
          institute: "IFS Research & Development (Pvt) Ltd",
          degree: "Software Engineer",
        },
        {
          id: 3,
          year: "2019",
          institute: "Devest, Egypt,",
          degree: "Fullstack Developer",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
