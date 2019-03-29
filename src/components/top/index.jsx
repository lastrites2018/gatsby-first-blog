import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}

      <GitHubIcon />
      <span className="portfolio">Portfolio</span>
      <Link to={`/til`} className="til">
        TIL
      </Link>
      {/* <span className="til">TIL</span> */}
    </div>
  )
}
