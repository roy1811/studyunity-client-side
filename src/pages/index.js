import Head from "next/head";
import AboutArea from "../../components/Home/AboutArea";
import Campus from "../../components/Home/Campus";
import CounterArea from "../../components/Home/CounterArea";
import Features from "../../components/Home/Features";
import HeroArea from "../../components/HomeTwo/HeroArea";
import ResearchArea from "../../components/HomeTwo/ResearchArea";

import SEO from "../../components/seo";
import HomeTwoHeader from "../../components/HomeTwo/HomeTwoHeader";
import CourseArea from "../../components/HomeTwo/CourseArea";
import Testimonials from "../../components/HomeTwo/Testimonials";
import Footer from "../../components/common/Footer";


export default function Home() {
  return (
    <>
      <SEO pageTitle="Studyunity" />
      <HomeTwoHeader />
      <HeroArea />
      <Features />
      <ResearchArea />
      <CourseArea />
      <AboutArea />
      <CounterArea />      
      <Testimonials />      
      <Footer />
    </>
  );
}
