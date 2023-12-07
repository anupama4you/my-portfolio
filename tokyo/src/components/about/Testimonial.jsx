import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:1337/api/testimonials?populate=*",
        {
          headers: {
            Authorization:
              "Bearer 65f806a4aa52e24455929599555042b52d53e6a66fcbc53ea3f51275fce04cf17a445f4de29f26505061673baf14ffa8c20aa3d819504abfda1431d4d671436a4974c25be270056c043fafe82b7251c39df3708e64bff77212cc26c806cbc2486d5ba24af630e755d823f774e8f28f4b9a2f827db03246e6d669d32ba5023c71",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      setTestimonials(data["data"]);
      console.log(testimonials);
    });
  }, []);

  const testimonialContent = testimonials.map((service, index) => {
    return {
      id: service.id,
      text: service.attributes.comment,
      avatar: service.attributes.avatar,
      name: service.attributes.name,
      designation: service.attributes.designation,
    };
  });

  // const testimonialContent = [
  //   {
  //     id: 1,
  //     text: `Beautiful minimalist design and great, fast response with
  //     support. Highly recommend. Thanks Marketify!`,
  //     avatar: "url(assets/img/testimonials/1.jpg)",
  //     name: "Alexander Walker",
  //     designation: "Graphic Designer",
  //   },
  //   {
  //     id: 2,
  //     text: `Beautiful minimalist design and great, fast response with
  //     support. Highly recommend. Thanks Marketify!`,
  //     avatar: "url(assets/img/testimonials/2.jpg)",
  //     name: "Isabelle Smith",
  //     designation: "Content Manager",
  //   },
  //   {
  //     id: 3,
  //     text: `Beautiful minimalist design and great, fast response with
  //     support. Highly recommend. Thanks Marketify!`,
  //     avatar: "url(assets/img/testimonials/3.jpg)",
  //     name: "Baraka Clinton",
  //     designation: "English Teacher",
  //   },
  // ];

  return (
    <ul className="testimonila-slider-wrapper">
      <Slider {...settings} arrows={false}>
        {testimonialContent.map((item) => (
          <li key={item.id}>
            <div className="list_inner">
              <div className="text">
                <p>{item.text}</p>
              </div>
              <div className="details">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(http://localhost:1337${item.avatar.data.attributes.url})`,
                    }}
                  />
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <span>{item.designation}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default Testimonial;
