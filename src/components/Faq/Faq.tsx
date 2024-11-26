


import { useState } from 'react'
import "./Faq.css"
import { ChevronDown, ChevronUp, Plus } from 'lucide-react'



const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1)

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    }
  ]

  return (
    <div className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      
      <div className="faq-list">
        {faqs.map((faqq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div className="faq-question">
              <span>{faqq.question}</span>
              <div className="faq-controls">
                {faqq.tag && (
                  <div className="faq-tag">
                    {faqq.tag}
                  </div>
                )}
                {openIndex === index ? (
                  <ChevronUp className="faq-icon" />
                ) : (
                  <Plus className="faq-icon" />
                )}
              </div>
            </div>
            {openIndex === index && faqq.answer && (
              <div className="faq-answer">
                {faqq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


export default Faq
