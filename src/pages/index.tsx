import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Raschin Fatemi</Title>
    <Description>
    Head of design at ActionIQ <FootnoteLink href="#1">[1]</FootnoteLink>. Led product design at Sailthru <FootnoteLink href="#2">[2]</FootnoteLink>, WSJ <FootnoteLink href="#3">[3]</FootnoteLink> and Adobe Advanced Technology labs <FootnoteLink href="#4">[4]</FootnoteLink>. Studied MFA in Interaction Design & BFA in Industrial Design. <FootnoteLink href="#5">[5]</FootnoteLink>
    </Description>
    <Menu>
      <MenuLink href="mailto:raschin+web@gmail.com">
        E-MAIL
      </MenuLink>/
      <MenuLink>
        TWITTER
      </MenuLink>

    </Menu>
    <FootnoteArea>
      <Footnote>
      <a id="1"/>[1] ActionIQ is a customer data platform that helps businesses engage with their customers in the modern world. I was amongst the first five employees at the company and used design thinking to shape the culture.
        <div style={{marginTop: 40}}></div>
        <MoreList>
          <MoreListItem><a href="https://www.figma.com/proto/cJ6fuHgB2CMO5b2rng3pCB/Design-Principles?node-id=252%3A3773&viewport=20%2C1114%2C0.08890990912914276&scaling=contain"   target="_blank" rel="noreferrer">DESIGN PRINCIPLES</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/vnqybgcYjyjurKbgg317NC/Design-Process?node-id=0%3A1"  target="_blank" rel="noreferrer">DESIGN PPROCESSES</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/WFibLkwPMwbA9HWUqCWjUm/tshirts?node-id=260%3A600"  target="_blank" rel="noreferrer">VISUAL LANGUAGE</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/fo8rbEULyxI571ftQpOxJk/office?node-id=0%3A1"  target="_blank" rel="noreferrer">DESIGN OFFICE</a></MoreListItem>

        </MoreList>

      </Footnote>
      <Footnote>
      <a id="2"/>[2] Sailthru is an email marketing platform. I designed new products such as content editor, product catlouge and data dashboards. 
      </Footnote>
      <Footnote>
      <a id="3"/>[3] Collaborated with a small team of 2 journalist, 1 engineer, 1 data scientist as a design to design a platform for journalists to tell the news through data visualizations. 
      </Footnote>
      <Footnote>
      <a id="4"/>[4] I moved to New York in 2012. Before that I worked with adobe advanced technology labs in San Fransico. I collaborated with researchers and scientists and made prototypes to create design concepts based on their research.
      </Footnote>
      <Footnote>
      <a id="5"/>[5] I studied MFA in Interaction Design at CCA. The program offered a variety of design skills like human computer interaction, visual design and critical thinking.       
      </Footnote>
      <Footnote>     
      </Footnote>
    </FootnoteArea>
  </Layout>
)

const MoreList = styled.ul`
  margin: 10px 20px;
  list-style: none;
  margin-left: 0;
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
  font-size:36px;
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
  font-size:18px;
  padding: 10px 0;
  line-height:1.6em;
  color:black;
`

const Menu = styled.div`
  display: flex;
  font-family: Inter;
  letter-spacing: 8%;
  justify-content: space-between;
  width: 40%;
`


const MenuLink = styled.a`
  display: inline;
  
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-left: 0;
  }

`

const FootnoteArea = styled.div`
  margin-top: 8vh;
  border-top: 10px solid black;
  padding-top: 10vh;
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
