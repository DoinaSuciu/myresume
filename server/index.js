// import "../src/setupProxy.js";

const express = require("express");
const app = express();
const PORT = 3031;
const server = app.listen(PORT, function () {
  console.log(`server started at ${PORT}`);
});

app.get("/api/resume/:name", function (req, res) {
  const data = {
    doina: {
      name: "Doina",
      surname: "SUCIU",
      phone: "+40726126564",
      email: "doina.suciu01@gmail.com",
      role: "FRONTEND DEVELOPER",
      about: {
        title: "ABOUT ME",
        details:
          '<i>"Don\'t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe you can achieve."</i><br/>Mary Kay Ash<br/>The above quote is perfectly describing my career path and my life attitude, because being an ambitious problem solver with a passion to learn and develop new skills, I strongly believe that if we really want to learn something new or make a change in our career, it\'s never "too late", the limits are only in our mind.',
      },
      work: {
        title: "WORK EXPERIENCE",
        details:
          "My experience in web development has started this year (2022), when I decided after 10 years of experience in the world of numbers (banking field - market risk & liquidity risk management and financial analysis), that it would be the right time for a change in my career, since I wanted to make this change for several years. <br/>During my activity in the banking field, I took advantage of every opportunity to learn about technologies, such as - JIRA, SQL, C#. In carrying out my duties which involved development of financial indicators, statistical models for stress tests, and in the activity of processing excel files with hundreds of thousands of rows, I have always been focused on data automation - to make things easier and reusable. Also, I have paid special attention to design when working on presentations submitted to the bank's management or in the process of developing internal regulations (colors, page layout, fonts, margin spaces, images, etc.).",
      },
      soft_skills: {
        title: "SOFT SKILLS",
        details:
          "Problem-solving <br/> Creativity <br> Attention to details <br/> Adaptability <br/> Time management <br/> Self discipline",
      },
      special_skills: {
        title: "SPECIAL SKILLS",
        details:
          "Knowledge of web design procedures<br/>Continually evaluating and upgrading skills to stay at the cutting edge of web development",
      },
      skills: [
        {
          name: "FIGMA",
          value: 6,
        },
        {
          name: "HTML",
          value: 6,
        },
        {
          name: "CSS",
          value: 6,
        },
        {
          name: "JS (ES6)",
          value: 5,
        },
        {
          name: "VUE.JS",
          value: 6,
        },
        {
          name: "REACT.JS",
          value: 5,
        },
        {
          name: "Testing",
          value: 5,
        },
        {
          name: "GIT",
          value: 6,
        },
        {
          name: "NODE.JS",
          value: 7,
        },
        {
          name: "JIRA",
          value: 7,
        },
        {
          name: "SQL",
          value: 6,
        },
      ],
      educations: {
        title: "EDUCATION",
        details:
          "<b>IT School</b><br/>May 2022–October 2022<br/>Study program: Frontend Development<br/><br/><b>Global Association of Risk Professionals</b><br/>2019-2021<br/>Financial Risk Manager Certification (FRM)<br/><br/><b>Academy of Economic Studies of Moldova (ASEM)</b><br/>2012-2014<br/>Master Degree, Banking Administration<br/><br/><b>Academy of Economic Studies of Moldova (ASEM)</b><br/>2009-2012<br/>Bachelor in Economic Sciences, Finance and Banks",
      },
      current_projects: {
        title: "CURRENT PROJECTS",
        details: "<b>Work in Progress...</b><br/><i>role:Frontend Dev</i>",
      },
      personal_projects: {
        title: "PERSONAL PROJECTS",
        details:
          "<b>My web page project</b><br/><i>Web app to promote local business </i>",
      },
    },
  };
  const name = req.params.name;
  res.send(data[name]);
});
