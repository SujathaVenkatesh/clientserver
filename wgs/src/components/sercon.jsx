import React, { useState, useEffect,useCallback } from "react";
import "./sercon.css";

const Sercon = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-0.3.5&s=9a7336a358f84eccc3c50f9b754c4bae&auto=format&fit=crop&w=1350&q=80",
      title: "Web Development",
    },
    {
      url: "https://media.istockphoto.com/id/1363104989/photo/diverse-team-of-professional-businesspeople-meeting-in-the-office-conference-room-creative.jpg?s=612x612&w=0&k=20&c=TGdAKum3fkCmS0R57vk7tbZaGkQ_Lc9EC2uvOhTowIE=",
      title: "Digital Marketing",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Product Development",
    },
    {
      url: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title: "Content Development",
    },
  ];

  const rotateCircle = useCallback((direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }, [images.length]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      rotateCircle(1);
    }, 3000);
  
    return () => {
      clearInterval(interval);
    };
  }, [rotateCircle]);
  
  return (
    <div className="services">
      <div className="circle--slider">
        <div className="prev" onClick={() => rotateCircle(-1)}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="next" onClick={() => rotateCircle(1)}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="rotate--circle">
          <ul className="circle--rotate">
            {images.map((image, index) => (
              <li
                key={index}
                className={`block ${index === activeIndex ? "active" : ""}`}
                style={{
                  transform: `rotate(${index * (360 / images.length)}deg)`,
                }}
              ></li>
            ))}
          </ul>
        </div>
        <div className="animate-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`animate ${index === activeIndex ? `animate-${index}` : ""}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="image-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sercon;
