import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"


const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <MainArea>
        <h1>RASCHIN FATEMI</h1>
        <p>
          is the head of design at ACTIONIQ in new york, where she joined as the
          first employee in 2015. She led design at Sailthru and designed a news
          app for WSJ. In 2011 she graduated from CCA MFA in an interaction
          design program in San Francisco and worked at Adobe Advanced
          Technology. She made side projects in the purple bulldozer and some
          other RANDOM projects.
        </p>
      </MainArea>
      <Sidebar>
      </Sidebar>
    </Container>
  </Layout>
)

const Container = styled.div`
 display: flex
`
const MainArea = styled.div`
  flex: 1
 
`
const Sidebar = styled.div``

export default IndexPage
