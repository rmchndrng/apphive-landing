import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI app generation work?",
    answer: "Our AI analyzes your requirements and generates a complete application using best practices and modern technologies. It handles everything from UI design to backend logic.",
  },
  {
    question: "Can I customize the generated apps?",
    answer: "Yes! All generated apps come with clean, documented source code that you can modify and extend as needed.",
  },
  {
    question: "What technologies do you support?",
    answer: "We currently support React, Vue, and Angular for frontend, with Node.js and Python for backend services.",
  },
  {
    question: "Do I need coding experience?",
    answer: "No coding experience is required to generate apps. However, basic technical knowledge is helpful for customizations.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};