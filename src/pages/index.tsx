import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Raschin Fatemi</Title>
    <Description>
    I am a product designer and head of design at ActionIQ <a href="#1">[1]</a>. I enjoy the perplexity of turning abstract into palpable and back through design. Previously, I led product design at Sailthru [2]. I also worked with WSJ [3] and Adobe Advanced Technology labs [4]. I studied MFA in Interaction Design [5].
    </Description>
    <FootnoteArea>
      <Footnote>
      <a id="1"/>[1] I am a product designer and head of design at ActionIQ, a customer data platform that helps businesses engage with their customers in the modern world. I joined the company as the first hire, before the product-market fit and since then I designed processes to listen to our wide user base, design user interface for a variety of products for different jobs, build composable modular design systems to scale our product with complexity, design our workspace that aligns with our culture, design our visual design language and many more.
      </Footnote>
      <Footnote>
      [2] Previously, I lead product design at Sailthru, an email marketing platform where I designed many new products like a content editor for marketers to create personalized emails and data dashboards to monitor its performance. 
      </Footnote>
      <Footnote>
      [3] I also worked with WSJ as a consultant in designing a platform for journalists to tell the news through data visualizations. 
      </Footnote>
      <Footnote>
      [4] Before moving to New York in 2012, I worked with adobe advanced technology labs in San Fransico. I worked with researchers and scientists and made different prototypes to explore how advanced technologies can improve Adobe future products like this plugin to help people learning photoshop skills through games.
      </Footnote>
      <Footnote>
      [5] I studied MFA in Interaction Design at CCA. The program offered a variety of design skills to help students explore human-computer interaction in creative ways like how in future picture frames can show different pictures based on their arrangement on the wall or how they can navigate Wikipedia with their entire body or how people will wait for bus stops.       
      </Footnote>
    </FootnoteArea>
  </Layout>
)

const Title = styled.h1 `
  &::first-letter {
    font-style:italic;
    font-weight:400;
  }
  font-family: Inter;
  font-size:48px;
  color:black;
`

const Description = styled.h1 `
  font-family: Inter;
  font-size:24px;
  font-weight:400;
  line-height:1.4em;
  color:black;
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

export default IndexPage
