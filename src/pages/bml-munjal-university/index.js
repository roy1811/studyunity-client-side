import React, { useEffect } from "react";
import BreadCrumb from "../../../components/CourseDetailsBmlMunjalUniversity/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseDetailsArea from "../../../components/CourseDetailsBmlMunjalUniversity/CourseDetailsArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import { useGetCourseQuery } from "../../../redux/api/apiSlice";
import DetailsTabItems from "../../../components/CourseDetailsBmlMunjalUniversity/DetailsTabItems";

const Bmlmunjaluniversity = () => {
  

  return (
    <>
      <SEO
        pageTitle="bml-munjal-university"
        keywords="International Management Institute IMI New Delhi, IMI Admission Process, imi new delhi, best management colloge in new delhi, imi new delhi fees"
      />
      <Header />
      <BreadCrumb />

      <CourseDetailsArea />
      <Footer />
    </>
  );
};

export default Bmlmunjaluniversity;
