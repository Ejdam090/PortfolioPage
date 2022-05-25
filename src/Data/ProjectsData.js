import { v4 as uuidv4 } from "uuid";
import PortfHTML from "./../assets/PortfHTML.png";
import PortWebReact from "./../assets/PortWebReact.png";
import QuizReact from "./../assets/QuizReact.png";
import SplitterJS from "./../assets/SplitterJS.png";
import StoperJS from "./../assets/StoperJS.png";
import WeatherReact from "./../assets/WeatherReact.png";

const ProjectData = [
  {
    id: uuidv4(),
    img: PortfHTML,
    title: "Simple Portfolio",
    desc: "The project presents a sample page written using HTML, CSS and JavaScript. ",
  },
  {
    id: uuidv4(),
    img: PortWebReact,
    title: "Own Portfolio Site",
    desc: "A portfolio that introduces me as a programmer. The website was written in React. HOOKs, StyledComponents were used.",
  },
  {
    id: uuidv4(),
    img: QuizReact,
    title: "Quiz Game",
    desc: "Quiz app. You can test your knowledge in four categories. Stack: React, CSS, StyledComponents, React-Router-dom.",
  },
  {
    id: uuidv4(),
    img: SplitterJS,
    title: "Splitter JS",
    desc: "How to divide the bill evenly? A simple tool, but very useful. Stack: JavaScript, CSS.",
  },
  {
    id: uuidv4(),
    img: StoperJS,
    title: "Timer",
    desc: "A simple timekeeping tool. You can measure lap times. Stack: JavaScript, CSS.",
  },
  {
    id: uuidv4(),
    img: WeatherReact,
    title: "Weather App",
    desc: "From now on you will know the weather in your destination and beyond. Stack: React, React hooks.",
  },
];

export default ProjectData;
