import React, { useEffect } from "react";
import BreadCrumb from "../../../components/CourseDetailsBmlMunjalUniversity/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseDetailsArea from "../../../components/CourseDetailsBmlMunjalUniversity/CourseDetailsArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import { useGetCourseQuery } from "../../../redux/api/apiSlice";
import DetailsTabItems from "../../../components/CourseDetailsBmlMunjalUniversity/DetailsTabItems";

const Bmlmunjaluniversity = () => {
  const {
    data: course,
    isLoading,
    isError,
  } = useGetCourseQuery("6517024f25ab335c6e47b5df");
  // decide to render
  let content = null;
  // loader
  if (isLoading && !isError) {
    content = (
      <div className="container">
        <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
      </div>
    );
  }

  if (!isLoading && !isError) {
    content = <CourseDetailsArea courseData={course} />;
  }

  return (
    <>
      <SEO
        pageTitle="bml-munjal-university"
        keywords="International Management Institute IMI New Delhi, IMI Admission Process, imi new delhi, best management colloge in new delhi, imi new delhi fees"
      />
      <Header />
      <BreadCrumb />

      {content}
      <Footer />
    </>
  );
};

export default Bmlmunjaluniversity;
