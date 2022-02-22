import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "gatsby";

const FaqItem = ({ faqs, changeImageSource }) => {
  console.log(faqs, "I am faqs");
  return (
    <>
      <Accordion preExpanded={["helpOne"]}>
        {faqs.faq.map((item) => (
          <>
            <AccordionItem
              key={item.id}
              uuid={item.areaControl}
              onClick={() => changeImageSource(item.id)}
            >
              <AccordionItemHeading>
                <AccordionItemButton>{item.heading}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
      <Link to={faqs.buttonDestinationUrl} className="text-decoration-none">
        <button className="navbar-btn btn btn-block mt-3 btn-primary lift">
          {faqs.button}
          <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
        </button>
      </Link>
    </>
  );
};

export default FaqItem;
