import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import styles from "./Accordian.module.css";

// Functional component to render a FAQ section using Material UI Accordions
function Accordian() {
  return (
    <>
      {/* Wrapper container for the FAQ section */}
      <div className={styles.Accordian}>
        {/* Section heading */}
        <div className={styles.head}>
          <h1>FAQ</h1>
        </div>

        {/* First FAQ item */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className={styles.arrow} />} // Custom-styled arrow icon
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.titletext}
          >
            {/* Question text */}
            <Typography className={styles.titletext}>
              Is QTify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Answer text */}
            <Typography>
              Absolutely! QTify is completely free and contains no advertisements.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Second FAQ item */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon className={styles.arrow} />}
            aria-controls="panel2-content"
            id="panel2-header"
            className={styles.titletext}
          >
            <Typography>
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Unfortunately, offline song downloads are not currently supported.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Accordian;
