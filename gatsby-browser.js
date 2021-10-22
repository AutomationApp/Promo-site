import React from "react";
import Layout from "./src/components/common/layout/layout";
import "./src/assets/css/theme.min.css";
import "./src/assets/fonts/Feather/feather.css";
import "./src/assets/css/site.css";

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
