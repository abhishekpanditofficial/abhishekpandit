import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'React.js', text: 'React Tutorial and project course'},
  { number: 'Express.js', text: 'Node.js,Express,MongoDb Bootcamp', },
  { number: 'Cybersecurity', text: 'Diploma in cybersecurity(CEH)', },
  { number: 'javascript', text: 'Js Algo and DS Masterclass', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Courses</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
