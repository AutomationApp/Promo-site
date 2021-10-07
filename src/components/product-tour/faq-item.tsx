import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const FaqItem = ({ faqs, changeImageSource }) => {
  return (
    <Accordion preExpanded={["helpOne"]}>
      {faqs.map((item) => (
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
      ))}
    </Accordion>
  );
};

export default FaqItem;
