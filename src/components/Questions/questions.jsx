import React from "react";
import "./questions.css";
import { FaAngleDown } from "react-icons/fa6"

const questions = () => {
  return (
    <div className="questionsContainer">
      <div className="questionsInnerContainer">
        <div className="questionsHeaderContainer">
          <h2 className="questionsHeader">faq</h2>
        </div>

        <div className="questionsListContainer">
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">
              What value will I get out of Woo Enterprise?
            </h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">Who qualifies for Woo Enterprise?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">Why should I migrate to Woo?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">What is the cost of Woo Enterprise?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">Do you offer migraton support?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">How long will migration take?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">Is hosting included?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">Are custom site builds included?</h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
          <div className="theQuestionContainer">
            <h4 className="theQuestion">
              Can you work with our preferred agnency?
            </h4>
            <FaAngleDown className="theQuestionIcon" />
          </div>
          <hr className="questionsLine" />
        </div>
      </div>
    </div>
  );
};

export default questions;
