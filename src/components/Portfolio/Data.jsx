import Pace_Cover from "../../assets/PaceCover.png";
import PregProj_Cover from "../../assets/PregWeb.jpg";
import GCC_Cover from "../../assets/gcccover.png";
import NCC_Cover from "../../assets/NewCityCleaningCover.png";
import PaceApp_Cover from "../../assets/Pace-APP-Cover.jpg"
import QR_Cover from "../../assets/qrComponent.png"
import ResultsSummary_Cover from "../../assets/ResultsSummary.png"



export const projectsData = [
  {
    id: 1,
    image: QR_Cover,
    title: "QR Code Component",
    category: "development",
    cta: "View Repository",
    link:"https://github.com/kailynnelopez/qr-code-component.git",
    icon: "bx bx-right-arrow-alt work__button-icon",
  },
  {
    id: 2,
    image: ResultsSummary_Cover,
    title: "Results Summary Component",
    category: "development",
    cta: "View Repository",
    link:"https://github.com/kailynnelopez/results-summary-component",
    icon: "bx bx-right-arrow-alt work__button-icon",
  },
  {
    id: 3,
    image: Pace_Cover,
    title: "PACE - Reading Planning Generator",
    category: "development",
    cta: "View Live Prototype",
    link:"https://pacereadingplanner.com/",
    icon: "bx bx-right-arrow-alt work__button-icon",
  },
  {
    id: 4,
    image: NCC_Cover,
    title: "New City Cleaning Service Website",
    category: "design",
    cta: "View Site",
    link: "https://newcity.cleaning",
    icon: "bx bx-right-arrow-alt work__button-icon",
  },
  {
    id: 5,
    image: PaceApp_Cover,
    title: "PACE - App",
    category: "design",
    cta: "Case Study",
    link: "https://kailynnelopez.notion.site/App-Concept-PACE-A-Reading-App-For-Procrastinators-8ed116e8e4f3401a981a5c80c3fb9c01",
    icon: "bx bx-right-arrow-alt work__button-icon",
  },
  {
    id: 6,
    image: PregProj_Cover,
    title: "Pregnancy Support Center",
    category: "design",
    cta: "Case Study",
    link: "https://kailynnelopez.notion.site/Pregnancy-Support-Center-01388ce843a04e62945f4f74c137fa12",
    icon: "bx bx-right-arrow-alt work__button-icon",
  },
  {
    id: 7,
    image: GCC_Cover,
    title: "Golden Coast Construction Website",
    category: "design",
    cta: "Coming Soon",
    link: "src/assets/gcccover.png",
    icon: " ",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "development",
  },
  // {
  //   name: "app",
  // },
  {
    name: "design",
  },
];
