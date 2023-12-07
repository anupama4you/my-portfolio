import React from "react";
import Social from "./Social";
import Typed from 'react-typed';

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Anupama Dilshan</h3>
            <h4 className="typer">
              <Typed
                strings={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Mobile Developer",
                  "UI/UX Designer",
                  "ML Researcher",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>
            <p className="job">
            Experienced Software Developer based in Adelaide, with a willingness to collaborate on projects worldwide, particularly in Australia, leveraging my expertise in crafting innovative software solutions
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
