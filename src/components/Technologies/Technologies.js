import React from 'react';
import { DiFirebase, DiReact, DiZend} from 'react-icons/di';
import { MdSecurity} from 'react-icons/md'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, Next.js, SCSS ,Tailwind css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Express,Firebase and MongoDb,Socket.io,WebRtc
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <MdSecurity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web and Application Security</ListTitle>
          <ListParagraph>
            Experience with <br />
            Penetration Testing,Web Application Penetration Testing,Bug hunting and more
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
