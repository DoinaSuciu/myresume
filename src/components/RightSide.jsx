import "./css/right-side.scss";
import { TextComponent } from "./TextComponent";
import { RatingLevel } from "./RatingLevel";
import avatar from "../assets/avatar-Doina.png";

export const RightSide = function ({ data }) {
  // const skills = [
  //   {
  //     name: "FIGMA",
  //     value: 6,
  //   },
  //   {
  //     name: "HTML",
  //     value: 6,
  //   },
  //   {
  //     name: "CSS",
  //     value: 6,
  //   },
  //   {
  //     name: "JS (ES6)",
  //     value: 5,
  //   },
  //   {
  //     name: "VUE.JS",
  //     value: 6,
  //   },
  //   {
  //     name: "REACT.JS",
  //     value: 5,
  //   },
  //   {
  //     name: "Testing",
  //     value: 5,
  //   },
  //   {
  //     name: "GIT",
  //     value: 6,
  //   },
  //   {
  //     name: "NODE.JS",
  //     value: 7,
  //   },
  //   {
  //     name: "JIRA",
  //     value: 7,
  //   },
  //   {
  //     name: "SQL",
  //     value: 6,
  //   },
  // ];

  // const sections = {
  //   educations: {
  //     title: "EDUCATION",
  //     details:
  //       "<b>IT School</b><br/>May 2022–October 2022<br/>Study program: Frontend Development<br/><br/><b>Global Association of Risk Professionals</b><br/>2019-2021<br/>Financial Risk Manager Certification (FRM)<br/><br/><b>Academy of Economic Studies of Moldova (ASEM)</b><br/>2012-2014<br/>Master Degree, Banking Administration<br/><br/><b>Academy of Economic Studies of Moldova (ASEM)</b><br/>2009-2012<br/>Bachelor in Economic Sciences, Finance and Banks",
  //   },
  //   current_projects: {
  //     title: "CURRENT PROJECTS",
  //     details: "<b>Work in Progress...</b><br/><i>role:Frontend Dev</i>",
  //   },
  //   personal_projects: {
  //     title: "PERSONAL PROJECTS",
  //     details:
  //       "<b>My web page project</b><br/><i>Web app to promote local business </i>",
  //   },
  // };

  const sections = ["educations", "current_projects", "personal_projects"];

  return (
    <section className="right-side">
      <header>
        <figure>
          <img src={avatar} alt="my profile" />
        </figure>
        <h1>
          {data.name}
          <br />
          <b>{data.surname}</b>
        </h1>
        <h2>{data.role}</h2>
      </header>

      <TextComponent index="01" title="SKILLS">
        {data.skills?.map(({ name, value }) => (
          <RatingLevel key={name} name={name} value={value} />
        ))}

        {sections.map((key, index) => (
          <TextComponent
            key={key}
            index={`0${index + 2}`}
            title={data[key]?.title}
            details={data[key]?.details}
          />
        ))}
      </TextComponent>
    </section>
  );
};
