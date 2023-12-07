import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Java, Python, C, C++, C#",
        " HTML, CSS, JavaScript, PHP, React.js, Angular, Bootstrap",
        " Node.js, Express.js, ASP.NET, Laravel, .NET",
        " MySQL, MS Access, SQL Server 2008, Oracle8.x/9.x",
        " MongoDB, Firebase, NoSQL, AWS, GCP",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Make UI/UX Design",
        " Create Mobile App",
        " Site Optimization",
        " Custom Website",
        " Learn Ecommerce",
        " Ai chat assistant",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
