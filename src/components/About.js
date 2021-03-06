import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

// SVG Images
import ArrowPurpleL from "../img/ArrowPurpleL.svg";
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import { ViewCoursesBtn, TakeQuizBtn } from "./buttons/styledButtons";
import AboutImage1 from "../img/AboutImage1.svg";
import AboutImage2 from "../img/AboutImage2.svg";
import AboutImage3 from "../img/AboutImage3.svg";

const About = (props) => {
  //Tailwind styles for containers at texttop
  const textCont = "w-full lg:w-1/2 px-1 lg:p-8 lg:px-12";
  const imgStyles = "hidden lg:block h-full lg:w-1/2 py-2";
  const { history } = props;
  return (
    <div>
      {history.location.pathname !== "/" ? <Header /> : <></>}
      <div className="flex items-center justify-center lg:mx-8 mt-20">
        <div className="flex flex-col m-4 mt-10 max-w-5xl ">
          <section className=" mt-4 mb-4 flex justify-between items-center lg:pb-3">
            <div className={textCont}>
              <h2 className="mb-1 text-2xl lg:text-3xl font-bold text-black border-b-2 open-sans lg:font-normal">
                About
              </h2>
              <div className="flex-col items-center justify-center text-base lg:text-lg mt-4 pb-24 lg:pb-0 leading-loose protoGray open-sans">
                <p className="pb-4">
                  Tech Sorting Hat was inspired and built by tech students.
                </p>
                <p className="pb-4">
                  We aim to have a fun quiz that informs users about tech
                  careers.
                </p>
                <p className="pb-4 pr-4">
                  Our hope is to spark an interest in the interest.
                </p>
              </div>
            </div>
            <img className={imgStyles} src={AboutImage1} />
          </section>

          <section className="flex justify-between items-center lg:pb-3">
            <img className={imgStyles} src={AboutImage2} />
            <div className={textCont}>
              <h2 className="mb-1 text-2xl lg:text-3xl text-black border-b-2 fira-sans  ">
                Why it was created
              </h2>
              <div className="flex-col items-center justify-center text-base lg:text-lg mt-4 pb-24 lg:pb-0 leading-loose protoGray open-sans">
                <p className="pb-4">
                  We wanted to provide information about tech careers in a way
                  that empathizes with people outside the industry. No tech
                  jargon.
                </p>

                <p className="pb-4">
                  Our goal is to inspire, not discourage. Questions were
                  carefully created to do this. We quizzed them based on
                  personality, not what they knew about the tech industry.
                </p>

                <p className="pb-4">
                  Anyone is capable of pursuing a career in the tech field, and
                  it is our job to help find their niche based on their
                  personality.
                </p>
              </div>
            </div>
          </section>

          <section className=" flex container mt-5 justify-between items-center lg:pb-3">
            <div className={textCont}>
              <h2 className="mb-1 text-2xl lg:text-3xl text-black border-b-2 fira-sans">
                How it was made
              </h2>
              <p className="flex-col items-center justify-center text-base lg:text-lg mt-4 leading-loose protoGray open-sans">
                <p className="pb-4">
                  We surveyed 70 current tech students, interviewed 13 tech
                  students, and 2 tech instructors.
                </p>
                <p className="pb-4">
                  All tracks in the tech field are extremely similar, but subtle
                  differences between each emerged from analyzing the data.
                </p>
                <p className="pb-4">
                  We created questions that do not deal with tech, but relate to
                  how people in different tech fields think.
                </p>
              </p>
            </div>
            <img className={imgStyles} src={AboutImage3} />
          </section>

          <section className="flex flex-row justify-between lg:mx-12 pt-16 lg:pt-32">
            <div className="flex justify-start pb-1 pt-2 pr-4 my-8 mr-5 ">
              <button
                onClick={() => history.push("/quiz")}
                cy="retakeBtn"
                style={TakeQuizBtn}
              >
                <img
                  src={ArrowPurpleL}
                  alt="leftArrow"
                  size="1.3rem"
                  className="pr-4 m-1"
                />
                <span className="text-purple-100 open-sans text-sm lg:text-lg">
                  Take Quiz
                </span>
              </button>
            </div>

            {/* <ViewCourses /> */}
            <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5 hidden">
              <button
                onClick={() => history.push("/courses")}
                cy="coursesBtnB"
                style={ViewCoursesBtn}
              >
                <span className="flex items-center justify-end open-sans text-sm lg:text-lg">
                  View Courses
                </span>
                <img
                  src={ArrowWhiteR}
                  alt="rightArrow"
                  size="1.3rem"
                  className="pl-4 m-1"
                />{" "}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withRouter(About);
