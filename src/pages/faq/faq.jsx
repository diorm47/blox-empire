import React from "react";
import "./faq.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import { useNavigate } from "react-router-dom";
import { ReactComponent as LeftIcon } from "../../assets/icons/arrow left.svg";
function Faq() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="faq_page main_page_styles">
      <div className="faq_wrapper">
        <div className="page_title mb_32px">
        <LeftIcon onClick={goBack}/>
          <h1>F.A.Q.</h1>
        </div>
        <div className="faq_tabs">
          <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I’m kicked from the chat
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do the rank up bonuses work?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What are Balances?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What are Balances?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  You can’t use the promo
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>How do I rain?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Is this legal?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I have a business or legal inquiry
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To participate in the giveaways as well as to be able to use
                  the promotional code, you must have "csgorun.pro" in your
                  nickname, and after changing your nickname, re-enter your
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
