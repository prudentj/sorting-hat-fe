import React from "react";
// import Header from "./Header";
import { Link } from "react-router-dom";
import ArrowWhiteR from "../../img/ArrowWhiteR.svg";
import ArrowWhiteL from "../../img/ArrowWhiteL.svg";
import ArrowPurpleL from "../../img/ArrowPurpleL.svg";
import styled from "styled-components";


// This hover color needs to be worked on to apply to the whole button in the same manner as quiz
const ViewCoursesBtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "questrial",
  background: "#7a11ff",
  border: "1px solid",
  borderRadius: "10px",
  width: "167px",
  height: "36px",
  color: "white"
}

// This hover color needs to be worked on to apply to the whole button in the same manner as quiz
const TakeQuizBtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "questrial",
  background: "white",
  border: "1px solid",
  borderRadius: "10px",
  width: "141px",
  height: "36px",
  color: "#bd88ff"
}

const SelectedNextBtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "questrial",
  background: "#7A11FF",
  border: "1px solid",
  borderRadius: "10px",
  width: "96px",
  height: "36px",
  color: "white",

}


// This background needs to be 50% transparency
const GrayedNextBtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "questrial",
  background: "#7A11FF",
  border: "1px solid",
  borderRadius: "10px",
  width: "96px",
  height: "36px",
  color: "white"
}


const BackBtn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "questrial",
  background: "white",
  border: "1px solid",
  borderRadius: "10px",
  width: "96px",
  height: "36px",
  color: "#BD88FF"
}


const StyledButtons = () => {
  return (
    <div>
      <h1 className=" protoGray fira-sans">
        Work in progress come back later ♥
      </h1>

      {/* This is where i chop the button like it's a stolen escalade  */}
      <Link to="/">
        <ViewCoursesBtn>
          <span>View Courses</span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="ml-4"
          />
        </ViewCoursesBtn>
      </Link>

      <Link to="/">
        <TakeQuizBtn>
          <img
            src={ArrowPurpleL}
            alt="leftArrow"
            size="1.3rem"
            className="pr-5"
          />
          <span>Take Quiz</span>
        </TakeQuizBtn>
      </Link>

      <Link to="/">
        <TakeQuizBtn>
          <img
            src={ArrowPurpleL}
            alt="leftArrow"
            size="1.3rem"
            className="pr-4"
          />
          <span>Retake Quiz</span>
        </TakeQuizBtn>
      </Link>

      <Link to="/">
        <SelectedNextBtn>
          <span>Next</span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="ml-4"
          />
        </SelectedNextBtn>
      </Link>

      <Link to="/">
        <GrayedNextBtn>
          <span>Next</span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="ml-4"
          />
        </GrayedNextBtn>
      </Link>

      <Link to="/">
        <BackBtn>
          <img
            src={ArrowPurpleL}
            alt="leftArrow"
            size="1.3rem"
            className="pr-4"
          />
          <span>Back</span>
        </BackBtn>
      </Link>
    </div>
  );
};


export default StyledButtons;
export { GrayedNextBtn, BackBtn, SelectedNextBtn, TakeQuizBtn, ViewCoursesBtn };
