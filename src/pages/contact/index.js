import React from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import ContactArea from "../../../components/Contact/ContactArea";
import ContactFooter from "../../../components/Contact/ContactFooter";

import Header from "../../../components/common/Header";
import SEO from "../../../components/seo";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Studyunity | Contact" />
      <Header />
      <BreadCrumb  />
      <ContactArea />
      
      <ContactFooter />
    </>
  );
};

export default Contact;
