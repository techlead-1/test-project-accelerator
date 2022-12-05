import React from 'react'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">

      {/* Children Output */}
      <div className="children">
        { children }
      </div>

    </div>
  )
}
