import React from "react";
import CourseDetailsLeftSideiminewdelhi from "./CourseDetailsLeftSideiminewdelhi";
import CourseDetailsRightSide from "./CourseDetailsRightSide";

const CourseDetailsArea = ({ courseData }) => {
  return (
    <>
      <section className="course__area pt-50 pb-25">
        <div className="container">
          <div className="row">
            <CourseDetailsLeftSideiminewdelhi courseData={courseData} />
            <CourseDetailsRightSide courseData={courseData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailsArea;
