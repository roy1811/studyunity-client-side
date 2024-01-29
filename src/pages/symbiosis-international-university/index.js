import React, { useEffect } from "react";
import BreadCrumb from "../../../components/CourseDetailsSymbiosis/BreadCrumb";
import Footer from "../../../components/common/Footer";
import CourseDetailsArea from "../../../components/CourseDetailsSymbiosis/CourseDetailsArea";
import Header from "../../../components/Home/Header";
import SEO from "../../../components/seo";
import { useGetCourseQuery } from "../../../redux/api/apiSlice";
import DetailsTabItems from "../../../components/CourseDetailsSymbiosis/DetailsTabItems";

const Iminewdelhi = () => {
 

  return (
    <>
      <SEO
        pageTitle="IMI New Delhi"
        keywords="International Management Institute IMI New Delhi, IMI Admission Process, imi new delhi, best management colloge in new delhi, imi new delhi fees"
      />
      <Header />
      <BreadCrumb title="Our Courses" subtitle="Courses" />

      <CourseDetailsArea />
      <Footer />
    </>
  );
};

export default Iminewdelhi;
