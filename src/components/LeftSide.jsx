import "./css/left-side.scss";
import { TextComponent } from "./TextComponent";

export const LeftSide = function ({ data }) {
  // const text = {
  //   about: {
  //     title: "ABOUT ME",
  //     details:
  //       '<i>"Don\'t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe you can achieve."</i><br/>Mary Kay Ash<br/>The above quote is perfectly describing my career path and my life attitude, because being an ambitious problem solver with a passion to learn and develop new skills, I strongly believe that if we really want to learn something new or make a change in our career, it\'s never "too late", the limits are only in our mind.',
  //   },
  //   work: {
  //     title: "WORK EXPERIENCE",
  //     details:
  //       "My experience in web development has started this year (2022), when I decided after 10 years of experience in the world of numbers (banking field - market risk & liquidity risk management and financial analysis), that it would be the right time for a change in my career, since I wanted to make this change for several years. <br/>During my activity in the banking field, I took advantage of every opportunity to learn about technologies, such as - JIRA, SQL, C#. In carrying out my duties which involved development of financial indicators, statistical models for stress tests, and in the activity of processing excel files with hundreds of thousands of rows, I have always been focused on data automation - to make things easier and reusable. Also, I have paid special attention to design when working on presentations submitted to the bank's management or in the process of developing internal regulations (colors, page layout, fonts, margin spaces, images, etc.).",
  //   },
  //   soft_skills: {
  //     title: "SOFT SKILLS",
  //     details:
  //       "Problem-solving <br/> Creativity <br> Attention to details <br/> Adaptability <br/> Time management <br/> Self discipline",
  //   },
  //   special_skills: {
  //     title: "SPECIAL SKILLS",
  //     details:
  //       "Knowledge of web design procedures<br/>Continually evaluating and upgrading skills to stay at the cutting edge of web development",
  //   },
  // };

  const sections = ["about", "work", "soft_skills", "special_skills"];

  return (
    <section className="left-side">
      <p className="contact-details">
        Call {data.phone} or
        <br />
        Email {data.email}
      </p>
      {sections.map((key) => (
        <TextComponent
          key={key}
          title={data[key]?.title}
          details={data[key]?.details}
        />
      ))}
    </section>
  );
};
