import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqs = [
    {
      question:
        "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
      answer:
        "BreatherMatters is a holistic wellness brand dedicated to improving respiratory health and overall well-being. We offer a curated selection of innovative products designed to enhance the quality of your breathing experience.",
    },
    {
      question:
        "Is it safe to use for health conditions like asthma or anxiety?",
      answer:
        "Yes, it’s ideal for understanding and improving breathing habits that exacerbate these conditions. Consult your healthcare provider if you have specific concerns.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply order your CapnoTrainer® GO, and follow the included guide to begin exploring your breath.",
    },
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: "160px", marginBottom: "100px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "'Spectral SC', serif",
            fontSize: "40px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          FAQs
        </Typography>
        {faqs.map((faq, index) => (
          <Box
            key={index}
            sx={{
              mb: 2,
              border: "1px solid #026969",
              borderRadius: 2,
              boxShadow: 1,
              overflow: "hidden",
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fontSize: "40px",color:'rgba(0, 128, 128, 1)' }} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography sx={{ color: "#026969" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#026969" }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
