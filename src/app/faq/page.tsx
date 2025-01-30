import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our service
          </p>
        </div>

        <Card className="p-8">
          <Accordion type="single" collapsible className="w-full">
            <FAQItem
              question="How does the ATS scoring work?"
              answer="Our AI analyzes your resume against 50+ ATS criteria including keywords, formatting, and section organization."
              value="item-1"
            />
            <FAQItem
              question="Can I cancel my subscription anytime?"
              answer="Yes, you can cancel your subscription at any time through your account settings."
              value="item-2"
            />
            <FAQItem
              question="Is my data secure?"
              answer="We use bank-grade encryption and never share your data with third parties."
              value="item-3"
            />
            <FAQItem
              question="Do you offer discounts for students?"
              answer="Yes! Contact our support team with valid student ID for a special discount."
              value="item-4"
            />
          </Accordion>
        </Card>

        <div className="mt-12 text-center text-muted-foreground">
          <Info className="inline-block w-5 h-5 mr-2" />
          Still have questions?{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}

const FAQItem = ({
  question,
  answer,
  value,
}: {
  question: string;
  answer: string;
  value: string;
}) => (
  <div className="border-b">
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left w-full py-4 font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pb-4 text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  </div>
);
