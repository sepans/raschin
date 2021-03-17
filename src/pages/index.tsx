import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Raschin Fatemi</Title>
    <Description>
    I am a product designer and head of design at ActionIQ <FootnoteLink href="#1">[1]</FootnoteLink>. I enjoy the perplexity of turning abstract into palpable and back through design. Previously, I led product design at Sailthru <FootnoteLink href="#2">[2]</FootnoteLink>. I also worked with WSJ <FootnoteLink href="#3">[3]</FootnoteLink> and Adobe Advanced Technology labs <FootnoteLink href="#4">[4]</FootnoteLink>. I studied MFA in Interaction Design <FootnoteLink href="#5">[5]</FootnoteLink> and BS in Industrial Design<FootnoteLink href="#6">[6]</FootnoteLink>.
    </Description>
    <FootnoteArea>
      <Footnote>
      <a id="1"/>[1] ActionIQ, is a customer data platform that helps businesses engage with their customers in the modern world. I joined the company as the first hire, before the product-market fit and since then I learned a lot about <a href="https://medium.com/actioniq-tech/designing-for-enterprise-workflow-how-to-find-the-balance-between-flexibility-generalization-ddd7b5bf919a"  target="_blank" rel="noreferrer">Enterprise User Experience</a> and designed many different user experiences to drive and shape our product strategy. I established different design processes to incorporate user feedback into our product development and increase collaboration across design stakeholders and shaped our design culture. 
        <div style={{marginTop: 10}}>More: </div>
        <MoreList>
          <MoreListItem><a href="https://www.figma.com/proto/cJ6fuHgB2CMO5b2rng3pCB/Design-Principles?node-id=252%3A3773&viewport=20%2C1114%2C0.08890990912914276&scaling=contain"   target="_blank" rel="noreferrer">AIQ Design Principles</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/vnqybgcYjyjurKbgg317NC/Design-Process?node-id=0%3A1"  target="_blank" rel="noreferrer">AIQ Design Processes</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/WFibLkwPMwbA9HWUqCWjUm/tshirts?node-id=260%3A600"  target="_blank" rel="noreferrer">Visual Language explorations</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/fo8rbEULyxI571ftQpOxJk/office?node-id=0%3A1"  target="_blank" rel="noreferrer">AIQ Office Design</a></MoreListItem>

        </MoreList>

      </Footnote>
      <Footnote>
      <a id="2"/>[2] Previously, I lead product design at Sailthru, an email marketing platform where I designed many new products like a content editor for marketers to create personalized emails and data dashboards to monitor its performance. 
      </Footnote>
      <Footnote>
      <a id="3"/>[3] I also worked with WSJ as a consultant in designing a platform for journalists to tell the news through data visualizations. 
      </Footnote>
      <Footnote>
      <a id="4"/>[4] Before moving to New York in 2012, I worked with adobe advanced technology labs in San Fransico. I worked with researchers and scientists and made different prototypes to explore how advanced technologies can improve Adobe future products like this plugin to help people learning photoshop skills through games.
      </Footnote>
      <Footnote>
      <a id="5"/>[5] I studied MFA in Interaction Design at CCA. The program offered a variety of design skills to help students explore human-computer interaction in creative ways like how in future picture frames can show different pictures based on their arrangement on the wall or how they can navigate Wikipedia with their entire body or how people will wait for bus stops.       
      </Footnote>
      <Footnote>
      <a id="6"/>[6] I have always been fascinated with early 20th-century design and architecture movements, especially Bauhaus. Back then ‘Design’, unlike today’s UX design which is mostly about virtual and ephemeral ‘objects’, was about making solid and long-lasting physical things. But the shift in thinking about design is very relevant to today’s UX design. 
      It was then that architects started emphasizing how consequential each design decision is on the people’s lifestyle. They started looking at ‘Design’ holistically in a broader sense including architecture, industrial design, textile design, and typography which all together determine the terrain of user’s possibilities. This human-centered approach led to stripping out ornamentation in favor of functionality and let the ‘form follow the function’.       
      </Footnote>
    </FootnoteArea>
  </Layout>
)

const MoreList = styled.ul`
  margin: 10px 20px;
`

const MoreListItem = styled.li`
  margin: 5px;
  a {
    color: black;
  }
`

const Title = styled.h1 `
  &::first-letter {
    font-style:italic;
    font-weight:400;
  }
  font-family: Inter;
  font-size:48px;
  color:black;
`

const Description = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4em;
  color: black;
  margin-top: 40px;
`


const Footnote = styled.p`
  font-family: Inter;
  font-size:16px;
  padding: 10px 0;
  line-height:1.6em;
  color:black;
`

const FootnoteArea = styled.div`
  margin-top: 30vh;
  /*overflow-y: scroll;
  max-height: 600px;*/
`

const FootnoteLink = styled.a`
color:black;
&:visited {
  color:black;
}
&:hover {
  color:red;
  cursor: s-resize;
}

`

export default IndexPage
