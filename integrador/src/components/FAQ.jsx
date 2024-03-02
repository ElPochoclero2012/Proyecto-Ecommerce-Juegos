import React from 'react'
import Accordion from 'react-bootstrap/Accordion';



function FAQ() {
  return (
    <>
    <h1 className="Title">FAQ (Frequently Asked Questions)</h1>
    
    <Accordion className="AccordionFAQ">
      <card>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the Payment Methods?</Accordion.Header>
        <Accordion.Body>
          Any card in the universe!
        </Accordion.Body>
      </Accordion.Item>
      </card>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How long does the shipment take?</Accordion.Header>
        <Accordion.Body>
          If you ordered a Digital product, instant! Either way, it depends on where you live
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Is there a refund?</Accordion.Header>
        <Accordion.Body>
          While the game isn't activated yet, of course!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
    </>
  )
}

export default FAQ