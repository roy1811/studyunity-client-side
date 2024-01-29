import React from "react";
import CourseDetailsLeftSideGniot from "./CourseDetailsLeftSideGniot";
import CourseDetailsRightSide from "./CourseDetailsRightSide";

const CourseDetailsArea = ({ courseData }) => {
  return (
    <>
      <section className="course__area pt-50 pb-25">
        <div className="container">
          <div className="row">
            <CourseDetailsLeftSideGniot courseData={courseData} />
            {/*} <CourseDetailsRightSide courseData={courseData} />*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailsArea;
