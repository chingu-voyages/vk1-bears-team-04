import React, { useState } from 'react';
import { Questions } from './Questions';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3% 0;
  background: #fff;
`;

const Container = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #fff;
  padding: 2rem 0;
  color: #000;
  width: 80vw;
  height: 100%;
  display: flex;
  padding-left: 1.5rem;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  border-left: 4px solid #F18009;
  p {
    font-size: 1rem;
  }
`;

const Faqs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#000', size: '25px' }}>
      <h1 className="text-center font-medium text-4xl pt-10">Frequently Asked Questions (FAQs)</h1>
      <AccordionSection>
        <Container className="text-left">
          {Questions.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Faqs;