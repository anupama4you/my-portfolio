import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "17.11.1997",
        },
        {
          id: 2,
          name: "Age",
          content: "26",
        },
        {
          id: 3,
          name: "Address",
          content: "14, Vicar Street, Gilles Plains, SA",
        },
        {
          id: 4,
          name: "Email",
          content: (
            <>
              <a href="mailto:anupama.dilshan@icloud.com">anupama.dilshan@icloud.com</a>
            </>
          ),
        },
        {
          id: 5,
          name: "Phone",
          content: (
            <>
              <a href="tel:+610452575523">+61 04 525 755 23</a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "Sri Lanka",
        },
        {
          id: 2,
          name: "Study",
          content: "University of Adelaide",
        },
        {
          id: 3,
          name: "Degree",
          content: "Master",
        },
        {
          id: 4,
          name: "Interest",
          content: "Travel, Photography, Surfing",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
