/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const postData = useStaticQuery(graphql`
    query SiteTitleQuery {
      allMdx(filter: {}) {
        nodes {
          id
          excerpt(pruneLength: 40)
          rawBody
          wordCount {
            words
          }
          frontmatter {
            title
            slug
          }
          fileAbsolutePath
          timeToRead
          html
        }
      }
    }
  `)

const posts = postData.allMdx.nodes.map((post: any) => {
  console.log(post, post.excerpt)
  return (
      <>
        <a href="/content/">{post.frontmatter.title}</a>
        <div key={post.frontmatter.slug}>{post.excerpt}</div>
      </>
    )
  })
  console.log(postData, posts)

  return (
    <>
      <Header />
      <Container>
        <MainArea>{props.children}</MainArea>
        <Sidebar>{posts}</Sidebar>
      </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  max-width: 960;
  padding: 1rem 1.0875rem 1.45rem;
`
const MainArea = styled.div`
  flex: 1;
`
const Sidebar = styled.div``

export default Layout
