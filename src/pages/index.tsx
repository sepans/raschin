import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Raschin Fatemi</Title>
    <Description>
    Head of design at ActionIQ <FootnoteLink href="#1">[1]</FootnoteLink>. Led product design at Sailthru <FootnoteLink href="#2">[2]</FootnoteLink>, WSJ <FootnoteLink href="#3">[3]</FootnoteLink> and Adobe Advanced Technology labs <FootnoteLink href="#4">[4]</FootnoteLink>. Studied Interaction Design & Industrial Design. <FootnoteLink href="#5">[5]</FootnoteLink>
    </Description>
    <Menu>
      <MenuLink href="https://www.goodreads.com/review/list/1475247?print=true&ref=nav_mybooks" target="_black">
        GOODREADS
      </MenuLink>/
      <MenuLink href="https://www.strava.com/athletes/15491216" target="_black">
        STRAVA
      </MenuLink>/
      <MenuLink href="https://medium.com/@purplebulldozer" target="_black">
        MEDUIM
      </MenuLink>/
      <MenuLink href="https://twitter.com/Purplebulldozer" target="_black">
        TWITTER
      </MenuLink>
      

    </Menu>
    <FootnoteArea>
      <Footnote>
      <a id="1"/><sup>1</sup> ActionIQ is a customer data platform that helps businesses engage with their customers in the modern world. I was amongst the first five employees at the company and used design thinking to shape the culture.
        <div style={{marginTop: 40}}></div>
        <MoreList>
          <MoreListItem><a href="https://www.figma.com/proto/cJ6fuHgB2CMO5b2rng3pCB/Design-Principles?node-id=252%3A3773&viewport=20%2C1114%2C0.08890990912914276&scaling=contain"   target="_blank" rel="noreferrer">DESIGN PRINCIPLES</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/vnqybgcYjyjurKbgg317NC/Design-Process?node-id=0%3A1"  target="_blank" rel="noreferrer">DESIGN PPROCESSES</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/WFibLkwPMwbA9HWUqCWjUm/tshirts?node-id=260%3A600"  target="_blank" rel="noreferrer">VISUAL LANGUAGE</a></MoreListItem>
          <MoreListItem><a href="https://www.figma.com/file/fo8rbEULyxI571ftQpOxJk/office?node-id=0%3A1"  target="_blank" rel="noreferrer">DESIGN OFFICE</a></MoreListItem>

        </MoreList>

      </Footnote>
      <Footnote>
      <a id="2"/><sup>2</sup> Sailthru is an email marketing platform. I designed new products such as content editor, product catalogue and marketing performance dashboards. 
      </Footnote>
      <Footnote>
      <a id="3"/><sup>3</sup> Collaborated with a small team of journalists, engineering & data scientist; I designed a tool for journalists to tell the news through data visualizations. 
      </Footnote>
      <Footnote>
      <a id="4"/><sup>4</sup> I moved to New York in 2012. Before that I worked with adobe advanced technology labs in San Fransico. I collaborated with researchers and scientists and made testing prototypes to test product concepts from their research.
        <div style={{marginTop: 40}}></div>
        <MoreList>
          <MoreListItem><a href="https://userexperienceawards.com/uxa2012/#adobe_photoshop" target="_blank" rel="noreferrer">UX SILVER PRIZE </a></MoreListItem>
        </MoreList>
        <MoreList>
          <MoreListItem><a href="https://vimeo.com/41424338" target="_blank" rel="noreferrer">TUTORIAL PLAYER</a></MoreListItem>
        </MoreList>
      </Footnote>
      <Footnote>
      <a id="5"/><sup>5</sup> I studied MFA in Interaction Design at CCA. The program offered a variety of design skills like human computer interaction, visual design and critical thinking. 
      <div style={{marginTop: 40}}></div>
        <MoreList>
         <MoreListItem><a href="https://www.figma.com/proto/CvIEZyvrlasUyUtlbMQ1Zw/remake?page-id=0%3A1&node-id=2%3A333&viewport=-350%2C1115%2C0.03924456983804703&scaling=scale-down-width&hotspot-hints=0&hide-ui=1"   target="_blank" rel="noreferrer">REMAKING</a></MoreListItem>
      </MoreList>      
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
  font-size:16px;
  font-weight:bold;
  letter-spacing: 2.2px;
  text-indent:0;
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
  margin-bottom: 40px;
`


const Footnote = styled.p`
  font-family: Inter;
  font-size:18px;
  padding: 10px 0;
  line-height:1.6em;
  color:black;
  text-indent: 40px;
`

const Menu = styled.div`
  display: flex;
  font-family: Inter;
  letter-spacing: 2.2px;
  justify-content: space-between;
  font-size: 16px;
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
