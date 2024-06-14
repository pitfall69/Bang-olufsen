import React from "react";
import { useState } from "react";
const Faqs = () => {
  const faqData = [
    {
      question: "What is Liinn and how does it work?",
      answer:
        "Liinn is a platform that connects you with licensed therapists. You can create an account, complete an assessment, and match with therapists that fit your needs.",
    },
    {
      question: "How can I start therapy with Liinn?",
      answer:
        "Starting therapy with Liinn is easy! Create an account, complete a brief assessment, and explore therapists that match your preferences. Schedule your first session and begin your journey to mental wellness.",
    },
    {
      question: "Are Liinn’s therapists licensed and qualified?",
      answer:
        "Yes, all therapists on Liinn are licensed and qualified professionals.",
    },
    {
      question: "Is my information and conversation on Liinn confidential?",
      answer:
        "Yes, your information and conversations on Liinn are confidential and secure.",
    },
    {
      question: "How do I choose the right therapist for me?",
      answer:
        "You can explore therapists based on your preferences and needs. Liinn provides detailed profiles and reviews to help you make an informed choice.",
    },
    {
      question: "What types of therapy does Liinn offer?",
      answer:
        "Liinn offers a variety of therapy types, including individual therapy, couples therapy, and more, to cater to your specific needs.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 w-full h-screen flex justify-between items-center text-white font-sans">
      <div className="w-[30%]">
        <h2 className="text-3xl font-bold mb-4">Questions?</h2>
        <p className="mb-8">
          If you have questions, we have answers for you here. In case we don't,
          please feel free to reach out to us here{" "}
          <a href="mailto:contact@liinn.com" className="text-blue-500">
            contact@liinn.com
          </a>
        </p>
        <h3 className="text-2xl font-semibold mb-4">General questions</h3>
      </div>
      <div className="space-y-4 w-[70%]">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              onClick={() => toggleAnswer(index)}
              className="cursor-pointer flex justify-between items-center py-2"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && <div className="pt-2 ">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
