import React, { useEffect } from "react";
// import ProjectArray from "./ProjectInfo";
import { Button, Link } from "@material-ui/core";
import "./ProjectItem.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function ProjectItem(props) {
  return (
    <div data-aos="fade-right" data-os-duration="3000">
      <div>
        <div className="projects__item">
          <div className="projects__item__wrapper">
            <img className="projects__item_image" src={props.image} alt="" />
            <h1 className="projects__index ">{props.index}</h1>

            <div className="projects__item_info">
              <h1>{props.title}</h1>
              <h2>{props.info}</h2>
              <h2>{props.lanugages}</h2>
            </div>
            <Link href={props.link} target="_blank">
              <Button className="projects__item_button" variant="outlined">
                View Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;