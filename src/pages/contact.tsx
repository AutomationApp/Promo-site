import React from "react";
import Seo from "../components/common/seo";
import ContactSection from "../components/contact";
import Layout from "../components/common/layout/layout";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact us - AutomationApp" />
      <ContactSection />
    </Layout>
  );
};

export default Contact;
