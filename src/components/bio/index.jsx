import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import './index.scss'

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social, introduction } = data.site.siteMetadata
      const notionLink =
        'https://www.notion.so/e9855fdbad514ce6a1f6189a8a2115be?v=70dced5e655048c1b7b22abf8d19ee29'

      return (
        <div className="bio">
          <div className="author">
            <div className="author-description">
              <Image
                className="author-image"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  borderRadius: `100%`,
                }}
              />
              <div className="author-name">
                <span className="author-name-prefix">Written by</span>
                <a
                  href={`https://github.com/${social.github} `}
                  target="_blank"
                  rel="noopener"
                >
                  {author}
                </a>
                {/* <Link to={'/about'}>
                  <Link to={'/about'} className="author-name-content">
                  <span>@{author}</span>
                </Link> */}
                <div className="author-introduction">{introduction}</div>
                <p className="author-socials">
                  {/* {social.github && (
                    <a
                      href={`https://github.com/${social.github} `}
                      target="_blank"
                      rel="noopener"
                    >
                      GitHub
                    </a>
                  )} */}
                  {notionLink && (
                    <a
                      href={`${notionLink}`}
                      target="_blank"
                      rel="noopener"
                      className="author-name-content"
                    >
                      👉삽질의 역사는 노션 WIKI에서
                    </a>
                  )}
                  {social.medium && (
                    <a href={`https://medium.com/${social.medium}`}>Medium</a>
                  )}
                  {social.twitter && (
                    <a href={`https://twitter.com/${social.twitter}`}>
                      Twitter
                    </a>
                  )}
                  {social.facebook && (
                    <a href={`https://www.facebook.com/${social.facebook}`}>
                      Facebook
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        social {
          twitter
          github
          medium
          facebook
        }
      }
    }
  }
`

export default Bio
