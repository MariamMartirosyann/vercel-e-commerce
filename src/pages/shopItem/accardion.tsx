import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion } from "@mui/material";
import { useState } from "react";

interface IAccardionData {
  id: string;
  title: string;
  content: string;
}

const AccardionData:IAccardionData[] = [
  {
    id: "panel1",
    title: "PRODUCT INFO",
    content: `I'm a product detail. I'm a great place to add more information
    about your product such as sizing, material, care and cleaning
    instructions. This is also a great space to write what makes this
    product special and how your customers can benefit from this item.
    Buyers like to know what they’re getting before they purchase, so
    give them as much information as possible so they can buy with
    confidence and certainty.`,
  },
  {
    id: "panel2",
    title: "RETURN AND REFUND POLICY",
    content: ` I’m a Return and Refund policy. I’m a great place to let your
    customers know what to do in case they are dissatisfied with their
    purchase. Having a straightforward refund or exchange policy is a
    great way to build trust and reassure your customers that they can
    buy with confidence.`,
  },
];
const ItemAccordion: any = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {AccardionData.map((i:IAccardionData)=>(
      <Accordion
      key={i.id}
      expanded={expanded === `${i.id}`}
        onChange={handleChange(`${i.id}`)}
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{i.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
           {i.content}
          </Typography>
        </AccordionDetails>
      </Accordion>))}
      
    </>
  );
};
export default ItemAccordion;
