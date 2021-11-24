import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Seo({ description, lang, meta, title, imageUrl, pageUrl, author }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title ? `%s | ${title}` : null}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  title: `Automate your E-commerce store - AutomationApp`,
  description: `Automate your e-commerce businesses. E-mail, SMS marketing automation and any customised e-commerce flow with deep e-commerce platform integration`,
  imageUrl: ``,
  pageUrl: `https://automation.app/`,
  author: `Automation App`,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  pageUrl: PropTypes.string,
  author: PropTypes.string,
};

export default Seo;
