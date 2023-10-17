"use client";

import * as React from "react";
import { IFaq } from "@/app/admin/faq/page";
import {
  AccordionDetails,
  AccordionSummary,
  AccordionWrapper,
} from "../accordion-materials";

interface Props {
  faqs: IFaq[];
}

export default function FAQ({ faqs }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>("");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <section className="container my-14">
      <h2 className="section-title">
        <p>
          Learning With E-Leaning:
          <span className="text-gradient font-bold">
            {" "}
            Frequently Asked Questions
          </span>
        </p>
      </h2>
      <div className="shadow-md">
        {faqs.map((faq, index) => (
          <AccordionWrapper
            key={faq._id.toString()}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${{ index }}d-content`}
              id={`panel${{ index }}d-header`}
            >
              <div className="relative w-full">
                <p>{faq.question}</p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p>{faq.answer}</p>
            </AccordionDetails>
          </AccordionWrapper>
        ))}
      </div>
    </section>
  );
}
